import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.scss';

const BundleItems = ({ id, total }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://localhost:3500/api/bubbles/"+id);
            const json = await data.json();
            total(json.price);
            setProduct(json);
        }
        fetchData()
            .catch(console.error);
    }, [id]);


    return (
        <div className="bundleItemsContainer">
            <Link className='bundleLinky' to={`/products/${product.id}`}>
            <div className="bItemImage">
                <img src={product.image} alt="" className="bIi" />
            </div>
            <div className="bItemName">
                {product.name}
            </div>
            <div className="bItemPrice">
                ${product.price}
            </div>
            </Link>
        </div>
    )
}

BundleItems.propTypes = {
    product: PropTypes.arrayOf( // Array of Product ID's
        PropTypes.shape({
        name: PropTypes.string.isRequired, // Name of a product
        image: PropTypes.string.isRequired, // Url of a product
        price: PropTypes.number.isRequired // Price of product
    })
    )
};

export default BundleItems;