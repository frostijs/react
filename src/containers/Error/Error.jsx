import React from 'react';

import './Error.scss';

class Test extends React.Component {
  render() {
    return (
      <section className="container error">
        <h1>Oh noes</h1>
        <h2>The page you requested could not be found</h2>
      </section>
    );
  }
}

export default Test;
