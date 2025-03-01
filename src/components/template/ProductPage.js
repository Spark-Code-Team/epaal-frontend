import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import ProductImage from "../module/shopPage/ProductImage";
import ProductDetails from "../module/shopPage/ProductDetails";
import ShopProduct from "../module/shopPage/ShopProduct";
import ProductOtherDetails from "../module/shopPage/ProductOtherDetails";

export default function ProductPage({ target }) {
  console.log("+++++++++++++++++++++ \n target ________________\n", target)
  return (
    <>
    <div className="my-20 flex flex-col items-center gap-2">
        <div className="md:flex md:flex-row">
          <ProductImage image={target.fake_picture} />
          <ProductDetails details={target} />
          <ShopProduct product={target} /> 
        </div>
        <div className="w-[90%]">
          {/* <ProductOtherDetails information={target[0].information} /> */}
        </div>
      </div>
    </>
  );
}
