import api from "@/config/api"


// ارسال درخواست OTP برای ورود
// مسیر: POST /users/send-otp/
// ورودی: phone_number (string) — باید با الگوی 09xxxxxxxxx معتبر باشد (اعتبارسنجی اصلی در بک‌اند)
// خروجی موفق: { response } با message: "با موفقیت ارسال شد"
// خروجی خطا: { error } (error.response حاوی جزئیات احتمالی)
const sendPhone = async (phone_number) => {
    try {
      const response = await api.post("users/send-otp/", {
        phone_number: `${phone_number}`, // به‌صورت رشته ارسال می‌شود
      });
      return { response };
    } catch (error) {
      return { error };
    }
  };
    

// ورود با OTP
// مسیر: POST /users/login/
// ورودی‌ها:
//  - phone_number (string)  ← باید با الگوی 09xxxxxxxxx معتبر باشد (اعتبارسنجی اصلی سمت سرور)
//  - otp_code (string)      ← کد یکبارمصرف ارسال‌شده
//  - password (string?)     ← فقط در صورتی لازم است که سرور two_factor را برای کاربر فعال بداند
//
// سناریوهای خروجی موفق:
// 1) کاربر two_factor ندارد یا (دارد و password صحیح است):
//    response.data = {
//      two_factor: null,
//      refresh: "<JWT refresh>",
//      access: "<JWT access>"
//    }
//
// 2) کاربر two_factor دارد ولی password ارسال نشده:
//    status = 406
//    response.data = { two_factor: true, refresh: null, access: null }
//    ← در این حالت باید مجدد همین API را با password صحیح فراخوانی کنید.
//
// خطاهای رایج (۴۰۰):
//  - { error: "send phone_number" | "phone number format is not valid" | "send otp code" }
//  - { error: "first make an otp code for yourself" }  ← ابتدا باید OTP گرفته شود
//  - { error: "time of otp is expired" }               ← اعتبار OTP تمام شده
//  - { error: "the code is wrong" }                    ← OTP اشتباه است
//  - { error: "password is not valid" }                ← در حالت two_factor و رمز اشتباه
const loginOtp = async (phone_number, otp_code, password) => {
    try {
      const response = await api.post("users/login/", {
        phone_number: `${phone_number}`,
        otp_code,
        password, // اگر two_factor فعال نباشد، می‌تواند undefined/null باشد
      });
  
      return { response };
    } catch (error) {
      return { error };
    }
  };

// دریافت اطلاعات خانه/نقش کاربر (Home)
// مسیر: GET /users/home/
// خروجی موفق (200): response.data مطابق HomeSerializer (اطلاعات کاربر/نقش و سایر داده‌های داشبورد)
// خطا: { error } (در error.response در صورت وجود جزئیات)
const userRole = async () => {
    try {
      const response = await api.get("/users/home/");
      console.log(response);
      return { response };
    } catch (error) {
      console.log(error);
      return { error };
    }
  };


export  {
    sendPhone,
    loginOtp,
    userRole
}