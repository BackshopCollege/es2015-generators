var Main = require('./lib/make-me-sync-buddy');
var fs = require('./lib/gen-fs');

Main(function*() {
  var result;
  try { 
    result = yield fs.read('./invalid_file_name');
  }catch(error) {
    console.error('Ops Error Handling ....... Let\'s see the error\n');
    console.error(error);
    return;
  }

  console.log(result);
});
