import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selected: [],
    counter: 0
}



const shopCartReducer = createSlice({
    name: "shopCart",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.counter++
            state.selected.push(action.payload.id)
        },

        decrement: (state, action) => {
            state.counter--
        }
    }
})


export default shopCartReducer.reducer
export const { increment, decrement } = shopCartReducer.actions