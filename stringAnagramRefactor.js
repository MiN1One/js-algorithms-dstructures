// FREQUENCY COUNTER PATTERN 

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counter = {};

  for (char of str1) {
    counter[char] ? counter[char] += 1 : counter[char] = 1;
  }

  for (char of str2) {
    // Check if there is a char or is not equal to 0
    if (!counter[char]) {
      return false;
    } 
    // If exists decrement counter
    else {
      counter[char] -= 1;
    }
  }

  return true;
}

console.log(validAnagram('qwerty', 'ytrewq'));

// O(n)