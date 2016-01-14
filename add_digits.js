/*	- Problem Description - 
**	Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
**	For example:
**	Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
*/

/*
**	@param {number} num
**	@return {number}
*/
var addDigits = function(num) {
	var	nums, sum;
	// Converting num to a string value
	num = num.toString();
	// While loop to keep adding the digits of 'num' until it's a single digit number
	while (num.length > 1 && (num !== "NaN" || num !== undefined)) {
		sum = 0;
		nums = nums.split('');
		// Loop to add all the digits in num
		for (var i = 0; i < nums.length; i++){
			sum += Number(nums[i]);
		}
		num = sum.toString();
	}
	return Number(num);
};