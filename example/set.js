const mySet1 = new Set();

mySet1.add(1); // Set [ 1 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add(5); // Set [ 1, 5 ]
mySet1.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 }); // o is referencing a different object, so this is okay

mySet1.has(1); // true
mySet1.has(3); // false, since 3 has not been added to the set
mySet1.has(5); // true
mySet1.has(Math.sqrt(25)); // true
mySet1.has("Some Text".toLowerCase()); // true
mySet1.has(o); // true

mySet1.size; // 5

mySet1.delete(5); // removes 5 from the set
mySet1.has(5); // false, 5 has been removed

mySet1.size; // 4, since we just removed one value

console.log(mySet1);
// logs Set(4) [ 1, "some text", {…}, {…} ] in Firefox
// logs Set(4) { 1, "some text", {…}, {…} } in Chrome

// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.keys()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
for (let item of mySet1.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}
// (key and value are the same here)
for (let [key, value] of mySet1.entries()) console.log(key);

// convert Set object to an Array object, with Array.from
const myArr = Array.from(mySet1); // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document

// converting between Set and Array
const mySet2 = new Set([1, 2, 3, 4, 2, 1]);

// intersect can be simulated via
const intersections = new Set([...mySet1].filter((x) => mySet2.has(x)));
console.log(`🚀 ~ intersection`, intersections);

// difference can be simulated via
const differences = new Set([...mySet1].filter((x) => !mySet2.has(x)));
console.log(`🚀 ~ differences`, differences);

// Iterate set entries with forEach()
mySet2.forEach(function (value) {
  console.log(value);
});

function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

function difference(setA, setB) {
  [...setB].map((value) => setA.delete(value));
  return setA;
}

// Examples
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 3]);
const setC = new Set([3, 4, 5, 6]);

isSuperset(setA, setB); // returns true
console.log(`🚀 ~ isSuperset(setA, setB)`, isSuperset(setA, setB));
union(setA, setC); // returns Set {1, 2, 3, 4, 5, 6}
console.log(`🚀 ~ union(setA, setC)`, union(setA, setC));
intersection(setA, setC); // returns Set {3, 4}
console.log(`🚀 ~ intersection(setA, setC)`, intersection(setA, setC));
symmetricDifference(setA, setC); // returns Set {1, 2, 5, 6}
console.log(
  `🚀 ~ symmetricDifference(setA, setC)`,
  symmetricDifference(setA, setC)
);
difference(setA, setC); // returns Set {1, 2}
console.log(`🚀 ~ difference(setA, setC)`, difference(setA, setC));
