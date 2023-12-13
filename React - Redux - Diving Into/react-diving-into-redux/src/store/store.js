import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice.js';
import authReducer from '../slices/authSlice.js';

const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;