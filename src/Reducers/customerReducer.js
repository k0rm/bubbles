import { GET_CUSTOMER } from "../Constants";
import { ADD_CUSTOMER } from "../Constants";

export default function customerReducer(state = [], action) {
    switch (action.type) {
        case ADD_CUSTOMER:
            state = action.payload;
            return state;
        case GET_CUSTOMER:
            return state;
        default:
            return state;
    } 
}