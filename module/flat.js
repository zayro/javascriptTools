/**
 * ES10
 */

let personas = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Pedro", edad: 29 },
];

personas.flatMap((persona) => [persona.nombre, persona.edad]);

console.log(
  "TCL: personas.flatMap(persona => [persona.nombre, persona.edad])",
  personas.flatMap((persona) => [persona.nombre, persona.edad])
);

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]
