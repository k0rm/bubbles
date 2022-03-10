import React, { useEffect, useState } from 'react';
import './styles.scss';

import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [ready, setReady] = useState(false);

    products.forEach((item) => {
        console.log(item);
    });

    useEffect(() => {
        fetch("http://localhost:3500/api/bubbles")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
                setReady(true);
            })
        
    }, []);
    return (
        <div className="productContainer">
            <h3>NERLO</h3>
        </div>
    )

}

export default Products;