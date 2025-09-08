import api from "@/config/api"



// دریافت همه دسته‌بندی‌های سطح بالا (Top Level Topics)
// مسیر: POST /product/get_all_toplevel_topic
// خروجی موفق (200): { data: Array<...> } ← لیست موضوعات مطابق ToplevelTopicSerializer
// خروجی بدون داده (204): { error: "there is not any topic" }
// خطا: { error } (جزئیات در error.response در صورت وجود)
const categoryAll = async () => {
    try {
      const response = await api.post("/product/get_all_toplevel_topic");
      return { response };
    } catch (error) {
      console.log(error)
      return { error };
    }
  };
  


// دریافت دسته‌بندی‌های میانی (Midlevel Topics)
// مسیر: POST /product/get_all_midlevel_topic
// ورودی‌های اختیاری برای فیلتر:
//   - toplevel_topic (number|string) → شناسه‌ی دسته‌بندی سطح بالا
//   - is_product (boolean|number)    → تعیین اینکه این دسته‌بندی محصول دارد یا خیر
// خروجی موفق (200): { data: Array<...> } ← لیست دسته‌های میانی مطابق MidlevelTopicSerializer
// خروجی بدون داده (204): { error: "there is not any midlevel topic" }
// خطا: { error }
const ServiceAndProduct = async (toplevel_topic, is_product) => {
    try {
      const response = await api.post("/product/get_all_midlevel_topic", {
        toplevel_topic,
        is_product,
      });
      return { response };
    } catch (error) {
      console.log(error)
      return { error };
    }
  };
  

// دریافت دسته‌بندی‌های سطح پایین (Lowlevel Topics)
// مسیر: POST /product/get_all_lowlevel_topic
// ورودی اختیاری:
//   - midlevel_topic (number|string) → شناسه‌ی دسته‌بندی میانی برای فیلتر
// خروجی موفق (200): { data: Array<...> } ← لیست دسته‌های سطح پایین مطابق LowlevelTopicSerializer
// خروجی بدون داده (204): { error: "there is not any topic" }
// خطا: { error }
const LowlevelCategoryAll = async (midlevel_topic) => {
    try {
      const response = await api.post("/product/get_all_lowlevel_topic", {
        midlevel_topic,
      });
      return { response };
    } catch (error) {
      console.log(error)
      return { error };
    }
  };



// دریافت همه‌ی موضوعات محصول (Product Topics)
// مسیر: POST /product/get_all_product_topic
// ورودی اختیاری:
//   - lowlevel_topic (number|string) → شناسه‌ی دسته‌بندی سطح پایین برای فیلتر
// خروجی موفق (200): { data: Array<...> } ← لیست موضوعات محصول مطابق ProductTopicSerializer
// خروجی بدون داده (204): { error: "there is not any topic" }
// خطا: { error }
const AllProductTopic = async (lowlevel_topic) => {
  try {
    const response = await api.post("/product/get_all_product_topic", {
      lowlevel_topic,
    });
    return { response };
  } catch (error) {
    console.log(error)
    return { error };
  }
};

// ایجاد محصول جدید (فروشنده)
// مسیر: POST /product/create_product
// پیش‌نیاز: کاربر با نقش "shop_admin" لاگین باشد.
// نوع ارسال: multipart/form-data  (باید یک FormData واقعی ارسال شود)
//
// فیلدهای لازم داخل FormData:
//  - name                (string)                     ← نام محصول
//  - product_topic_id    (number|string)              ← شناسه موضوع محصول
//  - static_fields       (string, JSON)               ← به شکل JSON.stringify({ static_fields: [...] })
//      هر آیتم static_fields:
//        {
//          field_id: number,
//          // اگر فیلد is_choosable=false → باید field_value (string) بدهید
//          // اگر فیلد is_choosable=true  → باید field_value_id (number) بدهید
//        }
//    مثال مقداردهی:
//      JSON.stringify({
//        static_fields: [
//          { field_id: 10, field_value: "مشکی" },            // non-choosable
//          { field_id: 12, field_value_id: 305 }             // choosable
//        ]
//      })
//
//  - instance           (string, JSON)                ← به شکل JSON.stringify({ instance: [...] })
//      هر آیتم instance:
//        {
//          capacity: number,                           // الزامی
//          price: number,                              // الزامی (⚠️ بک‌اند فعلی price را اشتباهاً از capacity می‌سازد)
//          discount?: number,                          // 0..100 (اختیاری)
//          dynamic_fields?: [                          // اختیاری
//            {
//              field_id: number,
//              // مثل static_fields: یا field_value (non-choosable) یا field_value_id (choosable)
//            }
//          ]
//        }
//    مثال مقداردهی:
//      JSON.stringify({
//        instance: [
//          {
//            capacity: 5,
//            price: 200000,
//            discount: 10,
//            dynamic_fields: [
//              { field_id: 21, field_value_id: 501 },  // choosable
//              { field_id: 22, field_value: "XL" }     // non-choosable
//            ]
//          },
//          { capacity: 3, price: 150000 }
//        ]
//      })
//
//  - picture[0], picture[1], ... (File)               ← فایل‌های تصویر محصول (اختیاری)
//
// خروجی موفق: { message: "product is created" }
// خطا: { error: "<message>" } (ولیدیشن‌ها یا شرایط نقش/فروشگاه)
//
// نکته مهم: حتماً FormData را مستقیم به axios بدهید (نه به‌صورت { data: formData })
const CreateProduct = async (formData) => {
    try {
      const response = await api.post("/product/create_product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return { response };
    } catch (error) {
      console.log(error)
      return { error };
    }
  };
  


export {
    categoryAll,
    ServiceAndProduct,
    LowlevelCategoryAll,
    AllProductTopic,
    CreateProduct,
}