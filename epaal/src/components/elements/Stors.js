"use client"

import { useState } from "react"


export default function Stors() {

    const items = Array.from({ length: 21 }, (_, i) => `آیتم ${i + 1}`)

    const [heightChange, setHeightChange] = useState(false)

    return  (
        <div
            className={`
                w-full
                ${heightChange ? "h-fit" : "h-[355px]"}
                bg-[#E1EDF0]
                px-[108px]
                py-[40px]
                mt-[30px]
                flex
                flex-wrap
                items-center
                justify-center
                gap-[49px]
                overflow-y-hidden
                relative
            `}
        >
            {
                items.map((item, index) => (
                    <div
                        className="
                            w-[130px]
                            h-[120px]
                            bg-white
                            rounded-[22px]
                        "
                        key={index}
                    >

                    </div>
                ))
            }
            <div
                className={`
                    w-full
                    h-9
                    absolute
                    bottom-0
                    bg-[#E1EDF0]
                    shadow-topShodow
                `}
            >

            </div>
        </div>
    )
}