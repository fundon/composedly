'use strict';

/**
 *  Module dependencies.
 */

var compose = require('composition');
var set = require('function-name');

/**
 *  slice() reference.
 */

var slice = Array.prototype.slice;

/**
 *  Expose `composedly`.
 */

module.exports = composedly;

/**
 *  Composedly
 *
 *  @param {String} name
 *  @param {GeneratorFunction} fn...
 *  @return {GeneratorFunction}
 */

function composedly() {
  var args = slice.call(arguments);
  var fn = compose(args.slice(1));
  set(fn, args[0]);
  return fn;
}
