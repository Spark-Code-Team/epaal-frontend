import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../redux/features/shopCart/shopCart"
import userReducer from "../redux/features/userRole/useRole"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        role: userReducer
    }
})


export default store