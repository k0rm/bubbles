import { ADD_CART } from "../Constants";

export const addToCart = (state) => {
    return async (dispatch) => {
        try {
            const result = state;
            dispatch(getAllBundlesSuccess(result));
        } catch (err) {
            return err;
        }
    }
};

const getAllBundlesSuccess = (result) => {
    return {
        type: ADD_CART,
        payload: result
    }
}