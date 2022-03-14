import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { adjustCart } from '../../Actions/cartAction';
import PropTypes from 'prop-types';
import './styles.scss';

const CartView = ({id, name, image, description, price, qty, total}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        total(price*qty);
    }, [total, price, qty])

    return (
        <div className="cartViewContainer">
            <div className="cartItem" key={id}>
                <div className="cartImg">
                    <img src={image} alt={name} className="cI" />
                </div>
                <div className="cartName">
                    {name}
                </div>
                <div className="cartPrice">
                    ${price*qty}
                </div>
                <div className="cartQuantity">
                    {qty}
                </div>
                <div className="amountTogglers">
                    <div className="incr" onClick={() => dispatch(adjustCart(id, true))}>
                        +
                    </div>
                    <div className="decr" onClick={() => dispatch(adjustCart(id, false))}>
                        -
                    </div>
                </div>
            </div>
        </div>
    )
}

CartView.propTypes = {
    id: PropTypes.number.isRequired, // Product ID should be number
    name: PropTypes.string.isRequired, // Product Name should be string
    image: PropTypes.string.isRequired, // Image url should be a string
    description: PropTypes.string.isRequired, // Description should be a string
    price: PropTypes.number.isRequired, // Price should be an integer
    qty: PropTypes.number.isRequired, // Quantity should be an integer
    total: PropTypes.func.isRequired, // Total should be an integer.
}

export default CartView;