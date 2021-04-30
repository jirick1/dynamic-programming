const canConstruct = (target, wordBank) => {
  const table = Array(target.length+1).fill(false);
  
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        // if the word matches the character starting at position i
        if (target.slice(i, i+word.length) === word) {
          table[i+word.length] = true;
        }
      }
    }
  }
  return table[target.length]
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(canConstruct("skateboard", ["ab", "abc", "cd", "def", "abcd"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
  "e", 
  "ee", 
  "eee", 
  "eeee", 
  "eeeee",
  "eeeeee",
])) // false


/**
 * 
 * 
 * check and see what the problem is asking you to return. 
 * if the problem is asking for a boolean, then the first item in the table 
 * should be a boolean
 */

 // m = target            O(m^2*n) time
 // n = wordBank.length   O(m) space