import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../Actions/productAction';
import { addToCart } from '../../Actions/cartAction';
import { AiOutlineShoppingCart } from "react-icons/ai";

import ProductAddedModal from '../../Components/ProductAddedModal/ProductAddedModal';


const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [adderModal, setAdderModal] = useState(false);

    
    const productAdded = (item) => {
        setAdderModal(true);
        dispatch(addToCart(item))
        setTimeout(() => {
            setAdderModal(false);
        }, 3000)
        
    }

    useEffect(() => {
        dispatch(getAllProducts());
        
    }, [dispatch]);

    if (products.length > 1) {
        return (
            <div className="productsContainer">
            {products.map((item) => {
                return(
                    <div className="card" key={item.id}>
                        <div className="cardHead">
                            {item.name}
                        </div>
                        <Link
                            className='linky'
                            to={`/products/${item.id}`}
                        >
                            <div className="cardImage">
                                <img className='cImage' src={item.image} alt="bubble" />
                            </div>
                        </Link>
                        <div className="cardFooter">
                            ${item.price}
                            <AiOutlineShoppingCart className='add2cart' onClick={() => productAdded(item)} />
                        </div>
                    </div>
                )
            })}
            <ProductAddedModal
                isOpen={adderModal}
            />
        </div>
    )
} else {
    return (
        <div className="productsContiner">
            <h3>HERLO</h3>
        </div>
    )
}
}


export default Products;