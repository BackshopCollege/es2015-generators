var Main = require('./lib/make-me-sync-buddy');
var fs = require('./lib/gen-fs');

Main(function*() {
  var result = yield fs.read('./read-file.js');
  console.log(result);
});
