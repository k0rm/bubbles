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
    props: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired
}

export default ProductCard;