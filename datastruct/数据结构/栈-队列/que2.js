// 双端队列 就是允许在队列两端进行插入和删除的队列

// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

//  

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7


var maxSlidingWindow2 = function(nums, k) {
  const len = nums.length
  const res = []
  // 初始化双端队列
  const deque = []
  for (let i = 0; i < len; i++) {
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    // 当对头的元素索引已经出现在滑动窗口之外
    while (deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }
  return res
}