import { combineReducers } from 'redux';

import products from './productReducer';
import bundles from './bundleReducer';
import cart from './cartReducer';
import customer from './customerReducer';

export default combineReducers({
    products,
    bundles,
    cart,
    customer,
});
