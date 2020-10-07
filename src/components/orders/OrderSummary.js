import React from 'react';

const OrderSummary = ({ order }) => {
    var date = order.time.toDate();

    if (order.progress === "processing") {
        return (
            <div className="col s6 m6 l4 ">
                <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title" id="purple">{order.id}</span>
                        <p>{order.email}</p>
                        <p>{order.fname}</p>
                        <p>{order.lname}</p>
                        <p>{date.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}
export default OrderSummary;