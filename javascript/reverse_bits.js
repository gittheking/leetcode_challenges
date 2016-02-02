/*  - Problem Description -
**  Reverse bits of a 32 bit unsigned integer
**  
**  @param {number} n - a positive integer
**  @return {number} a positive integer
*/

var reverseBits = function(n) {
  var nBits = n.toString(2);
  var nBitsReversed = [];
  nBits = nBits.split('');
  while(nBits.length < 32) {
    nBits.unshift('0');
  }
  while(nBits.length > 0) {
    nBitsReversed.push(nBits.pop());
  }
  return parseInt(nBitsReversed.join(''),2);
};