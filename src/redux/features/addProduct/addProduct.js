import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "",
    product_topic_id: "",
    detail: "",
    static_fields: {},
    instance: {},
    picture: []
}


const AddProductReducer = createSlice({
    name: "addProduct",
    initialState,
    reducers: {
        addTopicId: (state, action) => {
            state.product_topic_id = action.payload
        }, 

        addfieldAndName: (state, action) => {
            state.static_fields = action.payload.static
            state.name = action.payload.name
        },

        addPictures: (state, action) => {
            state.picture = action.payload
        }
    }
})

export default AddProductReducer.reducer
export const { addTopicId, addfieldAndName, addPictures } = AddProductReducer.actions