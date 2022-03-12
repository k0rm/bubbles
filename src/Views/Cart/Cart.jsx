import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { adjustCart } from '../../Actions/cartAction';
import './styles.scss';

import CartView from '../../Components/CartView/CartView';

const Cart = () => {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')));
    }, [cart])

    if (cart.length > 0) {
        return (
            <div className='cartContainer'>
                {cart.map((item) => {
                    return (
                        <CartView
                            item={item}
                        />
                    )
                })}
            </div>
        )
    } else {
        return (
            <div className="cartContainer">
            <h3>Hello</h3>
        </div>
    )
}
}
export default Cart;