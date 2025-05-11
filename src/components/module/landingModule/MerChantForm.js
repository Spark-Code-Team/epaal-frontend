"use client"

import BlurTitle from "@/components/elements/BlurTitle"
import { sendShopRequest } from "@/service/landing"
import { useState } from "react"
import { toast } from "react-toastify"



const resiverShopInput = [
    {
        name: "accepter",
        title: "نام پذیرنده(فروشگاه)",
        placeHolder: "نام پذیرنده"
    },
    {
        name: "malekName",
        title: "نام مالک کسب و کار",
        placeHolder: "نام مالک را وارد کنید"
    },
    {
        name: "malekLastName",
        title: "نام خانوادگی مالک کسب و کار",
        placeHolder: "نام خانوادگی مالک"
    },
    {
        name: "phoneNumber",
        title: "شماره تماس مالک",
        placeHolder: "شماره تماس مالک"
    },
    {
        name: "address",
        title: "آدرس سایت پذیرنده",
        placeHolder: "https://e-vaam.com"
    }
]


export default function MerChantForm() {

    const [ input, setInput] = useState({
        accepter: "",
        malekName: "",
        malekLastName: "",
        phoneNumber: "",
        address: ""
    })    

    const handelInput = (e) => {
        setInput(last => ({...last, [e.target.name]: e.target.value}))
    }

    const sendMerchant = async () => {

        const { response, error } = await sendShopRequest(
            input.accepter,
            input.malekName, 
            input.malekLastName, 
            input.phoneNumber, 
            input.address
        )

        if(response) {
            toast.success("درخواست شما با موفقیت ثبت شد")
            console.log(response);
            
        } else {
            toast.error("مشکبلی در ثبت درخواست پیش آمده")
        }
    }

    return (
        <div
            className="
                w-full
                flex
                flex-col
                items-center
                justify-center
                gap-7
                mb-5
            "
        >
            <BlurTitle 
                title="فرم پذیرندگی"
            />

            <div
                className="
                    md:w-1/2
                    flex
                    flex-col
                    items-center
                    gap-4
                    justify-center
                    border-4
                    rounded-xl
                    md:p-5
                    p-2
                "
            >
                <div
                    className="
                        w-full
                        grid
                        grid-cols-2
                        mx-auto
                        gap-5
                        rounded-xl
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
                                        md:text-[16px]
                                        text-[10px]
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
                                        border-2
                                        border-[#E1EDF0]
                                        bg-white
                                        py-[10px]
                                        md:py-[14px]
                                        rounded-xl
                                        px-2
                                        text-[12px]
                                        md:text-[16px]
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
                        items-center
                        justify-center
                    "
                >
                    <div
                        className="
                            bg-evaamGreen
                            text-white
                            py-2
                            px-3
                            w-fit
                            rounded-xl
                            cursor-pointer
                            text-[10px]
                            md:text-[16px]
                        "
                        onClick={() => sendMerchant()}
                    >
                        ارسال درخواست
                    </div>
                </div>
            </div>
        </div>
    )
}