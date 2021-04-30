/*
Write a function `canSum(targetSum, arrayOfNumbers)` that takes in a targetSum and an 
array of numbers as arguments. 

The function should return a boolean indicating 
whether or not it is possible to generate the targetSum using numbers form the array.

1. You may use an element of the array as many times as needed.
2. You may assume that all input numbers are nonnegative.
*/

// canSum(7, [5, 3, 4, 7]) -> true
// canSum(7, [2, 4]) -> false

// create an array the size of the target sum + 1 
const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false)
  table[0] = true;

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      // only look a head if current is true
      for (let num of numbers) {
        table[i + num] = true;
      }
    }
  }

  return table[targetSum];


}

console.log(canSum(7, [2, 3]))
console.log(canSum(7, [2, 4]))
console.log(canSum(7, [5, 3, 4, 7]))
console.log(canSum(8, [2, 3, 5]))

// m = targetSum 
// n = numbers.length 

// O(mn) time 
// O(m)  space