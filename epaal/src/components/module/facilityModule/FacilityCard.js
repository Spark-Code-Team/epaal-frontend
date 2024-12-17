"use client"

// icons
import DeleteIcon from "../../../../public/icons/DeleteIcon";
import EditeIcon from "../../../../public/icons/EditeIcon";

// react
import { useState } from "react";



export default function FacilityCard () {

    const [on, setOn] = useState(true)

    return (
        <div
            className="
                shadow-3xl
                mt-4
                flex
                items-center
                justify-around
                p-10
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-around
                    w-[40%]
                    text-white
                "
            >
                <div
                    className="
                        bg-[#00397A]
                        flex
                        items-center
                        justify-center
                        p-4
                        rounded-xl
                    "
                >
                    اسم تسهیلات
                </div>
                
                <div
                    className="
                        bg-[#00397A]
                        flex
                        items-center
                        justify-center
                        p-4
                        rounded-xl
                    "
                >
                    470 میلیون تومان
                </div>

                <div
                    className="
                        bg-[#00397A]
                        flex
                        items-center
                        justify-center
                        p-4
                        rounded-xl
                    "
                >
                    تعداد
                </div>
            </div>

            <div
                className={`
                    w-[125px]
                    h-[21px]
                    flex
                    items-center
                    ${on ? "bg-[#00397A]" : "bg-[#d9d9d9]"}
                    p-1
                    rounded-xl
                    transition-all
                    duration-700
                    cursor-pointer
                `}

                onClick={() => setOn(!on)}
            >
                <div
                    className={`
                        bg-[#FFC531]
                        w-[18px]
                        h-[18px]
                        rounded-full
                        ${on ? "transform translate-x-0" : "transform translate-x-[-98px]"}
                        transition-all
                        duration-700
                    `}
                >

                </div>
            </div>

            <div
                className="
                    flex
                    items-center
                    justify-around
                    w-[10%]
                "
            >
                <div
                    className="
                        bg-[#00397A]
                        flex
                        items-center
                        justify-center
                        p-2
                        w-[42px]
                        h-[40px]
                        rounded-lg
                    "
                >
                    <DeleteIcon />
                </div>

                <div
                    className="
                        bg-[#00397A]
                        flex
                        items-center
                        justify-center
                        p-2
                        w-[42px]
                        h-[40px]
                        rounded-lg
                    "
                >
                    <EditeIcon />
                </div>
            </div>
        </div>
    )
}