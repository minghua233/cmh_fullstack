// const arr = new Array(7).fill(1)
// console.log(arr);

// const arr = [
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4],
//   [1, 2, 3, 4]
// ]

// fill的入参如果是引用类型，那么填充值的时候就是入参的引用
// const arr = (new Array(7)).fill([]) // [[],[],[],[],[],[],[]] 对应了同一个引用
// console.log(arr);

const arr = new Array(7)
const len = arr.length
for (let i = 0; i < len; i++) {
  arr[i] = []
}