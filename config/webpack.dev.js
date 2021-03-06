const path = require("path");

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: "production",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  module:{
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },{
        test: /\.html$/,
        use:[
          {
            loader: "file-loader",
            options: {
              name: "[name].html"
            }
          },{
            loader: "extract-loader"
          },{
            loader: "html-loader",
            options:{
              attrs:["img:src"]
            }
          }
        ]
      },{
        test: /\.(jpg|gif|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};
