"use client"

import { sidebarOptions } from "@/constant/AdminForm"
import ArrowLeft from "../../../../public/icons/Admin/ArrowLeft"
import { useState } from "react"
import Link from "next/link"



export default function SidebarAdmin() {

    const [selectOption, setSelectOption] = useState(false)

    const handelSelect = (title) => {

        if(title == selectOption) {
            setSelectOption(false)
        } else {
            setSelectOption(title)
        }
    }


    return (
        <div
            className="
                h-screen
                bg-white
                border-l-[1px]
            "
        >

            <div
                className="
                    h-[10%]
                "
            >

            </div>
            <div
                className="
                    overflow-y-scroll
                    h-[90%]
                    no-scrollbar
                "
            >
                {
                    sidebarOptions.map((item, index) => (
                        <div
                            className={`
                                flex
                                flex-col
                                ${selectOption == item.title ? "h-fit bg-[#0543660d]" : "h-[15%]"}
                                h-[15%]
                                w-full
                                transition-all
                                p-1
                            `}
                            key={index}
                        >
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    cursor-pointer
                                    gap-1
                                "
                                onClick={() => handelSelect(item.title)}
                            >

                                <div
                                    className={`
                                        min-w-1
                                        min-h-5
                                        ${selectOption == item.title ? "bg-[#054366] rounded-l-full" : ""}
                                    `}
                                >

                                </div>
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        w-[95%]
                                        hover:scale-105
                                        transition-all
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >
                                        {
                                            item.icon
                                        }
                                        <p>
                                            {item.title}
                                        </p>
                                    </div>
                                    <div
                                        className={`
                                            w-[20%]
                                            text-[#054366]
                                            transition-all
                                            ${item.children.length == 0 ? "hidden" : ""}
                                        `}
                                    >
                                        <ArrowLeft 
                                            rotate={selectOption == item.title ? true : false}
                                        />
                                    </div>
                                </div>


                            </div>
                            <div
                                className={`
                                    ${selectOption == item.title ? "flex flex-col gap-2" : "hidden"}
                                    pr-5
                                    py-6
                                `}
                            >
                              {
                                item.children.map((item, index) => (
                                    <Link
                                        key={index}
                                        href=""
                                        className="
                                            hover:text-[#054366]
                                            text-[14px]
                                        "
                                    >
                                        {item}
                                    </Link>
                                ))
                              }  
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}