import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'
import { deleteProduct } from '../../store/actions/productActions'
import { updateProduct } from '../../store/actions/productActions'
import { addHot } from '../../store/actions/productActions'
import { deleteHot } from '../../store/actions/productActions'
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddHot = this.handleAddHot.bind(this);
    this.handleDeleteHot = this.handleDeleteHot.bind(this);
  }
  state = {
    id: this.props.match.params.id,
    pname: '',
    desc: '',
    price: '',
    image: '',
    category: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateProduct(this.state);
  }
  handleClick= (e) => {
    e.preventDefault();
    this.props.deleteProduct(this.state.id);
    this.props.history.push("/products");
    
  }
  handleAddHot() {
    this.props.addHot(this.props.product, this.state.id);
  }
  handleDeleteHot() {
    this.props.deleteHot(this.state.id);
  }
  render() {

    const id = this.props.match.params.id;
    const { auth, product, productDetails } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />


    if (product) {
      return (

        <div className="container" >
          <div className="row">
            <div className="col s12 m12 l10 offset-l2 ">
              <form onSubmit={this.handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">{id}</h5>
                <div className="input-field">
                  <label className="active" htmlFor="pname">Product Name</label>
                  <input type="text" placeholder="Placeholder" id="pname" defaultValue={product.name} onChange={this.handleChange} />
                </div>
                
                <div className="input-field">
                  <label className="active" htmlFor="desc">Description</label>
                  <input type="text" placeholder="Placeholder" id="desc" defaultValue={product.description} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label className="active" htmlFor="category">Category</label>
                  <input type="text" placeholder="Placeholder" id="category" defaultValue={product.category} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label className="active" htmlFor="price">Price</label>
                  <input type="text" placeholder="Placeholder" id="price" defaultValue={product.price} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                  <label className="active" htmlFor="image">Image</label>
                  <input type="text" placeholder="Placeholder" id="image" defaultValue={product.image} onChange={this.handleChange} />
                </div>
                <div className="row">
                  <div className="col s3 m3 l3">
                    <button className="button btn deep-purple darken-1 z-depth-0" >UPDATE PRODUCT</button>
                  </div>
                  <div className="col s3 m3 l3 ">
                    <button className="button btn deep-purple darken-1 z-depth-0" id="dbutton" onClick={this.handleClick}>DELETE PRODUCT</button>
                  </div>
                  <div className="col s3 m3 l3">
                    <button className="button btn deep-purple darken-1 z-depth-0" id="addhot" onClick={this.handleAddHot}>HOT PRODUCT</button>
                  </div>
                  <div className="col s3 m3 l3">
                    <button className="button btn deep-purple darken-1 z-depth-0" id="deldhot" onClick={this.handleDeleteHot}>DELETE HOT</button>
                  </div>
                </div>
                <div className="green-text center">
                  {productDetails ? <p>{productDetails}</p> : null}
                </div>
              </form>
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
  const products = state.firestore.data.products;
  const product = products ? products[id] : null
  return {
    product: product,
    auth: state.firebase.auth,
    productDetails: state.product.productDetails
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product) => dispatch(deleteProduct(product)),
    updateProduct: (product) => dispatch(updateProduct(product)),
    addHot: (product, id) => dispatch(addHot(product, id)),
    deleteHot: (id) => dispatch(deleteHot(id))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'products' }
  ])
)(ProductDetails);

