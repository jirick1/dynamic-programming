/**
 Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.
There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. 
Given N, write a function that returns the number of unique ways you can climb the staircase. 
The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

    1, 1, 1, 1
    2, 1, 1
    1, 2, 1
    1, 1, 2
    2, 2
 */


const climbStairs = (target, memo={}) => {

  if (memo[target]) return memo[target];
  if (target == 0) return 1;
  if (target < 0) return 0;

  memo[target] = climbStairs(target-2, memo) + climbStairs(target-1, memo)
  return memo[target];
}

console.log(climbStairs(4)) // 5 unique ways
console.log(climbStairs(3)) // 3 unique ways
console.log(climbStairs(100)) // 573147844013817200000 unique ways