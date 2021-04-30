  /*
  Write a function `countConstruct(target, wordBank)` that accepts a target string and
  an array of strings.

  The function should return the number of ways tha the target can be constructed by
  concatenating elements of the wordBank array.
  
  You many reuse elements of wordBank any ab

  countConstruct("abcdef", ["ab", abc, cd, def, abcd]) -> 1
  */


const countConstruct = (target, wordBank, memo={}) => { 
  if (target in memo) return memo[target];
  if (target === '') return 1;
  let totalCount = 0;
  
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
      totalCount += numWaysForRest;
    }
  }
  memo[target] = totalCount;
  return totalCount;
}

console.log(countConstruct("purple", ["purp","p","ur","le","purpl"]))                     // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))                 // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "board"])) // 0

console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
  "e", 
  "ee", 
  "eee", 
  "eeee", 
  "eeeee",
  "eeeeee",
]))                                                                                       // 0