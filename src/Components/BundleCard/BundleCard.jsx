import React, { useState } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import BundleItems from '../BundleItems/BundleItems';

const BundleCard = ({ id, items, name }) => {
    const [total, setTotal] = useState();
    let costy = 0;

    const accumulate = (cost) => {
        costy += cost;
        setTotal(costy);
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
            <div className="bundleAdd">
                Add to Cart
            </div>
        </div>
    )
}

BundleCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}

export default BundleCard;