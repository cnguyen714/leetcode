/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  if (s.length === 1) return 1;
  if (k >= s.length) return s.length;

  let letters = {
    'A': 0,
  };

  let left = 0;
  let right = 0;
  let max = 0;
  let localMaxLetter = 'A';

  for (let i = 0; i < k + 1; i++) {
    if (letters[s[right]]) {
      letters[s[right]] += 1;
    } else {
      letters[s[right]] = 1;
    }
    if (letters[s[right]] >= max) {
      localMaxLetter = [s[right]];
      max = letters[s[right]];
    }
    right++;
  }

  while (right <= s.length) {
    // console.log(`l: ${left} | r: ${right} | max: ${Math.max(...Object.values(letters))}`)
    // console.log(right - left - k - Math.max(...Object.values(letters)));
    let windowMax = letters[localMaxLetter];
    if (right - left - k - windowMax <= 0) {
      let newMax = windowMax + k;
      if (newMax >= s.length) {
        max = s.length;
      } else if (newMax > max) {
        max = newMax;
      }
      if (letters[s[right]]) {
        letters[s[right]] += 1;
      } else {
        letters[s[right]] = 1;
      }
      if (letters[s[right]] > letters[localMaxLetter]) {
        localMaxLetter = [s[right]];
      }
      right++;
    } else {
      letters[s[left]] -= 1;
      left++;
      Object.keys(letters).forEach(letter => {
        if (letters[letter] > letters[localMaxLetter])
          localMaxLetter = letter;
      });
    }
  }
  return max;
};

// console.log(characterReplacement("ABAB", 2)) // 4
// console.log(characterReplacement("ABABAB", 2)) // 5
// console.log(characterReplacement("ABABA", 1)) // 3
// console.log(characterReplacement("AABABBA", 1)) // 4
// console.log(characterReplacement("AAAA", 2)) // 4
console.log(characterReplacement("BAAA", 0)) // 4
// console.log(characterReplacement("KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF", 4)) // 7
