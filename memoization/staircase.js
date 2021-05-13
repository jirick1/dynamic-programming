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

// console.log(climbStairs(4)) // 5 unique ways
// console.log(climbStairs(3)) // 3 unique ways
// console.log(climbStairs(100)) // 573147844013817200000 unique ways



/**
 What if, instead of being able to climb 1 or 2 steps at a time, 
 you could climb any number from a set of positive integers X? 
 For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.
 */

 const climbStairsAnySteps = (stairs, steps=[], memo={}) => {
   if (memo[stairs]) return memo[stairs];
   if (stairs < 0) return 0;
   if (stairs == 0) return 1;

   let total = 0;
   for(let step of steps) {
     const remainderStairs = stairs - step;
     total += climbStairsAnySteps(remainderStairs, steps)
   }

   memo[stairs] = total;
   return memo[stairs];

 }
 console.log(climbStairsAnySteps(5, [1, 3, 5])) // 5 unique ways [11111, 113, 131, 311, 5]
 console.log(climbStairsAnySteps(5, [1]))       // 1 unique ways [11111]
 console.log(climbStairsAnySteps(5, [1, 2]))    // 8 unique ways [11111, 2111, 1112]

// const canSum = (target, nums) => {

//   if (target == 0) return true;
//   if (target < 0 ) return false;

//   for(let num of nums) {
//     if (canSum(target - num, nums)) {
//       return true;
//     }
//   }

//   return false
// }



// console.log(canSum(3, [7, 2, 5])) // false;
// console.log(canSum(7, [7, 2, 5, 4, 3])) // true;


// const howSum = (target, numbers) => {

//   if (target == 0) return [];
//   if (target < 0 ) return null;

//   for(let num of numbers) {
    
//     const remainder = target - num;
//     const remainderResult = howSum(remainder, numbers);

//     if (remainderResult !== null) {
//       return [ ...remainderResult, num ]
//     }
//   }

//   return null;
// }

// console.log(howSum(3, [7, 2, 5]))       // null
// console.log(howSum(7, [7, 2, 5, 4, 3])) // [7], [2, 5], [4, 3];