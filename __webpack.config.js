const path = require("path"); 

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify"),
      "fs": require.resolve("browserfs/dist/node/index"),
      "buffer": require.resolve("buffer") 
    }
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
