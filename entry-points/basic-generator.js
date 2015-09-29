
function* greetings(name) {
  console.log('3. welcome', name);
  return;
}

console.log('1. creating the generator');
var gen = greetings('thiago');
console.log('2. calling the generator');
var res = gen.next();

if (res.done)
  console.log('4. generator done');
