import React from 'react';

import Menu from '@components/Menu/Menu';

class Test extends React.Component {
  render() {
    return (
      <section className="container with-menu">
        <Menu />
        <section className="content">
          <h1>Test Page</h1>
        </section>
      </section>
    );
  }
}

export default Test;
