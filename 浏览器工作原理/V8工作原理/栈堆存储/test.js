let jack = {
  name: 'jack.ma',
  age: 40,
  like: {
    dog: {
      color: 'black',
      age: 3
    },
    cat: {
      color: 'white',
      age: 2
    }
  }
}

function copy(src) {
  let dest = src instanceof Array ? [] : {};
  for (let key in src) {
    if (src.hasOwnProperty(key)) typeof src[key] == 'object' ? dest[key] = copy(src[key]) : dest[key] = src[key]
  }
  return dest
}

let jack2 = copy(jack)
jack2.like.dog.color = 'green'
console.log(jack.like.dog.color); // black