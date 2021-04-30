/** 
 * Write a function `allConstruct(target, wordBank)` that accepts a target string
 * and an array of strings
 * 
 * The function should return a 2D array containing all of the ways that the 
 * `target` can be constructed by concatenating elements of the `wordBank` array.
*/

// what is the return type? 2D array
// what the seed values base case senarious? 

// allConstruct('', ['cat', 'dog']) // [[]] if empty, should return an 2D outer array
// which represents a collections of multiple combinations

const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill().map(() => [])
  table[0]= [[]];

  for (let i = 0; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + word.length) === word) {
        const newCombinations = table[i].map( subArray => [ ...subArray, word ])
        table[i + word.length].push(...newCombinations)
      }
    }
  }

  return table[target.length]
}


console.log(allConstruct('', ['cat', 'dog'])) // [[]]
console.log(allConstruct('bird', ['cat', 'dog'])) // []
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
/**
 * [
 *   ['purp', 'le']
 *   ['p', 'ur', 'p', 'le']
 * ]
 */
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
/** 
 * [
 *  ['ab', 'cd', 'ef'],
 *  ['ab', 'c', 'def'], 
 *  ['abc', 'def'],
 *  ['abcd', 'ef']
 * ]
*/
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // []
console.log(allConstruct("aaaaaaaaaaaaz", ["a", "aa",  "aaa", "aaaa",  "aaaaa"])) // []


// each sub array represents 


// notice any overlapping subproblems
// decide what is the trivially smallest input
// think recursively to use memoization
// think iteractively to use tabulation
// draw a strategry first!!!