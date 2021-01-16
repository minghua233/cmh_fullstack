// parseInt map

console.log(['1', '2', '3'].map(parseInt)); //[ 1, NaN, NaN ]

// map => item, index, arr
parseInt('1', 0)  // 1
parseInt('2', 1)  // NaN  1 非法
parseInt('3', 2)  // NaN  '3' 非法