/**
 * ES10
 */

const personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Pedro', edad: 29 }
]

personas.flatMap((persona) => [persona.nombre, persona.edad])

console.log(
  'TCL: personas.flatMap(persona => [persona.nombre, persona.edad])',
  personas.flatMap((persona) => [persona.nombre, persona.edad])
)

const arr1 = [1, 2, [3, 4]]
arr1.flat()
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]]
arr2.flat()
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]]
arr3.flat(2)
// [1, 2, 3, 4, 5, 6]
