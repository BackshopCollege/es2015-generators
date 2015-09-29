var Main = require('../lib/make-me-sync-buddy');
var fs = require('../lib/gen-fs');
var path = require('path');

var me = path.resolve(__dirname, __filename);

Main(function*() {
  var result = yield fs.read(me);
  console.log(result);
});
