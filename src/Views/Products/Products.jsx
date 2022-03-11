import React, { useEffect, useState } from 'react';
import './styles.scss';
import { AiOutlineShoppingCart } from "react-icons/ai";

// import ProductCard from '../../Components/ProductCard/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [ready, setReady] = useState(false);

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
            {products.map((item) => {
                return(
                    <div className="card">
                        <div className="cardHead">
                            {item.name}
                        </div>
                        <div className="cardImage">
                            <img className='cImage' src={item.image} alt="bubble" />
                        </div>
                        <div className="cardBody">
                            {item.description}
                        </div>
                        <div className="cardFooter">
                            ${item.price}
                            <AiOutlineShoppingCart className='add2cart' />
                        </div>
                    </div>
                )
            })}
        </div>
    )

    // if (ready === true) {
    //     return (
    //         <div className="productContainer">
    //             {products.map((item) => {
    //                 return (
    //                 <ProductCard 
    //                     key={item.id}
    //                     name={item.name}
    //                     description={item.description}
    //                     image={item.image}
    //                     price={item.price}
    //                 />
    //                 )
    //             })}
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className="productContainer">
    //             <h2>LOADING</h2>
    //         </div>
    //     )
    // }

}

export default Products;