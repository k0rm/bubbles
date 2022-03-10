import React from 'react';
import './styles.scss';

const ProductCard = (key, name, description, price, image) => {

    return (
        <div className="cardContainer">
            <div className="cardHeader">
                {name}
            </div>
            <div className="cardPicture">
                <img src={image} alt="pic" />
            </div>
            <div className="cardBody">
                {description}
            </div>
            <div className="cardFooter">
                {price}
            </div>
        </div>
    )
}

export default ProductCard;