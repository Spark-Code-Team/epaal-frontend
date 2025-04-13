"use client"

import Link from "next/link"
import { useEffect, useState } from "react"



const resiverShopInput = [
    {
        name: "accepter",
        title: "نام پذیرنده(فروشگاه)",
        placeHolder: "نام پذیرنده را وارد کنید"
    },
    {
        name: "malekName",
        title: "نام مالک کسب و کار",
        placeHolder: "نام مالک را وارد کنید"
    },
    {
        name: "malekLastName",
        title: "نام خانوادگی مالک کسب و کار",
        placeHolder: "نام خانوادگی مالک را وارد کنید"
    },
    {
        name: "phoneNumber",
        title: "شماره تماس مالک",
        placeHolder: "شماره تماس مالک را وارد کنید"
    },
    {
        name: "address",
        title: "آدرس سایت پذیرنده",
        placeHolder: "آدرس سایت را وارد کنید"
    }
]

export default function CreateSellerPage() {

    const [ input, setInput] = useState({
        acceper: "",
        malekName: "",
        malekLastName: "",
        phoneNumber: "",
        address: ""
    })

    const handelInput = (e) => {

        setInput(last => ({...last, [e.target.name]: e.target.value}))
    }

    return (
        <div
            className="
                flex
                items-center
                flex-col
                justify-between
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