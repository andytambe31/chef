import * as path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'development', // Add mode: 'development' or 'production'
  entry: './src/main.tsx', // Entry file for Webpack
  output: {
    filename: 'bundle.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Ensure the output folder is cleaned before each build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve these file extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match TypeScript and TSX files
        exclude: /node_modules/, // Exclude node_modules folder
        use: 'ts-loader', // Use Babel loader
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
};

export default config;
