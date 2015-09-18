function repeat(fct, num) {
  for(var i = 0; i < num; i++) {
    fct();
  }
}

module.exports = repeat;
