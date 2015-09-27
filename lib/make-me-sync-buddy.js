
module.exports = function syncify(generator) {
  var gen = generator();

  function async(err, response) {
    if (err)
      return gen.throw(err);

    var ret = gen.next(response);

    if (ret.done) return;

    if (typeof ret.value !== 'function')
      gen.throw(Error('Invalid type, must be a function buddy'));

    ret.value(async);
  }

  async();
};

