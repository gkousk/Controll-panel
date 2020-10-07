import React, { Component } from 'react'
import { createProduct } from '../../store/actions/productActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { storage } from '../../config/fbConfig'

class CreateProduct extends Component {
  state = {
    category: '',
    name: '',
    description: '',
    image: null,
    url: '',
    price: ''
  }
  Constructor(props) {
    this.handleImage = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleImage = (e) => {
    if (e.target.files[0]) {
      this.setState({
        image: e.target.files[0]
      })
    }

  }
  handleUpload = (e) => {
    e.preventDefault();
    const { image } = this.state;
    console.log(image);
    const task = storage.ref(`products/${image.name}`).put(image);
    task.on('state_changed',
      (snapshot) => {

      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref('products').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({
            url: url
          })
        })
      });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createProduct(this.state);
  }
  render() {
    const { auth, createProd } = this.props;
    console.log(createProd);
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m12 l10 offset-l2 ">
            <form onSubmit={this.handleSubmit} className="white">
              <h5 className="grey-text text-darken-3">New Product</h5>
              <div className="input-field">
                <label htmlFor="category">Category</label>
                <input type="text" id="category" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" onChange={this.handleChange} />
              </div>
              <div className="input-field ">
                <input type="file" id="image" required />
                <button onClick={this.handleUpload}>Upload</button>
              </div>
              <div className="input-field">
                <label htmlFor="price">Price</label>
                <input type="text" id="price" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn deep-purple darken-1 z-depth-0">Add Product</button>
              </div>
              <div className="green-text center">
                {createProd ? <p>{createProd}</p> : null}
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
    createProd: state.product.createProduct
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (order) => dispatch(createProduct(order))
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(CreateProduct)
