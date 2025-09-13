"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const stateCreator = [1, 2, 3, 4, 5, 6, 7, 8]

export default function FacilityState({ curentState }) {

    const store = useSelector(store => store)
    const router = useRouter()

    // useEffect(() => {
    //     // if (store.status.level_number == curentState) {
    //     //     router.back()
    //     // }
    // }, [])


    return (
        <div
            className="
                w-full
                flex
                flex-col
                md:mt-[100px]
            "
        >
            <p
                className="
                    text-[16px]
                    font-bold
                    md:text-[18px]
                    my-6
                "
            >
                درخواست اعتبار
            </p>
            <div
                className="
                    w-full
                "
            >
                <div
                    className="
                        w-full
                        text-[12px]
                        md:text-[16px]
                        flex
                        items-center
                        justify-between
                    "
                >
                    <div
                    >
                        مرحله {curentState} از 8
                    </div>
                    <div
                        className="
                            text-[#00970A]
                            cursor-pointer
                        "
                    >
                        مشاهده تمام مراحل
                    </div>
                </div>
                <div
                    className="
                        w-full
                        flex
                        items-center
                        justify-between
                        mt-3
                    "
                >
                    {
                        stateCreator.map(item => (
                            <div
                                className={`
                                    w-8
                                    h-1
                                    rounded-xl
                                    ${curentState >= item ? "bg-[#1D434C]" : "bg-[#C5C5C6]"}
                                `}
                                key={item}
                            >

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}