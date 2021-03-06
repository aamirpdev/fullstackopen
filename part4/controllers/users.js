const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', { url: 1, title: 1, author: 1, id: 1 })
  response.json(users.map((user) => user.toJSON()))
})

userRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.password.length < 3 || body.password === undefined) {
    return response.status(400).json({ error: 'password has to be longer than 3 characters and not empty' })
  } else {
    const passwordHash = await bcrypt.hash(body.password, 10)
    // 10 = salt rounds

    const user = new User({
      username: body.username,
      name: body.name,
      passwordHash,
    })

    const savedUser = await user.save()
    response.json(savedUser)
  }
})

module.exports = userRouter
