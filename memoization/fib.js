// write a function fib(n) that takes in a number as an argument, 
// the function should return the n-th number of the fibonacci sequence

/**
 * 
 O(2^n) time
 O(n)
 The number of stack frames is the height 
 */
const fib = (n) => {
  if (n <= 2) return 1;
  return fib( n-1 ) + fib( n-2 );
};

// console.log(fib(6)) // 8
// console.log(fib(7)) // 13
// console.log(fib(8)) // 21 
// console.log(fib(50)) // 12586269025 


/**

Time complexity:

The length is n:

The height of the tree is the distant from the root node to the furthest node


N(2^n/2) can me simplified to N(2^n)


Overlapping subproblems

What pattern in the tree is duplicate
 */


// memoization
 
const fib2 = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib2( n-1, memo) + fib2( n-2, memo)
  return memo[n];
};

console.log(fib2(6))     // 8
console.log(fib2(7))    // 13
console.log(fib2(8))    // 21 
console.log(fib2(40))   // 102334155 
console.log(fib2(1000)) // 12586269025 