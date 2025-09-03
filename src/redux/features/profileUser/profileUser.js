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
loading: false,
error: "",
};

const fetchProfile = createAsyncThunk("profile/fetchProfile", async () => {
const res = await profileData();
return res;
});

const profileSlice = createSlice({
name: "profile",
initialState,
extraReducers: (builder) => {
builder.addCase(fetchProfile.pending, (state) => {
state.loading = true;
state.error = "";
});
builder.addCase(fetchProfile.fulfilled, (state, action) => {
state.loading = false;
// بررسی وجود خطا در پاسخ
if (action.payload.error) {
state.error = action.payload.error;
return;
}
// بررسی وجود داده در پاسخ
if (action.payload.response && action.payload.response.data) {
const responseData = action.payload.response.data;
// پر کردن داده‌های اصلی
state.id = responseData.data?.id || "";
state.first_name = responseData.data?.first_name || "";
state.last_name = responseData.data?.last_name || "";
state.phone_number = responseData.data?.phone_number || "";
state.national_code = responseData.data?.national_code || "";
state.birthday_date = responseData.data?.birthday_date || "";
state.shamsi_birthday_date = responseData.data?.shamsi_birthday_date || "";
state.second_phone_number = responseData.data?.second_phone_number || "";
state.confirmed_data = responseData.data?.confirmed_data || "";
state.confirmed_address = responseData.data?.confirmed_address || "";
// پر کردن داده‌های آدرس
if (responseData.address_data) {
state.postal_code = responseData.address_data?.postal_code || "";
state.address = responseData.address_data?.address || "";
} else {
state.postal_code = "";
state.address = "";
}
}
state.error = "";
});
builder.addCase(fetchProfile.rejected, (state, action) => {
state.loading = false;
state.error = action.error?.message || "Failed to fetch profile";
// ریست کردن تمام فیلدها در صورت خطا
Object.assign(state, {
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
});
});
},
});

export default profileSlice.reducer;
export { fetchProfile };