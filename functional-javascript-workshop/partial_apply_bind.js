function myLogger(namespace) {
  return console.log.bind(undefined, namespace);
}

module.exports = myLogger;
