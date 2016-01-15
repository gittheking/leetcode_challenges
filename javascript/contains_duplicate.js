/*	- Problem Description - 
**	Given an array of integers, find if the array contains any duplicates. 
**	Your function should return true if any value appears at least twice in the array, 
**	and it should return false if every element is distinct.
*/

/*
**	@param {number[]} nums
**	@return {boolean}
*/
var containsDuplicate = function(nums) {
	// If the array only contains 1 number return false
	if(nums.length > 1){
		// Loop through array looking for duplicates
		for(var i = 0; i < nums.length - 1; i++){
			for(var j = i + 1; j < nums.length; j++){
				if(nums[i] === nums[j]){
					return true;
				}
			}
		}
	}
	return false;
};