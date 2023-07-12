const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js', // Entry point
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'main.js', // Output file name
    publicPath: '/'
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel to transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use preset-env for maximum browser compatibility
          },
        },
      },
      {
        test: /\.css$/, // Use css-loader and style-loader for CSS files
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ // Generate an HTML file from the template
      template: './src/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    //contentBase: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
    static: ["./public"],
    compress: true,
    port: 9000,
    open: true, //Opens the browser when starting the server.
    hot: true, //Hot reloads the server without a page refresh.
    liveReload: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js','.jsx','.json']
  },
  performance: {
    hints: false
  },
};
