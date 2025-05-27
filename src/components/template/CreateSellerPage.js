"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import ContineuButton from "../elements/ContineuButton"
import AddProductTitle from "../module/adminShop/AddProductTitle"
import { useRouter } from "next/navigation"
import { GetRequestIdentity } from "@/service/adminPanel"



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

export default function CreateSellerPage({ requestId }) {

    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await GetRequestIdentity(requestId)

            if(response) {
                console.log(response);
            } else {
                console.log(error);
            }
        }
        if(requestId) {
            fetchData()
        }
    } , [])

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
                h-full

            "
        >
            <AddProductTitle 
                titleKey="addShop"
                levelState={1}
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
                href="/admin/sellers/create-seller/shop-identity"
                canReturn={false}
                backHref="/"
            />
        </div>
    )
}