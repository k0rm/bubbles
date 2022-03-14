import React from 'react';
import './styles.scss';

const ProductAddedModal = ({ isOpen }) => {

    if (isOpen) {
        return (
            <div className="pamContainer">
            Product added to cart!
        </div>
    )
} else {
    return (
        <></>
    )
}
}

export default ProductAddedModal;