"use client"

import InputTitle from "@/components/elements/InputTitle"
import { useState } from "react"


const Inputs = [
    {
        title: "نام پذیرنده",
        name: "name",
        placeHolder: ""
    },
    {
        title: "نام خانوادگی پذیرنده",
        name: "lastname",
        placeHolder: ""
    },
]

const shopAdmin = [
    {
        title: "نام",
        name: "nameShop",
        placeHolder: ""
    },
    {
        title: "نام خانوادگی",
        name: "lastnameShop",
        placeHolder: ""
    },
    {
        title: "شماره تماس",
        name: "phonShop",
        placeHolder: "09xxxxxxxxxx"
    },
]

const shopInput = [
    {
        title: "نام کاربری",
        name: "userName",
        placeHolder: ""
    },
    {
        title: "رمز عبور",
        name: "password",
        placeHolder: "********"
    },
    {
        title: "کدملی مالک",
        name: "natioanlCode",
        placeHolder: "***********"
    },
    {
        title: "شماره تماس مالک",
        name: "phonMalek",
        placeHolder: "09xxxxxxxxxx"
    },
]

const tahInput = [
    {
        title: "آدرس",
        name: "address",
        placeHolder: "آدرس را در اینجا وارد کنید"
    },
    {
        title: "توضیحات",
        name: "description",
        placeHolder: "توضیحاتی برای فروشگاه خود بنوسید"
    },
]

export default function NameInput() {

    const [shop, setShop] = useState({
        name: "",
        lastname: "",
        nameShop: "",
        lastnameShop: "",
        phonShop: "",
        phonMalek: "",
        natioanlCode: "",
        password: "",
        userName: "",
        address: "",
        description: ""
    })


    const handelShop = (e) => {

        setShop(last => ({...last, [e.target.name]: e.target.value}))
    }
    

    return (
        <>
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-3
                "
            >
                {
                    Inputs.map(item => (
                        <div
                            key={item.title}
                            className="
                                w-[45%]
                            "
                        >
                            <label 
                                htmlFor={item.name}
                            >
                                {
                                    item.title
                                }
                            </label>
                            <input
                                name={item.name} 
                                value={shop[item.name]}
                                type="text"  
                                onChange={(e) => handelShop(e)}
                                placeholder={item.placeHolder}
                                className="
                                    w-full
                                    rounded-xl
                                    focus:border-black
                                    focus:outline-none
                                    focus:ring-0
                                "
                            />
                        </div>
                    ))
                }
            </div>
            <InputTitle title="ادمین فروشگاه" />
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-2
                "
            >
                {
                    shopAdmin.map(item => (
                        <div
                        key={item.title}
                        className="
                            w-[30%]
                        "
                    >
                        <label 
                            htmlFor={item.name}
                        >
                            {
                                item.title
                            }
                        </label>
                        <input
                            name={item.name} 
                            value={shop[item.name]}
                            type="text"  
                            onChange={(e) => handelShop(e)}
                            placeholder={item.placeHolder}
                            className="
                                w-full
                                rounded-xl
                                focus:border-black
                                focus:outline-none
                                focus:ring-0
                            "
                        />
                    </div>
                    ))
                }
            </div>
            <InputTitle title="فروشگاه" />
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    p-2
                "
            >
                {
                    shopInput.map(item => (
                        <div
                        key={item.title}
                        className="
                            w-[20%]
                        "
                    >
                        <label 
                            htmlFor={item.name}
                        >
                            {
                                item.title
                            }
                        </label>
                        <input
                            name={item.name} 
                            value={shop[item.name]}
                            type={item.name == "password" ? "password" : "text"} 
                            onChange={(e) => handelShop(e)}
                            placeholder={item.placeHolder}
                            className="
                                w-full
                                rounded-xl
                                focus:border-black
                                focus:outline-none
                                focus:ring-0
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
                    justify-between
                    p-3
                "
            >
                {
                    tahInput.map(item => (
                            <div
                            key={item.title}
                            className="
                                w-[45%]
                            "
                        >
                            <label 
                                htmlFor={item.name}
                            >
                                {
                                    item.title
                                }
                            </label>
                            <textarea
                                name={item.name} 
                                value={shop[item.name]}
                                type=""  
                                onChange={(e) => handelShop(e)}
                                placeholder={item.placeHolder}
                                className="
                                    w-full
                                    rounded-xl
                                    focus:border-black
                                    focus:outline-none
                                    focus:ring-0
                                "
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}