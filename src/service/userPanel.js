import api from "@/config/api";
import { toast } from "react-toastify";


/**
 * POST /users/confirm_information/
 * احراز مشخصات کاربر (KYC)
 *
 * ورودی‌ها:
 *  - first_name (string)
 *  - last_name (string)
 *  - national_code (string)
 *  - birthday_date (string | Date)  // اگر Date بود، قبل از ارسال به "YYYY/MM/DD" تبدیل شود
 *  - second_phone_number (string)
 *  - otp_code (string)
 *
 * موفق:    { response }
 * ناموفق:  { error }  // شامل error.response با بدنه‌ی {"error": "..."} یا {"message": "..."}
 */
const identityAuthReq = async (
  first_name,
  last_name,
  national_code,
  birthday_date,
  second_phone_number,
  otp_code,
) => {
  try {
    // اگر birthday_date نوع Date است، اینجا به فرمت "YYYY/MM/DD" تبدیل کنید (در صورت نیاز)
    // const fmt = (d) => `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
    // const birthday = birthday_date instanceof Date ? fmt(birthday_date) : birthday_date;

    const response = await api.post("/users/confirm_information/", {
      first_name,
      last_name,
      national_code,
      birthday_date,        // یا birthday
      second_phone_number,
      otp_code,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};


// 📌 ارسال کد OTP به شماره تلفن دوم
const secondeOpt = async (second_phone_number) => {
  try {
    const response = await api.post("/users/send_otp_second_phone_number/", {
      second_phone_number,
    });

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت آدرس کاربر با کد پستی
const addressAuthReq = async (postal_code) => {
  try {
    const response = await api.post("/users/show_address/", {
      postal_code,
    });

    return { response };
  } catch (error) {
    // toast.error(error.response.data.message)
    return { error };
  }
};

// 📌 تایید نهایی آدرس کاربر
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

// 📌 دریافت اطلاعات پروفایل کاربر
const profileData = async () => {
  try {
    const response = await api.get("/users/profile/");
    return { response };
  } catch (error) {
    return {
      error: error.response?.data?.message || error.message || "Unknown error"
    };
  }
};

// 📌 خروج کاربر از حساب (logout)
export const logOut = async (refreshToken) => {
  try {
    const response = await api.post('/users/logout/', {
      refresh_token: refreshToken
    });
    console.log('//////////////->', response)  
    return { response }
  } catch (error) {
    toast.error(error.response?.data || "مشکلی پیش آمده")       
    return { error }
  }
}

// 📌 دریافت همه تسهیلات (facility) موجود
const allFacility = async () => {
  try {
    const response = await api.get("/facility/get_all_facility");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 ایجاد تسهیلات جدید برای کاربر
const createFacility = async (
  sheba_number,
  facility_id,
  choosen_value,
  facility_installment_id,
) => {
  try {
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

// 📌 شروع فرآیند اعتبارسنجی (اعتبارسنجی کاربر)
const startEtebarSanji = async () => {
  try {
    const response = await api.post("/facility/confirm_grade");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 ثبت وضعیت تحویل حضوری (فیزیکی)
const sendStatusPhysical = async () => {
  try {
    const response = await api.post("/facility/submit_physical");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت وضعیت تحویل حضوری (فیزیکی)
const getStatusPhysical = async () => {
  try {
    const response = await api.get("/facility/submit_physical");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 ارسال امضای دیجیتال کاربر
const sendDigiSignature = async () => {
  try {
    const response = await api.post("/facility/digital_signiture");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت مبلغ پیش‌پرداخت
const getPayValue = async () => {
  try {
    const response = await api.get("/facility/prepayment");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 ارسال تایید پرداخت پیش‌پرداخت
const postPayValue = async () => {
  try {
    const response = await api.post("/facility/prepayment");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 ارسال کد دوم (رمز دوم) برای پرداخت پیش‌پرداخت
const RamzDovom = async () => {
  try {
    const response = await api.post("/facility/send_code_getaway_prepayment");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت وضعیت مرحله چهارم (دیجیتال)
const getlevelfour = async () => {
  try {
    const response = await api.get("/facility/submit_digital");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 ارسال اطلاعات مرحله چهارم (دیجیتال) همراه با فایل
const postlevelfour = async (data) => {
  try {
    const response = await api.post(
      "/facility/submit_digital",
      {
        data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 استعلام تسهیلات کاربر
const userFacility = async () => {
  try {
    const response = await api.get("/facility/inquiry_user_facility");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت اطلاعات تسهیلات کاربر
const facilityInformation = async () => {
  try {
    const response = await api.get("/users/my_facility/");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت اطلاعات کیف پول کاربر
const getWallet = async () => {
  try {
    const response = await api.get("/users/wallet/");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت لیست قسط‌های کاربر
const getInstallments = async () => {
  try {
    const response = await api.get("/users/my_installment/");

    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت جزئیات یک قسط خاص برای پرداخت
const getInstallmentPayment = async (installmentId) => {
  try {
    const response = await api.post("/users/single_installment/", {
      installment_id: installmentId
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 پرداخت نهایی یک قسط خاص
const payInstallmentFinal = async (installmentId) => {
  try {
    const response = await api.post("/users/pay_installment/", {
      installment_id: installmentId
    });
    return { response };
  } catch (error) {
    return { error };
  }
};

// 📌 دریافت سبد خرید کاربر
const getUserCart = async () => {
  try {
    const response = await api.get("/users/my_cart/");
    return { response };
  } catch (error) {
    return { error };
  }
}

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
