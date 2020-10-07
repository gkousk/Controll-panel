import React, { Component } from 'react';
import OrderList from '../orders/OrderList'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'

class Orders extends Component {
    render() {
        const { orders, auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m12 l10 offset-l2 ">
                        <OrderList orders={orders} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        orders: state.firestore.ordered.orders,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'orders', orderBy: ['time', 'desc'] }
    ])
)(Orders) 