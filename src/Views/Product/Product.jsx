import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../Actions/productAction';
import './styles.scss';

import ViewProduct from '../../Components/ViewProduct/ViewProduct';

const Product = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products);


    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch, id]);

    return (
        <div className='productContainer'>
            <ViewProduct
                product={product}
            />
        </div>
    )
}

export default Product;