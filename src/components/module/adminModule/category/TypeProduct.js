"use client"

import { useState } from "react";
import CheckDefaultCategory from "../../../../../public/icons/Admin/CheckDefaultCategory";
import CheckTrueCategory from "../../../../../public/icons/Admin/CheckTrueCategory";



export default function TypeProduct() {

    const [kalaToggle, setKalaToggle] = useState({
        kala: false,
        khadamat: false
    })

    const changeToggleKala = (name) => {
        if(kalaToggle[name] == true) {
            setKalaToggle(last => ({...last, [name]: false }))
        } else {
            setKalaToggle(last => ({...last, [name]: true }))
        }
    }

    return (
        <div
            className="
                pr-8
                pt-8
                flex
                w-full
                justify-between
                items-center
            "
        >
            <div
                className="
                    text-[20px]
                    font-medium
                "
            >
                نوع دسته را انتخاب کنید :
            </div>
            
            <div
                className="
                    flex
                    w-[25%]
                    justify-between
                    items-center
                    gap-2
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                    "
                    onClick={() => changeToggleKala("kala")}
                >
                    <p
                        className="
                            text-[20px]
                            font-semibold
                        "
                    >
                        کالا
                    </p>
                    {
                        kalaToggle.kala ? (
                            <CheckTrueCategory />
                        ) : (
                            <CheckDefaultCategory />
                        )
                    }
                </div>
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                    "
                    onClick={() => changeToggleKala("khadamat")}
                >
                    <p
                        className="
                            text-[20px]
                            font-semibold
                        "   
                    >
                        خدمات
                    </p>
                    {
                        kalaToggle.khadamat ? (
                            <CheckTrueCategory />
                        ) : (
                            <CheckDefaultCategory />
                        )
                    }
                </div>
            </div>
        </div>
    )
}