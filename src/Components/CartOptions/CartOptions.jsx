import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../Actions/cartAction';

const CartOptions = () => {
    const dispatch = useDispatch();

    return (
        <div className="cOptionsContainer">
            <div className="cOption empty" onClick={() => dispatch(emptyCart())}>
                Empty Cart
            </div>
            <div className="cOption checkout">
                Checkout
            </div>
        </div>
    )
}

export default CartOptions;