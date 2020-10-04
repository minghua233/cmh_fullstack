// 两个指针，一个start指向0，一个end指向length-1；

// 循环，start小于end的时候，如果start这个index的元素是 0 ，则将这个元素删掉，尾巴上push进一个 0 ，end左移（end--）；

// 如果start这个index的元素不是 0，start++，继续判断……

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const max = nums.length;  
    let start = 0;
    let end = max - 1; 
    while (start < end) {
      const item = nums[start];
      if (item === 0) {
        nums.splice(start, 1);
        nums.push(0);
        end--;
        continue;
      }
      start++;
    } 
    return nums;
};