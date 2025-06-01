import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/shopCart/shopCart";
import userReducer from "../redux/features/userRole/useRole";
import profileReducer from "../redux/features/profileUser/profileUser";
import faciltyReducer from "../redux/features/facilityChose/facilityChose";
import statusReducer from "../redux/features/facilityState/facilityState";
import AddProductReducer from "../redux/features/addProduct/addProduct";
import SelectStaticAndDynamic from "../redux/features/selectStaticAndDynamic/selectStaticAndDynamic";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    role: userReducer,
    profile: profileReducer,
    facility: faciltyReducer,
    status: statusReducer,
    addProduct: AddProductReducer,
    staticDynamic: SelectStaticAndDynamic,
  },
});

export default store;
