const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'renderer/'),
  target: ['electron-renderer', 'web'],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: './bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modules: [path.join(__dirname, ''), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './renderer/index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    onAfterSetupMiddleware: () => {
      spawn('electronmon', ['.'], {
        shell: true,
        env: {
          ...process.env,
          ELECTRON_DISABLE_SECURITY_WARNINGS: 'true',
        },
        stdio: 'inherit',
      })
      .on('close', () => process.exit(0))
      .on('error', (spawnError) => console.error(spawnError))
    },
  },
};
