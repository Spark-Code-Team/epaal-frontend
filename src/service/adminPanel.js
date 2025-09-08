import api from "@/config/api";

// دریافت همه تسهیلات در وضعیت انتظار (Waiting Facilities)
// مسیر: GET /Admin/get_all_waiting_facility
// پیش‌نیاز: کاربر باید نقش admin داشته باشد (role.name == "admin")
//
// خروجی موفق (200):
//   - اگر داده وجود داشته باشد: { data: Array<...> } ← لیست تسهیلات مطابق FacilityUseerSerialiser
//   - اگر داده وجود نداشته باشد: { data: {} }
//
// خطاهای رایج:
//   - { error: "you are not admin" } ← اگر نقش کاربر admin نباشد
export async function GETAllWaitingUserFacitilty() {
  try {
    const response = await api.get("Admin/get_all_waiting_facility");
    return { response };
  } catch (error) {
    return { error };
  }
}


// دریافت مدارک کاربر برای تسهیلات (فقط ادمین)
// مسیر: POST /Admin/get_user_file
// پیش‌نیاز: نقش کاربر باید admin باشد
//
// ورودی: 
//   { user_facility_id: number } ← شناسه‌ی تسهیلات کاربر
//
// خروجی موفق (200):
//   - اگر مدرکی وجود داشته باشد: { data: Array<...> } مطابق GetUserDocumentSerializer
//   - اگر مدرکی وجود نداشته باشد: { data: [] }
//
// خطاهای رایج:
//   - { error: "you are not admin" }                         ← اگر کاربر ادمین نباشد
//   - { error: "send user_facility_id" }                     ← اگر مقدار ارسال نشود
//   - { error: "user_facility not found" } (404)             ← اگر تسهیلات وجود نداشته باشد
//   - { error: "user_facility is not in in_progress status"} ← اگر وضعیت تسهیلات in_progress نباشد
export async function GETWaitedUserFacitiltyClues(user_facility_id) {
  try {
    const response = await api.post("Admin/get_user_file", {
      user_facility_id,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

// رد کردن (Reject) یک تسهیلات توسط ادمین
// مسیر: POST /Admin/reject_facility
// پیش‌نیاز: نقش کاربر باید admin باشد
//
// ورودی (body):
//   {
//     user_facility_id: number,   ← شناسه‌ی تسهیلات
//     reject_text: string         ← دلیل رد شدن (اجباری)
//   }
//
// خروجی موفق (200):
//   { data: "user_facility status changed to reject" }
//
// خطاهای رایج:
//   - { error: "you are not admin" }                         ← اگر کاربر ادمین نباشد
//   - { error: "send user_facility_id" }                     ← اگر شناسه ارسال نشود
//   - { error: "user_facility not found" } (404)             ← اگر شناسه‌ی تسهیلات موجود نباشد
//   - { error: "user_facility is not in in_progress status"} ← اگر وضعیت تسهیلات غیر از in_progress باشد
//   - { error: "send reject_text" }                          ← اگر متن دلیل ارسال نشود یا خالی باشد
export async function POSTRejectDigitalFacitiltyClues(object) {
  try {
    const response = await api.post("Admin/reject_facility", object);
    return { response };
  } catch (error) {
    return { error };
  }
}


// تایید مدارک دیجیتال منتظر تأیید (Waiting Digital) توسط ادمین
// مسیر: POST /Admin/confirm_waitnig_digital   ⚠️ غلط املایی در مسیر: "waitnig" به جای "waiting"
// پیش‌نیاز: نقش کاربر باید admin باشد
//
// ورودی (body):
//   { user_facility_id: number } ← شناسه‌ی تسهیلات کاربر
//
// خروجی موفق (200):
//   { data: "user_facility level changed to submit_physical" } ← سطح از waiting_digital (۴) به submit_physical (۵) تغییر می‌کند
//
// خطاهای رایج:
//   - { error: "you are not admin" }                  ← اگر نقش کاربر admin نباشد
//   - { error: "send user_facility_id" }              ← اگر شناسه ارسال نشود
//   - { error: "user_facility not found" } (404)      ← اگر تسهیلات وجود نداشته باشد
//   - { error: "user_facility is not in waiting_digital level" } ← اگر سطح تسهیلات چیز دیگری باشد
export async function POSTAcceptDigitalFacitiltyClues(object) {
  try {
    const response = await api.post("Admin/confirm_waitnig_digital", object);
    return { response };
  } catch (error) {
    return { error };
  }
}

// تایید مدارک فیزیکی منتظر تأیید (Waiting Physical) توسط ادمین
// مسیر: POST /Admin/confirm_waitnig_physical   ⚠️ غلط املایی در مسیر: "waitnig" به جای "waiting"
// پیش‌نیاز: کاربر باید نقش admin داشته باشد
//
// ورودی (body):
//   { user_facility_id: number } ← شناسه‌ی تسهیلات کاربر
//
// خروجی موفق (200):
//   { data: "user_facility level changed to digital_signiture" } ← سطح از waiting_physical (۵) به digital_signiture (۶) تغییر می‌کند
//
// خطاهای رایج:
//   - { error: "you are not admin" }                      ← اگر کاربر ادمین نباشد
//   - { error: "send user_facility_id" }                  ← اگر شناسه ارسال نشود
//   - { error: "user_facility not found" } (404)          ← اگر تسهیلات وجود نداشته باشد
//   - { error: "user_facility is not in waiting_physical level" } ← اگر سطح تسهیلات متفاوت باشد
export async function POSTAcceptPhysicalFacitiltyClues(object) {
  try {
    const response = await api.post("Admin/confirm_waitnig_physical", object);
    return { response };
  } catch (error) {
    return { error };
  }
}



// تأیید نهایی تسهیلات (مرحله final_waiting → ایجاد اقساط و شارژ کیف‌پول)
// مسیر: POST /Admin/confirm_final_waiting
// پیش‌نیاز: کاربر باید admin باشد.
//
// ورودی (body):
//   { user_facility_id: number }   ← شناسه‌ی تسهیلات کاربر
//
// رفتار سمت سرور به‌صورت خلاصه:
//   - اعتبارسنجی سطح: باید در level="final_waiting" و level_number=8 و status="in_progress" باشد
//   - محاسبه مبلغ شارژ کیف‌پول (given_value با کسر evaam_subscripton_percent متناسب با تعداد اقساط)
//   - تغییر status وام به "installment"
//   - شارژ کیف‌پول کاربر با مبلغ محاسبه‌شده و ثبت تراکنش bank_deposite
//   - ایجاد اقساط (UserInstallment) با فرمول قسط ثابت و سررسیدهای ماهانه
//   - ارسال SMS اطلاع‌رسانی
//
// خروجی موفق (200):
//   { data: "user_facility status changed to done" }
//
// خطاهای رایج:
//   - { error: "you are not admin" }
//   - { error: "send user_facility_id" }
//   - { error: "user_facility not found" } (404)
//   - { error: "user_facility is not in final_waiting level" }
export async function POSTAcceptFinalFacitilty(faciliryId) {
  try {
    const response = await api.post("Admin/confirm_final_waiting", {
      user_facility_id: faciliryId,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}



// گرفتن همه درخواست‌های فروشگاه (فقط ادمین)
// مسیر: GET /Admin/all_shop_request
// احراز هویت: لازم (IsAuthenticated) + نقش باید admin باشد؛ در غیر اینصورت:
//   - 403: { message: "You can not access this url" }
//
// پارامتر اختیاری کوئری:
//   - is_seen = "true" | "false"
//     اگر ارسال شود، بک‌اند بر اساسش فیلتر می‌کند؛ اگر مقدارِی غیر از این دو باشد:
//     - 400: { message: "send is_seen" }
//
// خروجی موفق (200):
//   - اگر داده‌ای نباشد: { data: {} }
//   - اگر داده باشد: { data: Array<...> }  ← مطابق ShopRequestSerializer
export async function GetAllRequest() {
  try {
    const response = await api.get("Admin/all_shop_request");
    return { response };
  } catch (error) {
    return { error };
  }
}


// دریافت همه موضوعات سطح بالا (TopLevelTopic)
// مسیر: POST /product/get_all_toplevel_topic
// پیش‌نیاز: ندارد
//
// ورودی: بدون پارامتر (body خالی)
//
// خروجی موفق (200):
//   { data: [ { id, title, description, ... }, ... ] }
//
// در صورت نبود داده (204):
//   { error: "there is not any topic" }
//
// ⚠️ توجه: این API از POST استفاده می‌کند، ولی رفتار آن مشابه GET است.
export async function GetAllTopLevelTopic() {
  try {
    const response = await api.post("product/get_all_toplevel_topic");
    return { response };
  } catch (error) {
    return { error };
  }
}

// دریافت همه موضوعات سطح بالا (TopLevelTopic)
// مسیر: POST /product/get_all_toplevel_topic
// پیش‌نیاز: ندارد
//
// ورودی: بدون پارامتر (body خالی)
//
// خروجی موفق (200):
//   { data: [ { id, title, description, ... }, ... ] }
//
// در صورت نبود داده (204):
//   { error: "there is not any topic" }
//
// ⚠️ توجه: این API از POST استفاده می‌کند، ولی رفتار آن مشابه GET است.
export const GetAllTopic = async () => {
  try {
    const response = await api.post("product/get_all_toplevel_topic");
    return { response };
  } catch (error) {
    return { error };
  }
};




// دریافت همه موضوعات میانی (MidlevelTopic)
// مسیر: POST /product/get_all_midlevel_topic
// پیش‌نیاز: ندارد
//
// ورودی (body – اختیاری):
//   {
//     toplevel_topic: number | string,   ← شناسه یا کلید موضوع سطح بالا
//     is_product: boolean                ← فیلتر بر اساس داشتن محصول یا نه
//   }
//   ⚠️ هر دو فیلد اختیاری هستند؛ در صورت ارسال، برای فیلتر نتایج استفاده می‌شوند.
//
// خروجی موفق (200):
//   { data: [ { id, title, description, toplevel_topic, ... }, ... ] }
//
// در صورت نبود داده (204):
//   { error: "there is not any midlevel topic" }
//
// ⚠️ توجه: این API با POST پیاده‌سازی شده اما عملاً نقش GET با فیلتر را دارد.
export const GetAllMidlevel = async () => {
  try {
    const response = await api.post("/product/get_all_midlevel_topic");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت همه موضوعات سطح پایین (LowlevelTopic)
// مسیر: POST /product/get_all_lowlevel_topic
// پیش‌نیاز: ندارد
//
// ورودی (body – اختیاری):
//   {
//     midlevel_topic: number | string   ← شناسه یا کلید موضوع میانی
//   }
//
// خروجی موفق (200):
//   { data: [ { id, title, description, midlevel_topic, ... }, ... ] }
//
// در صورت نبود داده (204):
//   { error: "there is not any topic" }
//
// توجه: این API با POST پیاده‌سازی شده اما در عمل مشابه GET با امکان فیلتر عمل می‌کند.
export const GetAllLowlevel = async () => {
  try {
    const response = await api.post("product/get_all_lowlevel_topic");
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت همه موضوعات محصول (ProductTopic)
// مسیر: POST /product/get_all_product_topic
// پیش‌نیاز: ندارد
//
// ورودی (body – اختیاری):
//   {
//     lowlevel_topic: number | string   ← شناسه یا کلید موضوع سطح پایین
//   }
//
// خروجی موفق (200):
//   { data: [ { id, title, description, lowlevel_topic, ... }, ... ] }
//
// در صورت نبود داده (204):
//   { error: "there is not any topic" }
//
// توجه: این API با POST پیاده‌سازی شده اما در عمل مشابه GET با امکان فیلتر عمل می‌کند.
export const GetAllTopicProduct = async () => {
  try {
    const response = await api.post("product/get_all_product_topic");
    return { response };
  } catch (error) {
    return { error };
  }
};


// حذف موضوع سطح بالا (ToplevelTopic)
// مسیر: DELETE /product/delete_toplevel_topic
// پیش‌نیاز: کاربر باید admin باشد
//
// ورودی (body):
//   {
//     toplevel_topic: number   ← شناسه موضوع سطح بالا برای حذف
//   }
//
// خروجی موفق (200):
//   { message: "deleted" }
//
// خطاهای رایج (400):
//   { error: "you cant do this" }                ← اگر کاربر ادمین نباشد
//   { error: "you should send toplevel_topic" }  ← اگر ورودی ارسال نشود
//   { error: "toplevel with this id is not found" } ← اگر شناسه وجود نداشته باشد
export const DeleteTopLevel = async (id) => {
  try {
    const response = await api.delete("product/delete_toplevel_topic", {
      data: {
        toplevel_topic: id,
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// حذف موضوع میانی (MidlevelTopic)
// مسیر: DELETE /product/delete_midlevel_topic
// پیش‌نیاز: کاربر باید admin باشد
//
// ورودی (body):
//   {
//     midlevel_topic: number   ← شناسه موضوع میانی برای حذف
//   }
//
// خروجی موفق (200):
//   { message: "deleted" }
//
// خطاهای رایج (400):
//   { error: "you cant do this" }                   ← اگر کاربر ادمین نباشد
//   { error: "you should send midlevel_topic" }     ← اگر ورودی ارسال نشود
//   { error: "midlevel with this id is not found" } ← اگر شناسه وجود نداشته باشد
export const DeleteMidlevelTopic = async (midlevel_topic) => {
  try {
    const response = await api.delete("product/delete_midlevel_topic", {
      data: {
        midlevel_topic,
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// حذف موضوع سطح پایین (LowlevelTopic)
// مسیر: DELETE /product/delete_lowlevel_topic
// پیش‌نیاز: کاربر باید admin باشد
//
// ورودی (body):
//   {
//     lowlevel_topic: number   ← شناسه موضوع سطح پایین برای حذف
//   }
//
// خروجی موفق (200):
//   { message: "deleted" }
//
// خطاهای رایج (400):
//   { error: "you cant do this" }                     ← اگر کاربر ادمین نباشد
//   { error: "you should send lowlevel_topic" }       ← اگر ورودی ارسال نشود
//   { error: "lowlevel with this id is not found" }   ← اگر شناسه وجود نداشته باشد
export const DeleteLowlevelTopic = async (lowlevel_topic) => {
  try {
    const response = await api.delete("product/delete_lowlevel_topic", {
      data: {
        lowlevel_topic,
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// حذف موضوع محصول (ProductTopic)
// مسیر: DELETE /product/delete_product_topic
// پیش‌نیاز: کاربر باید admin باشد
//
// ورودی (body):
//   {
//     product_topic: number   ← شناسه موضوع محصول برای حذف
//   }
//
// خروجی موفق (200):
//   { message: "deleted" }
//
// خطاهای رایج (400):
//   { error: "you cant do this" }                        ← اگر کاربر ادمین نباشد
//   { error: "you should send product_topic" }           ← اگر ورودی ارسال نشود
//   { error: "product with this id is not found" }       ← اگر شناسه وجود نداشته باشد
export const DeleteTopLevelProduct = async (product_topic) => {
  try {
    const response = await api.delete("product/delete_product_topic", {
      data: {
        product_topic,
      },
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت جزئیات یک درخواست فروشگاه (ShopRequest)
// مسیر: GET /Admin/single_shop_request?shop_request_id={id}
// پیش‌نیاز: کاربر باید admin باشد
//
// ورودی (query string):
//   shop_request_id: number   ← شناسه درخواست فروشگاه
//
// خروجی موفق (200):
//   { id, user, ... , is_seen, ... }  ← آبجکت کامل ShopRequest (طبق اسکیمای سرور)
//
// خطاهای رایج:
//   403: { error: "You can not access this url" }          ← اگر دسترسی ادمین نباشد
//   400: { error: "send shop_request_id" }                  ← اگر شناسه ارسال نشود/خالی باشد
//   404: { error: "shop_request not found" }                ← اگر شناسه معتبر نباشد
export const GetRequestIdentity = async (id) => {
  try {
    const response = await api.get(`Admin/single_shop_request?shop_request_id=${id}`);
    return { response };
  } catch (error) {
    return { error };
  }
};
