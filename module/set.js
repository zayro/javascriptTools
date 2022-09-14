const arrA = ['🎈', '🎉', '🍬', '😂', '🎂', '🍰']

const arrB = ['😂', '🤣', '😃', '😄', '😎', '😍']

// Intersection

const intersection = arrA.filter((x) => arrB.includes(x))

console.log('🚀 ~ intersection', intersection)

// Diference Left

const difference = arrA.filter((x) => !arrB.includes(x)).concat(arrB.filter((x) => !arrA.includes(x)))
console.log('🚀 ~ difference', difference)

// Diference Left
const differenceA = arrA.filter((x) => !arrB.includes(x))
console.log('🚀 ~ difference A', differenceA)

// Diference Rigth
const differenceB = arrB.filter((x) => !arrA.includes(x))
console.log('🚀 ~ difference B', differenceB)

// Union No Duplicate

const union = [...new Set([...arrA, ...arrB])]

console.log('🚀 ~ union', union)
