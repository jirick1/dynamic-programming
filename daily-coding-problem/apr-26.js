/*
Given a list of numbers and a number k, 
return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/

const canSum = (targetSum, numbers) => {

  let set = new Set(numbers)

  for(let num of numbers) {
    let remainder = targetSum - num;

    set.delete(num);

    if (set.has(remainder)){
      return true;
    }
  }

  return false;

}

console.log(canSum(17, [10, 15, 3, 7]))
