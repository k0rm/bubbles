import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Actions/cartAction';

const ViewProduct = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="vpContainer">
            <div className="vpC">
                <div className="vpH">
                    {product.name}
                </div>
                <div className="vpI">
                    <img className='vpIi' src={product.image} alt="JAWOHL" />
                </div>
                <div className="vpB">
                    {product.description}
                </div>
                <div className="vpF">
                    ${product.price}
                </div>
            </div>
            <div className="vpO">
                <div className="addToCart" onClick={() => dispatch(addToCart(product))}>
                    Add To Cart
                </div>
            </div>
        </div>
    )
}

export default ViewProduct;