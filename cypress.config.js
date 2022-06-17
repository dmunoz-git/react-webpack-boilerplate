const { webpackConfig } = require("./webpack.config");

module.exports = {
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: webpackConfig,
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
