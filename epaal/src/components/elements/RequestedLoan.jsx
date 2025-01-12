"use client";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";

const RequestedLoan = ({ isBanner }) => {
  const items = ["6 ماه", "12 ماه", "24 ماه", "36 ماه"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState(10);


  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1,
    );
  };

  return (
    <>
      <div className="mx-auto flex flex-wrap rounded-3xl bg-white shadow-lg sm:min-h-[300px] sm:w-[90%] lg:w-[80%] pb-8 " >
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <div className="mt-10 flex w-full flex-wrap">
            <div className="w-1/2 pr-3 text-sm text-green-600 sm:w-1/2 sm:text-base lg:w-1/2 lg:text-lg">
              مبلغ وام درخواستی
            </div>
            <div className="w-1/2 pl-3 text-left text-sm text-[#009B9D] sm:w-1/2 sm:text-base lg:w-1/2 lg:text-lg">
             {inputValue},000,000 تومان
            </div>
          </div>

          <div className="mt-10 flex w-full flex-wrap justify-around">
            <div className="text-[#64748B] lg:flex lg:w-1/12 lg:items-center">
              میلیون 10 تومان
            </div>

            <div className="flex justify-center lg:w-[65%]">
              <input
                min={10}
                max={200}
                type="range"
                className="appearance-none bg-green-400 my-4 w-full rounded-lg"
                onChange={(e)=>{
                    setInputValue(e.target.value)
                }}
              />
            </div>

            <div className="text-[#64748B] lg:flex lg:w-1/12 lg:items-center">
              میلیون 200 تومان
            </div>
          </div>

          <div className="h-24 w-full">
            <p className="mr-4 mt-4 text-green-600">مدت زمان بازپرداخت :</p>

            <div className="mx-auto flex h-24 w-[93%]">
              <div className="flex w-1/4 items-center">
                <div className="h-12 w-12 rounded-md bg-[#1D434C] text-lg">
                  <button onClick={handleNext} className="text-white">
                    <MdOutlineNavigateNext size={50} />
                  </button>
                </div>
              </div>

              <div className="flex w-1/2 items-center justify-center">
                <div className="flex justify-center">
                  <button className="w-28 rounded-lg border-2 border-[#1D434C] bg-green-200 p-2 font-bold text-[#1D434C]">
                    {items[currentIndex]}
                  </button>
                </div>
              </div>

              <div className="flex w-1/4 items-center justify-end">
                <div className="h-12 w-12 rounded-md bg-[#1D434C] text-lg">
                  <button onClick={handlePrevious} className="text-white">
                    <GrFormPrevious size={50} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/2">
          <div className="sm:h-34 mx-auto mt-2 min-h-44 w-[90%] rounded-lg bg-green-100 sm:mx-auto sm:w-[80%] lg:mx-auto lg:mt-10 lg:h-48 lg:w-[80%] lg:pt-2">
            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-5 flex w-[90%] sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-[2px] text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                مبلغ قسط نهایی
              </div>
              <div className="w-1/2 text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-base">
                940,763 <span className="text-sm">تومان</span>
              </div>
            </div>

            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-2 flex w-[90%] py-3 sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-1 text-xs text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:pt-0 lg:text-[13px]">
                ما به تفاوت خرید نقدی و اقساطی
              </div>
              <div className="w-1/2 pt-[3px] text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                940,763 <span className="text-sm">تومان</span>
              </div>
            </div>

            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-2 flex w-[90%] py-3 sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-1 text-xs text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:pt-0 lg:text-sm">
                اعتبار کیف پول فروشگاه
              </div>
              <div className="w-1/2 pt-[3px] text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                940,763 <span className="text-sm">تومان</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mx-auto mb-3 mt-4 block w-[85%] rounded-md bg-[#1D434C] p-1 text-white lg:mb-0 lg:w-[80%]"
          >
            درخواست وام
          </button>
        </div>
      </div>
    </>
  );
};

export default RequestedLoan;
