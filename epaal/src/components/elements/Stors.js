"use client"

import { useState } from "react"
import bimeBazar from "../../../public/image/bimebazarr.png"
import matinn from "../../../public/image/matinn.png"
import daricc from "../../../public/image/daricc.png"
import zitroo from "../../../public/image/zitroo.png"
import Image from "next/image"

const storha = [
    bimeBazar,
    matinn,
    daricc,
    zitroo
]


export default function Stors() {

    const [heightChange, setHeightChange] = useState(false)

    return  (
        <div
            className={`
                w-full
                py-8
                bg-[#E1EDF0]
                md:px-[108px]
                md:py-[40px]
                mt-[30px]
                px-[14px]
                flex
                flex-wrap
                items-center
                justify-center
                md:gap-[49px]
                gap-[22px]
                overflow-y-hidden
                relative
                mb-7
            `}
        >
            {
                storha.map((item, index) => (
                    <div
                        className="
                            md:w-[202px]
                            md:h-[202px]
                            w-[72px]
                            h-[72px]
                            bg-white
                            rounded-[22px]
                            flex
                            items-center
                            justify-center
                        "
                        key={index}
                    >
                        <Image 
                            src={item}
                            width={1000}
                            height={1000}
                            className="
                                md:w-[134px]
                                md:h-[134px]
                                w-[55px]
                                h-[55px]
                            "
                            alt="alt"
                        />
                    </div>
                ))
            }
            {/* <div
                className={`
                    w-full
                    h-9
                    absolute
                    bottom-0
                    bg-[#E1EDF0]
                    shadow-topShodow
                `}
            >
                <div

                >

                </div>
            </div> */}
        </div>
    )
}