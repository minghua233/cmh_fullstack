// root = {
//   val: 1,
//   left: {
//     val: 2,
//     left: {
//       val: 3
//     },
//     right: {
//       val: 4
//     }
//   },
//   right: {
//     val: 5,
//     left: {
//       val: 6
//     },
//     right: {
//       val: 7
//     }
//   }
// }
// // bfs  使用队列实现
// function bfs(): void {
//   const queue = []
//   queue.push(root)
//   while (queue.length) {
//     const top = queue[0]
//     console.log(top.val);
//     if (top.left) queue.push(top.left)
//     if (top.right) queue.push(top.right)
//     queue.shift()
//   }
// }
