import { ADD_CART } from "../Constants";

export default function cartReducer(cart = [], action) {
    switch(action.type) {
        case ADD_CART:
            cart.push(action.payload);
            console.log(cart);
            return cart;
        default:
            return cart;
    }
};
