/*  - Problem Description -
**  Given numRows, generate the first numRows of Pascal's Triangle
**  
**  @param {number} n
**  @return {number[][]}
*/

var generate = function(n) {
  if(n <= 0) {
    return [];
  } else if(n == 1) {
    return [[1]];
  } else {
    var tri = [[1],[1,1]];
    while(tri.length < n) {
      tri.push([1]);
      for(var i = 0; i < tri.length-1; i++) {
        tri[tri.length - 1].push(tri[tri.length - 2][i - 1] + tri[tri.length - 2][i]);
      }
      tri[tri.length - 1].push(1);
    }
    return tri;
  }
};
