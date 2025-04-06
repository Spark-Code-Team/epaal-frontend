import AdminShopTitle from "../elements/AdminShopTitle";
import ContineuButton from "../elements/ContineuButton";
import ProductName from "../module/AddShopProduct/ProductName";
import AddProductTitle from "../module/adminShop/AddProductTitle";



export default function ConstantConfirm() {

    return (
        <div
            className="
                w-full
                h-full
                flex
                flex-col
                justify-between
            "
        >
            <div>
                <AddProductTitle levelState={3} />
                <AdminShopTitle
                    title="فیلدهای ثابت که در مرحله قبل انتخاب کرده اید را تکمیل کنید."
                />
                <ProductName />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/constant-field-confirm"
                />
            </div>
        </div>
    )
}