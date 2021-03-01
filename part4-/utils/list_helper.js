const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  return blogs.reduce(reducer)
}

const favouriteBlog = (blogs) => {
  const maxLikes = Math.max(...blogs.map((blog) => blog.likes))
  return blogs.find((blog) => blog.likes === maxLikes)
}

// const mostBlogs = (blogs) => {
//     let authors = blogs.map(blog=> blog.author)

// }

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
}
