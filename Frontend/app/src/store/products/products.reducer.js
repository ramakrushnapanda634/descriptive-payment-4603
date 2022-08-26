import * as types from "./products.types";

const initialState = {
    products: {
        loading: false,
        error: false,
        data: [],
    }
}

export const porductsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        // Get products Api call ##########################################
        case types.GET_PRODUCTS_LOADING:
            return {
                ...state,
                products: {
                    loading: true,
                    error: false,
                },
            };
        case types.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: {
                    loading: false,
                    error: false,
                    data: payload,
                },
            };
        case types.GET_PRODUCTS_ERROR:
            return {
                ...state,
                products: {
                    loading: false,
                    error: true,
                },
            };
        default:
            return state;
    }
}