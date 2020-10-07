import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value

    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var email = this.state.email;
    var admins = [];
    for (var key in this.props.admins) {
      admins.push(this.props.admins[key]);
    }
    {admins && admins.map(admin => {
      if (admin.email === email) {
        this.props.signIn(this.state);
      }
      return null;
    })
  }
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="row">
        <div className="col s12 m12 l12 ">
          <div className="container">
            <form onSubmit={this.handleSubmit} className="white">
              <center>
              <h5 className="grey-text text-darken-3">Sign In</h5>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn deep-purple darken-1 z-depth-0">Login</button>
                <div className="red-text center">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
              </center>
            </form>
            </div>
            </div>
          </div>
          )
        }
      }
const mapStateToProps = (state) => {
  return {
            authError: state.auth.authError,
          auth: state.firebase.auth,
          admins: state.firestore.data.admins
        }
      
      }
const mapDispatchToProps = (dispatch) => {
  return {
            signIn: (creds) => dispatch(signIn(creds))
        }
      }
      
      export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        firestoreConnect([
    {collection: 'admins'}
        ])
)(SignIn);