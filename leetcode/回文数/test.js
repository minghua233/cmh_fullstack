/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var arr = x.toString().split('')
    if (arr[0] == '-') {
        return false
    }
    if (arr.reverse().join('') == x) {
        return true
    }
    return false    
};



