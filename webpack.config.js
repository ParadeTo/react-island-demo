module.exports = {
  mode: 'development',
  entry: {
    client: './client.entry.js',
    clientIsland: './client.island.entry.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
}
