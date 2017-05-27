import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  setActiveLink() {}

  render() {
    const { links } = this.props;
    return (
      <nav>
        <ul className="nav">
          {links.map((link, i) => {
            return <li key={i}>{link}</li>;
          })}
        </ul>
      </nav>
    );
  }
}

export default Nav;
