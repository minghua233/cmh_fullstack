//爬楼梯

// 记忆化搜索（优化后的递归） 自顶向下
const f = []
const climbStairs = function (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  // 递归计算
  if (f[n] === undefined) f[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return f[n]
}

// 动态规划 自顶向上
