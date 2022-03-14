import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Actions/cartAction';
import PropTypes from 'prop-types';

const ViewProduct = ({ props }) => {
    const dispatch = useDispatch();

    return (
        <div className="vpContainer">
            <div className="vpC">
                <div className="vpH">
                    {props.name}
                </div>
                <div className="vpI">
                    <img className='vpIi' src={props.image} alt="JAWOHL" />
                </div>
                <div className="vpB">
                    {props.description}
                </div>
                <div className="vpF">
                    <span>$</span>{props.price}
                </div>
            </div>
            <div className="vpO">
                <div className="addToCart" onClick={() => dispatch(addToCart(props))}>
                    Add To Cart
                </div>
            </div>
        </div>
    )
}

ViewProduct.propTypes = {
    // Props should be an array or object before and after fetch
    props: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]).isRequired
}

export default ViewProduct;