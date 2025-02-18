"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Link from "next/link";

const BodyAuthentication = ()=>{

    const [state, setState] = useState({
        codeMeli: "",
        imageMeli: "",
        birthday: new Date,
        firstPhone: "",
        secondePhone: ""
    })

    const [towState, setTowState] = useState({        
        imageMeli: "",
        birthday: new Date,
    })

    const onChange = (e) => {
        setState(last => ({...last, [e.target.name]: e.target.value}))
    }

    const onChangee = (e) => {
        setState(last => ({...last, birthday: new Date(e)}))
    }

    useEffect(() => {
        console.log(state);
    }, [state])

    

    const dateRef = useRef(null)
    const imagRef = useRef(null)

    return(

        <>
        

            <div className="w-[806px] h-[660px] m-auto p-4 bg-white rounded-lg shadow-md">
                {/* National Code Input */}
                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        کد ملی خود را وارد کنید
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="0150813775"
                        name="codeMeli"
                        onChange={(e) => onChange(e)}
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>
                </div>



                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        تصویر کارت ملی
                    </label>

                    <div className="mt-1 flex justify-between items-center w-full h-[53px] pr-3 pl-3 border border-gray-300 rounded-lg shadow-sm">
                        
                            {
                                towState.imageMeli ? (
                                    <p>
                                        {
                                            towState.imageMeli
                                        }
                                    </p>
                                ) : (
                                    <p
                                        className="text-[14px]"
                                    >
                                        تصویر کارت ملی خود را وارد کنید
                                    </p>
                                )
                            }
                        <div onClick={() => imagRef.current.click()} className="w-[105px] h-[35px] flex items-center justify-center cursor-pointer bg-[#1D434C] text-white rounded-md">بارگذاری</div>
                        <input 
                            ref={imagRef}
                            name="imageMeli"
                            onChange={(e) => setTowState(last => ({...last, imageMeli: e.target.value}))}
                            type="file"
                            className="hidden"
                            value={state.imageMeli}
                        />
                    </div>

                </div>



                <div onClick={() => dateRef.current.click()} className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        تاریخ تولد
                    </label>

                    <div className="mt-1 flex justify-between pr-3 pl-3 items-center w-full h-[53px] border border-gray-300 rounded-lg shadow-sm">
                        <DatePicker
                            value={state.birthday}
                            name="birthday"
                            onChange={(e) => setTowState(last => ({...last, birthday: new Date(e)}))}
                            format="YYYY/DD/MM"
                            calendar={persian}
                            locale={persian_fa}
                        />
                    </div>

                </div>


                {/* First contact number */}

                <div className="w-[600px] m-auto mt-6 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        شماره تماس ( اول)
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="0150813775"
                        name="firstPhone"
                        onChange={(e) => setState(e)}
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>
                </div>



                <div className="w-[600px] m-auto mt-6 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        شماره تماس (دوم)
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="0150813775"
                        name="secondePhone"
                        onChange={(e) => setState(e)}
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>
                </div>



                <div className="w-[600px] m-auto relative mt-14 flex justify-end">
                    <Link href="/auth-address" className={`w-[134px] h-[42px] bg-[#1D434C]  text-white flex items-center justify-center rounded-md`}

                    >
                        تایید و ادامه
                    </Link>
                </div>

            </div>
        
        </>

    )

}



export default BodyAuthentication;