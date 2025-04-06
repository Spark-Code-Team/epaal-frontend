"use client"

import { useState } from "react"

const inputsType = [
    {
        name: "persian_name",
        title: "نام (فارسی) محصول"
    },
    {
        name: "engilish_name",
        title: "نام (انگلیسی) محصول"
    }
] 

export default function ProductName () {

    const [inputs, setInputs] = useState({
        persian_name: "",
        engilish_name: ""
    })

    const inputHandler = (e) => {

        setInputs(last => ({...last, [e.target.name]: e.target.value}))
    }

    return (
        <div>
            <div>
                <p
                    className="
                        font-bold
                        text-[16px]
                        my-[23px]
                    "
                >
                    عنوان محصول
                </p>
            </div>
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
                                value={inputs[item.name]}
                                onChange={(e) => inputHandler(e)}
                                type="text"
                                className="
                                    border
                                    border-[#E1E6EF]
                                    rounded-xl
                                    w-[515px]
                                    h-[51px]
                                "
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}