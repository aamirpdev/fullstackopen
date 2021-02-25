const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

test('1 blog with 1 like returns 1 like', () => {
  const blogs = [1]
  const result = listHelper.totalLikes(blogs)
  expect(result).toBe(1)
})

test('2 blogs with different numbers of likes, equals the sum of those likes', () => {
  const blogs = [
    {
      _id: '5f871821174381019c7c4b0f',
      title: 'A nice blog',
      author: 'Writy McWriteface',
      url: 'www.aniceblog.com',
      likes: 4,
      __v: 0,
    },
    {
      _id: '5f871874174381019c7c4b10',
      title: 'How to be so cute he implodes: A quick guide!',
      author: 'Georgie',
      url: 'www.thegeorgieblogs.com',
      likes: 1,
      __v: 0,
    },
  ]
  const result = listHelper.totalLikes(blogs.map((blogs) => blogs.likes))
  expect(result).toBe(5)
})

test('2 blogs with different numbers of likes, blog with the most likes returned', () => {
  const blogs = [
    {
      _id: '5f871821174381019c7c4b0f',
      title: 'A nice blog',
      author: 'Writy McWriteface',
      url: 'www.aniceblog.com',
      likes: 4,
      __v: 0,
    },
    {
      _id: '5f871874174381019c7c4b10',
      title: 'How to be so cute he implodes: A quick guide!',
      author: 'Georgie',
      url: 'www.thegeorgieblogs.com',
      likes: 1,
      __v: 0,
    },
  ]
  const result = listHelper.favouriteBlog(blogs)
  expect(result).toEqual(blogs[0])
})
