import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default type => {
  const optimize = {};

  if (!isDevelopment) {
    optimize.minimizer = [
      new UglifyJsPlugin({
        cache: true
      })
    ];
  }

  if (type === 'client' && !isDevelopment) {
    optimize.splitChunks = {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    };
  }

  return optimize;
};
