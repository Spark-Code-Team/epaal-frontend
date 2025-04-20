"use client"

import { useEffect, useRef, useState } from "react"
import ContineuButton from "../elements/ContineuButton"



const ShopIdentityInput = [
    {
        title: "نام فروشگاه(فارسی)",
        placeHolder: "",
        type: "text",
        name: "faname"
    },
    {
        title: "نام فروشگاه(انگلیسی)",
        placeHolder: "",
        type: "text",
        name: "enname"
    },
    {
        title: "شماره تماس ثابت فروشگاه",
        placeHolder: "",
        type: "text",
        name: "phone"
    },
    {
        title: "نماد فروشگاه(لوگو)",
        placeHolder: "",
        type: "file",
        name: "logo"
    },
    {
        title: "توضیحات درباره فروشگاه",
        placeHolder: "",
        type: "area",
        name: "description"
    },
    {
        title: "آدرس فروشگاه",
        placeHolder: "",
        type: "area",
        name: "address"
    },
]

export default function ShopIdentityPage() {

    const [identity, setIdentity] = useState({
        faname: "",
        enname: "",
        phone: "",
        logo: "",
        description: "",
        address: ""
    })

    const refFile = useRef()

    const changeHandler = (e) => {
        
        setIdentity(last => ({...last, [e.target.name]: e.target.value}))
    }

    return (
        <div
            className="
                h-full
                flex
                flex-col
                justify-between
            "
        >
            <div
                className="
                    grid
                    grid-cols-2
                    px-3
                    gap-3
                "
            >
                {
                    ShopIdentityInput.map((item, index) => {
                        if(item.type == "text") {
                            return (
                                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-3
                                        mb-[25px]
                                    "
                                    key={index}
                                >
                                    <label>
                                        {
                                            item.title
                                        }
                                    </label>
                                    <input 
                                        type={item.type}
                                        name={item.name}
                                        value={identity[item.name]}
                                        onChange={(e) => changeHandler(e)}
                                        className="
                                            p-2
                                            rounded-xl
                                            border
                                            border-[#E1E6EF]
                                        "
                                    />
                                </div>
                            )
                        } else if(item.type == "area") {
                            return (
                                <div
                                    className="
                                        flex
                                        flex-col
                                    "
                                    key={index}
                                >
                                    <label>
                                        {
                                            item.title
                                        }
                                    </label>
                                    <textarea 
                                        value={identity[item.name]}
                                        name={item.name}
                                        className="
                                            p-2
                                            rounded-xl
                                            border
                                            border-[#E1E6EF]
                                        "
                                        onChange={(e) => changeHandler(e)}
                                    />
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={index}
                                >
                                    <label>
                                        {
                                            item.title
                                        }
                                    </label>
                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            border
                                            border-[#E1E6EF]
                                            rounded-xl
                                            p-2
                                            cursor-pointer
                                        "
                                        onClick={() => refFile.current.click()}
                                    >
                                        <p>
                                            {
                                                identity[item.name]
                                            }
                                        </p>
                                        <div
                                            className="
                                                bg-[#1D434C]
                                                rounded-lg
                                                w-fit
                                                p-2
                                                text-white
                                            "
                                        >
                                            <p>
                                                افزودن
                                            </p>
                                        </div>
                                    </div>
                                    <input 
                                        value={identity[item.name]}
                                        onChange={(e) => changeHandler(e)}
                                        type={item.type}
                                        ref={refFile}
                                        name={item.name}
                                        className="
                                            hidden
                                        "
                                    />
                                </div>
                            )
                        }
                    })
                }
            </div>
            <ContineuButton 
                href="/admin/sellers/create-seller/admin-shop-identity"
                backHref="/admin/sellers/create-seller"
                canReturn={true}
            />
        </div>
    )
}