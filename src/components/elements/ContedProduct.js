"use client"

import { useState } from "react"



export default function ContedProduct() {

    const [ count, setCount ] = useState("")

    return (
        <div
            className="
                my-4
            "
        >
            <input 
                className="
                    w-[535px]
                    h-[21px]
                    py-5
                    rounded-xl
                    border
                    border-[#E1E6EF]
                    mr-[43px]
                "
                type="text"
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
        </div>
    )
}