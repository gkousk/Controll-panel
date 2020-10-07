import React, { Component } from 'react';
import { connect } from 'react-redux'
import M from 'materialize-css';

class Navbar extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (

      <div className="navbar-fixed">

        <nav className="nav-extended white" id="navbar">

          <div className="nav-wrapper " id="2">
            <a href="/#" className="brand-logo purple-text" id="logo">Gkousk Shop</a>
            <a href="/#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons grey-text">menu</i></a>

          </div>

        </nav>

      </div>


    )
  }
}

const mapStateProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateProps)(Navbar);