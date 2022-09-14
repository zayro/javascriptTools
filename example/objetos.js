const resultaJson = [
  {
    x: '8/11/2009',
    y: 0.026572007
  },
  {
    x: '8/11/2009',
    y: 0.026572007
  },
  {
    x: '8/12/2009',
    y: 0.025057454
  },
  {
    x: '8/13/2009',
    y: 0.024530916
  },
  {
    x: '8/14/2009',
    y: 2
  }
]

console.log('🚀 ~ resultaJson', resultaJson)

let resultado = resultaJson.reduce((valorAnterior, valorActual) => {
  console.log('🚀 ~ resultado ~ valorAnterior', valorActual)
  valorAnterior[valorActual] = (valorAnterior[valorActual] | 0) + 1

  return valorAnterior
}, {})

let resultaJsonddd = resultaJson.reduce(
  (json, val) => ({ ...json, [val.x]: (json[val.x] | 0) + 1 }),
  {}
)
console.log('🚀 ~ resultaJsonddd', resultaJsonddd)

console.log('🚀 ~ resultado', resultado)

const object1 = {
  a: 10,
  b: 42,
  c: 60
}

const arreglo1 = Object.values(object1)
console.log('🚀 ~ arreglo1', arreglo1)

const arreglo0 = resultaJson.map(valor => valor.y)
console.log('🚀 ~ arreglo', arreglo0)

const ss = Math.max(...resultaJson.map(o => o.y))
console.log('🚀 ~ ss', ss)

console.log(
  '🚀 ~ resultaJson',
  resultaJson.filter(val => val.y == ss)
)

const values = [
  { name: 'someName1' },
  { name: 'someName2' },
  { name: 'someName3' },
  { name: 'someName1' }
]

const uniqueValues = [...new Set(values)]
console.log('🚀 ~ uniqueValues', uniqueValues)

const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]

console.log([...new Set(numbers)])

console.log([...mySet])

const infoFruta = {
  pera: () => 'escogiste pera',
  manzana: 'escogiste manzana',
  naranja: () => {}
}

const search = 'manzana'
if (infoFruta[search] || false) {
  console.log(infoFruta[search])
}
