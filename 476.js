
// https://leetcode.com/problems/number-complement/
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  // precompute 31 bits
  let bits = [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864, 134217728, 268435456, 536870912, 1073741824];
  let complement = 0;
  let started = false;
  for (let i = 31; i > 0; i--) {
    if (num - bits[i] >= 0) {
      num -= bits[i];
      started = true;
    } else if (started) { // add to complement whenever we cannot divide num
      complement += bits[i];
    }
  }
  return complement;
};

console.log(findComplement(20161211)); // -> 13393220

// output to console value of 31 bits
// let num = 1
// for (let i = 1; i < 32; i++) {
//   console.log(num *= 2);
// }