// [5, 3, 4, -1, -2, 9, -8]
function partition(arr, left, right) { // 分区，实现选定基准值排序操作
  if (left >= right) return
  let pivot = arr[left] // 选定基准值
  let i = left,
    j = right
  while (i < j) {
    // 在右边找到 < pivot 
    while (arr[j] >= pivot && i < j) {
      j--
    }
    arr[i] = arr[j]
    // 在左边找到 > pivot 
    while (arr[i] <= pivot && i < j) {
      i++
    }
    arr[j] = arr[i]
  }
  arr[i] = pivot
  // i === j 基准值位置
  partition(arr, left, i - 1)
  partition(arr, i + 1, right)
}

function sort(arr) {
  partition(arr, 0, arr.length - 1)
  return arr
}
console.log(sort([5, 3, 4, -1, -2, 9, -8]));