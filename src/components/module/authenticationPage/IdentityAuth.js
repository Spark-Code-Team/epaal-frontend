"use client"

import AuthTitle from "@/components/elements/AuthTitle";
import { useEffect, useState } from "react";
import Tick from "../../../../public/icons/Admin/Tick";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Calandar from "../../../../public/icons/Admin/Calandar";
import { identityAuthReq } from "@/service/userPanel";


const inputs = [
    {
        type: "text",
        title: "نام",
        name: "name",
        placeholder: "نام خود را وارد کنید",
        limit: 3
    },
    {
        type: "text",
        title: "نام خانوادگی",
        name: "family",
        placeholder: "نام خانوادگی خود را وارد کنید",
        limit: 3
    },
    {
        type: "text",
        title: "کد ملی خود را وارد کنید",
        name: "code",
        placeholder: "0150813775",
        limit: 10
    },
    {
        type: "time",
        title: "تاریخ تولد",
        name: "time",
        placeholder: "",
        limit: 3
    },
    {
        type: "text",
        title: "شماره تماس(دوم)",
        name: "secondPhone",
        placeholder: "**********09",
        limit: 11
    }
]

export default function IdentityAuth({ setActive }) {

    const [state, setState] = useState({
        name: "",
        family: "",
        code: "",
        time: new Date(),
        secondPhone: ""
    })

    const sendEhraz = async () => {
        const { response, error } = await identityAuthReq(name, family, code, time, secondPhone)
    }

    const inputChange = (e) => {
        setState(last => ({...last, [e.target.name]: e.target.value}))

        if(state.name && state.family && state.code && state.secondPhone) {
            setActive(true)
        } else {
            setActive(false)
        }
    }

    return (
        <div
            className="
                w-full
                h-full
            "
        >
            <AuthTitle 
                title="احراز مشخصات"
                active={true}
            />
            <div
                className="
                    flex
                    flex-col
                    gap-[17px]
                    mt-4
                "
            >
                {
                    inputs.map((item, index) => {
                        if(item.name == "time") {
                            return (
                                <div
                                    key={index}
                                >
                                    <label
                                        className="
                                            text-[16px]
                                            font-normal
                                            px-2
                                            mb-2
                                        "
                                    >
                                        {
                                            item.title
                                        }
                                    </label>
                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            p-4
                                            rounded-xl
                                            border
                                            border-[#E1EDF0]
                                        "
                                    >
                                        <DatePicker 
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="bottom-right"
                                            onChange={(e) => setState(last => ({...last, time: new Date(e)}))}
                                        />  
                                        <div
                                            className="
                                                p-2
                                                rounded-[10px]
                                                bg-[#1D434C]
                                                text-white
                                                text-[14px]
                                                font-normal
                                                flex
                                                items-center
                                                gap-1
                                                cursor-pointer
                                                justify-center
                                            "
                                        >
                                            <Calandar />
                                            <p
                                                className="
                                                    text-center
                                                "
                                            >
                                                انتخاب تاریخ
                                            </p>
                                        </div>  
                                    </div>
                                </div>
                            )
                        } else {
                            return (
                                <div
                                    key={index}
                                >
                                    <label
                                        className="
                                            text-[16px]
                                            font-normal
                                            px-2
                                            mb-2
                                        "
                                    >
                                        {
                                            item.title
                                        }
                                    </label>
                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            p-4
                                            rounded-xl
                                            border
                                            border-[#E1EDF0]
                                        "
                                    >
                                        <input 
                                            value={state[item.name]}
                                            placeholder={item.placeholder}
                                            onChange={(e) => inputChange(e)}
                                            name={item.name}
                                            className="
                                                focus:border-none
                                                focus:outline-none
                                                focus:ring-0
                                                h-full
                                                w-full
                                                text-[14px]
                                            "
                                        />

                                        <div
                                            className={`
                                                w-[26px]
                                                h-[26px]
                                                rounded-[20px]
                                                flex
                                                items-center
                                                justify-center
                                                ${state[item.name].length >= item.limit ? "bg-[#108B4A]" : "bg-[#C5C5C6]" }
                                            `}
                                        >
                                            <Tick />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div
                className="
                    w-full
                    flex
                    justify-end
                "
            >
                <div
                    className="
                        p-2
                        rounded-[10px]
                        bg-[#1D434C]
                        text-white
                        text-[14px]
                        font-normal
                        mt-0
                    "
                >
                    احراز  مشخصات
                </div>
            </div>
        </div>
    )
}