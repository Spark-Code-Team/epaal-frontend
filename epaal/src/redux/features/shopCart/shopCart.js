import { totalPrice } from "@/utils/ReduxFunctions"
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selected: [],
    counter: 0,
    totalPrice: 0
}



const shopCartReducer = createSlice({
    name: "shopCart",
    initialState,
    reducers: {
        increment: (state, action) => {
            if(state.selected.find(item => item.id == action.payload.id)) {
                const increaseIndex = state.selected.findIndex(item => item.id == action.payload.id)
                state.selected[increaseIndex].quantity++
                state.counter++
                state.totalPrice = totalPrice(state.selected)
            } else {
                state.selected.push({...action.payload, quantity: 1})
                state.counter++
                state.totalPrice = totalPrice(state.selected)
            }
        },

        decrement: (state, action) => {
            const removeItemIndex = state.selected.findIndex(item => item.id == action.payload.id)
            if(state.selected[removeItemIndex].quantity == 1) {
                const removedItem = state.selected.filter(item => item.id != action.payload.id)

                state.selected = removedItem
                state.counter--
                state.totalPrice = totalPrice(state.selected)
            } else {
                state.selected[removeItemIndex].quantity--
                state.counter--
                state.totalPrice = totalPrice(state.selected)
            }
        },

        checkout: (state) => {
            state.selected = []
            state.totalPrice = 0
            state.counter = 0
        }
    }
})


export default shopCartReducer.reducer
export const { increment, decrement, checkout } = shopCartReducer.actions