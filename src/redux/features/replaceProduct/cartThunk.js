import { replaceUserCart } from "@/service/products";

export const syncCartWithServer = () => async (dispatch, getState) => {
  const state = getState();

  const selectedItems = state.cart.selectedItems || [];

  const payload = selectedItems.map((item) => ({
    product_instance: item.product_instance.id,
    quantity: item.quantity,
  }));

  const { response, error } = await replaceUserCart({ items: payload });
  if (error) {
    console.error("خطا در ارسال سبد:", error);
  } else {
    console.log("سبد با موفقیت جایگزین شد:", response);
  }
};
