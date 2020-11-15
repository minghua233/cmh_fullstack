// let arr = [1, 2, 3]
// let node1 = {val: 1, next: null}
// let node2 = {val: 2, next: null}
// let node3 = {val: 3, next: null}
// node1.next = node2
// node2.next = node3
// console.log(node1);
// 数组 存储连续的空间
// 链表 非连续


// var hasCycle = function (head) {
//   let node1 = {
//     val: 1,
//     next: null
//   }
//   let node2 = {
//     val: 2,
//     next: null
//   }
//   let node3 = {
//     val: 3,
//     next: null
//   }
//   node1.next = node2
//   node2.next = node3
//   let current = node1
//   while (current) {
//     console.log(current);
//     current = current.next
//   }
// };

var hasCycle = function (head) {
  let current = head,
    map = new Map()
  while (current) {
    if (map.has(current)) {
      return true
    }
    map.set(current, true)
    current = current.next
  }
  return false
}