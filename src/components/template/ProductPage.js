import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import ProductImage from "../module/shopPage/ProductImage";
import ProductDetails from "../module/shopPage/ProductDetails";
import ShopProduct from "../module/shopPage/ShopProduct";

export default function ProductPage({ target }) {
  return (
    <>
      {/* <div className="flex items-center gap-2 bg-slate-300 p-3 text-[#666464]">
        <p>خانه</p>
        <LeftAroowBlur height={10} width={10} />
        <p>{target[0].faCategory}</p>
      </div> */}
      <div className="flex flex-col items-center md:flex-row gap-2 my-20 ">
        <ProductImage image={target[0].image}/>
        <ProductDetails details={target} />
        <ShopProduct product={target[0]} />
      </div>
    </>
  );
}
