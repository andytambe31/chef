import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), 
    clean: true, 
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match TypeScript and TSX files
        exclude: /node_modules/, // Exclude node_modules folder
        use: 'ts-loader', // Use ts-loader
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader'], // Add support for CSS
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Match image files
        type: 'asset/resource', // Use Webpack's asset modules for images
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Path to your HTML template
    }),
  ],
  devtool: 'source-map', // Add source maps for easier debugging
  devServer: {
    static: './dist',
  },
};

export default config;
