"use client";

import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

import TickPaper from "@/../public/image/t-paper.svg";
import Paper from "@/../public/image/paper.svg";
import Tick from "@/../public/image/tick.svg";
import Wallet from "@/../public/image/wallet.svg";
import PlansCard from "@/components/elements/PlansCard";

import mehr from "@/../public/image/mehr.svg";
import blue from "@/../public/image/blue.svg";
import kar from "@/../public/image/kar.svg";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Merchants from "../landingModule/Merchants";
import { useRouter } from "next/navigation";
import MohasebeAghsat from "../landingModule/MohasebeAghsat";

const cards = [
  {
    id: 1,
    title: "کارت 1",
    backgroundImage: "/image/card1.png",
    bankName: "بانک مهر",
    bankLogo: mehr,
    creditTitle: "ارائه تسهیلات تا سقف",
    creditCeil: "100,000,000 میلیون تومان",
    supportedBy: "زیر نظر بانک مرکزی",
    duration: "تا 24 ماه",
  },
  {
    id: 2,
    title: "کارت 2",
    backgroundImage: "/image/card2.png",
    bankName: "بلو بانک",
    bankLogo: blue,
    creditTitle: "ارائه تسهیلات تا سقف",
    creditCeil: "100,000,000 میلیون تومان",
    supportedBy: "زیر نظر بانک مرکزی",
    duration: "تا 24 ماه",
  },
  {
    id: 3,
    title: "کارت 3",
    backgroundImage: "/image/card3.png",
    bankName: "های بانک",
    bankLogo: kar,
    creditTitle: "ارائه تسهیلات تا سقف",
    creditCeil: "100,000,000 میلیون تومان",
    supportedBy: "زیر نظر بانک مرکزی",
    duration: "تا 24 ماه",
  },
  {
    id: 3,
    title: "کارت 3",
    backgroundImage: "/image/card3.png",
    bankName: "های بانک",
    bankLogo: kar,
    creditTitle: "ارائه تسهیلات تا سقف",
    creditCeil: "100,000,000 میلیون تومان",
    supportedBy: "زیر نظر بانک مرکزی",
    duration: "تا 24 ماه",
  },
];

export default function CreditPlans() {
  const router = useRouter();

  const formatNumber = (number) => {
    return number.toLocaleString("fa-IR"); // نمایش عدد به فرمت فارسی
  };

  const [activeIndex, setActiveIndex] = useState(1); // کارت وسطی

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const conditions = [
    {
      id: 1,
      icon: TickPaper,
      title: "نیاز به حساب بانکی فعال در طرح مربوطه",
    },
    {
      id: 2,
      icon: Wallet,
      title: "نیاز به چک صیادی",
    },
    {
      id: 3,
      icon: Paper,
      title: "نیاز به استعلام حساب بانکی",
    },
    {
      id: 4,
      icon: Tick,
      title: "نیاز به امضا قرارداد در اپلیکیشن بانکی",
    },
  ];

  const items = [6, 12, 24, 36];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [inputValue, setInputValue] = useState(1000000);

  const [calculatedPayment, setCalculatePayment] = useState({
    bankPrePayment: "-",
    yearlySubscribePayment: "-",
    finalPaymentToUser: "-",
    paymentPerMounth: digitsEnToFa(0),
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
      paymentPerMounth: formatNumber(Math.ceil(payment)),
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
      <div className="mt-10 flex flex-col items-center bg-evaamBackground lg:block lg:h-full lg:w-full">
        <div className="relative flex h-auto w-full flex-col rounded-3xl bg-white lg:flex-col lg:items-center lg:p-8">
          <div
            id="text-line"
            className="h-[1px] w-full bg-green-900 lg:w-[80%]"
          ></div>
          {/* <div className="absolute right-12 top-5 bg-inherit px-5 lg:right-[550px]">
            <p className="w-full text-center text-lg font-bold">
              طرح های اعتباری و اقساط آن
            </p>
          </div> */}
          <div className="h-auto w-full flex flex-wrap items-center gap-4 justify-center mt-16 lg:flex lg:flex-row lg:justify-evenly mb-32">
            <PlansCard plans={conditions} />
          </div>
          <MohasebeAghsat/>
          {/* <div className="mt-16 flex h-[600px] w-full flex-col items-center justify-evenly rounded-2xl border-2 border-green-100 lg:mt-0"> */}
            {/* <div className="text-lg font-bold">جزئیات طرح انتخابی</div>
            <div className="flex flex-row rounded-xl bg-gray-300 px-10 py-2">
              مبلغ: {digitsEnToFa(inputValue)} تومان
            </div> */}
            {/* input in lg: */}
            {/* <div className="hidden lg:flex lg:w-full lg:flex-row lg:items-center lg:justify-evenly">
              <div>
                <p className="text-gray-500">
                  {digitsEnToFa("0")} میلیون تومان
                </p>
              </div>
              <div className="lg:w-[60%]">
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
              </div>
              <div>
                <p className="text-gray-500">
                  {digitsEnToFa("100")} میلیون تومان
                </p>
              </div>
            </div> */}
            {/* input in lg: */}

            {/* input in mobile */}
            {/* <div className="flex w-5/6 flex-col lg:hidden">
              <div className="flex flex-row items-center justify-between text-sm">
                <div>
                  <p className="text-gray-500">
                    {digitsEnToFa("1")} میلیون تومان
                  </p>
                </div>

                <div>
                  <p className="text-gray-500">
                    {digitsEnToFa("100")} میلیون تومان
                  </p>
                </div>
              </div>

              <div className="w-full">
                <input
                  step={1000000}
                  min={1000000}
                  max={100000000}
                  value={inputValue}
                  type="range"
                  className="my-4 w-full appearance-none rounded-lg"
                  onChange={handleChange}
                  style={{
                    background: `linear-gradient(to left, #1d434c ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%)`,
                  }}
                />
              </div>
            </div> */}
            {/* input in mobile */}

            {/* <div className="px-4 flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>اصل تسهیلات ثبتی در بانک</p>
              </div>
              <div>{digitsEnToFa(inputValue)} تومان</div>
            </div>
            <div className="px-4 flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>واریز نقدی پیش پرداخت</p>
              </div>
              <div>{calculatedPayment.bankPrePayment} تومان</div>
            </div>
            <div className="px-4 flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>هزینه اشتراک سالیانه</p>
              </div>
              <div>{calculatedPayment.yearlySubscribePayment} تومان</div>
            </div>
            <div className="px-4 flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>دریافتیِ نهایی</p>
              </div>
              <div>{calculatedPayment.finalPaymentToUser} تومان</div>
            </div>
            <div className="px-4 flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>پرداخت ماهانه</p>
              </div>
              <div>{calculatedPayment.paymentPerMounth} تومان</div>
            </div>
            <div className="px-4 flex w-full items-center justify-center lg:flex-row lg:px-14">
              <div>
                <button
                  onClick={() => {
                    router.push("bank-credit/complete-info");
                  }}
                  className="rounded-lg bg-green-900 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:rounded-xl hover:shadow-lg px-8 py-3"
                >
                  درخواست اعتبار
                </button>
              </div>
            </div> */}
          {/* </div> */}
          <Merchants from="not" />
        </div>
      </div>
    </>
  );
}
