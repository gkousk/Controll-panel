import React, { Component } from 'react'
import { SendMessage } from '../../store/actions/productActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class sendMessage extends Component {
  state = {
    content: '',
    author: '',
    reciever: '',
    time: ''
  }
  handleChange = (e) => {

    this.setState({
      [e.target.id]: e.target.value,
      author: "admin",
      time: new Date()
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.SendMessage(this.state);
  }
  render() {
    const { auth,sendMessage } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
      <div className="row">
          <div className="col s12 m12 l10 offset-l2 ">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Contact Costumer</h5>
          <div className="input-field">
            <label htmlFor="reciever">Costumer</label>
            <input type="text" id="reciever" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Message</label>
            <input type="text" id="content" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn deep-purple darken-1 z-depth-0">Contact</button>
          </div>
          <div className="green-text center">
                {sendMessage ?<p>{sendMessage}</p> : null}
          </div>
        </form>
        </div>
        </div>
      </div>
    )
  }
}
const mapStateToPorps = (state) => {
  return {
    auth: state.firebase.auth,
    sendMessage:state.product.sendMessage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    SendMessage: (state) => dispatch(SendMessage(state))
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(sendMessage)

