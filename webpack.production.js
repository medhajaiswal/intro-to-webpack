const path = require('path');
const DistCleaner = require('clean-webpack-plugin');

module.exports = ({ mode }) => {
  return {
    context: path.resolve(__dirname),
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'main.bundle.js',
    },
    mode,
    plugins: [new DistCleaner()],
  };
};
