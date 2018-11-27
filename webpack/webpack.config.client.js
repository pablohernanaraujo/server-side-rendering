import webpackMerge from 'webpack-merge';

import commonConfig from './webpack.config.common';
import {
  context,
  devtool,
  entry,
  name,
  optimization,
  output,
  plugins,
  target
} from './configuration';

const type = 'client';

export default webpackMerge(commonConfig(type), {
  context: context(type),
  devtool: devtool(type),
  entry: entry(type),
  name: name(type),
  optimization: optimization(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
});
