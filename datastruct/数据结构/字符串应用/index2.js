var WordDictionary = function () {
  this.words = {}
};

WordDictionary.prototype.addWord = function (word) {
  if (this.words[word.length]) {
    this.words[word.length].push(word)
  } else {
    this.words[word.length] = [word]
  }
};

WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false
  }
  const len = word.length

  // 普通字符串，则直接从等长单词集合中查找即可
  if (!word.includes('.')) {
    return this.words[len].includes(word)
  }

  // 否则是正则表达式，要先创建正则表达式对象
  const reg = new RegExp(word)

  // 对等长单词集合进行遍历，只要存在正则匹配即可
  return this.words[len].some((item) => {
    return reg.test(item)
  })
};
