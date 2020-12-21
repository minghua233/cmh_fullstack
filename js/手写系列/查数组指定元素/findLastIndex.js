// index of

function findLastIndex(array, predicate, context) {
  let length = array.length                                                                                      
  for (let i = length - 1; i >= 0; i--) {
    if (predicate.call(context, array[i], i, array)) return i
  }
  return -1
}