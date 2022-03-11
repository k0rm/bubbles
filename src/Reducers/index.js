import { combineReducers } from 'redux';

import products from './productReducer';
import bundles from './bundleReducer';
import cart from './cartReducer';

export default combineReducers({
    products,
    bundles,
    cart,
});
