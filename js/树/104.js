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
var maxDepth = function (root) {
  if (!root) return 0
  // 递
  console.log('递', root.val)
  let lh = maxDepth(root.left) //左子树高度
  let rh = maxDepth(root.right) // 右子树高度
  // 归
  console.log('归', root.val)
  // return lh > rh ? lh + 1 : rh + 1
  return Math.max(lh, rh) + 1
}
maxDepth(root)