// FREQUENCY COUNTER PATTERN

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // element: numOfOccurrence
  const freqCounter1 = {};
  const freqCounter2 = {};

  for (let item of arr1) {
    freqCounter1[item] = (freqCounter1[item] || 0) + 1;
  }

  for (let item of arr2) {
    freqCounter2[item] = (freqCounter2[item] || 0) + 1;
  }

  for (let key in freqCounter1) {
    // Check if 2nd array includes squared item
    if (!freqCounter2.hasOwnProperty(key ** 2)) {
      return false;
    }
    
    // Check number of occurrences
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same([1, 2, 3, 2], [4, 9, 1, 4]));

// O(n)