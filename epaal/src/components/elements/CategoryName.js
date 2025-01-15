"use client"

import { useState } from "react"



export default function CategoryName() {

    const [name, setName] = useState("")

    return (
        <div
            className="
                pr-8
                pt-[49px]
                flex
                flex-col

            "
        >
            <label
                className="
                    text-[20px]
                    pb-3
                    font-medium
                "
            >
               نام دسته :
            </label>
            <input 
                type="text"
                placeholder="نام دسته را انتخاب کنید"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                    rounded-[10px]
                    text-[14px]
                    focus:border-black
                    focus:outline-none
                    focus:ring-0
                "
            />
        </div>
    )
}