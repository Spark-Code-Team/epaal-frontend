import { profileData } from "@/service/userPanel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// استیت اولیه‌ی پروفایل در ریداکس
const initialState = {
  id: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  national_code: "",
  birthday_date: "",
  shamsi_birthday_date: "",
  second_phone_number: "",
  confirmed_data: "",     // ⚠️ سرور فیلدهای confirmed_* را در سطح بالا برمی‌گرداند، نه داخل data
  confirmed_address: "",  //    در بخش fulfill پایین توضیح داده شده
  postal_code: "",
  address: "",
  loading: false,
  error: "",
};

// thunk برای فراخوانی API پروفایل
const fetchProfile = createAsyncThunk("profile/fetchProfile", async () => {
  const res = await profileData();
  return res; // { response } یا { error }
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

      // اگر پاسخ شامل error بود، فقط خطا را ست کن و برگرد
      if (action.payload.error) {
        state.error = action.payload.error;
        return;
      }

      // اگر response و response.data وجود دارد، مقادیر را از آن استخراج کن
      if (action.payload.response && action.payload.response.data) {
        const responseData = action.payload.response.data;

        // داده‌های هویتی (داخل فیلد data برمی‌گردد؛ ممکن است null باشد اگر confirmed_data=false)
        state.id = responseData.data?.id || "";
        state.first_name = responseData.data?.first_name || "";
        state.last_name = responseData.data?.last_name || "";
        state.phone_number = responseData.data?.phone_number || "";
        state.national_code = responseData.data?.national_code || "";
        state.birthday_date = responseData.data?.birthday_date || "";
        state.shamsi_birthday_date = responseData.data?.shamsi_birthday_date || "";
        state.second_phone_number = responseData.data?.second_phone_number || "";

        // ⚠️ نکته‌ی مهم: confirmed_data و confirmed_address در پاسخ «سطح بالا» هستند
        // در کد فعلی از responseData.data?.confirmed_* خوانده می‌شود که همیشه خالی می‌ماند.
        // اگر می‌خواهی دقیقاً همین منطق فعلی حفظ شود، خطوط زیر را دست نزن.
        // اگر می‌خواهی به مقدار درست ست شود، دو خط «پیشنهادی» پایین را جایگزین کن.

        state.confirmed_data = responseData.data?.confirmed_data || "";         // ← منطق فعلی (احتمالاً همیشه "")
        state.confirmed_address = responseData.data?.confirmed_address || "";   // ← منطق فعلی (احتمالاً همیشه "")

        // ✅ پیشنهاد دقیق‌تر (در صورت تمایل، این دو خط را جایگزین دو خط بالا کن):
        // state.confirmed_data = responseData.confirmed_data ?? "";
        // state.confirmed_address = responseData.confirmed_address ?? "";

        // داده‌های آدرس (در address_data می‌آید؛ ممکن است null باشد)
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

      // در صورت خطا، استیت را ریست کن
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
