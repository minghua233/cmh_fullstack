// topK 分区思想
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
 return i
}

var findKthLargest = function (nums, k) {
  let left = 0,
    right = nums.length - 1,
    target = nums.length - k,
    i = partition(nums, left, right)
  while (i !== target) {
    if (i < target) { // 基准值选小了，收缩左区间
      left = i + 1
    } else { // 基准值选大了，收缩右区间
      right = i - 1
    }
    i = partition(nums, left, right)
  }
  return nums[i]
};