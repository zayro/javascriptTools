/**
 * TEMPLATE LITERALS
 */
const text = "world!";
const num = 5;
 
// ES5
console.log('Hello ' + text + ' Cálculo:' + num * 4);
 
// ES6
console.log(`Hello ${text} Cálculo:${num * 4}`);


/**
 * TAGGED TEMPLATE LITERALS
 * Los tagged template literals son funciones a las cuales les pasamos un template string como parámetro sin poner los paréntesis y lo parsean:
 */


const text = "world!";
const num = 5;
 
function testTag(strings, exp1, exp2) {
  console.log(strings, exp1, exp2); 
  // [ 'Hello ', ' Cálculo:', '' ] 'world!' 20
}
testTag`Hello ${text} Cálculo:${num * 4}`;
 
function testTagRest(strings, ...exps) {
  console.log(strings, exps); 
  // [ 'Hello ', ' Cálculo:', '' ] [ 'world!', 20 ]
}
testTagRest`Hello ${text} Cálculo:${num * 4}`;