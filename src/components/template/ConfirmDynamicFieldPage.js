import AdminShopTitle from "../elements/AdminShopTitle";
import ContineuButton from "../elements/ContineuButton";
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
                    title="فیلدهای ثابت که در مرحله قبل انتخاب کرده اید را تکمیل کنید."
                />
                
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/dynamic-field-confirm"
                />
            </div>
        </div>
    )
}