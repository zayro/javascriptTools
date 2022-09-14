/**
1 - contar valores duplicados
2 - mostrar solo valores duplicados
3 - mostrar los no duplicados
4 - mostrar el que mas se repite de los registros duplicados
5 - mostrar el que menos se repite de los registros duplicados
6 - mostrar el mayor de los duplicados de los registros duplicados
7 - mostrar el menor de los duplicados de los registros duplicados
 */

const numberArray = [1, 2, 3, 4, 5, 5, 6, 4, 1, 3, 7]

const jsondata = {
  duplicate: {},
  maxDuplicate: {},
  maxKeyDuplicate: {},
  noduplicate: {}
}

// contar repetidos
const duplicateJson = numberArray.reduce((acum, val, index) => {
  acum[val] = (acum[val] | 0) + 1
  return acum
}, {})

// contar duplicados y no duplicados
for (const [key, value] of Object.entries(duplicateJson)) {
  value > 1 && (jsondata.duplicate[key] = duplicateJson[key])
  value === 1 && (jsondata.noduplicate[key] = duplicateJson[key])
}

// obtiene el valor maximo de los duplicados
const arrMaxduplicateValue = Object.values(jsondata.duplicate)
const Maxduplicate = Math.max(...arrMaxduplicateValue)

for (const [key, value] of Object.entries(jsondata.duplicate)) {
  value === Maxduplicate && (jsondata.maxDuplicate[key] = duplicateJson[key])
}

// obtiene el key maximo de los duplicados
const arrMaxduplicateKey = Object.keys(jsondata.duplicate)
jsondata.maxKeyDuplicate = Math.max(...arrMaxduplicateKey)

/**
 * solucion al ejercicio
 */

console.log('👌: : ------------------------------')
console.log('👌: : Array', numberArray.toString())
console.log('👌: : mostrar y contar valores : ', duplicateJson)
console.log('👌: : mostrar valores duplicados: ', jsondata.duplicate)
console.log('👌: : mostrar los valores mas duplicados jsondata.maxDuplicate: ', jsondata.maxDuplicate)
console.log('👌: : mostrar el maximo valor duplicado jsondata.maxKeyDuplicate: ', jsondata.maxKeyDuplicate)
console.log('👌: : mostrar valores no duplicados: ', jsondata.noduplicate)
console.log('👌: : ------------------------------')
console.log('👌: : jsondata', jsondata)
