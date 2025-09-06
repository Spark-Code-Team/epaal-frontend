import api from "@/config/api";

// دریافت لیست محصولات (ProductInstance) با فیلتر موضوعی
// مسیر: POST /product/get_all_product_instance
// ورودی (اختیاری - یکی از موارد زیر):
//   - { toplevel_topic_id: number|string }       → فیلتر بر اساس تاپ‌لِول
//   - { midlevel_topic_id: number|string }       → فیلتر بر اساس مید‌لِول
//   - { lowlevel_topic_id: number|string }       → فیلتر بر اساس لو‌لِول
//   - { product_topic_id: number|string }        → فیلتر بر اساس موضوع محصول
// خروجی موفق (200): آرایه‌ای از ProductInstance ها مطابق AllProductInstanceSerializer
// خطا: { error }
const getAllProduct = async (filters = {}) => {
  try {
    const response = await api.post("/product/get_all_product_instance", filters);
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت فیلدهای لازم برای ایجاد محصول جدید
// مسیر: POST /shop/get_field_for_create_product
// ورودی: { prouduct_topic_id: number|string }
//   ⚠️ توجه: در بک‌اند کلید "prouduct_topic_id" (با املای غلط) استفاده شده است،
//   بنابراین در فرانت‌اند هم باید همان کلید ارسال شود.
// پیش‌نیاز: نقش کاربر باید "shop_admin" باشد؛ در غیر این صورت → 403 Forbidden
// خروجی موفق (200): { data: Array<...> }  ← لیست فیلدها مطابق GetFieldForCreateProductSerializer
// خروجی خطا:
//   - 400: { error: "send prouduct_topic_id" } اگر آی‌دی ارسال نشود
//   - 204: { error: "there is not any fields" } اگر هیچ فیلتری وجود نداشته باشد
//   - 403: { message: "You can not access this url" } اگر نقش کاربر shop_admin نباشد
const getAllField = async (product_topic_id) => {
  try {
    const response = await api.post("/shop/get_field_for_create_product", {
      prouduct_topic_id: product_topic_id,
    });
    return { response };
  } catch (error) {
    return { error };
  }
};


// دریافت همه دسته‌بندی‌های سطح بالا (Top Level Topics)
// مسیر: GET /product/all_topic
// خروجی موفق (200):
//   { toplevel_topic: Array<...> }  ← لیست موضوعات سطح بالا مطابق All_ToplevelSerializer
// خروجی بدون داده (204):
//   { error: "there is not any top level topic" }
// خطاهای دیگر: { error } (با جزئیات در error.response در صورت وجود)
const getAllTopic = async () => {
  try {
    const response = await api.get("/product/all_topic");
    return { response };
  } catch (error) {
    return { error };
  }
};

export { getAllProduct, getAllField, getAllTopic };