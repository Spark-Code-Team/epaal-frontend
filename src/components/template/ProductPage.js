import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import ProductImage from "../module/shopPage/ProductImage";
import ProductDetails from "../module/shopPage/ProductDetails";
import ShopProduct from "../module/shopPage/ShopProduct";



export default function ProductPage ({ target }) {

    return (
        <>
            <div
                className="
                    bg-slate-300
                    flex
                    gap-2
                    items-center
                    p-3
                    text-[#666464]
                "
            >
                <p>
                    خانه
                </p>
                <LeftAroowBlur />
                <p>
                    {
                        target[0].faCategory 
                    }
                </p>
            </div>
            <div
                className="
                    my-14
                    grid
                    grid-cols-3
                "
            >
                <ProductImage 
                    image={target[0].image}
                />
                <ProductDetails 
                    details={target}
                />
                <ShopProduct product={target[0]} />
            </div>
        </>
    )
}