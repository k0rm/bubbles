import { GET_BUNDLES } from "../Constants";

export default function bundleReducer(state = [], action) {
    switch(action.type) {
        case GET_BUNDLES:
            return action.payload;
        default:
            return state;
    }
};
