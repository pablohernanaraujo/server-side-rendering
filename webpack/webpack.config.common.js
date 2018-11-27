import { rules, extensions, mode, modules } from './configuration';

export default type => ({
  mode: mode,
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  }
});
