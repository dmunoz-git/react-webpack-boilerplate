/* eslint-disable global-require */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack/webpack.base');

module.exports = (env, argv) => {
  const enviroment = argv.mode === 'production' ? 'prod' : 'dev';

  // eslint-disable-next-line import/no-dynamic-require
  const config = require(`./webpack/webpack.${enviroment}.js`);

  return merge(baseConfig, config);
};
