import React from 'react';

import Menu from '@components/Menu/Menu';

class Home extends React.Component {
  render() {
    return (
      <section className="container with-menu">
        <Menu />
        <section className="content">
          <h1>Hello world</h1>
        </section>
      </section>
    );
  }
}

export default Home;
