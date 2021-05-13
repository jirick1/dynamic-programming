function generate(current, len, chars, results=[]) {

  if (current.length == len) {
    results.push(current);
  }
    
  if (current.length < len) {
    for (var i in chars) {
      generate(current + chars[i], len, chars, results)
    }
  }
  return results;
}

function possibleValues(chars, min, max) {
  let results = [];

  // TODO dont generate values greater than
  let maxLength = max.toString().length // 8
  for (var l = min; l <= maxLength; ++l) {
    generate("", l, chars, results)
  }
  return results;
}

var atMostNGivenDigitSet = function (digits, n) {
  const possibleVals = possibleValues(digits, 1, n)
  var total = 0;

  for (let i = 0; i < possibleVals.length; i++) {

    const value = possibleVals[i];
    if (value <= n) {
      total+=1;
    }
  }

  return total;
}

console.log(atMostNGivenDigitSet(["1", "3", "5", "7"], 100));   // 20 
console.log(atMostNGivenDigitSet(["1", "4", "9"], 1000000000)); // 29523
console.log(atMostNGivenDigitSet(["7"], 8))                     // 1

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 1597232)) // 891029
 var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)
// var startTime = (new Date()).getTime();
// var endTime = (new Date()).getTime();
// console.log(`end-time: ${(endTime - startTime) / 1000}`)
  

/*

  // var excludedNumbers = [];
  // for (let i = 0; i < 10; i++) {
  //   if (!digitSet.has(i.toString())) {
  //     excludedNumbers.push(i.toString())
  //   }
  // }

  // const excludeDigits = new Set(excludedNumbers);

  var results = [];

  for (let i = 0; i < n; i++) {

    var setK = new Set(i.toString().split("")) // O(n*4)

    //if (excludeDigits.length > digitSet.length) {
    if (isSuperseExclude(excludeDigits, setK)) {
      continue;
    }
    results.push(i);
    //}
    // else {
    //   if (isSuperset(digitSet, setK)) {
    //     results.push(i);
    //   }
    // }
  }

  var endTime = (new Date()).getTime();
  console.log(`end-time: ${(endTime - startTime) / 1000}`)
  return results.length;
};



// console.log(brute(["1", "4", "9"], 1, 100));
// console.log(brute(["1", "4", "9"], 1, 1000000000));


 var atMostNGivenDigitSet = function (digits, n) {
  const digitSet = new Set(digits.map((v) => parseInt(v))) // 2n
  var results = [];
  var memo = {};

  for(let i = 0; i < n; i++) {

    console.log(i);

    var setK = new Set(i.toString().split("").map((v) => parseInt(v)))

    console.log(setK);

    var key = ""
    setK.forEach((val) => {
      key +=val.toString();
    })

    if (memo[key] || isSuperset(digitSet, setK)) {
      memo[key] = true;
      results.push(i)
    }
  }

  console.log(results);
  return results.length;
};



var atMostNGivenDigitSet = function (digits, n) {
  const digitSet = new Set(digits) // O(n*1)
  var startTime = (new Date()).getTime();

  var excludedNumbers = [];
  for(let i=0; i<10; i++) {
    if (!digitSet.has(i.toString())) {
      excludedNumbers.push(i.toString())
    }
  }
  const excludeDigits = new Set(excludedNumbers);

  var results = [];
  var memo = {}

  for(let i = 0; i < n; i++) {

    var setK = new Set(i.toString().split("")) // O(n*4)

    if (isSuperset(digitSet, setK)) {
      // memo[key] = true;
      // continue;

      if (i < n) {
        results.push(i)
      }
    }
  }

  var endTime = (new Date()).getTime();
  console.log(`end-time: ${(endTime - startTime)/1000}`)
  return results.length;
};
*/