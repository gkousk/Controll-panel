import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import moment from 'moment';
import { createOrder } from '../../store/actions/orderActions'

class OrderDetails extends Component {
  state = {
    id: this.props.match.params.id
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createOrder(this.state.id);
  }
  render() {
    const id = this.props.match.params.id;
    const { auth, order, orderDetails, productList } = this.props;
    var products = [];
    var productArray = [];
    var quantities = [];
    var total = 0;
    console.log(productList);
    if (!auth.uid) return <Redirect to='/signin' />
    if (order) {
      products = order.products;
      quantities = order.quantities;
      for (var i = 0; i < products.length; i++) {
        for (var key in productList) {
          if (key === products[i]) {
            var prod = { name: productList[key].name, price: productList[key].price, id: key, quantity: quantities[i] }
            productArray.push(prod);
            var overal = prod.price * prod.quantity;
            total += overal;
          }
        }
      }
      return (
        <div className="container sectionn project-details">
          <div className="row">
            <div className="col s12 m12 l10 offset-l2 ">
              <div className="card z-depth-0">
                <div className="card-content">
                  <center>
                    <span className="card-title"> {id}</span>
                    <p>Email: {order.email}</p>
                    <p>First Name: {order.fname}</p>
                    <p>Last Name: {order.lname}</p>
                    <p>Address: {order.address}</p>
                    <p>City: {order.city}</p>
                    <p>Courier: {order.courier}</p>
                    <p>Phone Number: {order.number}</p>
                    <p>Zip Code: {order.zipcode}</p>
                    <p>Order Progress: {order.progress} </p>
                  </center>
                  <div className="row">
                    <div className="col s12">
                      <p id="products" className="text-align center">Products</p>
                      <center>
                        <table>
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>ProductName</th>
                              <th>Quantity</th>
                              <th>Price</th>
                            </tr>
                          </thead>
                          {productArray && productArray.map(item => {
                            var prc = item.quantity * item.price;
                            return (
                              <tbody>
                                <tr className="grey-text">
                                  <th>{item.id}</th>
                                  <th>{item.name}</th>
                                  <th>{item.quantity}</th>
                                  <th>{prc} €</th>
                                </tr>
                              </tbody>
                            )
                          })}
                          <tfoot id="end">
                            <tr>
                              <th></th>
                              <th>Total Price:</th>
                              <th id="tp">{total} €</th>
                              <th></th>
                            </tr>
                          </tfoot>
                        </table>
                      </center>
                    </div>
                  </div>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                  <div className="row">
                    <div className="col s6">
                      <p className="grey-text">Time: {moment(order.time.toDate().toString()).calendar()}</p>
                    </div>
                    <div className="col s6">
                      <form onSubmit={this.handleSubmit}>
                        <button className="btn deep-purple darken-1 z-depth-0">Complete Order</button>
                      </form>
                      <div className="green-text center">
                        {orderDetails ? <p>{orderDetails}</p> : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const orders = state.firestore.data.orders;
  const order = orders ? orders[id] : null
  return {
    order: order,
    auth: state.firebase.auth,
    orderDetails: state.product.orderDetails,
    productList: state.firestore.data.products
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createOrder: (order) => dispatch(createOrder(order))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'orders' },
    { collection: 'products' }
  ])
)(OrderDetails);

