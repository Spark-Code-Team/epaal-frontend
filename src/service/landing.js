import api from "@/config/api"



// ارسال درخواست ایجاد فروشگاه
// مسیر: POST /shop/create_shop_request
// ورودی‌ها (بدنه JSON):
//   - shop_name (string)    ← نام فروشگاه
//   - first_name (string)   ← نام صاحب/مسئول
//   - last_name (string)    ← نام خانوادگی
//   - phone_number (string) ← شماره تماس
//   - site_url (string)     ← آدرس سایت (اختیاری/الزامی بسته به بک‌اند)
// خروجی موفق (201): { message: "Shop request created successfully" }
// خروجی خطا (400): جزئیات اعتبارسنجی از CreateShopRequestSerializer
export const sendShopRequest = async (
    shop_name,
    first_name,
    last_name,
    phone_number,
    site_url
  ) => {
    console.log(shop_name, first_name, last_name, phone_number, site_url);
  
    try {
      const response = await api.post("/shop/create_shop_request", {
        shop_name,
        first_name,
        last_name,
        phone_number,
        site_url,
      });
  
      return { response };
    } catch (error) {
      return { error };
    }
  };
  