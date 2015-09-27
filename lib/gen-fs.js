var fs = require('fs');

exports.read = read;
exports.write = write;

function read(filename) {
  return function(done) { fs.readFile(filename, 'utf8',  done); };
}

function write(filename, content) {
  return function(done) { fs.writeFile(filename, content, done); };
}

