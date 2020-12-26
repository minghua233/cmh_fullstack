function Archiver() {
  let value = null
  let arr = []
  Object.defineProperty(this, 'num', {
    get: function () {
      console.log('执行get操作');
      return value
    },
    set: function (newValue) {
      console.log('执行set操作');
      value = newValue
      arr.push({ val: newValue })
    }
  })
  this.getArchiver = function () {
    return arr
  }
}

let arc = new Archiver()
arc.num //get
arc.num = 11 // set
arc.num = 22 // set
console.log(arc.getArchiver());
