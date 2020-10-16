const arr = ["a", "d", "r", "a", "a", "f", "d"];

arr.lastIndexOf('a')
console.log("TCL: arr.lastIndexOf('a')", arr.lastIndexOf('r'))

const resultaJson = arr.reduce(
  (json, val) => ({ ...json, [val]: (json[val] | 0) + 1 }),
  {}
);
console.log("TCL: resultaJson", resultaJson)


var count = {};
arr.forEach((i) => {
  count[i] = (count[i] || 0) + 1;
});
console.log("TCL: count", count);


const countDuplicate = (accumulator, currentvalue) => {
  return (arr[i] = (arr[i] || 0) + 1);
};

const resultado = arr.reduce((data, val) => [...data, (data[val] | 0) + 1], []);
console.log("TCL: resultado", resultado);

