import React from 'react';

const ProductSummary = ({ product }) => {
    return (
        <div className="col s6 m6 l4">
            <div className="card z-depth-0 ">
            <img alt="" src={product.image}></img>
                <center>
                    <span className="card-title " id="purple">{product.id}</span>
                    <h4>{product.name}</h4>
                </center>
            </div> 
        </div>
    )
}

export default ProductSummary;