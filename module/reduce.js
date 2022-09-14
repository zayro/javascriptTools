/**
 * arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial])
 */

let posts = [
  { type: 'text', content: 'hey yo' },
  { type: 'text', content: 'hey yu' },
  { type: 'blog', content: 'this is a blog' },
  { type: 'blog', content: 'very interesting content' },
  { type: 'text', content: 'hey ya' }
]

let { text: textPosts, blog: blogPosts } = posts.reduce(
  (str, el) => {
    str[el.type] += 1
    return str
  },
  {
    text: 0,
    blog: 0
  }
)
console.log(textPosts) // 3
console.log(blogPosts) // 2

/**
 * ACUMULADOR
 */

posts = [
  { type: 'text', content: 'hey yo' },
  { type: 'text', content: 'hey yu' },
  { type: 'blog', content: 'this is a blog' },
  { type: 'blog', content: 'very interesting content' },
  { type: 'text', content: 'hey ya' }
]
textPosts = posts.reduce((str, el) => (el.type === 'text' ? (str += 1) : str), 0)
blogPosts = posts.reduce((str, el) => (el.type === 'blog' ? (str += 1) : str), 0)
console.log(textPosts) // 3
console.log(blogPosts) // 2

/**
 * GROUP BY
 */

const users = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 52, occupation: 'gardener' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 46, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 32, occupation: 'driver' }
]

const grouped = users.reduce((result, user) => {
  ;(result[user.occupation] || (result[user.occupation] = [])).push(user)
  return result
}, {})
console.log('🚀 ~ grouped ~ grouped', grouped)

/**
 * MIN - MAX
 */

const vals = [1, 2, 3, 4, 5, 5, 5, 6, 4, -8]

const min = vals.reduce((total, next) => Math.min(total, next))
console.log('TCL: : --------------')
console.log('TCL: : min', min)
console.log('TCL: : --------------')

const max = vals.reduce((total, next) => Math.max(total, next))
console.log('TCL: : --------------')
console.log('TCL: : max', max)
console.log('TCL: : --------------')
