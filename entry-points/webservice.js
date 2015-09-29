var Main = require('../lib/make-me-sync-buddy');
var fs = require('../lib/gen-fs');
var WS = require('../lib/ws');


Main(function*() {
  var result = yield WS('latest');
  yield fs.write('./result.json', result);

  console.log('Finished: file created result.json');
});
