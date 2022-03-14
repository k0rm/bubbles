import { ADD_CUSTOMER, GET_CUSTOMER } from "../Constants";

export const addCustomer = (customer) => {
    return {
        type: ADD_CUSTOMER,
        payload: customer,
    }
}

export const getCustomer = () => {
    return {
        type: GET_CUSTOMER,
    }
}