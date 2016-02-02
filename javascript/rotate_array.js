/*  - Problem Description -
**  Rotate an array of n elements to the right by k steps
**  
**  @param {number[]} nums
**  @param {number} k
**  @return {void}
*/

var rotate = function(nums, k) {
  while(k > 0) {
    nums.unshift(nums.pop());
    k--;
  }
};