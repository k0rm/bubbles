import { ADD_CART, EMPTY_CART } from "../Constants";
import { GET_CART } from "../Constants";
import { ADJUST_CART } from "../Constants";

export const addToCart = (state) => {
    return {
        type: ADD_CART,
        payload: state    
    }
};

export const getCart = () => {
    try {
        const res = JSON.parse(localStorage.getItem('cart'));
        return {
            type: GET_CART,
            payload: res,
        }
    } catch (error) {
        const res = [];
        return {
            type: GET_CART,
            payload: res,
        }       
    }
};

export const adjustCart = (id, operator) => {
    return {
        type: ADJUST_CART,
        payload: [id, operator],
    }
}

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
        payload: null,
    }
}
