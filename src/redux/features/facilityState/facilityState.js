const { userFacility } = require("@/service/userPanel")
const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")



const initialState = {
    id: "",
    user_name: "",
    status: "",
    level: "",
    level_number: "",
    given_value: "",
    created_at: "",
    facility: 0,
    loading: false,
    error: ""
}

const fetchStatus = createAsyncThunk("status/fetchStatus", () => {
    return userFacility()
})


const statusSlice = createSlice({
    name: "status",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchStatus.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchStatus.fulfilled, (state, action) => {
            state.loading = false
            state.id = action.payload.response.data.data.id
            state.user_name = action.payload.response.data.data.user_name
            state.status = action.payload.response.data.data.status
            state.level = action.payload.response.data.data.level
            state.level_number = action.payload.response.data.data.level_number
            state.given_value = action.payload.response.data.data.given_value
            state.created_at = action.payload.response.data.data.created_at
            state.facility = action.payload.response.data.data.facility
            state.error= ""
        })

        builder.addCase(fetchStatus.rejected, (state, action) => {
            state.loading = true
            state.error = action.error.message
        })
    }
})

export default statusSlice.reducer
export { fetchStatus }