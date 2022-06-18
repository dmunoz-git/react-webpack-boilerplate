const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  
  output: {
    filename: "[name].[contenthash].js",
  },

  optimization: {
    moduleIds: "deterministic",
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  plugins: [new MiniCssExtractPlugin()],
};
