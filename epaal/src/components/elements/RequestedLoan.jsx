'use client';
import React from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import {useState} from "react";


const RequestedLoan = ({ isBanner }) =>{

    const items = ["6 ماه" , "12 ماه" , "24 ماه" , "36 ماه"];

    const [currentIndex , setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex)=>prevIndex === items.length - 1 ? 0 : prevIndex + 1
        )
    }


    const handlePrevious = ()=>{
        setCurrentIndex((prevIndex)=>prevIndex === 0 ? items.length - 1 : prevIndex - 1
        )
    }



    return (

        <>
        
            <div className="lg:w-[80%] sm:w-[90%] sm:min-h-[300px] bg-white shadow-lg mx-auto flex flex-wrap rounded-3xl">

                <div className="w-full lg:w-1/2 sm:w-1/2">

                    <div className="w-full flex flex-wrap mt-10">
                        <div className="w-1/2 lg:w-1/2 sm:w-1/2 lg:text-lg sm:text-base text-sm pr-3 text-[#102C8F]">مبلغ وام درخواستی</div>
                        <div className="w-1/2 lg:w-1/2 sm:w-1/2 lg:text-lg sm:text-base text-sm text-left pl-3 text-[#009B9D]">1000000 تومان</div>
                    </div>


                    <div className="w-full flex flex-wrap justify-around mt-10">
                        <div className="lg:w-1/12 lg:flex lg:items-center text-[#64748B]">میلیون</div>

                        <div className="lg:w-[65%] flex justify-center">
                            <input type="range" className="w-full my-4 rounded-lg custom-bg" />
                        </div>

                        <div className="lg:w-1/12 lg:flex lg:items-center text-[#64748B]">میلیون</div>
                    </div>


                    <div className="w-full h-24">

                        <p className="mr-4 mt-4 text-[#102C8F]">مدت زمان بازپرداخت :</p>

                        <div className="w-[93%] h-24 mx-auto flex">

                            <div className="w-1/4 flex items-center">
                                <div className="w-12 h-12 bg-[#1D434C] text-lg rounded-md">
                                    <button onClick={handleNext} className="text-white">
                                        <MdOutlineNavigateNext size={50}/>
                                    </button>
                                </div>
                            </div>

                            <div className="w-1/2 flex justify-center items-center">
                                <div className="flex justify-center">
                                    <button className="bg-blue-200 rounded-lg p-2 font-bold w-28 border-2 border-[#1D434C] text-[#1D434C]">{items[currentIndex]}</button>
                                </div>
                            </div>

                            <div className="w-1/4 flex justify-end items-center">
                                <div className="w-12 h-12 bg-[#1D434C] text-lg rounded-md">
                                    <button onClick={handlePrevious} className="text-white">
                                        <GrFormPrevious size={50}/>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>

                <div className="w-full lg:w-1/2 sm:w-1/2">

                    <div className="lg:w-[80%] lg:h-48 lg:mx-auto lg:mt-10 lg:pt-2 w-[90%] min-h-44 mx-auto mt-2 sm:w-[80%] sm:h-34 sm:mx-auto bg-[#eef2ff] rounded-lg">

                        <div className="lg:w-[90%] lg:h-54 lg:mx-auto w-[90%] min-h-34 flex mx-auto mt-5 sm:w-[80%] sm:h-34 sm:mx-auto">

                            <div className="lg:w-1/2 w-1/2 sm:w-1/2 lg:text-sm pt-[2px] text-sm text-[#1D434C]">مبلغ قسط نهایی</div>
                            <div className="lg:w-1/2 w-1/2 sm:w-1/2 lg:text-base text-sm text-left text-[#1D434C]">940,763 <span className="text-sm">تومان</span></div>

                        </div>

                        <div className="lg:w-[90%] lg:h-54 lg:mx-auto py-3 w-[90%] min-h-34 flex mx-auto mt-2 sm:w-[80%] sm:h-34 sm:mx-auto">

                            <div className="lg:w-1/2 w-1/2 sm:w-1/2 lg:text-[13px] text-xs lg:pt-0 pt-1 text-[#1D434C]">ما به تفاوت خرید نقدی و اقساطی</div>
                            <div className="lg:w-1/2 w-1/2 sm:w-1/2 lg:text-sm text-sm pt-[3px] text-left text-[#1D434C]">940,763 <span className="text-sm">تومان</span></div>

                        </div>

                        <div className="lg:w-[90%] lg:h-54 lg:mx-auto py-3 w-[90%] min-h-34 flex mx-auto mt-2 sm:w-[80%] sm:h-34 sm:mx-auto">

                            <div className="lg:w-1/2 w-1/2 sm:w-1/2 lg:text-sm text-xs lg:pt-0 pt-1 text-[#1D434C]">اعتبار کیف پول فروشگاه</div>
                            <div className="lg:w-1/2 w-1/2 sm:w-1/2 lg:text-sm text-sm pt-[3px] text-left text-[#1D434C]">940,763 <span className="text-sm">تومان</span></div>

                        </div>

                    </div>

                    <button type="button" className="bg-[#1D434C] text-white mx-auto block lg:w-[80%] p-1 lg:mb-0 mb-3 mt-4 rounded-md w-[85%]">درخواست وام</button>

                </div>


            </div>

        </>

    )

}


export default RequestedLoan;