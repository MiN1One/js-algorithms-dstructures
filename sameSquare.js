function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let includes = true;
  for (let item of arr1) {
    includes = includes && includesSquare(arr2, item);
    if (!includes) {
      return false;
    }
  }
  return true;
}

function includesSquare(arr, value) {
  for (let item of arr) {
    if (value * value === item) {
      return true;
    }
  }
  return false;
}

console.log(same([1, 2, 3], [4, 1, 9]));

// O(n^2)