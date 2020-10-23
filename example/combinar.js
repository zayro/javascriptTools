const myAwesomeArray = [1, 2, 3, 4, 5]
let test ;
test = myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
console.log(`TCL: : myAwesomeArray`, test);
//>>>>>>>>>>>>>return value: 55