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
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
}

export default CartView;