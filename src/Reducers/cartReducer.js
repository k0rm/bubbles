import { ADD_CART } from "../Constants";

const INITIAL_STATE = {
    cart: [], // ID,DESC,IMG,PRICE,QTY
    currentItem: null,
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_CART:
            const inCart = state.cart.find(item =>
                item.id === action.payload.id ? true : false);
            return {
                ...state,
                cart: [...state.cart, {...action.payload}]
            }
        default:
            return state;
    }
};
