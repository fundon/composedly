var composedly = require('./');
var assert = require('assert');
var co = require('co');

describe('composedly', function () {
    it('should add return "composedly"', function (done) {
      function* bar(next) {
        yield* next
      }
      function* foo() {
        return this
      }

      var fn = composedly('composedly', bar, foo);

      co(function* () {
        yield* fn.call(true);
        fn.name.should.eql('composedly')
      })(done);
    });
});

