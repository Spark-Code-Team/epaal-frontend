"use client"

import { useSelector } from "react-redux";
import ContineuButton from "../elements/ContineuButton";
import AddProductTitle from "../module/adminShop/AddProductTitle";
import Hint from "../module/adminShop/Hint";
import SelectCategory from "../module/adminShop/SelectCategory";
import { useEffect } from "react";



export default function AddShopProductPage() {

    const store = useSelector(store => store.addProduct)

    useEffect(() => {
        console.log(store);
    }, [store])

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
                <AddProductTitle 
                    levelState={1}
                />
                <Hint />
                <SelectCategory />
            </div>
            <div>
                <ContineuButton
                    href="/admin/admin-shop/add-field"
                    canReturn={false}
                    backHref="/"
                    canGo={store.product_topic_id}
                />
            </div>
        </div>
    )
}