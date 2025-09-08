import api from "@/config/api";
import { toast } from "react-toastify";


// توضیح: ارسال درخواست احراز مشخصات کاربر (KYC) به بک‌اند
// مسیر: POST /users/confirm_information/
// ورودی‌ها: first_name, last_name, national_code, birthday_date, second_phone_number, otp_code
// خروجی: در موفقیت { response } و در خطا { error } (error.response شامل پیام سرور است)
const identityAuthReq = async (
  first_name,
  last_name,
  national_code,
  birthday_date,
  second_phone_number,
  otp_code,
) => {
  try {
    // نکته: اگر birthday_date از نوع Date است، قبل از ارسال به "YYYY/MM/DD" تبدیلش کنید:
    // const fmt = (d) => `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
    // const birthday = birthday_date instanceof Date ? fmt(birthday_date) : birthday_date;

    const response = await api.post("/users/confirm_information/", {
      first_name,
      last_name,
      national_code,
      birthday_date,        // در صورت تبدیل، جایگزین کنید با birthday
      second_phone_number,
      otp_code,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};


// ارسال OTP برای موبایل دوم کاربر
// مسیر: POST /users/send_otp_second_phone_number/
// ورودی: second_phone_number (string)
// خروجی: { response } در موفقیت (۲۰۰: "با موفقیت ارسال شد")، { error } در خطا (۴۰۰: پیام خطا از سرور)
const secondeOpt = async (second_phone_number) => {
  try {
    const response = await api.post("/users/send_otp_second_phone_number/", {
      second_phone_number,
    });
    return { response };
  } catch (error) {
    // نکته: error.response?.data ممکن است شامل { error: "..."} یا { message: "..."} باشد
    return { error };
  }
};

// ارسال کد پستی برای دریافت آدرس از سرور (نمایش آدرس پیشنهادی)
// مسیر: POST /users/show_address/
// ورودی: postal_code (string با طول 10 کاراکتر؛ اعتبارسنجی اصلی در بک‌اند انجام می‌شود)
// خروجی موفق: { response } که response.data شامل شیئی شبیه { id, postal_code, address } است
// خروجی خطا: { error } که error.response?.data حاوی پیام/جزئیات خطاست
const addressAuthReq = async (postal_code) => {
  try {
    const response = await api.post("/users/show_address/", { postal_code });
    return { response };
  } catch (error) {
    // نکته: می‌توانید اینجا toast هم نمایش دهید؛ فعلاً فقط شیء خطا برگردانده می‌شود.
    // مثال: toast.error(error?.response?.data?.error || error?.response?.data?.message || "خطا در دریافت آدرس")
    return { error };
  }
};


// تأیید نهایی آدرس کاربر
// مسیر: POST /users/confirm_address/
// ورودی‌ها: id (شناسه TempAddress)، postal_code (10 کاراکتر)، address (رشته کامل آدرس)
// خروجی موفق: { response } که response.data شامل { message, data: AddressSerializer(...) } است
// خروجی خطا: { error } که error.response?.data حاوی { error: "..." } می‌باشد
const confirmAuthReq = async (id, postal_code, address) => {
  try {
    const response = await api.post("/users/confirm_address/", {
      id,
      postal_code,
      address,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت پروفایل کاربر از سرور
// مسیر: GET /users/profile/
// خروجی موفق نمونه:
// {
//   data: { id, first_name, last_name, phone_number, national_code, birthday_date, shamsi_birthday_date, second_phone_number },
//   confirmed_data: boolean,
//   confirmed_address: boolean,
//   address_data: { postal_code, address } | null
// }
// در خطا: { error: پیام خطا }
const profileData = async () => {
  try {
    const response = await api.get("/users/profile/");
    return { response };
  } catch (error) {
    // نکته: پیام خطا ممکن است در error.response.data.message باشد
    return {
      error: error.response?.data?.message || error.message || "Unknown error",
    };
  }
};


// خروج از حساب کاربری (Logout)
// مسیر: POST /users/logout/
// ورودی: refreshToken (string) → در بدنه با کلید refresh_token ارسال می‌شود
// خروجی موفق: status 205 (بدون بدنه خاص) → یعنی توکن رفرش بلاک‌لیست شده
// خروجی خطا: { error: "<پیام خطا>" } در error.response.data
export const logOut = async (refreshToken) => {
  try {
    const response = await api.post("/users/logout/", {
      refresh_token: refreshToken, // مطابق با بک‌اند: request.data["refresh_token"]
    });
    return { response };
  } catch (error) {
    // نمایش پیام خطا (در صورت موجود بودن متن سرور)
    // نکته: بسته به پاسخ سرور، ممکن است error.response?.data شیء باشد (مثلاً {error: "..."}).
    toast.error(error.response?.data || "مشکلی پیش آمده");
    return { error };
  }
};


// گرفتن لیست همه‌ی تسهیلات از سرور
// مسیر: GET /facility/get_all_facility
// خروجی موفق: { response } که response.data یک آرایه از Facility (slides) است
// خروجی خطا: { error } شامل جزئیات خطا (error.response درصورت وجود)
const allFacility = async () => {
  try {
    const response = await api.get("/facility/get_all_facility");
    return { response };
  } catch (error) {
    return { error };
  }
};


// ایجاد درخواست تسهیلات برای کاربر
// مسیر: POST /facility/create_facility
// ورودی‌ها:
//  - sheba_number (string)         مثال: "IRxxxxxxxxxxxxxxxxxxxxxx"  ← در UI شما با `IR${sheba}` ساخته می‌شود
//  - facility_id (number|string)   شناسه طرح/تسهیلات انتخاب‌شده
//  - choosen_value (number|string) مبلغ انتخابی کاربر
//  - facility_installment_id (number|string) شناسه پلن اقساط انتخابی
// خروجی:
//  - موفق: { response }  (status 200: "facility created successfuly")
//  - خطا:  { error }     (status 4xx با message مناسب از سرور)
const createFacility = async (
  sheba_number,
  facility_id,
  choosen_value,
  facility_installment_id,
) => {
  try {
    // نکته: طبق بک‌اند، facility_installment_id به‌صورت عدد هم پذیرفته می‌شود؛
    // اینجا عمداً به رشته تبدیل شده تا با منطق فعلی شما یکسان بماند.
    const response = await api.post("/facility/create_facility", {
      sheba_number,
      facility_id,
      facility_installment_id: `${facility_installment_id}`,
      choosen_value,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};


// آغاز مرحله‌ی ارزیابی/تعیین زیر-گرید (مرحله 3 → 4)
// مسیر: POST /facility/confirm_grade
// پیش‌نیاز در بک‌اند: داشتن UserFacility با { level: "grade", level_number: 3, status: "in_progress" }
// خروجی موفق: { message: "level 3 is done" }  ← ارتقا به level="submit_digital", level_number=4
// خروجی خطا: { error|message: "..." }  (مثلاً: "You do not have any facility in progress")
const startEtebarSanji = async () => {
  try {
    const response = await api.post("/facility/confirm_grade");
    return { response };
  } catch (error) {
    return { error };
  }
};


// ارسال تغییر وضعیت «تحویل حضوری مدارک» از submit_physical → waiting_physical
// مسیر: POST /facility/submit_physical
// پیش‌نیاز بک‌اند: وجود UserFacility با { level: "submit_physical", level_number: 5, status: "in_progress" }
// خروجی موفق: { message: "now you are pendinf for admin confirmation" } (status 200)
// خروجی خطا: { message: "..." } (status 400)
const sendStatusPhysical = async () => {
  try {
    const response = await api.post("/facility/submit_physical");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت وضعیت مرحله تحویل حضوری مدارک کاربر
// مسیر: GET /facility/submit_physical
// خروجی موفق (status 200): response.data = { status: "submit_physical" | "waiting_physical" }
// در صورت عدم وجود تسهیلات در این سطح (status 400): response.data = { message: "You do not have any facility in this level" }
// نکته: مقدار status را برای کنترل UI (نمایش دکمه ارسال، غیرفعالسازی، هدایت، ...) استفاده کنید.
const getStatusPhysical = async () => {
  try {
    const response = await api.get("/facility/submit_physical");
    return { response };
  } catch (error) {
    return { error };
  }
};


// ارسال تأیید امضای دیجیتال (مرحله ۶ → ۷)
// مسیر: POST /facility/digital_signiture
// موفق: { message: "level 6 is done" } → ارتقا به { level: "prepayment", level_number: 7 }
const sendDigiSignature = async () => {
  try {
    const response = await api.post("/facility/digital_signiture");
    return { response };
  } catch (error) {
    return { error };
  }
};

// دریافت مبلغ پیش‌پرداخت مرحله ۷ (prepayment)
// مسیر: GET /facility/prepayment
// خروجی موفق: { response } که response.data = { data: "<amount_as_string>" }  ← مقدار عددی به‌صورت رشته
// خطا: { error } (مثلاً وقتی کاربر در سطح prepayment نیست یا تسهیلاتی در این سطح ندارد)
const getPayValue = async () => {
  try {
    const response = await api.get("/facility/prepayment");
    return { response };
  } catch (error) {
    return { error };
  }
};


// ارسال تأیید پرداخت پیش‌پرداخت (مرحله ۷ → ۸)
// مسیر: POST /facility/prepayment
// پیش‌نیاز: داشتن UserFacility با { level: "prepayment", level_number: 7, status: "in_progress" }
// خروجی موفق (status 200): { message: "level 7 is done" } → سطح کاربر به { level: "final_waiting", level_number: 8 } ارتقا می‌یابد
// خروجی خطا (status 400): { message: "You do not have any facility in this level" }
const postPayValue = async () => {
  try {
    const response = await api.post("/facility/prepayment");
    return { response };
  } catch (error) {
    return { error };
  }
};

// درخواست ارسال «رمز دوم پرداخت پیش‌پرداخت» به شماره موبایل کاربر
// مسیر: POST /facility/send_code_getaway_prepayment
// خروجی موفق: { response } با message="با موفقیت ارسال شد"
// خروجی خطا: { error } با message مناسب
const RamzDovom = async () => {
  try {
    const response = await api.post("/facility/send_code_getaway_prepayment");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت لیست مدارک مرحله ۴ (دیجیتال) برای آپلود
// مسیر: GET /facility/submit_digital
// خروجی موفق:
//   - اگر وضعیت کاربر "submit_digital" باشد: { data: [ {id, type, ...}, ... ], status: "submit_digital" }
//   - اگر وضعیت کاربر "waiting_digital" باشد: { data: null, status: "waiting_digital" }
// خطا (۴۰۰): { message: "You do not have any facility in this level" }
const getlevelfour = async () => {
  try {
    const response = await api.get("/facility/submit_digital");
    return { response };
  } catch (error) {
    console.log(error)
    return { error };
  }
};


// ارسال مدارک مرحله ۴ (submit_digital) به سرور
// مسیر: POST /facility/submit_digital
// ورودی: FormData شامل data[<index>][id|value|file] برای هر مدرک
// نکته مهم: هنگام ارسال FormData، باید خود FormData مستقیماً به axios داده شود
//           نه به‌صورت { data: formData } چون باعث می‌شود ساختار غلط به بک‌اند برسد.
const postlevelfour = async (formData) => {
  try {
    const response = await api.post("/facility/submit_digital", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return { response };
  } catch (error) {
    console.log(error)
    return { error };
  }
};


// استعلام تسهیلات کاربر
// مسیر: GET /facility/inquiry_user_facility
// خروجی موفق (status 200):
//   - اگر کاربر هیچ تسهیلاتی با status="in_progress" نداشته باشد → { data: null }
//   - اگر تسهیلات فعال وجود داشته باشد → { data: { ...اطلاعات تسهیلات سریالایز‌شده... } }
// خروجی خطا: { error } (در صورت بروز مشکل در درخواست)
const userFacility = async () => {
  try {
    const response = await api.get("/facility/inquiry_user_facility");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت فهرست تسهیلات کاربر با تفکیک وضعیت‌ها
// مسیر: GET /users/my_facility/
// خروجی موفق (status 200): response.data به شکل زیر است:
// {
//   canceled:      Array<...> | null,     // تسهیلات لغوشده (status="cancled") ← توجه: کلید در بک‌اند "cancled" است اما خروجی "canceled"
//   in_progress:   Array<...> | null,     // تسهیلات در جریان
//   installment:   Array<...> | null,     // تسهیلات در حال بازپرداخت
//   done:          Array<...> | null      // تسهیلات خاتمه‌یافته
// }
// در خطا: { error } (با error.response در صورت وجود جزئیات)
const facilityInformation = async () => {
  try {
    const response = await api.get("/users/my_facility/");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت کیف‌پول کاربر (موجودی + لیست تراکنش‌ها)
// مسیر: GET /users/wallet/
// خروجی موفق (status 200):
//   {
//     data: Array<{
//       ... // فیلدهای هر تراکنش مطابق UserWalletSerialiser
//     }>,
//     wallet_balance: number // موجودی کیف‌پول
//   }
// در خطا: { error } (error.response حاوی جزئیات در صورت وجود)
const getWallet = async () => {
  try {
    const response = await api.get("/users/wallet/");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت اقساط کاربر
// مسیر: GET /users/my_installment/
// خروجی موفق (status 200): response.data به‌صورت زیر است:
//   {
//     paid: Array<...> | null,      // اقساط پرداخت‌شده
//     not_piad: Array<...> | null   // توجه: کلید برگشتی «not_piad» است (غلط‌املایی). برای UI باید همین را بخوانید.
//   }
// خروجی خطا (status 400): { error: "you dont have any installment" }
const getInstallments = async () => {
  try {
    const response = await api.get("/users/my_installment/");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت جزئیات یک قسط خاص کاربر
// مسیر: POST /users/single_installment/
// ورودی: { installment_id: number|string }
// خروجی موفق (status 200):
//   { data: { ...اطلاعات قسط مطابق UserInstallmentSerialiser... } }
// خروجی خطا (status 400):
//   - { error: "please send installment_id" } اگر installment_id ارسال نشود
//   - { error: "this installment is not yours" } اگر قسط متعلق به کاربر نباشد
const getInstallmentPayment = async (installmentId) => {
  try {
    const response = await api.post("/users/single_installment/", {
      installment_id: installmentId,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// پرداخت یک قسط
// مسیر: POST /users/pay_installment/
// ورودی: { installment_id: number|string }  ← شناسه‌ی قسط انتخابی
// خروجی موفق (200): { message: "installment is paid" }
// خطاهای ممکن (400):
//  - "you dont have any installment"            ← کاربر هیچ وامی در وضعیت installment ندارد
//  - "send valid installment_id"                ← شناسه ارسال نشده/نامعتبر
//  - "installment not matched"                  ← قسط متعلق به همین کاربر/وام فعال نیست
//  - "you piad it before"                       ← این قسط قبلاً پرداخت شده
//  - "you should pay insatellment X first"      ← ترتیب پرداخت رعایت نشده؛ باید ابتدا قسط X پرداخت شود
// نکته: اگر این قسط «آخرین قسط» باشد، وضعیت وام به done تغییر می‌کند (سمت سرور).
const payInstallmentFinal = async (installmentId) => {
  try {
    const response = await api.post("/users/pay_installment/", {
      installment_id: installmentId,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

// دریافت سبد خرید کاربر
// مسیر: GET /users/my_cart/
// خروجی موفق (200):
//   - اگر سبد خالی باشد یا تازه ایجاد شود: { data: [] }
//   - اگر آیتم وجود داشته باشد: { data: Array<CartItem> }  // مطابق CartItemSerializer (با context request برای URLها)
// خطا: { error } (در صورت وجود، جزئیات در error.response)
const getUserCart = async () => {
  try {
    const response = await api.get("/users/my_cart/");
    return { response };
  } catch (error) {
    return { error };
  }
};
export {
  getUserCart,
  payInstallmentFinal,
  getInstallmentPayment,
  identityAuthReq,
  addressAuthReq,
  confirmAuthReq,
  secondeOpt,
  profileData,
  allFacility,
  createFacility,
  startEtebarSanji,
  getStatusPhysical,
  sendStatusPhysical,
  sendDigiSignature,
  getPayValue,
  postPayValue,
  RamzDovom,
  getlevelfour,
  postlevelfour,
  userFacility,
  facilityInformation,
  getWallet,
  getInstallments,
};
