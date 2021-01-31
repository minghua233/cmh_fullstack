function BFS() {
  const queue = []  // 初始化一个队列
  // 入口坐标首先入队
  queue.push(root)
  // 队列不为空
  while (queue.length) {
    const top = queue[0]  //  取出队头元素
    // 访问top
    console.log(top.val);
    // 检查从top出发还能抵达的元素
    if (top.left) queue.push(top.left)
    if (top.right) queue.push(top.right)
    queue.shift() // 访问完毕
  }
}

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5,
    left: {
      val: 6
    },
    right: {
      val: 7
    }
  }
}

BFS(root)