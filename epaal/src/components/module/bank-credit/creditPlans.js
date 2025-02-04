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
];

export default function CreditPlans() {
  const router = useRouter()

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
      <div className="bg-evaamBackground h-80 w-full lg:px-14 lg:py-10">
        <div className="relative flex h-auto w-full rounded-3xl bg-white lg:flex-col lg:items-center lg:p-8">
          <div id="text-line" className="h-[1px] w-[80%] bg-green-900"></div>
          <div className="absolute top-5 bg-inherit px-5">
            <p className="text-lg font-bold">طرح های اعتباری و اقساط آن</p>
          </div>
          <div className="flex h-auto w-full flex-wrap items-center lg:mt-10 lg:flex-row lg:justify-evenly">
            <PlansCard plans={conditions} />
          </div>
          <div
            id="cards-carosel"
            className="relative flex w-full items-center justify-center overflow-hidden lg:mb-10 lg:mt-10 lg:h-[500px]"
          >
            {/* دکمه‌های چپ و راست */}
            <button
              onClick={prevSlide}
              className="absolute left-2 z-10 flex flex-col rounded-full bg-gray-300 p-2 text-gray-600"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 z-10 flex flex-col rounded-full bg-gray-300 p-2 text-gray-600"
            >
              ▶
            </button>

            {/* نمایش کارت‌ها */}
            <div className="flex w-full items-center justify-center lg:mt-16">
              {cards.map((card, index) => {
                const isActive = index === activeIndex;
                const isPrev =
                  index === (activeIndex - 1 + cards.length) % cards.length;
                const isNext = index === (activeIndex + 1) % cards.length;

                return (
                  <motion.div
                    key={card.id}
                    className="absolute flex flex-col items-center justify-center rounded-lg"
                    style={{
                      background: `url('${card.backgroundImage}') center/100% 100% no-repeat`,
                      width: isActive ? "500px" : "600px",
                      height: isActive ? "300px" : "250px",
                      zIndex: isActive ? 3 : 2,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    animate={{
                      x: isPrev ? "-150px" : isNext ? "150px" : "0px",
                      scale: isActive ? 1.2 : 1,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <div className="flex h-3/4 w-3/4 flex-col items-center justify-evenly gap-3 text-white">
                      <div className="flex w-full lg:flex-row lg:items-center lg:justify-between lg:px-1">
                        <div>
                          <p>{card.bankName}</p>
                        </div>
                        <div>
                          <Image
                            src={card.bankLogo}
                            alt={`${card.id}.png`}
                            width={100}
                            height={100}
                            className="h-10 w-10"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="font-normal text-white">
                          {card.creditTitle}
                        </p>
                      </div>
                      <div>
                        <p className="text-2xl font-extrabold text-white">
                          {digitsEnToFa(card.creditCeil)}
                        </p>
                      </div>
                      <div className="flex w-full lg:flex-row lg:items-center lg:justify-between lg:px-1">
                        <div>
                          <p className="text-[10px] font-thin text-white">
                            {card.supportedBy}
                          </p>
                        </div>
                        <div className="rounded-xl bg-blurbg px-2 py-1">
                          {card.duration}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="flex h-[600px] w-full items-center justify-evenly rounded-2xl border-2 border-green-100 lg:flex-col">
            <div className="text-lg font-bold">جزئیات طرح انتخابی</div>
            <div className="flex bg-gray-300 py-2 lg:flex-row lg:rounded-xl lg:px-10">
             مبلغ: {digitsEnToFa(inputValue)} تومان
            </div>
            <div className="flex lg:w-full lg:flex-row lg:items-center lg:justify-evenly">
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
            </div>
            <div className="flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>اصل تسهیلات ثبتی در بانک</p>
              </div>
              <div>{digitsEnToFa(inputValue)} تومان</div>
            </div>
            <div className="flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>واریز نقدی پیش پرداخت</p>
              </div>
              <div>{calculatedPayment.bankPrePayment} تومان</div>
            </div>
            <div className="flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>هزینه اشتراک سالیانه</p>
              </div>
              <div>{calculatedPayment.yearlySubscribePayment} تومان</div>
            </div>
            <div className="flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>دریافتیِ نهایی</p>
              </div>
              <div>{calculatedPayment.finalPaymentToUser} تومان</div>
            </div>
            <div className="flex w-full items-center justify-between lg:flex-row lg:px-14">
              <div>
                <p>پرداخت ماهانه</p>
              </div>
              <div>{calculatedPayment.paymentPerMounth} تومان</div>
            </div>
            <div className="flex w-full items-center justify-center lg:flex-row lg:px-14">
              <div>
                <button onClick={()=>{
                  router.push('/complete-info')
                }} className="bg-green-900 text-white lg:px-8 lg:py-3 rounded-lg transition-all ease-in-out duration-300 hover:rounded-xl hover:scale-105 hover:shadow-lg">درخواست اعتبار</button>
              </div>
            </div>
          </div>
          <Merchants from="not"/>
        </div>
      </div>
    </>
  );
}
