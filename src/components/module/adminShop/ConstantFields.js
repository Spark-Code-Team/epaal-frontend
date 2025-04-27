"use client"

import { useEffect, useState } from "react"


export default function ConstantFields({ fields, filedsValue, setFieldsValue }) {

    const handelChange = (e, chooseabel) => {

        if(filedsValue.length == 0) {
            if(chooseabel) {
                setFieldsValue(last => [...last, {
                    field_id: e.target.name,
                    field_value_id: e.target.value 
                }])
            } else {
                setFieldsValue(last => [...last, {
                    field_id: e.target.name,
                    field_value: e.target.value
                }])
            }
        } else { 
            
            var temp = filedsValue.filter(item => item.field_id !== e.target.name)

            if(chooseabel) { 
                setFieldsValue([...temp, {
                    field_id: e.target.name,
                    field_value_id: e.target.value 
                }])
            } else {
                setFieldsValue([...temp, {
                    field_id: e.target.name,
                    field_value: e.target.value 
                }])  
            }
        }
    }


    useEffect(() => {
        console.log(filedsValue);
    }, [filedsValue])

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
                    h-[70px]
                    gap-3
                    overflow-y-scroll
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
                                        name={item.id}
                                        defaultValue="انتخاب فیلد"
                                        className="
                                            w-[327px]
                                            h-[40px]
                                            rounded-xl
                                            border
                                            border-[#E1EDF0]
                                        "
                                        onChange={(e) => handelChange(e, true)}
                                    >
                                        <option
                                            disabled
                                        >
                                            {
                                                item.name
                                            }
                                        </option>
                                        {
                                            item.options.length != 0 ? (
                                                item.options.map(items => (
                                                    <option
                                                        value={items.id}
                                                    >
                                                        {
                                                            items.value
                                                        }
                                                    </option>
                                                ))
                                            ) : (
                                                <option>
                                                    گزینه ای وجود ندارد
                                                </option>
                                            )
                                        }
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
                                        name={item.id}
                                        placeholder={item.name}
                                        onChange={(e) => handelChange(e, false)}
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