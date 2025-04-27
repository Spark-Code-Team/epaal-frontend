"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



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


export default function ProductIdentity({setDynamicData}) {

    const [ staticsInput, setStaticInput ] = useState({
        price: "",
        inventory: "",
        discount: ""
    })

    const [dynamicFields, setDynamicFields] = useState([])

    const store = useSelector(store => store.staticDynamic.dynamic)

    useEffect(() => {
        console.log(dynamicFields);
        
    }, [dynamicFields])

    const handelStaticInput = (e) => {

        setStaticInput(last => ({...last, [e.target.name]: e.target.value}))
    }

    const handelChange = (e, chooseabel) => {

        if(dynamicFields.length == 0) {
            if(chooseabel) {
                setDynamicFields(last => [...last, {
                    field_id: e.target.name,
                    field_value_id: e.target.value 
                }])
            } else {
                setDynamicFields(last => [...last, {
                    field_id: e.target.name,
                    field_value: e.target.value
                }])
            }
        } else { 
            
            var temp = dynamicFields.filter(item => item.field_id !== e.target.name)

            if(chooseabel) { 
                setDynamicFields([...temp, {
                    field_id: e.target.name,
                    field_value_id: e.target.value 
                }])
            } else {
                setDynamicFields([...temp, {
                    field_id: e.target.name,
                    field_value: e.target.value 
                }])  
            }
        }
    }

    const buildData = () => {
        const data = {
            instance : [
                {
                    dynamicFields: [
                        ...dynamicFields
                    ],
                    capacity: Number(staticsInput.inventory),
                    price: Number(staticsInput.price),
                    discount: Number(staticsInput.discount)
                }
            ]
        }
        
        setDynamicData(data)
        
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
                relative
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
                       store.length != 0 ?  (
                           store.map((items, index) => {
                                if(items.options) {
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
                                                    items.name
                                                }
                                            </p>
                                            <select
                                                className="
                                                    w-[216px]
                                                    h-[38px]
                                                    border-[#E2E2E2]
                                                    rounded-xl
                                                "
                                                name={items.id}
                                                onChange={(e) => handelChange(e, true)}
                                            >
                                                {
                                                    items.options.map((item, index) => (
                                                        <option
                                                            key={index}
                                                            value={item.id}
                                                        >
                                                            {
                                                                item.value
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
                                                    items.name
                                                }
                                            </p>
                                            <input 
                                                name={items.id}
                                                onChange={(e) => handelChange(e, false)}
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
                       ) : (
                        <div>
                            <h1>
                                فیلدی پیدا نشد
                            </h1>
                        </div>
                       )
                    }
                </div>
            </div>

            <div
                className="
                    absolute
                    left-0
                    bottom-0
                    bg-evaamGreen
                    text-white
                    p-2
                    rounded-xl
                    cursor-pointer
                "
                onClick={() => buildData()}
            >
                ثبت
            </div>
        </div>
    )
}