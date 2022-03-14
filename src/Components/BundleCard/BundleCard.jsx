import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Actions/cartAction';
import { getSingleProduct } from '../../Services/productService';

import BundleItems from '../BundleItems/BundleItems';

const BundleCard = ({ id, items, name }) => {
    const dispatch = useDispatch();
    const [total, setTotal] = useState();
    let costy = 0;

    const accumulate = (cost) => {
        costy += cost;
        setTotal(costy);
    }
    
    const bundleToCart  = async () => {
        items.forEach(async (id) => {
            await fetch("http://localhost:3500/api/bubbles/"+id)
                .then((res) => res.json())
                .then(data => dispatch(addToCart(data)))
                .catch((error) => console.log(error))
        })

    }

    return (
        <div className="bundleCardContainer" key={id}>
            <div className="bundleName">
                {name}
            </div>
            <div className='bundleItemBox'>
                {items.map((item) => {
                    return (
                        <BundleItems
                        key={item}
                        id={item}
                            total={accumulate}
                            />
                            )
                        })}
            </div>
            <div className="bundleTotal">
                ${total}
            </div>
            <div className="bundleAdd" onClick={() => bundleToCart()}>
                Add to Cart
            </div>
        </div>
    )
}

BundleCard.propTypes = {
    id: PropTypes.number.isRequired, // ID of Bundle
    name: PropTypes.string.isRequired, // Name of Bundle
    items: PropTypes.array.isRequired // Array of Product ID's
}

export default BundleCard;