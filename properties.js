const obj = {
  name: "John",
  age: "32",
  city: "New York",
  address: "Address...",
};


// Rest
const { name, age, ...rest } = obj;
console.log("info", name, age, rest);

// Spread
const newObj = { name, job: "Developer", age: "31", ...rest };
console.log("TCL: newObj", newObj);

obj.address = 'av 123';
obj.size = 'LA';

console.log("TCL: obj", obj)




const copyObj = { ...newObj };