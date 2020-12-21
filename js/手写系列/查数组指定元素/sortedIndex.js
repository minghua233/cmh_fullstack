function sortedIndex(array, obj) {
  let low = 0;
  let high = array.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (array[mid] == obj) {
      return mid;
    } else if (array[mid] < obj) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low
}

console.log(sortedIndex([10, 20, 30], 40));
sortedIndex([10, 20, 30], 25) // 2