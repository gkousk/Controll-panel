import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
class AddAdmin extends Component {
  state={
    email:'',
    password:'',
    firstName:'',
    lastName:''
  }
  handleChange=(e)=>{
    this.setState({
        [e.target.id]:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.signUp(this.state)
  }
  render() {
    const {authError}=this.props;
    return (
      <div className="container">
      <div className="row">
          <div className="col s12 m12 l10 offset-l2 ">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">New Admin</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>   
            <div className="input-field">
                <label htmlFor="firstName">Firstname</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>  
            <div className="input-field">
                <label htmlFor="lastName">Lastname</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>  

            <div className="input-field">
                <button className="btn deep-purple darken-1 z-depth-0">Add admin</button>
            </div>   
            <div className="red-text center">
                  {authError ?<p>{authError}</p> : null}
            </div>
       </form>
       </div>
       </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    auth:state.firebase.auth,
    authError:state.auth.authError
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    signUp:(newUser)=>dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddAdmin)