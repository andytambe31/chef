import * as path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'production', // Set mode to 'production'
  entry: './src/main.tsx', // Entry file for Webpack
  output: {
    filename: '[name].[contenthash].js', // Use content hashes for cache busting
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
        use: 'ts-loader', // Use TypeScript loader
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
      minify: {
        collapseWhitespace: true, // Minify HTML by removing whitespace
        removeComments: true, // Remove comments
        removeRedundantAttributes: true, // Remove redundant attributes
        useShortDoctype: true, // Use short doctype
      },
    }),
  ],
  devtool: false, // Disable source maps for production (optional)
  optimization: {
    splitChunks: {
      chunks: 'all', // Code splitting for better performance
    },
    runtimeChunk: 'single', // Separate runtime chunk for optimization
    minimize: true, // Enable minification
  },
};

export default config;
