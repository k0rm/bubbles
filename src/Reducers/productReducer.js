import { GET_PRODUCTS } from "../Constants";
import { GET_PRODUCT } from "../Constants";


export default function productReducer(state = [], action) {
    switch(action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case GET_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};
