import React from 'react';
import './Cart.css';


const Cart = (props) => {
    const cart=props.cart
    const totalCost=cart.reduce((sum,item)=>sum+item.price,0)

    const tax= (totalCost/10).toFixed(2)

    const grandTotal=(totalCost+Number(tax)).toFixed(2);

    return (
        <div>
            <h2>Order Summary</h2>
            <h5 className="course-num">Total Course: {cart.length}</h5>
            <h5>Course Price&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {totalCost}$</h5>
            <h5>VAT/TAX&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {tax}$</h5>
            <h5 className="total-price">Total Price&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;: {grandTotal}$</h5>
            <button className="btn btn-success">Order Now</button>

        </div>
    );
};

export default Cart;