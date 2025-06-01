"use client";

import ProductPage from "@/components/template/ProductPage";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GETSingleProducts } from "@/service/products";
import { toast } from "react-toastify";

export default function Product() {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params?.productId) return; // بررسی مقدار params

    async function fetchSingleProduct() {
      try {
        const { response, error } = await GETSingleProducts(params.productId);

        if (response) {
          setSingleProduct(response.data.data);
          console.log(response.data.data);
        } else {
          toast.error("Failed to load single product");
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchSingleProduct();
  }, [params?.productId]);

  if (loading) return <p>در حال بارگیری...</p>;
  if (!singleProduct) return <p>محصول یافت نشد</p>;

  return <ProductPage target={singleProduct} />;
}
