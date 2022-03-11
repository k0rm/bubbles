import retrieveBundles from "../Services/bundleService";
import { GET_BUNDLES } from "../Constants";


export const getAllBundles = () => {
    return async (dispatch) => {
        try {
            const result = await retrieveBundles();
            dispatch(getAllBundlesSuccess(result));
        } catch (err) {
            return err;
        }
    }
};

const getAllBundlesSuccess = (result) => {
    return {
        type: GET_BUNDLES,
        payload: result
    }
}