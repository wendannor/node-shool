function reduce(arr, fn, initial) {

  function reduceOnce(idx, value) {
    if (idx + 1 > arr.length) return value;
    return reduceOnce(idx + 1, fn(value, arr[idx], idx, arr));
  }
  return reduceOnce(0, initial);

}

module.exports = reduce
