//思想：循环数组，每次都找到当前范围内的最小值，把它放在当前范围的头部，然后缩小范围，知道数组完全有序为止
let arr = [5,3,2,4,1]

function seleteSort(arr){
  const len = arr.length
  //minIndex用来缓存区间内最小值的索引
  let minIndex
  for(let i = 0; i < len -1; i++){
    minIndex = i
    //i是左界，j是区间右界
    for(let j = i; j < len; j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
  }
  return arr
}