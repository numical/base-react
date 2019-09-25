const { HotModuleReplacementPlugin } = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/App.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "app.js"
  },
  devServer: {
    hot: true,
    open: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new CopyPlugin([{ from: "static", to: "." }])
  ]
};
