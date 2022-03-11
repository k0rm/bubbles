import React from 'react';
import './styles.scss';

const ProductCard = (props) => {

    console.log("Herlo");

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

export default ProductCard;