import AdminShopTitle from "../elements/AdminShopTitle";
import ContedProduct from "../elements/ContedProduct";
import ContineuButton from "../elements/ContineuButton";
import ProductIdentity from "../elements/ProductIdentity";
import ProductName from "../module/AddShopProduct/ProductName";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import ConstantFields from "../module/adminShop/ConstantFields";



export default function ConfirmDynamicFieldPage() {

    return (
        <div
            className="
                w-full
                h-full
                flex
                flex-col
                justify-between
                mx-3
            "
        >
            <div>
                <AddProductTitle levelState={4} />
                <AdminShopTitle
                    title="تعداد نوع محصول"
                />
                <ContedProduct />
                <ProductIdentity />
            </div>
            <div>
                <ContineuButton
                    canReturn={true}
                    href="/admin/admin-shop/confirm-product"
                    backHref="/admin/admin-shop/upload-image"
                />
            </div>
        </div>
    )
}