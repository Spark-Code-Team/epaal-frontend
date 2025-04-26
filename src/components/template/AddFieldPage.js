"use client"

import { useSelector } from "react-redux";
import AdminShopTitle from "../elements/AdminShopTitle";
import ContineuButton from "../elements/ContineuButton";
import ConstantDynamic from "../module/AddShopProduct/ConstantDynamic";
import AddProductTitle from "../module/adminShop/AddProductTitle";



export default function AddFieldPage() {

    const store = useSelector(store => store.staticDynamic)

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
                <AddProductTitle levelState={2} />
                <AdminShopTitle 
                    title="فیلدهای مد نظر را برای تکمیل مشخصات محصول انتخاب کنید(حداقل یک فیلد)"
                />
                <ConstantDynamic />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/constant-field-confirm"
                    canReturn={true}
                    backHref="/admin/admin-shop/add-product"
                    canGo={store.dynamic.length !=0 || store.statics.length != 0}
                />
            </div>
        </div>
    )
}