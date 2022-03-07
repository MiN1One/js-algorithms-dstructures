// FREQUENCY COUNTER PATTERN

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } 

  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let char of str1) {
    char = char.toLowerCase();
    freqCounter1[char] = (freqCounter1[char] || 0) + 1;
  }

  for (let char of str2) {
    char = char.toLowerCase();
    freqCounter2[char] = (freqCounter2[char] || 0) + 1;
  }

  for (let key in freqCounter1) {
    // Check if letter exists in str2
    if (!freqCounter2.hasOwnProperty(key)) {
      return false;
    }

    // Check letter has the same num of occurrences
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram('qwerty', 'ytrewq'));

// O(n)