import React from 'react';

class Navbar extends React.Component {
  render() {
    return(
        <div className="tabs">
            <a className="tab" href="#save_the_date">
            <span href="" className="navbar-wagon-item navbar-wagon-link">Save The Date!</span>
          </a>
          <a className="tab" href="/">
            <span href="" className="navbar-wagon-item navbar-wagon-link">##More to come##</span>
          </a>
        </div>
    )
  }
}

export default Navbar;
