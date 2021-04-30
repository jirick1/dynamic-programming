const canSum2 = (targetSum, numbers, memo ={}) => {

  if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;

    if (canSum2(remainder, numbers)) {
      memo[targetSum] = true
      return true
    }
  }
  memo[targetSum] = false
  return false;
}

console.log(canSum2(17, [10, 2, 1]))
// console.log(canSum2(300, [10, 3, 7]))
