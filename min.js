const data = [10, 30, 5, 8];

function find_mins(nums) {
  
  let max_num = Number.NEGATIVE_INFINITY;
  for (let num of nums) {
    if (num > max_num) {
      max_num = num;
    }
  }
  return max_num;
}
console.log("TCL: functionfind_mins -> find_mins", find_mins(data))


const find_min = (data) => {  
  
  return Math.min.apply(Math, data);
}

console.log("TCL: find_min -> find_min", find_min(data));



