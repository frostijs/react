/* eslint-disable global-require */

const postcss = require('rollup-plugin-postcss');
const path = require('path');
const basePlugins = require('./plugins');

const buildDir = path.join(__dirname, '../../functions/.dist/');

const serverPlugins = [
  postcss({
    extract: false
  })
];

const plugins = serverPlugins.concat(basePlugins);

const config = {
  input: 'src/Express.js',
  output: {
    file: `${buildDir}ssr.js`,
    format: 'cjs',
    globals: {
      colors: 'colors'
    }
  },
  context: 'window',
  external: [
    'chokidar',
    'colors',
    'compression',
    'cors',
    'express',
    'spdy',
    'fs',
    'os',
    'path',
    'redirect-https',
    'react',
    'react-helmet',
    'react-dom/server',
    'prop-types',
    'react-router-dom'
  ],
  plugins
};

export default config;
