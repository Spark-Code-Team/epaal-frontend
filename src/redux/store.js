import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../redux/features/shopCart/shopCart"
import userReducer from "../redux/features/userRole/useRole"
import profileReducer from "../redux/features/profileUser/profileUser"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        role: userReducer,
        profile: profileReducer
    }
})


export default store