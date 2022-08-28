// import * as types from "./products.types";
import * as types from "./cart.types";
import axios from "axios";

export const getCartAPI = () => (dispatch) => {
    dispatch({
        type: types.GET_CART_LOADING,
    });
    axios.get(`http://localhost:8000/cart`)
        .then((r) => dispatch({
            type: types.GET_CART_SUCCESS,
            payload: r.data,
        }))
        .catch((e) => dispatch({
            type: types.GET_CART_ERROR,
        }))
};

