/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  if (A.length === 0) return null;
  if (A.length === 1) return true;
  if (A.length === 2) return true;

  let order = 0;

  for (let i = 1; i <= A.length - 1; i++) {
    if (order === 0) {
      if (A[i] > A[i - 1]) order = 1;
      if (A[i] < A[i - 1]) order = -1;
    } else if (order === 1) {
      if (A[i] < A[i-1]) return false;
    } else if (order === -1) {
      if (A[i] > A[i-1]) return false;
    }
  }
  return true;
};

console.log(isMonotonic([1,2,2,3]));
console.log(isMonotonic([6,5,4,4]));
console.log(isMonotonic([1,3,2]));