import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    shopName: "",
    shopPhone: "",
    shopAddress: "",
    shopBio: "",
    adminName: "",
    adminLastName: "",
    email: "",
    password: ""
}


const AddShopAdmin = createSlice({
    name: "AddShop",
    initialState,
    reducers: {
        addShopIdentity: (state, action) => {
            state.shopName = action.payload.shopName,
            state.shopPhone = action.payload.shopPhone,
            state.shopBio = action.payload.shopBio,
            state.shopAddress = action.payload.address
        }
    }
})



export default AddShopAdmin.reducer
export const { addShopIdentity } = AddShopAdmin.actions