/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  
  var idx = 0;
  var lowest = 1;
  var set = new Set(nums)
  
  while (idx != nums.length) {
    const currentValue = nums[idx];

    if (set.has(lowest)) {
      lowest+=1;
    }

    if (currentValue == lowest ) {
      lowest+=1;
    }
   
   idx++;
  }

  return lowest;
};

console.log(firstMissingPositive([3, 4, -1, 1]))      // expect 2
console.log(firstMissingPositive([1, 2, 0]))          // expect 3
console.log(firstMissingPositive([7, 8, 9, 11, 12]))  // expect 1
console.log(firstMissingPositive([1, 1000]))          // expect 2
console.log(firstMissingPositive([999,500,1]))        // expect 2
console.log(firstMissingPositive([2,1]))              // expect 3
console.log(firstMissingPositive([1, -1, 3, 2,1]))    // expect 3