//repl.it/@vreaxe/ES6-Parametros-RESTJavaScript


/** 
 *  PARÁMETROS REST
    Cuando en JS tradicional, queríamos pasarle un número indeterminado de paramétros a una función, para recogerlos desde dentro de la función utilizábamos el objeto arguments. Pero este objeto tiene ciertos problemas: no es un array real, por tanto, no tenemos acceso a ciertos métodos de Array y, además, recoge todos los argumentos de la función.

    Para solventar esto, en ES6, existen los parámetros REST. Se declaran poniendo delante del último parámetro … (puntos suspensivos) y lo que hará será coger todos los parámetros extra que tenga la función y transformarlos en un array real (no como arguments):
 */


// ES5
function foo(a) {
  console.log(a); // 3
  console.log(arguments); // objeto con todos los parámetros
}
foo(3, "hello", 6, "world");

// ES6
function bar(a, ...b) {
  console.log(a); // 3
  console.log(b); // array con los parámetros extra
}

bar(3, "hello", 6, "world");

const arreglo = (...a) => console.log(a);

arreglo(3, "hello", 6, "world");



/**
 * PARÁMETROS SPREAD
 * El operador SPREAD lo que nos permite es transformar un array a una lista de parámetros, es decir, hace lo contrario que los parámetros REST.    Podríamos decir que mientras que REST agrupa todos los elementos en uno solo elemento, SPREAD los desagrupa en múltiples.
 */


// parámetro función
function foo(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
 
var array = [1, 2, 3];
foo(array); // Resultado: [ 1, 2, 3 ], undefined, undefined
foo(...array); // Resultado: 1, 2, 3
 
// array
var array2 = [4, 5, 6];
console.log([...array, ...array2]); // Resultado: [ 1, 2, 3, 4, 5, 6 ]
 
var array3 = [...array];
console.log(array3); // Resultado: [ 1, 2, 3 ]




// ES5
function foo(text) {
  text = typeof text !== 'undefined' ? text : 'world'; // comprobar si se está pasando el parámetro
  console.log('Hello ' + text);
}
foo(); // sin parámetro. Hello world
foo('my friend') // con parámetro. Hello my friend
 
// ES6
function bar(text = 'world') {
  console.log('Hello ' + text);
}
bar(); // sin parámetro. Hello world
bar(undefined); // undefined. Hello world
bar('my friend') // con parámetro. Hello my friend