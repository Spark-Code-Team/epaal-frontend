"use client";

import { useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

const MohasebeAghsat = ({ toPage }) => {
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
    <div className="relative min-h-[1000px] w-full md:min-h-[1386px]">
      <div className="absolute top-[-100px] mx-auto flex w-full flex-col items-center md:h-[1386px]">
        <div className="flex w-full flex-col rounded-[54px] bg-white md:w-[80%]">
          <div className="mb-[20px] mt-[38px] w-full text-center text-[14px] font-bold md:text-[24px]">
            طرح های اعتباری و اقساط آن
          </div>

          <div className="mx-auto flex w-full items-center justify-center overflow-hidden">
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

          <div className="relative mx-auto mt-[40px] flex w-[90%] flex-col items-center rounded-3xl border-2 border-[#d9d9d9] px-3 py-7 md:mb-[48px] md:h-[918px] md:w-3/4 md:px-[86px]">
            <div className="pb-7 md:pb-[47px] md:pt-[80px]">
              <p className="hidden text-[24px] font-bold text-[#1D2433] md:flex">
                جزئیات طرح انتخابی
              </p>
            </div>

            <div className="flex w-full items-center justify-between">
              <p className="flex md:hidden">میزان اعتبار درخواستی</p>
              <p className="flex items-center text-[18px] font-bold">
                <span className="hidden md:flex">مبلغ:</span>
                <span className="mr-[13px] text-[16px] font-bold text-[#587E88] md:text-[36px]">
                  {formatNumber(Number(inputValue))}
                  <span className="mr-[6px] text-[12px] md:text-[18px]">
                    تومان
                  </span>
                </span>
              </p>
            </div>

            <div className="flex w-full flex-col items-center justify-center md:flex-row">
              <div className="hidden text-center text-[14px] text-[#8A8B8D] md:flex">
                {digitsEnToFa("1,000,000")} <span> تومان </span>
              </div>
              <input
                step={1000000}
                min={1000000}
                max={100000000}
                value={inputValue}
                type="range"
                className="mx-3 my-4 w-full appearance-none rounded-lg"
                onChange={handleChange}
                style={{
                  background: `linear-gradient(to left, #1d434c ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%)`,
                }}
              />
              <div className="hidden text-center text-[14px] text-[#8A8B8D] md:flex">
                {digitsEnToFa("100,000,000")} <span> تومان </span>
              </div>
              <div className="mb-6 flex w-full items-center justify-between md:hidden">
                <p> {digitsEnToFa("1,000,000")} تومان</p>
                <p>{digitsEnToFa("100,000,000")} تومان</p>
              </div>
            </div>

            <div className="my-[26px] flex w-full flex-col md:flex-row md:items-center">
              <p>مدت بازپرداخت:</p>

              <div className="my-[16px] flex items-center gap-4 md:my-[50px] md:mr-[16px]">
                <div
                  className={`flex w-[79px] cursor-pointer items-center justify-center rounded-xl p-2 text-[12px] md:w-[113px] md:text-[16px] ${monthGhest == 6 ? "bg-[#1D434C] text-white" : "bg-[#F0F0F1] text-[#1D434C]"} `}
                  onClick={() => setMonthGhest(6)}
                >
                  6 ماهه
                </div>
                <div
                  className={`flex w-[79px] cursor-pointer items-center justify-center rounded-xl p-2 text-[12px] md:w-[113px] md:text-[16px] ${monthGhest == 12 ? "bg-[#1D434C] text-white" : "bg-[#F0F0F1] text-[#1D434C]"} `}
                  onClick={() => setMonthGhest(12)}
                >
                  12 ماهه
                </div>
                <div
                  className={`flex w-[79px] cursor-pointer items-center justify-center rounded-xl p-2 text-[12px] md:w-[113px] md:text-[16px] ${monthGhest == 18 ? "bg-[#1D434C] text-white" : "bg-[#F0F0F1] text-[#1D434C]"} `}
                  onClick={() => setMonthGhest(18)}
                >
                  18 ماهه
                </div>
                <div
                  className={`flex w-[79px] items-center justify-center rounded-xl p-2 text-[12px] md:w-[113px] md:text-[16px] ${monthGhest == 24 ? "bg-[#1D434C] text-white" : "bg-[#F0F0F1] text-[#1D434C]"} `}
                  onClick={() => setMonthGhest(24)}
                >
                  24 ماهه
                </div>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 text-[12px]">
              <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">مبلغ شارژ کیف پول</div>
                <div className=" ">
                  {calculatedPayment.finalPaymentToUser} تومان
                </div>
              </div>
              <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">اصل تسهیلات ثبتی در بانک</div>
                <div className=" ">
                  {formatNumber(Number(inputValue))} تومان
                </div>
              </div>
              <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">
                  {" "}
                  <p>واریز نقدی پیش پرداخت</p>
                </div>
                <div className=" ">
                  {calculatedPayment.bankPrePayment} تومان
                </div>
              </div>
              <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">هزینه اشتراک ایوام</div>
                <div className=" ">
                  {calculatedPayment.yearlySubscribePayment} تومان
                </div>
              </div>
              {/* <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">
                  {" "}
                  <p>دریافتیِ نهایی</p>
                </div>
                <div className=" ">35,000,000 تومان</div>
              </div> */}
              <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">اقساط ماهانه</div>
                <div className=" ">
                  {calculatedPayment.paymentPerMounth}تومان
                </div>
              </div>
            </div>

            <div
              className="mt-[41px] w-3/4 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                router.push(toPage);
              }}
            >
              درخواست اعتبار
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MohasebeAghsat;
