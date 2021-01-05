// 给定一个整数数组nums 和一个目标值 target 
// 找出和为target的两个整数，并返回他们的下标

let nums = [2, 7, 11, 15]
let target = 9
// [0, 1]

// const twoSum = function (nums, target) {
//   let i,
//     j = 0,
//     len = nums.length;
//   for (i = 0; i < len; i++) {
//     for (j = j + i; j < len; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// };

// Map
// const twoSum = function (nums, target) {
//   const diffs = {}
//   const len = nums.length
//   for (let i = 0; i < len; i++) {
//     if (diffs[target - nums[i]] !== undefined) {
//       return [diffs[target - nums[i]], i]
//     }
//     diffs[nums[i]] = i
//   }
// }

// 双指针法
