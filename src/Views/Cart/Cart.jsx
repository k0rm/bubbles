import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';

const Cart = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        
    }, [dispatch])
    return (
        <div>
            <h3>CART</h3>
        </div>
    )
}

export default Cart;