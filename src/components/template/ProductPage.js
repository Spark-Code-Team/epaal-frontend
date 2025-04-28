"use client";

import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import ProductImage from "../module/shopPage/ProductImage";
import ProductDetails from "../module/shopPage/ProductDetails";
import ShopProduct from "../module/shopPage/ShopProduct";
import ProductOtherDetails from "../module/shopPage/ProductOtherDetails";
import { useState } from "react";

export default function ProductPage({ target }) {
  const [defaultInstance, setDefaultInstance] = useState(
    target.instances[0],
  );

  console.log("chosen instance => \n", defaultInstance)

  return (
    <>
      <div className="my-20 flex flex-col items-center gap-2">
        <div className="gap-2 md:flex md:w-full md:flex-row">
          <ProductImage image={target.iamges} />
          <ProductDetails
            details={target}
            defaultInstance={defaultInstance}
            setDefaultInstance={setDefaultInstance}
          />
          <ShopProduct
            product={target}
            defaultInstance={defaultInstance}
            setDefaultInstance={setDefaultInstance}
          />
        </div>
        <div className="w-[90%]">
          <ProductOtherDetails statics={target.static_fileds} dynamics={defaultInstance} />
        </div>
      </div>
    </>
  );
}
