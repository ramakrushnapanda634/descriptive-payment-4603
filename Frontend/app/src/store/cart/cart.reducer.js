// import * as types from "./products.types";
import * as types from "./cart.types";

const initialState = {
    cart: {
        loading: false,
        error: false,
        data: [],
    }
}

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // Get products Api call ##########################################
        case types.GET_CART_LOADING:
            return {
                ...state,
                cart: {
                    loading: true,
                    error: false,
                },
            };
        case types.GET_CART_SUCCESS:
            return {
                ...state,
                cart: {
                    loading: false,
                    error: false,
                    data: payload,
                },
            };
        case types.GET_CART_ERROR:
            return {
                ...state,
                cart: {
                    loading: false,
                    error: true,
                },
            };
        default:
            return state;
    }
}