import React from 'react';
import OrderSummary from './OrderSummary'
import { Link } from 'react-router-dom';
const OrderList = ({ orders }) => {
    return (
        
        <div className="project-list section">
            {orders && orders.map(order => {
                return (
                    <Link to={'/order/' + order.id} key={order.id}>
                        <OrderSummary order={order} />
                    </Link>
                )
            })}
        </div>
    )
}
export default OrderList;