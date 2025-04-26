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
        }
    }
})

export default AddProductReducer.reducer
export const { addTopicId } = AddProductReducer.actions