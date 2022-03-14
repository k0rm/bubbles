import React, { useEffect } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ReviewCart = ({ item, total }) => {

    useEffect(() => {
        total(item.price);
    }, [])

    return (
        <div className="rcCartContainer">
                <div className="rcItemImage">
                    <img className='rcIi' src={item.image} alt={item.name} />
                </div>
                
                <div className="rcItemName">
                    {item.name}
                </div>

                <div className="rcItemQty">
                    {item.qty}
                </div>
        </div>
    )
}

ReviewCart.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired, // name should be a string
        image: PropTypes.string.isRequired, // image url should be a string
        qty: PropTypes.number.isRequired, // Quantity should be a integer
        price: PropTypes.number.isRequired, // Price should be a integer.
    }).isRequired
}

export default ReviewCart;