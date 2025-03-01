import api from "@/config/api";

export async function GETAllProducts() {
  try {
    const response = await api.post("product/get_all_product");
    return { response };
  } catch (error) {
    return { error };
  }
}


export async function GETSingleProducts(productId) {
  try {
    const response = await api.post("product/get_single_product", {
      product_id: productId
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