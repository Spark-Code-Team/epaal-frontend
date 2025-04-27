"use client"

import { useState } from "react"

import InputTitleAdminShop from "@/components/elements/InputTitleAdminShop"
import ShockPoints from "@/components/elements/ShockPoints"

const inputsType = [
    {
        name: "persian_name",
        title: "نام محصول"
    },
] 

export default function ProductName ({name, setName}) {

    const inputHandler = (e) => {

        setName(last => ({...last, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <div
                className="
                    flex
                    gap-[18px]
                    mr-1
                "
            >
                {
                    inputsType.map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                flex-col
                                gap-4
                            "
                        >
                            <label
                                className="
                                    text-[16px]
                                    font-normal
                                "
                            >
                                {
                                    item.title
                                }
                            </label>
                            <input 
                                name={item.name}
                                value={name[item.name]}
                                onChange={(e) => inputHandler(e)}
                                type="text"
                                className="
                                    border
                                    border-[#E1E6EF]
                                    rounded-xl
                                    w-[500px]
                                    h-[50px]
                                "
                            />
                        </div>
                    ))
                }
            </div>

            <ShockPoints 
                title="برای نام گذاری محصول میتوانید از فرمول ماهیت محصول+برند محصول+مدل محصول استفاده کنید"
            />
        </div>
    )
}