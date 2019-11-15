/*
write some function prodArray that takes in an array of numbers and returns an 
array such that each index of the new array represents the product of all 
numbers in the original array EXCLUDING the number at that index in the 
original array.

This should be solved in O(n) time without the use of division.  
*/

function prodArray(input) {
  let zero = [];
  let output = [];
  let left = [];
  let right = [];

  for (let i = input.length - 1; i > 0 && zero.length < 2; i--) {

  }

  for (let i = 0; i < input.length; i++) {
    if (zero.length > 1) {
      ouput.push(0);
    } else {
      if (zero.length === 1) {
        if (i === zero[0]) {
          
        } else {
          ouput.push(0);
        }
      } else {

      }
    }
  }

  return output;
}

console.log(prodArray([]));
console.log(prodArray([1,2,3]));
console.log(prodArray([0,0,3]));
console.log(prodArray([0,2,3]));