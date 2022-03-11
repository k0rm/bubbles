import * as proddo from "../Services/productService";
import { GET_PRODUCTS } from "../Constants";
import { GET_PRODUCT } from "../Constants";


export const getAllProducts = () => {
    return async (dispatch) => {
        try {
            const result = await proddo.getProducts();
            dispatch(getAllProductsSuccess(result));
        } catch (err) {
            return err;
        }
    }
};

const getAllProductsSuccess = (result) => {
    return {
        type: GET_PRODUCTS,
        payload: result
    }
}

export const getSingleProduct = (id) => {
    return async (dispatch) => {
        try {
            const result = await proddo.getSingleProduct(id);
            dispatch(getSingleProductSuccess(result));
        } catch (err) {
            return err;
        }
    }
}

const getSingleProductSuccess = (result) => {
    return {
        type: GET_PRODUCT,
        payload: result
    }
}
