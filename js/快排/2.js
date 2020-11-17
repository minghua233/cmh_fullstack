// 对对象按年龄排序
// {age: 18} {age: 20} {age: 15}
// let arr2 = [{age: 18} {age: 20} {age: 15}]
// arr2.sort((a, b) => {
//   return a.age - b.age
// })
// [5, 3, 4, -1, -2, 9, -8]
function cb(a, b) { // 控制排序升序还是降序
  return a - b
}
function partition(arr, left, right) { // 分区，实现选定基准值排序操作
  if (left >= right) return
  let pivot = arr[left] // 选定基准值
  let i = left,
    j = right
  while (i < j) {
    // 在右边找到 < pivot
    // cb(arr[j], pivot) <= 0
    // arr[j] <= pivot
    while (cb(arr[j], pivot) <= 0 && i < j) {
      j--
    }
    arr[i] = arr[j]
    // 在左边找到 > pivot 
    // cb(arr[j], pivot) >= 0
    // arr[j] >= pivot
    while (cb(arr[j], pivot) >= 0 && i < j) {
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