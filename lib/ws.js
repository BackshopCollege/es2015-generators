var Wreck = require('wreck');
const endpoint = 'http://db.shortener.xyz';

module.exports = ws;

function ws(path) {
  return function(done) {
    var url = [endpoint, path].join('/');

    Wreck.get(url, function(err, res, body) {
        done(err, body);
    });
  };
}
