const queue = []
queue.push('a')
queue.push('b')
queue.push('c')
queue.push('d')

while (queue.length) {
  const top = queue[0]
  queue.shift()
}


// 链表
// 链表中的数据单位名称叫结点，结点在内存中是可以离散的

// const arr = [1, 2, 3, 4]  // 连续内存

// 当存放的不是原始数据类型，为链表式伪数组，严格来说不是数组
const arr = ['haha', 1, { a: 1 }] // 非连续内存

const index = 10
let node = head

for (let i = 0; i < index && node; i++) {
  node = node.next
}