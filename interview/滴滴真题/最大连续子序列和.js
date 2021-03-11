// 求数组中最大连续（升序）子序列
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

// 1. 元素下标是连续的
// 2. 只需要求和，不需要返回元素的位置
// 3. 元素都是整数，可能为正数或负数
// 4. 子数组最小的长度为1

// 状态转移方程：sum[i] = max{sum[i-1]+a[i],a[i]}   
// 其中(sum[i]记录以a[i]为子序列末端的最大序子列连续和)

var maxSubArray = function (nums) {
  let max_end = nums[0]
  let res = nums[0]
  if (!nums.length) return
  for (let i = 1; i < nums.length; i++) {
    max_end = Math.max(nums[i - 1] + nums[i], nums[i])
    res = Math.max(max_end, res)
  }
  return res
};