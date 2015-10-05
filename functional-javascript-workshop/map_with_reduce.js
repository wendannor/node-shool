function arrayMap(arr, fn) {
  return arr.reduce(function (previous, current, idx) {
    previous.push(fn(current));
    return previous;
  }, []);
}

module.exports = arrayMap;
