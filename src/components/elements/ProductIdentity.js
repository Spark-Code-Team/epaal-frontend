"use client"

import { useState } from "react"



const inpts = {
    statics: [
        {
            title: "قیمت:",
            name: "price",
        },
        {
            title: "موجودی (تعداد):",
            name: "inventory",
        },
        {
            title: "تخفیف:",
            name: "discount",
        }
    ],

    variables: [
        {
            title: "نام فیلد A",
            name: "staticA"
        },
        {
            title: "نام فیلد A",
            name: "selectedA",
            children: [
                "انتخابی",
                "2انتخابی"
            ]
        },
        {
            title: "نام فیلد B",
            name: "staticB"
        },
        {
            title: "نام فیلد B",
            name: "selectedB",
            children: [
                "انتخابی",
                "2انتخابی"
            ]
        },
        {
            title: "نام فیلد C",
            name: "staticC"
        },
        {
            title: "نام فیلد C",
            name: "selectedC",
            children: [
                "انتخابی",
                "2انتخابی"
            ]
        }
    ]
}


export default function ProductIdentity() {

    const [ staticsInput, setStaticInput ] = useState({
        price: "",
        inventory: "",
        discount: ""
    })

    const [ variableInput, setVariableInput ] = useState({
        selectedC: "",
        selectedB: "",
        selectedA: "",
        staticC: "",
        staticB: "",
        staticA: "",
    })

    const handelStaticInput = (e) => {

        setStaticInput(last => ({...last, [e.target.name]: e.target.value}))
    }

    const handelVariabelInput = (e) => {

        setVariableInput(last => ({...last, [e.target.name]: e.target.value}))
    }

    return (
        <div
            className="
                w-[1048px]
                h-[269px]
                rounded-3xl
                border
                border-[#E2E2E2]
                mt-[21px]
                flex
            "
        >
            <div
                className="
                    border-l
                    h-full
                    border-[#E2E2E2]
                    w-1/3
                "
            >
                <div>
                    <p
                        className="
                            text-[18px]
                            font-semibold
                            py-8
                            pr-8
                        "
                    >
                        نام محصول از نوع مشخص شده
                    </p>
                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                        "
                    >
                        {
                            inpts.statics.map(item => (
                                <div
                                    className="
                                        flex
                                        justify-between
                                        items-center
                                        px-2
                                    "
                                    key={item.name}
                                >
                                    <div>
                                        <p>
                                            {
                                                item.title
                                            }
                                        </p>
                                    </div>

                                    <div>
                                        <input 
                                            value={staticsInput[item.name]}
                                            name={item.name}
                                            onChange={(e) => handelStaticInput(e)}
                                            className="
                                                w-[188px]
                                                h-8
                                                rounded-lg
                                                border
                                                border-[#C5C5C6]
                                                p-2
                                            "
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div
                className="
                    w-2/3
                "
            >
                <p
                    className="
                        text-[18px]
                        font-semibold
                        py-8
                        pr-8
                    "
                >
                    متغیر های انتخاب شده
                </p>
                <div
                    className="
                        grid
                        grid-cols-2
                        gap-4
                    "
                >
                    {
                        inpts.variables.map((items, index) => {
                            if(items.children?.length) {
                                return (
                                    <div
                                        key={index}
                                        className="
                                            flex
                                            justify-between
                                            px-4
                                        "
                                    >
                                        <p>
                                            {
                                                items.title
                                            }
                                        </p>
                                        <select
                                            className="
                                                w-[216px]
                                                h-[38px]
                                                border-[#E2E2E2]
                                                rounded-xl
                                            "
                                            name={items.name}
                                            onChange={(e) => handelVariabelInput(e)}
                                        >
                                            {
                                                items.children.map((item, index) => (
                                                    <option
                                                        key={index}
                                                    >
                                                        {
                                                            item
                                                        }
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        key={index}
                                        className="
                                            flex
                                            justify-between
                                            px-4
                                        "
                                    >
                                        <p>
                                            {
                                                items.title
                                            }
                                        </p>
                                        <input 
                                            value={variableInput[items.name]}
                                            name={items.name}
                                            onChange={(e) => handelVariabelInput(e)}
                                            className="
                                                w-[216px]
                                                h-[36px]
                                                rounded-xl
                                                border
                                                border-[#C5C5C6]
                                                px-2
                                            "
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}