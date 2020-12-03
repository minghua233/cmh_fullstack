// 完成树的遍历
// root 代表 当前遍历到的节点
var invertTree = function (root) {
  if (!root) return root;
  [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
}