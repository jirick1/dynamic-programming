const mostFrequent = (numbers) => {

  var hash = {}

  var mode = null;
  var maxKeyLength = 0;

  for(let num of numbers) {

    if (hash[num] === undefined) {
      hash[num] = 1
    }
    else {
      let newvalue = hash[num]+1
      hash[num] = newvalue;
    }

    if (mode == null || hash[num] > maxKeyLength) {
      maxKeyLength = hash[num];
      mode = num;
    }

  }
  return mode;
}

console.log(mostFrequent([1, 3, 1, 3, 2, 1]))                     // 1
console.log(mostFrequent([3, 3, 1, 3, 2, 1]))                     // 3
console.log(mostFrequent([0, -1, 10, 10, -1, 10, -1, -1, -1, 1])) // -1
console.log(mostFrequent([]))                                     // null
console.log(mostFrequent([0]))                                    // 0