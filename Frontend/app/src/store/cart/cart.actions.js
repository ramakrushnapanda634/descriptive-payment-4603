// import * as types from "./products.types";
import * as types from "./cart.types";
import axios from "axios";

export const getCartAPI = () => (dispatch) => {
    dispatch({
        type: types.GET_CART_LOADING,
    });
    axios.get(`https://dry-chamber-79388.herokuapp.com/cart/`)
        .then((r) => dispatch({
            type: types.GET_CART_SUCCESS,
            payload: r.data,
        }))
        .catch((e) => dispatch({
            type: types.GET_CART_ERROR,
        }))
};

// export const addToCartAPI = (data) => (dispatch) => {
//     dispatch({
//         type: types.ADD_CART_LOADING,
//     });
//     axios.get(`http://localhost:8000/cart/${data}`)
//         .then((r) => dispatch({
//             type: types.ADD_CART_SUCCESS,
//             payload: r.data,
//         }))
//         .catch((e) => dispatch({
//             type: types.ADD_CART_ERROR,
//         }))
// };

