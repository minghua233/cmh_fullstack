function eq(a, b) {
  // +0, -0
  if (a === b) return a !== 0 || 1 / a === 1 / b
  // NaN
  if (a !== a) return b !== b
  // null
  if (a == null || b == null) return false
  
  let type = typeof (a)
  if (type !== 'function' && type !== 'object' && typeof (b) !== 'object') return false

  // 复杂的对象
  return deepEq(a, b)

}

let a = [1]
let b = [2]
console.log(eq(0, 0)); // true
console.log(eq(0, -0));


// +0 === -0
// (+0).toString() // '0'
// (-0).toString() // '0'