module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: 'public',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap' // CSS -> Style (Right to Left)
      }
    ]
  }
};
