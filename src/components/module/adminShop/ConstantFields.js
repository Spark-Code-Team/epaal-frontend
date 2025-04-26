"use client"

import { useState } from "react"


export default function ConstantFields({ fields }) {

    console.log(fields);
    

    const [filedsValue, setFieldsValue] = useState({})

    return (
        <div>
            <p
                className="
                    font-bold
                    text-[16px]
                    my-7
                "
            >
                فیلدهای ثابت
            </p>
            <div
                className="
                    grid
                    grid-cols-2
                "
            >
                {
                    fields.map((item, index) => {
                        if(item.is_choosable) {
                            return (
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <p>
                                        {++index}
                                    </p>
                                    <select
                                        defaultValue="انتخاب فیلد"
                                        className="
                                            w-[327px]
                                            h-[40px]
                                            rounded-xl
                                            border
                                            border-[#E1EDF0]
                                        "
                                        onChange={(e) => setFieldsValue(last => ({...last, title: e.target.value}))}
                                    >
                                        <option>ali</option>
                                        <option>ali1</option>
                                        <option>ali2</option>    
                                    </select>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >
                                    <p>
                                        {++index}
                                    </p>
                                    <input
                                        className="
                                            w-[327px]
                                            h-[40px]
                                            rounded-xl
                                            border
                                            border-[#E1EDF0]
                                        "
                                        type="text"
                                        placeholder="نام فیلد"
                                        onChange={(e) => setFieldsValue(last => ({...last, title: e.target.value}))}
                                    />

                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}