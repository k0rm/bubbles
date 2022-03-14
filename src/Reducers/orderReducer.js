import { CONFIRM_ORDER } from "../Constants";

export default function orderReducer(state = [], action) {
    switch(action.type) {
        case CONFIRM_ORDER:
            return action.payload;
        default:
            return state;
    }
}