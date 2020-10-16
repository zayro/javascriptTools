//— — — — using set — — —
const duplicateSet = [...new Set(arr)];
console.log("TCL: duplicateSet", duplicateSet);

//— — — — -using Filter — — — -
const duplicateFilter = arr.filter((item, x) => arr.indexOf(item) == x);
console.log("TCL: duplicateFilter", duplicateFilter);

//— — — -using reduce — — — —
const duplicateReduce = arr.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
console.log("TCL: duplicateReduce", duplicateReduce);
