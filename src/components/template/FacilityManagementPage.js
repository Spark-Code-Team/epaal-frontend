"use client"

import { useState } from "react";
import AghsatChart from "../module/FacilityManagement/AghsatChart";

const st = [
    {
        titll: "طرح اعتباری:",
        ansewer: "بانک مهر"
    },
    {
        titll: "مهلت تسویه:",
        ansewer: "2 ماه"
    },
    {
        titll: "دفعات بازپرداخت:",
        ansewer: "7 از 8"
    },
    {
        titll: "مبلغ تسویه نشده:",
        ansewer: "450،000 تومان "
    }
]


export default function FacilityManagementPage() {

    const [state, setState] = useState(1)

    return (
        <div
            className="
                w-full
                h-full
                pt-3
            "
        >
            <div
                className="
                    rounded-[24px]
                    md:border
                    md:border-[#E1EDF0]
                    w-full
                    flex
                    md:flex-row
                    flex-col
                    items-center
                    md:justify-start
                    justify-center
                    relative
                    md:p-4
                    md:gap-3
                    md:items-center
                "
            >
                <AghsatChart amount="10000" percentage={100} />
                <div
                    className="
                        w-full
                        md:w-[40%]
                        flex
                        flex-col
                        items-center
                        gap-3
                        px-3
                        mt-5
                    "
                >
                    {
                        st.map((item, index) => (
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <div>
                                    {
                                        item.titll
                                    }
                                </div>
                                <div>
                                    {
                                        item.ansewer
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div
                    className="
                        absolute
                        w-full
                        md:bottom-3
                        bottom-[-100px]
                        flex
                        items-center
                        justify-center
                        md:justify-end
                        md:left-3
                    "
                >
                    <div
                        className="
                            bg-evaamGreen
                            text-white
                            w-fit
                            px-4
                            py-2
                            text-center
                            rounded-xl
                            text-[14px]
                            cursor-pointer
                        "
                    >
                        پرداخت قسط
                    </div>
                </div>
            </div>
            <div
                className="
                    grid
                    grid-cols-2
                "
            >
                <div>
                    <p>
                        پرداخت شده
                    </p>
                    <p>
                        state
                    </p>
                </div>
                <div>
                    <p>
                        پرداخت شده
                    </p>
                    <p>
                        state
                    </p>
                </div>
                <div>
                    <p>
                        پرداخت شده
                    </p>
                    <p>
                        state
                    </p>
                </div>
                <div>
                    <p>
                        پرداخت شده
                    </p>
                    <p>
                        state
                    </p>
                </div>
                <div>
                    <p>
                        پرداخت شده
                    </p>
                    <p>
                        state
                    </p>
                </div>
            </div>
        </div>
    )
}