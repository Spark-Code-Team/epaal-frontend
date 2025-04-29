"use client"

import BlurTitle from "@/components/elements/BlurTitle"
import { sendShopRequest } from "@/service/landing"
import { useState } from "react"
import { toast } from "react-toastify"



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
            console.log(error);
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
                    w-1/2
                    grid
                    grid-cols-2
                    mx-auto
                    gap-5
                    border-[3px0]
                    p-5
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
                                    border-2
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
                    "
                    onClick={() => sendMerchant()}
                >
                    ارسال درخواست
                </div>
            </div>
        </div>
    )
}