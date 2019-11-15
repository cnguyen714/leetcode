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
  let left = [1];
  let right = Array(input.length).fill(1);

  if (input[0] === 0) {
    zero.push(0);
  }

  for (let i = 1; i < input.length && zero.length < 2; i++) {
    if(input[i] === 0) { 
      zero.push(i);
    } else {
      left.push(input[i] * left[i - 1]);
    }
  }
  for (let i = input.length - 2; i > 0 && zero.length < 2; i--) {
    right.push(input[i] * right[i + 1]);
  }


  for (let i = 0; i < input.length; i++) {
    if (zero.length > 1) {
      output.push(0);
    } else {
      if (zero.length === 1) {
        if (i === zero[0]) {
          output.push(left[i] * right[i]);
        } else {
          output.push(0);
        }
      } else {
        output.push(left[i] * right[i]);
      }
    }
  }

  return output;
}

console.log(prodArray([]));
console.log(prodArray([1,2,3]));
console.log(prodArray([0,0,3]));
console.log(prodArray([0,2,3]));