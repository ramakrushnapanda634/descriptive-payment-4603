import * as types from "./products.types";
import axios from "axios";

export const getProductsAPI = () => (dispatch) => {
    dispatch({
        type: types.GET_PRODUCTS_LOADING,
    });
    axios.get(`http://localhost:8080/product/men-clothing`)
        .then((r) => dispatch({
            type: types.GET_PRODUCTS_SUCCESS,
            payload: r.data,
        }))
        .catch((e) => dispatch({
            type: types.GET_PRODUCTS_LOADING,
        }));
};

export const getSingleProductAPI = (id) => (dispatch) => {
    dispatch({
        type: types.GET_SINGLE_PRODUCT_LOADING,
    });
    axios
        .get(`http://localhost:8080/product/productdetail/${id}`)
        .then((r) => {
           // console.log('r:', r.data)
            dispatch({
                type: types.GET_SINGLE_PRODUCT_SUCCESS,
                payload: r.data,
            })
        })
        .catch((e) => dispatch({
            type: types.GET_SINGLE_PRODUCT_ERROR,
        }));
};

