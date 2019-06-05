/* eslint-disable global-require */
import fs from 'fs';
import os from 'os';
import path from 'path';
import rimraf from 'rimraf';
import 'colors';

// ROLLUP
import browsersync from 'rollup-plugin-browsersync';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';

import CONFIG from '../app';
import generateIcons from '../../lib/util/favicon';
import generateSW from '../../lib/util/sw-generator';
import pkg from '../../package.json';

const basePlugins = require('./plugins');

const ROOT = path.join(__dirname, '../../');
const DIR_CERT = path.join(os.homedir(), '.nodecert');
const DIR_OUTPUT = `${ROOT}/.dist/`;

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const PORT = process.env.PORT || 1981;

const clientPlugins = [
  {
    // Clean dist folder before creating a new build
    name: 'diskCleaner',
    generateBundle() {
      if (IS_PROD && fs.existsSync(DIR_OUTPUT)) {
        console.log(CONFIG.appShortName.blue + ': '.blue + `cleaning path: ${DIR_OUTPUT}`.white); // eslint-disable-line
        rimraf.sync(DIR_OUTPUT);
        generateIcons();
        generateSW(pkg);
      }
    }
  },
  resolve({
    browser: true
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(ENV)
  }),
  postcss({
    config: false,
    extract: true,
    loaders: ['sass', 'stylus', 'less'],
    plugins: [
      require('@csstools/postcss-sass')(),
      require('postcss-mixins'),
      require('postcss-pxtorem'),
      require('postcss-easy-import'),
      require('postcss-hexrgba'),
      require('postcss-preset-env')({
        autoprefixer: {
          flexbox: 'no-2009'
        },
        stage: 3,
        features: {
          'nesting-rules': true
        }
      })
    ]
  })
];

const plugins = clientPlugins.concat(basePlugins);

// DEV ONLY PLUGINS
if (ENV === 'development') {
  plugins.push(
    browsersync({
      open: false,
      files: ['src/**/*', 'config/**/*'],
      https: {
        key: path.join(DIR_CERT, 'localhost-key.pem'),
        cert: path.join(DIR_CERT, 'localhost.pem')
      },
      proxy: `https://localhost:${PORT}`
    })
  );
}

const config = {
  input: 'src/Client.jsx',
  output: {
    file: `${DIR_OUTPUT}app.js`,
    format: 'iife',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    },
    sourcemap: true
  },
  external: ['react', 'react-dom'],
  context: 'window',
  plugins
};

export default config;
