'use strict';

const webpackHotMiddleware = require('webpack-hot-middleware')

module.exports = function(compiler, option) {
  var action = webpackHotMiddleware(compiler, option);
  return function*(next) {
      var nextStep = yield middleware(action, this.req, this.res);
      if (nextStep && next) {
          yield* next;
      }
  };
}
