/*	- Problem Description -
**	Write a function that takes an unsigned integer and returns the number 
**	of ’1' bits it has (also known as the Hamming weight).
**	For example, the 32-bit integer ’11' has binary representation 
**	00000000000000000000000000001011, so the function should return 3.
**
**	@param {number} n - a positive integer
**	@return {number}
*/

var hammingWeight = function(n) {
	// creating variable and converting n to a string of binary
	var count = 0;
	n = n.toString(2);
	n = n.split('');
	// looping through n to find 1-bits
	for(var i = 0; i < n.length; i++){
		if(n[i] === '1') {
			count++;
		}
	}
	return count;
};