import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.scss';

class Home extends React.Component {
  render() {
    return (
      <section className="menu-primary">
        <Link to="/" className="menu-item">
          Home
        </Link>
        <Link to="/test" className="menu-item">
          Test Page
        </Link>
      </section>
    );
  }
}

export default Home;
