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

function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function () {
    clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
    timeout = setTimeout(() => { // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
      fn.apply(this, arguments);
    }, 500);
  };
}
function sayHi() {
  console.log('防抖成功');
}

var inp = document.getElementById('inp');
inp.addEventListener('input', debounce(sayHi)); // 防抖


