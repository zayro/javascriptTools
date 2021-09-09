const object = { a: 1, b: 2, c: 3 };
let iterations = object.length;

let condition = "";
let conditional;
for (const property in object) {
        condition +=`${property} = '${object[property]}' AND `; 
}
conditional = condition.substring(0, condition.lastIndexOf('AND'));

console.log(`TCL: : -------------------------------`);
console.log(`TCL: : conditional: `, conditional);
console.log(`TCL: : -------------------------------`);

