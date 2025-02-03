"use client";
import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

// تابع برای فرمت‌دهی عدد
const formatNumber = (number) => {
  return number.toLocaleString("fa-IR"); // نمایش عدد به فرمت فارسی
};

const RequestedLoan = ({ isBanner }) => {

  const router = useRouter()

  const items = [6, 12, 18, 24];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [inputValue, setInputValue] = useState(10000000);

  const [calculatedPayment, setCalculatePayment] = useState({
    bankPrePayment: "-",
    yearlySubscribePayment: "-",
    finalPaymentToUser: "-",
    paymentPerMounth: 0,
  });

  const calculatePrePayment = (e) => {
    let numberOfEvent = Number(e);

    let prePayment = numberOfEvent * 0.05;

    let finalPaymentToUser = numberOfEvent - prePayment;

    let r = 23 / 100 / 12;
    let denominator = 1 - Math.pow(1 + r, -items[currentIndex]);
    let payment = (numberOfEvent * r) / denominator;

    setCalculatePayment((prev) => ({
      ...prev,
      bankPrePayment: formatNumber(Math.ceil(prePayment)),
      yearlySubscribePayment: formatNumber(Math.ceil(prePayment)),
      finalPaymentToUser: formatNumber(Math.ceil(finalPaymentToUser)),
      paymentPerMounth: Math.ceil(payment),
    }));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex === items.length - 1 ? 0 : prevIndex + 1;

      let numberOfEvent = Number(inputValue);
      let r = 23 / 100 / 12;
      let denominator = 1 - Math.pow(1 + r, -items[newIndex]);
      let payment = (numberOfEvent * r) / denominator;

      setCalculatePayment((prev) => ({
        ...prev,
        paymentPerMounth: Math.ceil(payment),
      }));

      return newIndex;
    });
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex === 0 ? items.length - 1 : prevIndex - 1;

      let numberOfEvent = Number(inputValue);
      let r = 23 / 100 / 12;
      let denominator = 1 - Math.pow(1 + r, -items[newIndex]);
      let payment = (numberOfEvent * r) / denominator;

      setCalculatePayment((prev) => ({
        ...prev,
        paymentPerMounth: Math.ceil(payment),
      }));

      return newIndex;
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // ذخیره مقدار جدید
    calculatePrePayment(value);
  };

  let percentage = ((inputValue - 10000000) / (200000000 - 10000000)) * 100; // محاسبه درصد

  return (
    <>
      <div className="absolute mx-auto flex flex-wrap rounded-3xl sm:mt-[800px] bg-white p-3 md:pb-8 shadow-lg sm:min-h-[300px] sm:w-[90%] md:mt-[800px] lg:mt-[900px] lg:h-auto lg:p-5">
        <div className="w-full sm:w-1/2 lg:w-1/2">
          <div className="mt-10 flex w-full flex-wrap">
            <div className="w-1/2 pr-3 text-sm text-green-600 sm:w-1/2 sm:text-base lg:w-1/2 lg:text-lg">
              مبلغ وام درخواستی
            </div>
            <div className="w-1/2 pl-3 text-left text-sm text-[#009B9D] sm:w-1/2 sm:text-base lg:w-1/2 lg:text-lg">
              {formatNumber(Number(inputValue))} تومان
            </div>
          </div>

          <div className="mt-10 flex w-full flex-wrap justify-around">
            <div className="text-[#64748B] lg:flex lg:w-auto lg:items-center lg:text-sm">
              {digitsEnToFa("1")} میلیون تومان
            </div>

            <div className="flex justify-center lg:w-[65%]">
              <input
                min={10000000}
                max={200000000}
                value={inputValue}
                type="range"
                className="mx-3 my-4 w-full appearance-none rounded-lg"
                onChange={handleChange}
                style={{
                  background: `linear-gradient(to left, #1d434c ${percentage}%, #e5e7eb ${percentage}%)`, // سبز به سفید
                }}
              />
            </div>

            <div className="text-sm text-[#64748B] lg:flex lg:w-auto lg:items-center">
              {digitsEnToFa("100")} میلیون تومان
            </div>
          </div>

          <div className="h-24 w-full">
            <p className="mr-4 mt-4 text-green-900">مدت زمان بازپرداخت :</p>

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
                    {formatNumber(items[currentIndex])} ماه
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
          <div className="sm:h-34 mx-auto md:mt-2 min-h-44 w-[90%] rounded-lg md:bg-green-100 sm:mx-auto sm:w-[80%] lg:mx-auto lg:mt-10 lg:h-auto lg:min-h-60 lg:w-[80%] lg:pb-8 lg:pt-2 sm:bg-green-100 bg-green-100 mt-10 py-6 ">
            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-5 flex w-[90%] sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-[2px] text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-[12px]">
                اصل تسهیلات ثبتی در بانک
              </div>
              <div className="w-1/2 text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-base">
                {formatNumber(Number(inputValue))}{" "}
                <span className="text-sm">تومان</span>
              </div>
            </div>
            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-2 flex w-[90%] py-3 sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-1 text-xs text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:pt-0 lg:text-[13px]">
                واریز نقدی پیش پرداخت
              </div>
              <div className="w-1/2 pt-[3px] text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                {calculatedPayment.bankPrePayment}{" "}
                <span className="text-sm">تومان</span>
              </div>
            </div>
            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-2 flex w-[90%] py-3 sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-1 text-xs text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:pt-0 lg:text-[13px]">
                هزینه اشتراک سالیانه
              </div>
              <div className="w-1/2 pt-[3px] text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                {calculatedPayment.yearlySubscribePayment}{" "}
                <span className="text-sm">تومان</span>
              </div>
            </div>

            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-2 flex w-[90%] py-3 sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[90%]">
              <div className="w-1/2 pt-1 text-xs text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:pt-0 lg:text-sm">
                دریافتی نهایی
              </div>
              <div className="w-1/2 pt-[3px] text-left text-sm text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                {calculatedPayment.finalPaymentToUser}{" "}
                <span className="text-sm">تومان</span>
              </div>
            </div>

            <div className="lg:h-54 min-h-34 sm:h-34 mx-auto mt-2 flex w-[90%] rounded-xl border-2 border-green-900 px-4 py-3 sm:mx-auto sm:w-[80%] lg:mx-auto lg:w-[95%] lg:px-3">
              <div className="w-1/2 pt-1 text-xs font-extrabold text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:pt-0 lg:text-sm">
                پرداخت ماهانه
              </div>
              <div className="w-1/2 pt-[3px] text-left text-sm font-extrabold text-[#1D434C] sm:w-1/2 lg:w-1/2 lg:text-sm">
                {formatNumber(calculatedPayment.paymentPerMounth)}{" "}
                <span className="text-sm">تومان</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex w-full flex-row items-center justify-center">
          <button onClick={()=>{
            router.push("/bank-credit")
          }} className="rounded-lg border-4 border-green-300 bg-green-900 p-3 px-16 text-white transition-all duration-300 ease-in-out hover:rounded-2xl">
            درخواست اعتبار
          </button>
        </div>
      </div>
    </>
  );
};

export default RequestedLoan;
