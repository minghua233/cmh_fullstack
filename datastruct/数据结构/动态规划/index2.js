//给定不同面额的硬币和一个总金额，编写一个函数来计算可以凑成总金额所需的最小硬币个数，
// 如果没有任何一种硬币组合能完成，返回-1

// f(x) = Math.min(f(36 - c1) + 1, f(36 - c2) + 1, f(36 - c3) + 1, ..., f(36 - cn) + 1)
// f(0) = 0

// coins = [1, 2, 5], amount = 11 
const coinChange = function (coins, amount) {
  // 用于保存每个目标总额对应的最小硬币个数
  const f = [];
  // 已知
  f[0] = 0;
  for (let i = 1; i <= amount; i++) {
    f[i] = Infinity;
    // 遍历每个可用的硬币面额
    for (let j = 0; j < coins.length; j++) {
      // 目标总额大于硬币面额
      if (i - coins[j] >= 0) {
        console.log('总面额' + i);
        console.log('硬币面额' + coins[j]);    
        f[i] = Math.min(f[i], f[i - coins[j]] + 1);
        console.log('最少硬币数量'+f[i]);
      }
    }
  }

  if (f[amount] === Infinity) {
    return -1;
  }

  return f[amount];
};

console.log(coinChange([1, 2, 5], 11));