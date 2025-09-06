import api from "@/config/api";

export async function GETAllProducts() {
  try {
    const response = await api.post("product/get_all_product");
    return { response };
  } catch (error) {
    return { error };
  }
}


// دریافت جزئیات یک محصول
// مسیر: POST /product/get_single_product
// ورودی: { product_id }  ← شناسه محصول
// خروجی موفق (200): { data: ... } مطابق SingleProductserializer
// خطاهای ممکن (400):
//   - { error: "send product_id" } وقتی آی‌دی ارسال نشده
//   - { error: "product with this  product_id is not found" } وقتی محصول وجود ندارد
export async function GETSingleProducts(productId) {
  try {
    const response = await api.post("product/get_single_product", {
      product_id: productId,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}


export async function AddSingleProductsToCart(productInstanceId) {
  try {
    const response = await api.post("users/add_product_to_card/", {
      product_id: productInstanceId
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

// دریافت سبد خرید کاربر
// مسیر: GET /users/my_cart/
// خروجی موفق (200):
//   - اگر سبد خالی باشد یا تازه ایجاد شود: { data: [] }
//   - اگر آیتم وجود داشته باشد: { data: Array<CartItem> }  // مطابق CartItemSerializer (با context request برای URLها)
// خطا: { error } (در صورت وجود، جزئیات در error.response)
export async function GETUserCart() {
  try {
    const response = await api.get("users/my_cart/");
    return { response };
  } catch (error) {
    return { error };
  }
}



// دریافت مجموع هزینه‌ی سبد خرید
// مسیر: GET /users/get_cart_cost/
// پیش‌نیاز: نیاز به لاگین (IsAuthenticated)
//
// خروجی موفق (200):
//   { all_products_cost: number }  ← مجموع هزینه‌ی همه آیتم‌های سبد (با تخفیف و تعداد)
//
// خطاهای رایج (400):
//   - { error: "your cart is empty" } ← اگر سبد خالی باشد
export async function GETUserCartTotalCost() {
  try {
    const response = await api.get("users/get_cart_cost/");
    return { response };
  } catch (error) {
    return { error };
  }
}




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
export async function GETUserWallet() {
  try {
    const response = await api.get("users/wallet/");
    return { response };
  } catch (error) {
    return { error };
  }
}


// پرداخت سبد خرید کاربر
// مسیر: POST /users/buy_products/
// پیش‌نیازها (طبق بک‌اند):
//  - احراز هویت (توکن لازم)
//  - وجود OTP با otp_for="buy_product" روی شماره‌ی کاربر (و عدم انقضا)
//  - خالی نبودن سبد و کافی‌بودن موجودی کیف‌پول
//
// ورودی لازم در بدنه: { otp_code: string }
// خروجی موفق (200): { message: "your bought is done" }  ← سفارش ساخته می‌شود و آیتم‌های سبد پاک می‌شوند
// خطاهای رایج (400):
//  - { error: "send otp code" }
//  - { error: "first make an otp code for yourself" }   → اول باید OTP بگیرید
//  - { error: "time of otp is expired" }                → اعتبار OTP تمام شده
//  - { error: "the code is wrong" }                     → کد اشتباه
//  - { erroe: "your cart is empty" }                    → (غلط‌املایی سمت سرور) سبد خالی
//  - { error: "your balance is not enough" }            → موجودی کیف‌پول کافی نیست
//  - { error: "No address found for the user" }         → آدرس ثبت نشده
export async function PayCartProduct(otp_code) {
  try {
    const response = await api.post("/users/buy_products/", { otp_code });
    return { response };
  } catch (error) {
    return { error };
  }
}