function countWords(inputWords) {
  return inputWords.reduce(function (origin, current) {
     origin[current] = origin[current] + 1  || 1;
     return origin;
  }, {});
}

module.exports = countWords;
