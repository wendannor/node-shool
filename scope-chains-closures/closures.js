function foo() {
  var bar;
  quux = 24;
  function zip() {
    var quux = 42;
    bar = true;
  }
  return zip;
}
