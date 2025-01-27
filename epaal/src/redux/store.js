import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../redux/features/shopCart/shopCart"

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})


export default store