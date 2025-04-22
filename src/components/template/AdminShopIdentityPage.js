"use client"

import Link from "next/link"
import { useState } from "react"
import ContineuButton from "../elements/ContineuButton"
import AddProductTitle from "../module/adminShop/AddProductTitle"

const resiverShopInput = [
    {
        name: "name",
        title: "نام ادمین",
        placeHolder: ""
    },
    {
        name: "lastName",
        title: "نام خانوادگی ادمین",
        placeHolder: ""
    },
    {
        name: "email",
        title: "آدرس ایمیل",
        placeHolder: ""
    },
    {
        name: "number",
        title: "شماره تماس ثبت نام",
        placeHolder: ""
    },
    {
        name: "password",
        title: "رمز عبور(8 رقمی)",
        placeHolder: ""
    },
    {
        name: "rePassword",
        title: "رمز عبور(8 رقمی)",
        placeHolder: ""
    },
]

export default function AdminShopIdentityPage() {

    const [input, setInput] = useState({})

    return (
        <div
            className="
                flex
                items-center
                flex-col
                justify-between
                h-full

            "
        >
            <AddProductTitle
                levelState={3}
                titleKey="addShop"
            />
            <div
                className="
                    w-full
                    px-[78px]
                    grid
                    grid-cols-2
                    gap-[38px]
                "
            >
                {
                    resiverShopInput.map((item, index) => (
                        <div
                            key={index}
                            className="
                                w-full
                                flex
                                flex-col
                                gap-3
                            "
                        >
                            <label
                                className="
                                    text-[16px]
                                    text-[#1D243]
                                "
                            >
                                {
                                    item.title
                                }
                            </label>
                            <input
                                name={item.name}
                                value={input[item.name]}
                                onChange={e => handelInput(e)}
                                placeholder={item.placeHolder}
                                className="
                                    border
                                    border-[#E1EDF0]
                                    bg-white
                                    py-[14px]
                                    rounded-xl
                                    px-2
                                "
                            />
                        </div>
                    ))
                }
            </div>
            <ContineuButton
                href="/admin/sellers/create-seller/product-category"
                backHref="/admin/sellers/create-seller/shop-identity"
                canReturn={true}
            />
        </div>
    )
}