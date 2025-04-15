"use client"

import Link from "next/link"
import { useState } from "react"

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
            <div
                className="
                    w-full
                    flex
                    justify-end
                    p-5
                "
            >
                <Link
                    href="/"
                    className="
                        rounded-xl
                        p-[10px]
                        text-white
                        bg-evaamGreen
                        w-fit
                    "
                >
                    تایید و ادامه
                </Link>
            </div>
        </div>
    )
}