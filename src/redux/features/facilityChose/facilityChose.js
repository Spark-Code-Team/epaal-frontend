import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    selectedFacility : {},
    choosen_value: "",
    facility_installment_id: ""
}

const facilityReducer = createSlice({
    name: "facility",
    initialState,
    reducers: {
        addFacility: (state, action) => {
            state.selectedFacility = action.payload.facility
        },

        addInAndCh: (state, action) => {
            state.choosen_value = action.payload.choosen_value
            state.facility_installment_id = action.payload.id
        }
    }
})

export default facilityReducer.reducer
export const { addFacility, addInAndCh} = facilityReducer.actions