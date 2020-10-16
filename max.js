const data = [10, 30, 5, 8];

find_max = (data) => {
    return Math.max.apply(Math, data);
  }

  
console.log(find_max(data));