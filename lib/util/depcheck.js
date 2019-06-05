/* eslint-disable no-console */
require('colors');
const depcheck = require('depcheck');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '../../');

const options = {
  ignoreBinPackage: false,
  skipMissing: false,
  ignoreDirs: ['.dist'],
  ignoreMatches: [
    // custom mapping
    '@config/*',
    '@containers/*',
    '@components/*',
    '@src/*',
    // build tools
    '@babel/*',
    'babel-*',
    'eslint-*',
    // node-modules
    '@ind.ie/nodecert',
    'husky',
    'identity-obj-proxy',
    'jest',
    'npm-run-all',
    'prettier',
    'pretty-quick'
  ],
  specials: [
    // the target special parsers
    depcheck.special.babel,
    depcheck.special.eslint
  ]
};

depcheck(ROOT_DIR, options, (unused) => {
  let errors = false;

  if (unused.missing.length > 0) {
    console.log('\n');
    console.log('--------------------'.red);
    console.log('Missing Dependencies'.red);
    console.log('--------------------'.red);
    unused.missing.map((dependency) => {
      console.log(`* ${dependency}`.red);
    });
    errors = true;
  }

  if (unused.dependencies.length > 0) {
    console.log('\n');
    console.log('-------------------'.yellow);
    console.log('Unused Dependencies'.yellow);
    console.log('-------------------'.yellow);
    unused.dependencies.map((dependency) => {
      console.log(`* ${dependency}`.yellow);
    });
    errors = true;
  }

  if (unused.devDependencies.length > 0) {
    console.log('\n');
    console.log('-----------------------'.blue);
    console.log('Unused Dev Dependencies'.blue);
    console.log('-----------------------'.blue);
    unused.devDependencies.map((dependency) => {
      console.log(`* ${dependency}`.blue);
    });
    errors = true;
  }

  process.on('SIGTERM', () => {
    console.log('Doh!');
  });

  if (!errors) {
    console.log('----------------------------'.green);
    console.log('All your packages look okay!'.green);
    console.log('----------------------------'.green);
  } else {
    console.error('There was an uncaught error');
    process.exit(1); // mandatory (as per the Node docs)
  }

  console.log('\n');
});
