  /*
  Write a function `countConstruct(target, wordBank)` that accepts a target string and
  an array of strings.

  The function should return the number of ways tha the target can be constructed by
  concatenating elements of the wordBank array.
  
  You many reuse elements of wordBank any ab

  countConstruct("abcdef", ["ab", abc, cd, def, abcd]) -> 1
  */


const countConstruct = (target, wordBank) => { 
  const table = Array(target.length + 1).fill(0)
  table[0] = 1; // there is one way to make the empty string

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        table[i+word.length] += table[i];
      }
    }
  }

  return table[target.length];
}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))                 // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))                 // 1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "board"])) // 0
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // 4

console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
  "e", 
  "ee", 
  "eee", 
  "eeee", 
  "eeeee",
  "eeeeee",
]))                                                                                       // 0