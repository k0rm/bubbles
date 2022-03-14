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
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
}

export default ReviewCart;