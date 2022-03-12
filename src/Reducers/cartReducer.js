import { ADD_CART } from "../Constants";
import { GET_CART } from "../Constants";
import { ADJUST_CART } from "../Constants";

const INITIAL_STATE = {
    cart: [], // ID,DESC,IMG,PRICE,QTY
}

export default function cartReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ADD_CART:
            let pload = 
                {"id": action.payload.id, "name": action.payload.name, "description": action.payload.description, 
                "image": action.payload.image, "price": action.payload.price, "qty": 1};
            let contains = state.cart.length > 0 ?
                state.cart.map((item) => item.id === action.payload.id ? true : false)
                :
                false
            console.log(contains);
            state.cart = contains[contains.length-1]
                ?
                state.cart.map((item) => item.id === action.payload.id 
                    ?
                    {...item, qty: item.qty + 1}
                    :
                    item)
                :
                [...state.cart, pload];
            console.log("ADDING TO LOCAL");
            localStorage.setItem('cart', JSON.stringify(state.cart));
            return {
                ...state, cart: [...state.cart],
            };
        case GET_CART:
            console.log("GETTING LOCAL");
            return JSON.parse(action.payload);
        case ADJUST_CART:
            console.log(action.payload[1]);
            state.cart = state.cart.map((item) =>
                item.id === action.payload[0].id
                ?
                action.payload[1] === true
                    ?
                    {...item, qty: item.qty + 1}
                    :
                    {...item, qty: item.qty - 1}
                :
                item)
            localStorage.setItem('cart', JSON.stringify(state.cart));
            return {
                ...state, cart: [...state.cart],
            }
        default:
            return state;
    }
};
