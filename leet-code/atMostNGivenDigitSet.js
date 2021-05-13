function generate(current, len, chars, results, n) {

  if (current.length == len && current <= n) {
    results.total++;
  }
    
  if (current.length < len) {
    for (let i in chars) {
      generate(current + chars[i], len, chars, results, n)
    }
  }
  return results;
}

function possibleValues(chars, min, n) {
  let results = {total: 0};
  let maxLength = n.toString().length
  for (var l = min; l <= maxLength; ++l) {
    generate("", l, chars, results, n)
  }
  return results;
}

var atMostNGivenDigitSet = function (digits, n) {
  const results = possibleValues(digits, 1, n)
  return results.total;
}

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["1", "3", "5", "7"], 100));                             // 20 
var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["1", "4", "9"], 1000000000));                           // 29523
var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["7"], 8))                                               // 1
var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["1", "2", "3", "4", "5", "6", "7", "8", "9"], 1597232)) // 891029
var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["1", "2", "3", "4", "6", "7", "8", "9"], 67688637))     // 12255070
var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)

var startTime = (new Date()).getTime();
console.log(atMostNGivenDigitSet(["3", "4", "5", "7", "8", "9"], 819407090))              // 8734002
var endTime = (new Date()).getTime();
console.log(`end-time: ${(endTime - startTime) / 1000}`)
