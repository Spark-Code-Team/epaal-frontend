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


// 📌 دریافت مدارک کاربر برای تسهیلات (فقط ادمین)
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


// 📌 تایید مدارک دیجیتال منتظر تأیید (Waiting Digital) توسط ادمین
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

// 📌 تایید مدارک فیزیکی منتظر تأیید (Waiting Physical) توسط ادمین
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



export async function POSTAcceptFinalFacitilty(faciliryId) {
  try {
    const response = await api.post("Admin/confirm_final_waiting", {
      user_facility_id: faciliryId
    });

    return { response };
  } catch (error) {
    return { error };
  }
}


export async function GetAllRequest() {
  try {
    const response = await api.get("Admin/all_shop_request")

    return { response }
  } catch( error ) {
    return { error }
  }
}


export async function GetAllTopLevelTopic() {
  try {
    const response = await api.post("product/get_all_toplevel_topic")

    return { response }
  } catch (error) {
    return { error }
  }
}

export const GetAllTopic = async () => {

    try {
        const response = await api.post("product/get_all_toplevel_topic")
    
        return { response }
    } catch(error) {
        return { error }
    }
}

export const GetAllMidlevel = async () => {

  try {
    const response = await api.post("/product/get_all_midlevel_topic")

    return { response }
  } catch(error) {
    return { error }
  }
}

export const GetAllLowlevel = async () => {
  try {
    const response = await api.post("product/get_all_lowlevel_topic")

    return { response }
  } catch (error) {
    return { error }
  }
}

export const GetAllTopicProduct = async () => {

  try {
    const response = await api.post("product/get_all_product_topic")

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteTopLevel = async (id) => {

  try {
    const response = await api.delete("product/delete_toplevel_topic", {
      data: {
        toplevel_topic: id
      } 
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteMidlevelTopic = async (midlevel_topic) => {
  try {
    const response = await api.delete("product/delete_midlevel_topic", {
      data: {
        midlevel_topic
      }
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteLowlevelTopic = async (lowlevel_topic) => {
  try {
    const response = await api.delete("product/delete_lowlevel_topic", {
      data: {
        lowlevel_topic
      }
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const DeleteTopLevelProduct = async (product_topic) => {
  try {
    const response = await api.delete("product/delete_product_topic", {
      data: {
        product_topic
      }
    })

    return { response }
  } catch (error) {
    return { error }
  }
}

export const GetRequestIdentity = async (id) => {
  try {
    const response = await api.get(`Admin/single_shop_request?shop_request_id=${id}`)

    return { response }
  } catch (error) {
    return { error }
  }
}