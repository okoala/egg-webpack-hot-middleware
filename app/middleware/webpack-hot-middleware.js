'use strict';

const webpack = require('webpack')
const webpackMiddleware = require('../../lib/webpack-middleware')

module.exports = function(options, app) {
  // 获取配置文件路径
  const configPath = options.config

  // 读取配置文件
  const webpackConfig = require(configPath)
  const compiler = webpack(webpackConfig)
  // 构造中间件generator
  return webpackMiddleware(compiler)
}
