import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../Actions/cartAction';
import { Link } from 'react-router-dom';

const CartOptions = () => {
    const dispatch = useDispatch();

    return (
        <div className="cOptionsContainer">
            <div className="cOption empty" onClick={() => dispatch(emptyCart())}>
                Empty Cart
            </div>
            <Link className='linky' to="/cart/checkout">
                <div className="cOption checkout">
                    Checkout
                </div>
            </Link>
        </div>
    )
}


export default CartOptions;