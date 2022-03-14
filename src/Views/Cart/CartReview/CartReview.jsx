import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, getCart } from '../../../Actions/cartAction';
import { getCustomer } from '../../../Actions/customerAction';
import { confirmOrder } from '../../../Actions/orderAction';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

import ReviewCustomer from '../../../Components/ReviewCustomer/ReviewCustomer';
import ReviewCart from '../../../Components/ReviewCart/ReviewCart';

const CartReview = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const customer = useSelector((state) => state.customer);
    const [total, setTotal] = useState(0);
    let cost = 0;

    useEffect(() => {
        dispatch(getCart());
        dispatch(getCustomer());
    }, [dispatch]);
    
    const getTotal = (price) => {
        cost += price;
        setTotal(cost);
    }

    const orderConfirmed = () => {
        const data = {
            "order": cart.cart,
            "customer": customer,
            "total": total
        }

        let suffix;
        if (customer.length < 4) {
            suffix = customer[2];
        } else {
            suffix = customer[4]
        }

        dispatch(confirmOrder(data, suffix));
        dispatch(emptyCart());
        localStorage.setItem('customer', customer);
        navigate("/cart/checkout/confirmed", { replace: true});
    }


    return (
        <div className="cartReviewContainer">
            <div className="reviewInfo">
                <h2>Contact Information</h2>
                <ReviewCustomer
                    customer={customer}
                />
            </div>
            <div className="reviewOrder">
                <h2 className='reviewOrderTitle'>Order</h2>
                {cart.cart.map((item) => {
                    return (
                        <ReviewCart
                            key={item.id}
                            item={item}
                            total={getTotal}
                        />
                    )
                })}
                
                <div className="reviewOrderTotal">
                    <span className='totalText'>Total<span className='totalSpacer'>:</span></span> 
                    <span className='reviewTotalValue'><span className='totalDollarSign'>$</span>{total}</span>
                </div>
            </div>
            <div className="reviewConfirmOrder" onClick={() => orderConfirmed()}>
                Confirm
            </div>
        </div>
    )
}

export default CartReview;