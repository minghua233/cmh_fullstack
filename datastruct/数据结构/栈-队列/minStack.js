/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.stack2.length == 0 || this.stack2[this.stack2.length - 1] >= x) {
    this.stack2.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // 如果出栈的最小值和当前最小值相等，那么辅助栈也要出栈
  if (this.stack.pop() == this.stack2[this.stack2.length - 1]) {
    this.stack2.pop()
  }
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (!this.stack || !this.stack.length) return
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  // let minValue = Infinity
  // const { stack } = this
  // for (let i = 0; i < stack.length; i++) {
  //   if (stack[i] < minValue) minValue = stack[i]
  // }
  // return minValue
  return this.stack2[this.stack2.length - 1]
};

// 栈底到栈顶呈递减趋势的栈


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */