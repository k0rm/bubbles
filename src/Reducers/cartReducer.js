import { ADD_CART } from "../Constants";
import { GET_CART } from "../Constants";
import { ADJUST_CART } from "../Constants";
import { EMPTY_CART } from "../Constants";

const INITIAL_STATE = {
    cart: [], // ID,DESC,IMG,PRICE,QTY
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_CART:
            let pload = 
                {"id": action.payload.id, "name": action.payload.name, "description": action.payload.description, 
                "image": action.payload.image, "price": action.payload.price, "qty": 1};
            try {
            // let contains = state.cart.length > 0 ?
            //     state.cart.map((item) => item.id === action.payload.id ? true : false)
            //     :
            //     false
            let contains = false;
            state.cart.forEach((item) => {
                if (item.id === action.payload.id) {
                    contains = true;
                }
            })
            state.cart = contains
                ?
                state.cart.map((item) => item.id === action.payload.id 
                    ?
                    {...item, qty: item.qty + 1}
                    :
                    item)
                :
                [...state.cart, pload];
            } catch (error) {
                return {
                    ...state, cart: [],
                }
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
            return {
                ...state, cart: [...state.cart],
            };
        case GET_CART:
            state.cart = action.payload;
            return {
                ...state, cart: [...state.cart],
            };
        case ADJUST_CART:
            state.cart = state.cart.map((item) =>
                item.id === action.payload[0]
                ?
                action.payload[1] === true
                    ?
                    {...item, qty: item.qty + 1}
                    :
                    {...item, qty: item.qty - 1}
                :
                item)
            state.cart = state.cart.filter((item) => item.qty > 0);
            localStorage.setItem('cart', JSON.stringify(state.cart));
            return {
                ...state, cart: [...state.cart],
            }
        case EMPTY_CART:
            localStorage.setItem('cart', []);
            return {
                ...state, cart: [],
            }
        default:
            return state;
    }
};
