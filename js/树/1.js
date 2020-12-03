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

function walk(root) {
  let arr = []

  function preOrder(root) {
    if (!root) return
    arr.push(root.val)
    preOrder(root.left)
    preOrder(root.right)
    // console.log(root.val);
  }
  preOrder(root)
  return arr
}