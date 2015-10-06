function spies(target, method) {
  var res = {
    count: 0
  }
  var originMethod = target[method];
  target[method] = function() {
      res.count++;
      return originMethod.apply(this, arguments);
  };

  return res;
};

module.exports = spies;
