import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const rootReducer = combineReducers({
    carReducer
});

const setupStore = () => configureStore({
    reducer:rootReducer
});

export {
    setupStore
}
