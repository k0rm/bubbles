import { CONFIRM_ORDER } from "../Constants";

import orderService from '../Services/orderService';

export const confirmOrder = (data, suffix) => {
    return async (dispatch) => {
        try {
            const res = await orderService(data, suffix);
            dispatch(confirmOrderSuccess(res));
        } catch (error) {
            return error;
        }
    }
}

const confirmOrderSuccess = (res) => {
    return {
        type: CONFIRM_ORDER,
        payload: res,
    }
}