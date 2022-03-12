import React from 'react';
import { useDispatch } from 'react-redux';
import { adjustCart } from '../../Actions/cartAction';
import './styles.scss';

const CartView = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div className="cartViewContainer">
            <div className="cartItem" key={item.id}>
                <div className="cartImg">
                    <img src={item.image} alt={item.name} className="cI" />
                </div>
                <div className="cartName">
                    {item.name}
                </div>
                <div className="cartPrice">
                    ${item.price*item.qty}
                </div>
                <div className="cartQuantity">
                    {item.qty}
                </div>
                <div className="incr" onClick={() => dispatch(adjustCart(item, true))}>
                    +
                </div>
                <div className="decr" onClick={() => dispatch(adjustCart(item, false))}>
                    -
                </div>
            </div>
        </div>
    )
}

export default CartView;