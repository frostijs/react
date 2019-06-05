/* eslint-disable global-require */
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const { eslint } = require('rollup-plugin-eslint');
const json = require('rollup-plugin-json');
const minify = require('rollup-plugin-babel-minify');

const ENV = process.env.NODE_ENV || 'development';

const plugins = [
  eslint({
    exclude: ['**/*.css', '**/*.json', '**/*.scss', '**/*.styl']
  }),
  babel({
    exclude: 'node_modules/**'
  }),
  json({
    compact: true,
    extensions: ['.json'],
    preferConst: false
  }),
  commonjs({
    include: ['node_modules/**'],
    extensions: ['.js', '.jsx'],
    namedExports: {
      'node_modules/react/index.js': [
        'Children',
        'Component',
        'PropTypes',
        'createElement',
        'Fragment'
      ],
      'node_modules/react-router-dom/index.js': ['BrowserRouter', 'HashRouter', 'Link', 'NavLink'],
      'node_modules/react-dom/index.js': ['render'],
      'node_modules/react-is/index.js': ['isValidElementType']
    }
  })
];

// PROD ONLY PLUGINS
if (ENV === 'production') {
  plugins.push(minify());
}

module.exports = plugins;
