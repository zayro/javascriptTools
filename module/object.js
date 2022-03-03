const objEntri = {
  test: 1,
  foo: true,
  string: 'nombre'
}
 
/*
console.log(Object.entries(obj));

console.log(Object.values(obj)); 
*/

/* 
* OBJECT.ASSIGN 
* Nos permite fusionar las propiedades de un objeto o más en un objeto de destino.
*/

const dest = {a:1};
const obj1 = {a:2};
const obj2 = {b:3, c:4};
Object.assign(dest, obj1, obj2);
console.log(dest); // { a: 2, b: 3, c: 4 }
 

const obj = {a:2};
const clonedObj = Object.assign({}, obj);
console.log(clonedObj); // { a: 2 }

/**
 * OBJECT.IS
 * Comprueba si dos valores son iguales.
 */

 
// Object.is
console.log(Object.is(123, 123)) // true
const test = {c:1};
console.log(Object.is(test, test)) // true
console.log(Object.is(['qwerty', 1], ['qwerty', 2])) // false