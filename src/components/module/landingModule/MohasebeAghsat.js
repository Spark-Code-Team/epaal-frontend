"use client";

import { useEffect, useMemo, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

const MohasebeAghsat = ({ toPage }) => {
  const [inputValue, setInputValue] = useState(1000000);
  const [index, setIndex] = useState(0);
  const [monthGhest, setMonthGhest] = useState(12);
  const [isMdUp, setIsMdUp] = useState(false);

  const [calculatedPayment, setCalculatePayment] = useState({
    bankPrePayment: digitsEnToFa("1,000,000"),
    yearlySubscribePayment: digitsEnToFa("1,000,000"),
    finalPaymentToUser: digitsEnToFa("1,000,000"),
    paymentPerMounth: digitsEnToFa("94,077"),
  });

  const slides = useMemo(
    () => ["/image/backCard.png", "/image/backCard1.png", "/image/backCard2.png"],
    []
  );
  const router = useRouter();

  useEffect(() => {
    const check = () => setIsMdUp(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const formatNumber = (number) => {
    if (Number.isNaN(number)) return "۰";
    return number.toLocaleString("fa-IR");
  };

  const calculatePrePayment = (amount, month) => {
    const numberOfEvent = Number(amount) || 0;
    const prePayment = numberOfEvent * 0.05;
    const finalPaymentToUser = numberOfEvent - prePayment;

    const r = 23 / 100 / 12;
    const denominator = 1 - Math.pow(1 + r, -(month || 1));
    const payment = denominator !== 0 ? (numberOfEvent * r) / denominator : 0;

    setCalculatePayment({
      bankPrePayment: formatNumber(Math.ceil(prePayment)),
      yearlySubscribePayment: formatNumber(Math.ceil(prePayment)),
      finalPaymentToUser: formatNumber(Math.ceil(finalPaymentToUser)),
      paymentPerMounth: formatNumber(Math.ceil(payment)),
    });
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setInputValue(value);
    calculatePrePayment(value, monthGhest);
  };

  useEffect(() => {
    calculatePrePayment(inputValue, monthGhest);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthGhest]);

  const updateSlider = (dir) => {
    if (dir === "next") {
      setIndex((prev) => (prev >= slides.length - 1 ? prev : prev + 1));
    } else {
      setIndex((prev) => (prev <= 0 ? prev : prev - 1));
    }
  };

  // swipe
  const [startX, setStartX] = useState(null);
  const handleTouchStart = (e) => setStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (startX == null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;
    if (Math.abs(diff) > 30) {
      if (diff < 0) updateSlider("next");
      else updateSlider("prev");
    }
    setStartX(null);
  };

  // درصد پرشدن (کلَمپ‌شده بین 0 تا 100)
  const minVal = 1_000_000;
  const maxVal = 100_000_000;
  const rawPercent = ((inputValue - minVal) / (maxVal - minVal)) * 100;
  const rangePercent = Math.max(0, Math.min(100, rawPercent));

  const slideWidthPercent = isMdUp ? 33.3333 : 100;
  const translatePercent = -(index * slideWidthPercent);

  return (
    <div className="relative w-full">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <div className="mt-8 w-full rounded-[32px] bg-white px-3 pb-8 pt-6 sm:px-6 md:mt-10 md:rounded-[54px] md:px-10 md:py-10">
          {/* تیتر */}
          <div className="mb-5 w-full text-center text-[16px] font-bold md:mb-8 md:text-[24px]">
            طرح‌های اعتباری و اقساط آن
          </div>

          {/* اسلایدر */}
          <div className="relative mx-auto w-full max-w-5xl">
            <button
              type="button"
              className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white backdrop-blur md:block"
              onClick={() => updateSlider("prev")}
              aria-label="قبلی"
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-black/30 px-3 py-2 text-white backdrop-blur md:block"
              onClick={() => updateSlider("next")}
              aria-label="بعدی"
            >
              ›
            </button>

            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(${translatePercent}%)` }}
              >
                {slides.map((src, i) => {
                  const isActive = i === index;
                  return (
                    <div
                      key={i}
                      className="relative flex-shrink-0 p-3 transition-all duration-300"
                      style={{ minWidth: `${slideWidthPercent}%` }}
                    >
                      <div
                        className={`rounded-2xl bg-cover bg-center bg-no-repeat text-white shadow-sm ring-1 ring-black/5 transition-all duration-300 ${
                          isActive ? "scale-[1.02] opacity-100" : "opacity-70"
                        }`}
                        style={{
                          backgroundImage: `url(${src})`,
                          height: isMdUp ? 217 : 180,
                        }}
                      >
                        <div className="flex items-center justify-between px-4 py-2 text-[12px] md:text-[14px]">
                          <p>های‌بانک</p>
                          <p>Hi Bank</p>
                        </div>
                        <div className="mt-2 flex flex-col items-center justify-center">
                          <p className="text-[10px] font-bold md:text-[14px]">
                            ارائه تسهیلات تا سقف
                          </p>
                          <p className="text-[16px] font-bold md:text-[24px]">
                            {digitsEnToFa("100,000,000")} میلیون تومان
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between px-4 text-[10px] md:mt-6 md:text-[12px]">
                          <div>تامین مالی توسط بانک کارآفرین</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ایندیکاتور */}
            <div className="mt-3 flex w-full items-center justify-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-md transition-all ${
                    i === index ? "w-12 bg-[#8A8B8D]" : "w-8 bg-[#E2E2E2]"
                  }`}
                  aria-label={`اسلاید ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* کارت محاسبه */}
          <div className="relative mx-auto mt-8 w-[94%] max-w-4xl rounded-2xl border-2 border-[#d9d9d9] px-4 py-6 md:mt-10 md:rounded-3xl md:px-10 md:py-10">
            <div className="pb-4 md:pb-8 md:pt-6">
              <p className="hidden text-[20px] font-bold text-[#1D2433] md:block">
                جزئیات طرح انتخابی
              </p>
            </div>

            {/* مبلغ انتخابی */}
            <div className="flex w-full flex-wrap items-center justify-between gap-2">
              <p className="flex md:hidden">میزان اعتبار درخواستی</p>
              <p className="flex items-center text-[16px] font-bold md:text-[18px]">
                <span className="hidden md:inline">مبلغ:</span>
                <span className="mr-3 text-[16px] font-bold text-[#587E88] md:mr-4 md:text-[36px]">
                  {formatNumber(Number(inputValue))}
                  <span className="mr-2 text-[12px] md:text-[18px]">تومان</span>
                </span>
              </p>
            </div>

            {/* رنج اسلایدر - برعکس نبودن */}
            <div className="mt-3 flex w-full flex-col items-center md:mt-4 md:flex-row md:items-center">
              <div className="hidden text-center text-[12px] text-[#8A8B8D] md:block md:text-[14px]">
                {digitsEnToFa("1,000,000")} تومان
              </div>

              <input
                dir="rtl"               // 👈 مهم برای جلوگیری از برعکس شدن در RTL
                step={1000000}
                min={minVal}
                max={maxVal}
                value={inputValue}
                type="range"
                className="mx-3 my-4 w-full appearance-none rounded-lg"
                onChange={handleChange}
                style={{
                  // از چپ به راست، به اندازه‌ی درصد پر شود
                  background: `linear-gradient(to left, #1d434c ${rangePercent}%, #e5e7eb ${rangePercent}%)`,
                }}
              />

              <div className="hidden text-center text-[12px] text-[#8A8B8D] md:block md:text-[14px]">
                {digitsEnToFa("100,000,000")} تومان
              </div>

              <div className="mb-2 mt-1 flex w-full items-center justify-between md:hidden">
                <p>{digitsEnToFa("1,000,000")} تومان</p>
                <p>{digitsEnToFa("100,000,000")} تومان</p>
              </div>
            </div>

            {/* انتخاب مدت بازپرداخت */}
            <div className="my-4 flex w-full flex-col md:my-6 md:flex-row md:items-center">
              <p className="text-[14px] md:text-[16px]">مدت بازپرداخت:</p>
              <div className="my-4 flex flex-wrap items-center gap-3 md:my-6 md:mr-4 md:gap-4">
                {[6, 12, 18, 24].map((m) => (
                  <button
                    key={m}
                    className={`flex w-[84px] items-center justify-center rounded-xl p-2 text-[12px] transition md:w-[100px] md:text-[14px] ${
                      monthGhest === m
                        ? "bg-[#1D434C] text-white"
                        : "bg-[#F0F0F1] text-[#1D434C]"
                    }`}
                    onClick={() => setMonthGhest(m)}
                    type="button"
                  >
                    {digitsEnToFa(String(m))} ماهه
                  </button>
                ))}
              </div>
            </div>

            {/* جدول نتایج */}
            <div className="grid w-full grid-cols-1 gap-4 text-[13px] md:text-[14px]">
              <div className="flex w-full items-center justify-between border-b border-gray-100 pb-3">
                <div>مبلغ شارژ کیف پول</div>
                <div>{calculatedPayment.finalPaymentToUser} تومان</div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-gray-100 pb-3">
                <div>اصل تسهیلات ثبتی در بانک</div>
                <div>{formatNumber(Number(inputValue))} تومان</div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-gray-100 pb-3">
                <div>واریز نقدی پیش‌پرداخت</div>
                <div>{calculatedPayment.bankPrePayment} تومان</div>
              </div>
              <div className="flex w-full items-center justify-between border-b border-gray-100 pb-3">
                <div>هزینه اشتراک زرمایه</div>
                <div>{calculatedPayment.yearlySubscribePayment} تومان</div>
              </div>
              <div className="flex w-full items-center justify-between">
                <div>اقساط ماهانه</div>
                <div>{calculatedPayment.paymentPerMounth} تومان</div>
              </div>
            </div>

            {/* CTA — وسطِ کامل */}
            <button
              type="button"
              onClick={() => router.push(toPage)}
              className="mt-6 mx-auto block w-full max-w-sm rounded-xl bg-[#1D434C] p-3 text-center text-white transition hover:opacity-95 md:mt-10 md:max-w-md"
            >
              درخواست اعتبار
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MohasebeAghsat;
