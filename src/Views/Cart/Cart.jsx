import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
// import { connect } from 'react-redux';

const Cart = () => {
    // const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    console.log(cart.cart);
    return (
        <div className='cartContainer'>
        {cart.cart.map((item) => {
            return (
                <div className="cartItem" key={item.id}>
                    <div className="cartImg">
                        <img src={item.image} alt={item.name} className="cI" />
                    </div>
                    <div className="cartName">
                        {item.name}
                    </div>
                    <div className="cartPrice">
                        {item.price}
                    </div>
                </div>
            )
        })}
        </div>
        )
    }
export default Cart;