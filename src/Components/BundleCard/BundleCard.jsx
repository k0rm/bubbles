import React, { useState } from 'react';
import './styles.scss';

import BundleItems from '../BundleItems/BundleItems';

const BundleCard = ({ id, items, name }) => {
    const [total, setTotal] = useState();
    let costy = 0;

    const accumulate = (cost) => {
        costy += cost;
        setTotal(costy);
        console.log(total);
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

export default BundleCard;