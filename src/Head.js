import React from 'react';
import { Helmet } from 'react-helmet';
import config from '@config/app';
import pkg from '../package.json';

class Head extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="React Boilerplate" />

        <title>{config.appName}</title>

        <meta name="theme-color" content="#e3c9de" />
        <link rel="manifest" href="/icons/manifest.json" />
        <link rel="preload" as="script" href="/app.js" />
        <link rel="preload" as="style" href="/app.css" />

        <script
          crossOrigin
          src={`//cdn.jsdelivr.net/combine/npm/react@${
            pkg.dependencies.react
          }/umd/react.production.min.js,npm/react-dom@${
            pkg.dependencies['react-dom']
          }/umd/react-dom.production.min.js`}
        />

        <link rel="stylesheet" href="/app.css" />
        <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" />
      </Helmet>
    );
  }
}

export default Head;
