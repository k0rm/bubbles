import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const CheckoutOptions = ({ selection }) => {

    return (
        <div className="checkoutOptionsContainer">
            <h3>Select your preferred method</h3>
            <div className="coButtons">
                <div onClick={() => selection(1)}>Pickup</div>
                <div onClick={() => selection(2)}>Delivery</div>
            </div>
        </div>
    )
}

CheckoutOptions.propTypes = {
    // Selection to select between options should be a number
    selection: PropTypes.func.isRequired, 
}

export default CheckoutOptions;