import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

  console.log(props);
  return (
    <div>
      <ul id="slide-out" class="sidenav sidenav-fixed ">
        <div className="user-view">
          <center>
            <ul>
              <li><a href="/#!" className='btn btn-floating deep-purple darken-1' id="buttonC"><h5>{props.profile.initials}</h5></a></li>
              <li><a href="/#"><span class="white-text email"><h6>{props.profile.email}</h6></span></a></li>
            </ul>
          </center>
        </div>
        <ul>
          <li><NavLink to='/create'><i className="material-icons black-text left">add</i><b>Add Product</b></NavLink></li>
          <li><NavLink to='/messages'><i className="material-icons black-text left">message</i><b>Messages</b></NavLink></li>
          <li><NavLink to='/sendMessage'><i className="material-icons black-text left">contact_mail</i><b>Contact costumer</b></NavLink></li>
          <li><NavLink to='/orders'><i className="material-icons black-text left">payment</i><b>Orders</b></NavLink></li>
          <li><NavLink to='/products'><i className="material-icons black-text left">local_grocery_store</i><b>Products</b></NavLink></li>
          <li><NavLink to='/addAdmin'><i className="material-icons black-text left">group_add</i><b>New Admin</b></NavLink></li>
          <li><a href="/#" onClick={props.signOut}><i className="material-icons black-text left">power_settings_new</i><b>Logout</b></a></li>
        </ul>
      </ul>


      <ul class="sidenav" id="mobile-demo">
        <div className="user-view">
          <center>
            <ul >
              <li><a href="/#!" className='btn btn-floating deep-purple darken-1' id="buttonC"><h5>{props.profile.initials}</h5></a></li>
              <li><a href="/#"><span class="white-text email"><h6>{props.profile.email}</h6></span></a></li>
            </ul>
          </center>
        </div>
        <ul>
          <li><NavLink to='/create'><i className="material-icons black-text left">add</i><h7>Add Product</h7></NavLink></li>
          <li><NavLink to='/messages'><i className="material-icons black-text left">message</i><h7>Messages</h7></NavLink></li>
          <li><NavLink to='/sendMessage'><i className="material-icons black-text left">contact_mail</i><h7>Contact costumer</h7></NavLink></li>
          <li><NavLink to='/orders'><i className="material-icons black-text left">payment</i><h7>Orders</h7></NavLink></li>
          <li><NavLink to='/products'><i className="material-icons black-text left">local_grocery_store</i><h7>Products</h7></NavLink></li>
          <li><NavLink to='/addAdmin'><i className="material-icons black-text left">group_add</i><h7>New Admin</h7></NavLink></li>
          <li><a href="/#" onClick={props.signOut}><i className="material-icons black-text left">power_settings_new</i><h7>Logout</h7></a></li>
        </ul>
      </ul>

    </div>







  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)