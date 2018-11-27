import pkg from '../../package.json';

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              'env', {
                modules: false,
                node: pkg.engines.node,
                browsers: pkg.browserslist
              }
            ]
          ]
        }
      },
      exclude: /node_modules/
    }
  ];

  return rules;
};
