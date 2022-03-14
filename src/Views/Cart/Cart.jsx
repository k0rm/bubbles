import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../Actions/cartAction';
import './styles.scss';

import CartView from '../../Components/CartView/CartView';
import CartOptions from '../../Components/CartOptions/CartOptions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [total, setTotal] = useState();
    let costy = 0;

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    const accumulate = (cost) => {
        costy += cost;
        setTotal(costy);
    }

    if (cart.cart.length > 0) {
        return (
            <div className='cartContainer'>
                {cart.cart.map((item) => {
                    return (
                        <CartView
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            description={item.description}
                            price={item.price}
                            qty={item.qty}
                            total={accumulate}
                        />
                    )
                })}
                <div className="cartTotal">
                    <span>Total<span className='cartSpace'>:</span></span>
                    <span className='cartDollar'>$</span><span className='cartTotalAmount'>{total}</span>
                </div>
                <CartOptions />
            </div>
        )
    } else {
        return (
            <div className="emptyCartContainer">
            <h1>Your cart is empty<span>.</span></h1>
        </div>
    )
}
}
export default Cart;