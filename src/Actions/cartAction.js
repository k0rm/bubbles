import { ADD_CART } from "../Constants";

export const addToCart = (state) => {
    return {
        type: ADD_CART,
        payload: state    
    }
};
