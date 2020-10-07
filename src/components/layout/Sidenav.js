import React, { Component } from 'react';
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import { connect } from 'react-redux'
import M from 'materialize-css';

class Sidenav extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { auth } = this.props;
    const { profile } = this.props;
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />


    return (
      <div>
      {links}
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
export default connect(mapStateProps)(Sidenav);