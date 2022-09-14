export class Arreglos {
  arrayNumeroMinimo (data = [10, 30, 5, 8]) {
    const findMin = (data) => {
      return Math.min.apply(Math, data)
    }

    console.log(findMin(data))
  }

  arrayNumeroMinimo_ (data = [10, 30, 5, 8]) {
    const retorno = Math.min(...data)

    return retorno
  }

  arrayNumeroMaximo (data = [10, 30, 5, 8]) {
    const findMax = (data) => {
      return Math.max.apply(Math, data)
    }

    console.log(findMax(data))
  }

  arrayOrdenarNumerosMenor (numeros = [3, 23, 12]) {
    console.group('array_ordenar_numeros_menor')

    console.log('🚀 ~ ordernar_numeros_menor ~ numeros', numeros)

    const response = numeros.sort(function (a, b) {
      return a - b
    }) // --> 3, 12, 23
    console.log('🚀 ~ response ~ response', response)
    console.groupEnd()
  }

  arrayOrdenarNumerosMayor (numeros = [3, 23, 12]) {
    console.group('array_ordenar_numeros_mayor')
    console.log('🚀 ~ ordernar_numeros_mayor ~ numeros', numeros)
    const response = numeros.sort(function (a, b) {
      return b - a
    }) // --> 23, 12, 3

    console.log('🚀 ~ response', response)
    console.groupEnd()
  }

  arrayDuplicados (arr = ['a', 'd', 'r', 'a', 'a', 'f', 'd', 'a']) {
    const resultaJson = arr.reduce((json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }), {})
    console.log('🚀 ~ array_duplicados ~ resultaJson', resultaJson)
  }
}
