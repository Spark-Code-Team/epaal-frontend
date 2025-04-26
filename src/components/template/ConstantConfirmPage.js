"use client"

import { useSelector } from "react-redux";
import AdminShopTitle from "../elements/AdminShopTitle";
import ContineuButton from "../elements/ContineuButton";
import ProductName from "../module/AddShopProduct/ProductName";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import ConstantFields from "../module/adminShop/ConstantFields";



export default function ConstantConfirm() {

    const fields = useSelector(store => store.staticDynamic.statics)

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
                <AddProductTitle levelState={3} />
                <AdminShopTitle
                    title="فیلدهای ثابت که در مرحله قبل انتخاب کرده اید را تکمیل کنید."
                />
                <ProductName />
                <ConstantFields 
                    fields={fields}
                />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/upload-image"
                    canReturn={true}
                    backHref="/admin/admin-shop/add-field"
                />
            </div>
        </div>
    )
}