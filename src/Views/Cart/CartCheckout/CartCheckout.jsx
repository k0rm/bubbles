import React, { useState } from 'react';
import './styles.scss';

import CheckoutOptions from '../../../Components/CheckoutOptions/CheckoutOptions';
import CheckoutMethod from '../../../Components/CheckoutMethod/CheckoutMethod';

const CartCheckout = () => {
    const [method, setMethod] = useState(0);


    const customerChoice = (choice) => {
        setMethod(choice);
    }

    if (method === 0) {
        return (
            <div className="cartCheckoutContainer">
                <CheckoutOptions 
                    selection={customerChoice}
                />
            </div>
    )
    } else {
        return (
                <CheckoutMethod 
                    method={method}
                />
            )
        }
}

export default CartCheckout;