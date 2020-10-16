/**
 * ES10
 */

let personas = [{nombre: 'Juan', edad: 25}, {nombre: 'Pedro', edad: 29}];

personas.flatMap(persona => [persona.nombre, persona.edad])

console.log("TCL: personas.flatMap(persona => [persona.nombre, persona.edad])", personas.flatMap(persona => [persona.nombre, persona.edad]))