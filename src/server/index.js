import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import webpackConfig from '../../webpack.config';
import api from './api';
const isDevelopment = process.env.NODE_ENV !== 'production';
const isAnalyzer = process.env.ANALYZER === 'true';

const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.NODE_PORT || 3000;

if (!isDevelopment) {
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');

    next();
  });
}

app.use(express.static(path.join(__dirname, '../../public')));
app.use('/api', api);

if (isDevelopment) {
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
}

if (!isDevelopment) {
  try {
    const serverRender = require('../../dist/server.js').default;

    app.use(serverRender());
  } catch (e) {
    throw e;
  }
}

app.use(webpackHotServerMiddleware(compiler));

app.listen(port, err => {
  if (!err && !isAnalyzer) {
    open(`http://localhost:${port}`);
  }
});
