// 数据域
// 左子树
// 右子树

// function TreeNode(val) {
//   this.val = val
//   this.left = this.right = null
// }

// const node = new TreeNode(1)

// 先序遍历 \
// 中序遍历 - 递归遍历
// 后序遍历 /

// 层次遍历 - 迭代遍历


const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

let preorderTraversal = function (root) {
  let res = []
  function traversal(root) {
    if (root !== null) {
      res.push(root.val)
      traversal(root.left)
      traversal(root.right)
    }
  }
  traversal(root)
  return res
}

console.log(preorderTraversal(root));