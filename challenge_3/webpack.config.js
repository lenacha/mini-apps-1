const path = require('path');
module.exports = {

  mode: "production",
  entry: "./client/app.jsx", 
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "app.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};