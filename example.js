/**
1 - encontrar y contar valores duplicados
2 - no mostrar los no duplicados
3 - mostrar los no duplicados
4 - mostrar el que mas se repite de los registros duplicados
5 - mostrar el que menos se repite de los registros duplicados
6 - mostrar el mayor de los duplicados de los registros duplicados
7 - mostrar el menor de los duplicados de los registros duplicados
 
 */

let numberArray = [1, 2, 3, 4, 5, 5, 6, 4, 1, 3];

let jsondata = {
    duplicate: {},
    maxDuplicate: {},
    maxKeyDuplicate: {},
    noduplicate: {},
};

let duplicateJson = numberArray.reduce((acum, val, index) => {
    acum[`${val}`] = (acum[`${val}`] | 0) + 1;
    return acum;
}, {});

for (const [key, value] of Object.entries(duplicateJson)) {
    value > 1 && (jsondata.duplicate[`${key}`] = duplicateJson[`${key}`]);
    value == 1 && (jsondata.noduplicate[`${key}`] = duplicateJson[`${key}`]);
}

let arrMaxduplicate = Object.values(jsondata.duplicate);
let Maxduplicate = Math.max(...arrMaxduplicate);

for (const [key, value] of Object.entries(jsondata.duplicate)) {
    value == Maxduplicate &&
        (jsondata.maxDuplicate[`${key}`] = duplicateJson[`${key}`]);
}

arrMaxduplicate = Object.keys(jsondata.duplicate);
jsondata.maxKeyDuplicate = Math.max(...arrMaxduplicate);

let countDuplicate = [duplicateJson].filter((val, keyMain) => {
    const jsondata = {};
    for (let key in val) {
        //val[`${key}.`] > 1 && acum.push(val[`${key}.`]);
        val[`${key}`] > 1 && (jsondata[key] = val[`${key}`]);
    }
    return jsondata;
});

let countNotDuplicate = [duplicateJson].filter((val, keyMain) => {
    const jsondata = {};
    for (let key in val) {
        //val[`${key}.`] > 1 && acum.push(val[`${key}.`]);
        val[`${key}`] == 1 && (jsondata[key] = val[`${key}`]);
    }
    return jsondata;
});

console.log(`TCL: : ------------------------------`);
console.log(`TCL: : Array`, numberArray);
console.log(`TCL: : contador de objectos`, duplicateJson);
console.log(`TCL: : encontrar y contar valores duplicados`, countDuplicate);
console.log(`TCL: : encontrar y contar valores no duplicados`, countNotDuplicate);
c