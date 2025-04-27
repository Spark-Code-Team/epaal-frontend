"use client"

import { useDispatch, useSelector } from "react-redux";
import AdminShopTitle from "../elements/AdminShopTitle";
import ContineuButton from "../elements/ContineuButton";
import ProductName from "../module/AddShopProduct/ProductName";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import ConstantFields from "../module/adminShop/ConstantFields";
import { useEffect, useState } from "react";
import { addfieldAndName } from "@/redux/features/addProduct/addProduct";



export default function ConstantConfirm() {

    const [filedsValue, setFieldsValue] = useState([])
    const [name, setName] = useState("")
    const fields = useSelector(store => store.staticDynamic.statics)
    const addProduct = useSelector(store => store.addProduct)
    const [refresh, setRefresh] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addfieldAndName({
            name,
            static: filedsValue
        }))
        console.log(filedsValue);
        
    }, [refresh])
    

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
                <ProductName 
                    name={name}
                    setName={setName}
                />
                <ConstantFields 
                    fields={fields}
                    filedsValue={filedsValue}
                    setFieldsValue={setFieldsValue}
                />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/upload-image"
                    canReturn={true}
                    backHref="/admin/admin-shop/add-field"
                    setRefresh={setRefresh}
                    canGo={name && filedsValue.length != 0}
                />
            </div>
        </div>
    )
}