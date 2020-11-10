function instance_of(L, R) {
  L = L.__proto__
  let O = R.prototype
  while (true) {
    if (L === null) return false
    if (L === O) return true
    L = L.__proto__ // Array.prototype.__proto__ == Object
  }
}