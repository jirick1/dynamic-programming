/*
Problem say that you are a traveler on a 2D grid. 
You begin in the top-left corner and your goal is to travel to the bottom-right corner. 
You many only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m*n?

Think of the base case!
gridTraveler(1,0) || gridTraveler(1,1)

Write a function that calculates this?
*/

// gridTraveler(1, 1) -> 1 In a 1x1 grid there is only one way to travel
// gridTraveler(0, 1) -> 0 The grid is not valid 
// when either of the dimensions are 0, the result should be 0

/** 
 
1. Make it work
    1. Visualize the problem as a tree
    2. Implement the tree using recursion
2. Make it efficient
    1. add a memo object
    2. add a base case to return memo values
    3. store return values into the memo

*/


const gridTraveler = (m, n, memo={}) => {
  const key = m + ',' + n;
  if (key in memo) return memo[key]
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;

  memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
  return memo[key]
}

console.log(gridTraveler(1, 1))   // 1
console.log(gridTraveler(1, 0))   // 0
console.log(gridTraveler(0, 9))   // 0
console.log(gridTraveler(2, 3))   // 3
console.log(gridTraveler(18, 18)) // 2333606220

