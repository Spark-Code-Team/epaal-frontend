import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    statics: [],
    dynamic: []
}


const selectStaticAndDynamicReducer = createSlice({
    name: "selectStaticAndDynamic",
    initialState,
    reducers: {
        addStatic: (state, action) => {
            state.statics.push(action.payload)
        },

        addDynamic: (state, action) => {
            state.dynamic.push(action.payload)
        }
    }
})


export default selectStaticAndDynamicReducer.reducer
export const { addDynamic, addStatic } = selectStaticAndDynamicReducer.actions