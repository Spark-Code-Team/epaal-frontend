
import { profileData } from "@/service/userPanel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState = {
    id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    national_code: "",
    birthday_date: "",
    shamsi_birthday_date: "",
    second_phone_number: "",
    confirmed_data: "",
    confirmed_address: "",
    postal_code: "",
    address: "",
    loading: false
}


const fetchProfile = createAsyncThunk("profile/fetchProfile", () => {
    return profileData()
})


const profileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProfile.pending, (state) => {
            state.loading = true
        })

        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false
            state.id = action.payload.response.data.data.id
            state.birthday_date = action.payload.response.data.data.birthday_date
            state.shamsi_birthday_date = action.payload.response.data.data.shamsi_birthday_date
            state.first_name = action.payload.response.data.data.first_name
            state.last_name =  action.payload.response.data.data.last_name
            state.confirmed_data = action.payload.response.data.confirmed_data
            state.confirmed_address = action.payload.response.data.data.confirmed_address
            state.phone_number = action.payload.response.data.data.phone_number
            state.second_phone_number = action.payload.response.data.data.second_phone_number
            state.national_code = action.payload.response.data.data.national_code
            state.postal_code = action.payload.response.data.address_data.postal_code
            state.address = action.payload.response.data.address_data.address
        })

        builder.addCase(fetchProfile.rejected, (state) => {
            state.id = ""
            state.first_name = ""
            state.last_name = ""
            state.phone_number = ""
            state.national_code = ""
            state.birthday_date = ""
            state.shamsi_birthday_date = ""
            state.second_phone_number = ""
            state.confirmed_data = ""
            state.confirmed_address = ""
            state.loading = false
            state.error = "error message"
            state.address = ""
            state.postal_code = ""
        })
    }
})


export default profileSlice.reducer
export { fetchProfile }