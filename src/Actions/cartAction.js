import { ADD_CART } from "../Constants";
import { GET_CART } from "../Constants";
import { ADJUST_CART } from "../Constants";

export const addToCart = (state) => {
    return {
        type: ADD_CART,
        payload: state    
    }
};

export const getCart = () => {
        const res = localStorage.getItem('cart');
        // localStorage.setItem('cart', res);
        return {
            type: GET_CART,
            payload: res,
        }
};

export const adjustCart = (item, operator) => {
    return {
        type: ADJUST_CART,
        payload: [item, operator],
    }
}
