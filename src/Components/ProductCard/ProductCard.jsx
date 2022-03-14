import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const ProductCard = (props) => {

    return (
        <div className="cardContainer">
            <div className="card">
                <div className="cardHeader">
                    {props.name}
                </div>
                <div className="cardImageContainer">
                    <img className='cardImage' src={props.image} alt="YAS" />
                </div>
                <div className="cardBody">
                    {props.description}
                </div>
                <div className="cardFooter">
                    ${props.price}
                </div>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    props: PropTypes.shape({ // Product json
        name: PropTypes.string.isRequired, // Name should be a string
        image: PropTypes.string.isRequired, // Image url should be a string
        description: PropTypes.string.isRequired, // Description should be a string
        price: PropTypes.number.isRequired, // Price should be a integer
    }).isRequired
}

export default ProductCard;