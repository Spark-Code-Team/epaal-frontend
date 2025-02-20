"use client";

import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

import MohasebeAghsat from "@/components/module/landingModule/MohasebeAghsat";
import Tick1 from "../../../../../public/icons/dashboard/tick1";
import Tick2 from "../../../../../public/icons/dashboard/tick2";
import Tick3 from "../../../../../public/icons/dashboard/tick3";
import Tick4 from "../../../../../public/icons/dashboard/tick4";

export default function GetCreditDashboard() {
  const [inputValue, setInputValue] = useState(1000000);
  const [index, setIndex] = useState(1);
  const [calculatedPayment, setCalculatePayment] = useState({
    bankPrePayment: digitsEnToFa("1,000,000"),
    yearlySubscribePayment: digitsEnToFa("1,000,000"),
    finalPaymentToUser: digitsEnToFa("1,000,000"),
    paymentPerMounth: digitsEnToFa("94,077"),
  });
  // const items = [6, 12, 24, 36];
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [monthGhest, setMonthGhest] = useState(12);
  const slides = [
    "/image/backCard.png",
    "/image/backCard1.png",
    "/image/backCard2.png",
  ];

  const router = useRouter();

  const formatNumber = (number) => {
    return number.toLocaleString("fa-IR"); // نمایش عدد به فرمت فارسی
  };

  const calculatePrePayment = (e, month) => {
    let numberOfEvent = Number(e);

    let prePayment = numberOfEvent * 0.05;

    let finalPaymentToUser = numberOfEvent - prePayment;

    let r = 23 / 100 / 12;
    let denominator = 1 - Math.pow(1 + r, -month);
    let payment = (numberOfEvent * r) / denominator;

    setCalculatePayment((prev) => ({
      ...prev,
      bankPrePayment: formatNumber(Math.ceil(prePayment)),
      yearlySubscribePayment: formatNumber(Math.ceil(prePayment)),
      finalPaymentToUser: formatNumber(Math.ceil(finalPaymentToUser)),
      paymentPerMounth: formatNumber(Math.ceil(payment)),
    }));
  };

  const updateSlider = (mozoe) => {
    if (mozoe == "azafe") {
      if (index == slides.length - 1) return;
      setIndex((last) => last + 1);
    } else {
      if (index == 0) return;
      setIndex((last) => last - 1);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // ذخیره مقدار جدید
    calculatePrePayment(value, monthGhest);
  };

  // States for swipe functionality
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX); // Record the start point of touch
  };

  const handleTouchEnd = (e) => {
    setEndX(e.changedTouches[0].clientX); // Record the end point of touch
    const diff = endX - startX; // Calculate the swipe distance

    console.log(diff);

    // If swipe distance is enough, update the index to move the slides
    if (Math.abs(diff) > 10) {
      if (diff > 0) {
        updateSlider("azafe"); // Move to the right
      } else {
        updateSlider("azafee"); // Move to the left
      }
    }
  };

  return (
    <div className="flex flex-col items-center md:mt-10">
      <div className="text-lg font-bold">
        <p>درخواست اعتبار</p>
      </div>
      {/* done */}
      <div className="mx-auto flex w-full items-center justify-center overflow-hidden md:max-w-[810px]">
        <div
          className="flex p-10 transition-transform duration-500"
          style={{ transform: `translateX(${index * 33.33 - 33.33}%)` }}
          onTouchStart={handleTouchStart} // Handle touch start
          onTouchEnd={handleTouchEnd} // Handle touch end
        >
          {slides.map((src, i) => (
            <div
              key={i}
              className={`z-0 h-[124px] w-[226px] flex-none cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-4 text-white transition-transform duration-300 md:h-[217px] md:w-[398] ${i === index ? "z-10 scale-125 opacity-100" : "opacity-50"}`}
              style={{
                background: `url(${src}) center/100% 100% no-repeat`,
              }}
            >
              <div className="flex w-full items-center justify-between px-2">
                <p>های‌بانک</p>
                <p>Hi Bank</p>
              </div>
              <div className="mt-[10px] flex flex-col items-center justify-center md:mt-[14px]">
                <p className="text-[7px] font-bold md:text-[14px]">
                  ارائه تسهیلات تا سقف
                </p>
                <p className="text-[13px] font-bold md:text-[24px]">
                  {digitsEnToFa("100,000,000")} میلیون تومان
                </p>
              </div>

              <div className="flex w-full items-center justify-between md:mt-[30px]">
                <div className="text-[5px] font-normal md:text-[10px]">
                  تامین مالی توسط بانک کارآفرین
                </div>
                {/* <div className="rounded-xl bg-[#232336b3] px-[5px] py-2 text-[7px] backdrop-blur-[40px] md:text-[14px]">
                      {digitsEnToFa("18")} ماهه
                    </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* done */}

      {/* done */}
      <div className="mt-4 flex w-full -translate-y-1/2 transform items-center justify-center">
        <div className="flex w-[120px] items-center gap-3">
          <div
            className="h-[5px] w-10 rounded-md bg-[#E2E2E2] bg-opacity-50 text-white"
            onClick={() => updateSlider("azafee")}
          ></div>
          <div className="h-[5px] w-[42px] rounded-md bg-[#8A8B8D]"></div>
          <div
            className="h-[5px] w-10 rounded-md bg-[#E2E2E2] bg-opacity-50 text-white"
            onClick={() => updateSlider("azafe")}
          ></div>
        </div>
      </div>
      {/* done */}

      {/*  */}
      <div
        className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
        onClick={() => {
          router.push("/dashboard/calculate-credit");
        }}
      >
        درخواست اعتبار
      </div>
      {/*  */}

      <div className="bg-evaamBorderColor mt-10 h-auto flex flex-col items-start gap-5 mb-10 md:mb-0 rounded-2xl p-10 md:flex md:w-full md:flex-row md:items-center md:justify-evenly md:gap-0 md:py-5 md:text-sm">
        <div className="md:flex md:flex-col md:items-center md:justify-evenly">
          <div>
            <Tick1 />
          </div>
          <div>حساب بانکی فعال در طرح مربوطه</div>
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-evenly">
          <div>
            {" "}
            <Tick2 />{" "}
          </div>
          <div>چک صیادی جهت ضمانت</div>
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-evenly">
          <div>
            <Tick3 />
          </div>
          <div> استعلام حساب بانکی </div>
        </div>
        <div className="md:flex md:flex-col md:items-center md:justify-evenly">
          <div>
            <Tick4 />
          </div>
          <div> امضاء قرارداد در اپلیکیشن بانکی</div>
        </div>
      </div>

      {/* <div className="grid w-full grid-cols-1 text-[12px] mt-10 px-2 md:px-10">
        <div className="mb-[37px] flex w-full items-center justify-between">
          <div className=" ">مبلغ شارژ کیف پول</div>
          <div className=" ">{calculatedPayment.finalPaymentToUser} تومان</div>
        </div>
        <div className="mb-[37px] flex w-full items-center justify-between">
          <div className=" ">اصل تسهیلات ثبتی در بانک</div>
          <div className=" ">{formatNumber(Number(inputValue))} تومان</div>
        </div>
        <div className="mb-[37px] flex w-full items-center justify-between">
          <div className=" ">
            {" "}
            <p>واریز نقدی پیش پرداخت</p>
          </div>
          <div className=" ">{calculatedPayment.bankPrePayment} تومان</div>
        </div>
        <div className="mb-[37px] flex w-full items-center justify-between">
          <div className=" ">هزینه اشتراک ایوام</div>
          <div className=" ">
            {calculatedPayment.yearlySubscribePayment} تومان
          </div>
        </div>
        <div className="mb-[37px] flex w-full items-center justify-between">
          <div className=" ">اقساط ماهانه</div>
          <div className=" ">{calculatedPayment.paymentPerMounth}تومان</div>
        </div>
      </div> */}
    </div>
  );
}
