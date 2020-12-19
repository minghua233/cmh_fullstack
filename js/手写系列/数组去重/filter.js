// function unique(arr) {
//   // return arr.filter((item, index) => arr.indexOf(item) === index); //时间复杂度n^2
//   return arr.concat().sort().filter((item, index) => !index || item !== arr[index -1]); // 时间复杂度2n
// }

function unique(arr) {
  // return Array.from(new Set(arr))
  return [...new Set(arr)]
}

// let unique = (a) => [...new Set(a)]

let arr = [1, 2, 3, 1, '1', '1', '3', 'a', 'A']
console.log(unique(arr));