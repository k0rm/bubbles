import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../Actions/cartAction';
import './styles.scss';

import CartView from '../../Components/CartView/CartView';
import CartOptions from '../../Components/CartOptions/CartOptions';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(getCart());

    }, [dispatch]);

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
                        />
                    )
                })}
                <CartOptions />
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