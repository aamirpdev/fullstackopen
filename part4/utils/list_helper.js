const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let sum = 0
  for (let i = 0; i < blogs.length; i++) {
    sum += blogs[i].likes
  }
  return sum
}

const favouriteBlog = (blogs) => {
  let max_likes = -1

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > max_likes) {
      max_likes = blogs[i].likes
    }
  }

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes === max_likes) {
      return blogs[i]
    }
  }
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
}
