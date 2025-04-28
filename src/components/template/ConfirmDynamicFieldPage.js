"use client"

import { useState } from "react";
import AdminShopTitle from "../elements/AdminShopTitle";
import ContedProduct from "../elements/ContedProduct";
import ContineuButton from "../elements/ContineuButton";
import ProductIdentity from "../elements/ProductIdentity";
import ProductName from "../module/AddShopProduct/ProductName";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import ConstantFields from "../module/adminShop/ConstantFields";
import Link from "next/link";
import { useSelector } from "react-redux";
import { CreateProduct } from "@/service/adminShop";
import axios from "axios";
import { getCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";



export default function ConfirmDynamicFieldPage() {

    const [dynamicData, setDynamicData] = useState({})
    const [refresh, setRefresh] = useState(false)

    const store = useSelector(store => store.addProduct)    

    const formData = new FormData()

    const router = useRouter()

    const handelCreateProduct = async () => {

        console.log(store);
        

        formData.append("name", store.name.persian_name)
        formData.append("instance", JSON.stringify(dynamicData))
        formData.append("product_topic_id", Number(store.product_topic_id))
        formData.append("detail", "کالای اضافه شده به ایوام")
        formData.append("static_fields",JSON.stringify({ 
            static_fields: store.static_fields
        }))

        store.picture.map((item, index) => {
            formData.append(`picture[${index}]`, item)
        })

        // const { response, error } = await CreateProduct(formData)

        console.log("5555555555555",[...formData.entries()]);
        
        

        // if(response) {
        //     console.log(response);
        // } else {
        //     console.log(error);
            
        // }

        const token = getCookie("accessToken")
        console.log(token);
        
        
        try {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}product/create_product`,
             formData,
             {
                headers: {
                  "Content-Type": "multipart/form-data",
                  "Authorization": `Bearer ${token}`
                },
              }
            ).then(res => router.push("/admin/admin-shop/confirm-product"))
        } catch(error) {
            return { error }
        }
    }

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
                {/* <ContedProduct /> */}
                <ProductIdentity 
                    setDynamicData={setDynamicData}
                />
            </div>
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-5
                "
            >

                <Link
                    href="/admin/admin-shop/upload-image"
                    className="
                        flex
                        w-fit
                        h-[40px]
                        p-[10px]
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-evaamGreen
                        text-evaamGreen
                        cursor-pointer
                    "
                >
                    بازگشت  به مرحله قبلی
                </Link>
                <div
                    className={`
                        flex
                        w-fit
                        h-[40px]
                        p-[10px]
                        items-center
                        justify-center
                        rounded-xl
                        cursor-pointer
                        ${dynamicData ? "bg-evaamGreen text-white" : "bg-white text-gray-600 border"}
                    `}

                    onClick={() => handelCreateProduct()}
                >
                    ساخت محصول
                </div>
            </div>
        </div>
    )
}