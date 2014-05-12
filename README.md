# composedly [![Build Status](https://travis-ci.org/fundon/composedly.svg)](https://travis-ci.org/fundon/composedly)

Create compositions of middleware and named it.
> Note: When you create compositions of middleware using [koa-compose](https://github.com/koajs/compose)   
or [composition](https://github.com/cojs/composition), it just returns an anonymous `GeneratorFunction`.    
And if you want to enable `DEBUG` model in Koa, nothing is displayed.


### Usage

```js
var compose = require('composedly')

function* bar(next) {
  yield* next
}
function* foo() {
  return this
}

var fn = compose('composedly', bar, foo);

co(function* () {
  yield* fn.call(true);
})();
```


### Dependencies

* [composition](https://github.com/cojs/composition) - Create compositions of middleware.
* [function-name](https://github.com/TooTallNate/node-function-name) - Set the "name" property of Function objects.



### License

MIT
