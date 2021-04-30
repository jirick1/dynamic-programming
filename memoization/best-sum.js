/*
Write a function bestSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments.
The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
If there is a tie for the shortest combination, you may return any one of the shortest.
*/

const bestSum = (targetSum, numbers, memo={}) => {
  if (targetSum in memo ) return memo[targetSum];
  if (targetSum === 0) return []
  if (targetSum < 0) return null;

  let shortedCombination = null;

  for (let num of numbers) {
    const remainder = bestSum(targetSum - num, numbers, memo)

    if (remainder !== null) {
      const combination = [...remainder, num];
      if (shortedCombination === null || combination.length < shortedCombination.length) {
        shortedCombination = combination;
      }
    }
  }

  memo[targetSum] = shortedCombination;
  return memo[targetSum];
}

console.log(bestSum(8, [5, 3, 4, 7])) // 
console.log(bestSum(8, [2, 3, 5])) 
console.log(bestSum(8, [1, 4, 5])) 
console.log(bestSum(100, [1, 2, 5, 25])) 



const bestSum2 = (targetSum, numbers) => {


}







console.log(bestSum2(8, [5, 3, 4, 7])) // [5,3 ]
console.log(bestSum2(8, [2, 3, 5])) 
console.log(bestSum2(8, [1, 4, 5])) 
console.log(bestSum2(100, [1, 2, 5, 25])) 