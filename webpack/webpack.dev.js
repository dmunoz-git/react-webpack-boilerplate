module.exports = {
  mode: "development",
  output: {
    filename: "[name].js",
  },

  devServer: {
    open: false,
    port: 3000,
    hot: true,
    host: "localhost",
  },
};
