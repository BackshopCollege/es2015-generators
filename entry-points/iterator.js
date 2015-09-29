
function* iterator() {
  var i = 0;
  var stop = false;

  while (!stop) {
   stop = yield i;
   i++;
  }
}

var iter = iterator();
var i = iter.next();

while (!i.done) {
  console.log(i.value);
  i = iter.next(i.value === 10);
}

console.log('\nUsing FOR OF loop statement\n');

function *generator() {
  for (var i = 0 ; i < 10; i++) yield i;
}

for (var v of generator()) {
  console.log(v);
}
