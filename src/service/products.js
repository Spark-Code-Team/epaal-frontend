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
      product_id: productId,
    });
    return { response };
  } catch (error) {
    return { error };
  }
}

export async function AddSingleProductsToCart(productInstanceId) {
  console.log(
    "=------------------------------ > fjdkfjd \n",
    productInstanceId,
  );
  try {
    const response = await api.post("users/add_products_to_card/", {
      product_instances: [{ product_instance: productInstanceId, quantity: 1 }],
    });

    // console.log("Response:", response);
    return { response, error: null };
  } catch (error) {
    // console.log("Error:", error);
    return { response: null, error };
  }
}

export async function GETUserCart() {
  try {
    const response = await api.get("users/my_cart/");
    return { response };
  } catch (error) {
    return { error };
  }
}

export async function GETUserCartTotalCost() {
  try {
    const response = await api.get("users/get_cart_cost/");
    return { response };
  } catch (error) {
    return { error };
  }
}

export async function GETUserWallet() {
  try {
    const response = await api.get("users/wallet/");
    return { response };
  } catch (error) {
    return { error };
  }
}

export async function PayCartProduct() {
  try {
    const response = await api.post("users/buy_products/");
    return { response };
  } catch (error) {
    return { error };
  }
}

export async function replaceUserCart(data) {
  console.log("fdjaskfdjaaaaaaaaaaaa65295295292 \n", { data });
  try {
    const response = await api.post("users/replace_cart/", {
      product_instances: data,
    });

    return { response };
  } catch (error) {
    return { error };
  }
}
