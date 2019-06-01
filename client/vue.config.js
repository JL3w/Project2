

module.exports = {
    devServer: {
      proxy: 'http://localhost:3001'
    }
};
const webpack = require("webpack");

module.exports = {
  devServer: {
    port: 8080,
    proxy: "http://localhost:3001"
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery"
      })
    ]
  }
};