/**
 * lastIndexOf
 * encuentra la ultima coincidencia
 */

const arr = ["a", "d", "r", "a", "a", "f", "d", "a"];

let resultaJson = arr.reduce(
  (json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }),
  {}
);
console.log(`TCL: : ------------------------------`);
console.log(`TCL: : resultaJson`, resultaJson);
console.log(`TCL: : ------------------------------`);

resultaJson = arr.reduce((json, val) => {
  json[val] = (json[val] | 0) + 1;
  return json;
}, {});
console.log(`TCL: : ------------------------------`);
console.log(`TCL: : resultaJson`, resultaJson);
console.log(`TCL: : ------------------------------`);

let resultaArray = arr.reduce((json, val) => {
  json[val] = (json[val] | 0) + 1;
  return json;
}, []);

console.log(`TCL: : ------------------------------`);
console.log(`TCL: : resultaArray`, resultaArray);
console.log(`TCL: : ------------------------------`);

/**
 *
 */

let numberArray = [1, 2, 3, 4, 5, 5, 5, 6, 4, 1];

const duplicateJson = numberArray.reduce((acum, val, index) => {
  acum[`${val}`] = (acum[`${val}`] | 0) + 1;
  return acum;
}, {});

console.log(`TCL: : ------------------------------`);
console.log(`TCL: : duplicateJson`, duplicateJson);
let arryMax = Object.values(duplicateJson);
console.log(`TCL: : duplicateJson`, Math.max(...arryMax));

console.log(`TCL: : ------------------------------`);


const resultado = arr.reduce((acum, val, index) => {
  return [...acum, acum.push((acum[val] || 0) + 1)];
}, []);

console.log(`TCL: : --------------------------`);
console.log(`TCL: : resultado`, resultado);
console.log(`TCL: : --------------------------`);


/**
 *
 */
var count = [];
arr.forEach((i) => {
  //console.log('count',count);
  count[i] = (count[i] || 0) + 1;
});
console.log(`TCL: : ------------------`);
console.log(`TCL: : count`, count);
console.log(`TCL: : ------------------`);
