function curry(fn) {
  function _c(restNum, argsList) {
    return restNum === 0 ?
      fn.apply(null, argsList) :
      function (x) {
        return _c(restNum - 1, argsList.concat(x));
      };
  }
  return _c(fn.length, []); // 递归开始
}

