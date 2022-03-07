function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let item of arr1) {
    const includesIndex = arr2.indexOf(item ** 2);
    if (includesIndex === -1) {
      return false;
    }
    arr2.splice(includesIndex, 1);
  }
  return true;
}

console.log(same([1, 2, 3, 2], [4, 9, 1, 4]));

// O(n^2)
