import { legacy_createStore, combineReducers, applyMiddleware, } from "redux";
import thunk from "redux-thunk";
// import { authReducer } from "./authentication/auth.reducer";
// import { cartReducer } from "./cart/cart.reducer";
import { porductsReducer } from "./products/products.reducer";

const rootReducer = combineReducers({
    products: porductsReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));