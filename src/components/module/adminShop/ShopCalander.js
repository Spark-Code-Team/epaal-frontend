import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Calandar from "../../../../public/icons/Admin/Calandar";
import DatePicker from "react-multi-date-picker";
import { useRef } from "react";



export default function ShopCalander() {

    const calenderRefone = useRef()
    const calenderReftow = useRef()
    
    return (
        <div
            className="
                flex
                w-full
                gap-2
                justify-between
                px-2
            "
        >
            <div
                className="
                    w-1/2
                "
            >
                        <label
                            className="
                                text-[16px]
                                font-normal
                                px-2
                                mb-2
                            "
                        >
                        تاریخ شروع بازه تسویه را مشخص کنید  
                        </label>
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                md:p-4
                                p-1
                                rounded-xl
                                border
                                border-[#E1EDF0]
                                gap-1
                            "
                        >
                            <DatePicker
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                format="YYYY/MM/DD"
                                ref={calenderRefone}
                                // onChange={(date) => setState(last => ({...last, time: digitsFaToEn(date.format("YYYY/MM/DD"))}))}
                            />  
                            <div
                                className="
                                    p-2
                                    rounded-[10px]
                                    bg-[#1D434C]
                                    text-white
                                    md:text-[14px]
                                    text-[12px]
                                    font-normal
                                    flex
                                    items-center
                                    gap-1
                                    cursor-pointer
                                    justify-center
                                "

                                onClick={() => calenderRefone.current.openCalendar()}
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
            <div
                className="
                    w-1/2
                "
            >
                        <label
                            className="
                                text-[16px]
                                font-normal
                                px-2
                                mb-2
                            "
                        >
                            تاریخ پایان بازه تسویه را مشخص کنید
                        </label>
                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                md:p-4
                                p-1
                                rounded-xl
                                border
                                border-[#E1EDF0]
                                gap-1
                            "
                        >
                            <DatePicker
                                calendar={persian}
                                locale={persian_fa}
                                calendarPosition="bottom-right"
                                format="YYYY/MM/DD"
                                ref={calenderReftow}
                                // onChange={(date) => setState(last => ({...last, time: digitsFaToEn(date.format("YYYY/MM/DD"))}))}
                            />  
                            <div
                                className="
                                    p-2
                                    rounded-[10px]
                                    bg-[#1D434C]
                                    text-white
                                    md:text-[14px]
                                    text-[12px]
                                    font-normal
                                    flex
                                    items-center
                                    gap-1
                                    cursor-pointer
                                    justify-center
                                "

                                onClick={() => calenderReftow.current.openCalendar()}
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
        </div>
    )
}