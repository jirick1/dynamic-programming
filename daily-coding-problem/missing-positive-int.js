/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  

  let set = new Set(nums);
  var lowestValue = null, higestValue = null;

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const upper = currentValue + 1; // 2
    const lower = currentValue - 1; // 1
    console.log(" C: " + currentValue + ", L: " + lower + ", U: " + upper)
    
    if (set.has(upper) == false) {
      if (higestValue == null || higestValue < upper) higestValue = upper;
    }

    if (set.has(lower) == false) {
    
      // check if lowestValue is null
      if (lowestValue == null) {

        // check if lower is greater than 0
        if (lower > 0) { // lowestValue = null; lower > 0
          lowestValue = lower;
        } else {
          if (lower == 0) {
            lowestValue = higestValue;
          }
        }
      } else { // lowest value is not null

        if (lower > 0 && lower < lowestValue) {
          lowestValue = lower
        }

        if (higestValue != null && higestValue < lowestValue) {
          lowestValue = higestValue;
        }

      }
    } else {
      if (lowestValue == null) lowestValue = higestValue
    }
  }
  
  if (set.has(1) == false) lowestValue = 1 // next positive int is 1

  return lowestValue;
};

console.log(firstMissingPositive([3, 4, -1, 1]))      // expect 2
console.log(firstMissingPositive([1, 2, 0]))          // expect 3
console.log(firstMissingPositive([7, 8, 9, 11, 12]))  // expect 1
console.log(firstMissingPositive([1, 1000]))          // expect 2