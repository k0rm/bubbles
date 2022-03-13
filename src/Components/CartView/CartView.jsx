import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { adjustCart } from '../../Actions/cartAction';
import './styles.scss';

const CartView = ({id, name, image, description, price, qty}) => {
    const dispatch = useDispatch();
    const [cost, setCost] = useState(0);
    const [amount, setAmount] = useState();



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
                <div className="incr" onClick={() => dispatch(adjustCart(id, true))}>
                    +
                </div>
                <div className="decr" onClick={() => dispatch(adjustCart(id, false))}>
                    -
                </div>
            </div>
        </div>
    )
}

export default CartView;