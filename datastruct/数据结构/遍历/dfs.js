function preorder(root){
  if(!root) return
  console.log('当前遍历的节点值是：',root.val);
  // 递归遍历左子树
  preorder(root.left)
  // 递归遍历右子树
  preorder(root.right)
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

preorder(root)