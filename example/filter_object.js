var scores = [{
        John: 2,
        Sarah: 3,
        Janet: 3
    },
    {
        John: 2,
        Sarah: 3,
        Janet: ''
    },
    {

        Sarah: 2,
        Janet: 2
    }
];

const deletePropertyName = (obj) => {
    return obj.filter((value) => {
        return Object.keys(value).map((val) => {
            return value[val] === '' && delete value[val]
        })
    });
};
console.log(`TCL: : ------------------------------`);
console.log(`TCL: : deletePropertyName`, deletePropertyName(scores));
console.log(`TCL: : ------------------------------`);


const filteredByValue = (obj, key) => {
    return obj.filter(element => {
        return [element].find((value) => {            
            return value[key] > 1
        })
    });
}
console.log(`TCL: : ------------------------------`);
console.log(`TCL: : filteredByValue`, filteredByValue(scores, 'Janet'));
console.log(`TCL: : ------------------------------`);


const filteredByKey = (obj, key) => {
    return obj.filter(element => {
        return [element].find((v) => {
            return v.hasOwnProperty(key)
        })
    });
}

console.log(`TCL: : ------------------------------`);
console.log(`TCL: : filteredByKey`, filteredByKey(scores, 'John'));
console.log(`TCL: : ------------------------------`);



let items = [{
    id: 1,
    isActive: true,
    age: 40,
    first_name: 'Dickerson',
    last_name: 'Macdonald',
    cost: 6
},
{
    id: 2,
    isActive: false,
    age: 21,
    first_name: 'Larsen',
    last_name: 'Shaw',
    cost: 60
},
{
    id: 3,
    isActive: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
    cost: 50
},
{
    id: 4,
    isActive: true,
    age: 38,
    first_name: 'Mac',
    last_name: '',
    cost: 10
}
];

function searchAllValues(val) {

let searchedItems = items.filter((item) => {
    return Object.keys(item).some((key) => {
        //return String(item[key]).toLowerCase().indexOf(val.toLowerCase()) > -1;
        return item[key] > 80;
    })
});

return searchedItems;
}

console.log(`TCL: : -------------------------------`);
console.log(`TCL: : search -> search`, searchAllValues('mac'));
console.log(`TCL: : -------------------------------`);

function searchAge(val) {

return items.filter(item => item.age > val);
}

console.log(`TCL: : ----------------------------------------`);
console.log(`TCL: : searchAge -> searchAge`, searchAge(30));
console.log(`TCL: : ----------------------------------------`);

const getTotalCost = (obj) => {

return obj.map(t => t.cost).reduce((acc, value) => acc + value, 0);
}

console.log(`TCL: : ------------------------------------------------------`);
console.log(`TCL: : cgetTotalCost -> getTotalCost`, getTotalCost(items));
console.log(`TCL: : ------------------------------------------------------`);