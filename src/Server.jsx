import React from 'react';
import PropTypes from 'prop-types';
import { StaticRouter, Route, Switch } from 'react-router-dom';
import Head from './Head';
import Routes from './Routes';

class App extends React.Component {
  render() {
    const { url, context } = this.props;

    return (
      <StaticRouter location={url} context={context}>
        <Head />
        <Switch>
          {Routes.map(route => (
            <Route {...route} key={route.name} />
          ))}
        </Switch>
      </StaticRouter>
    );
  }
}

App.propTypes = {
  url: PropTypes.string.isRequired,
  context: PropTypes.object.isRequired
};

export default App;
