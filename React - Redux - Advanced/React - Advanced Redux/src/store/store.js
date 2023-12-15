import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiReducer from './uiSlice';
import cartReducer from './cartSlice.js';

const rootReducer = combineReducers({
    ui: uiReducer,
    cart: cartReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;