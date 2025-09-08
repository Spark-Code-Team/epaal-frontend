"use client";

import { useEffect, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

import Tick1 from "../../../public/icons/dashboard/tick1";
import Tick2 from "../../../public/icons/dashboard/tick2";
import Tick3 from "../../../public/icons/dashboard/tick3";
import Tick4 from "../../../public/icons/dashboard/tick4";
import { allFacility } from "@/service/userPanel";
import {useDispatch, useSelector} from "react-redux";
import { addFacility } from "@/redux/features/facilityChose/facilityChose";

export default function GetCredictPage() {
  // مقدار ورودی کاربر (مبلغ درخواستی) — پیش‌فرض 1,000,000
  const [inputValue, setInputValue] = useState(1000000);

  // ایندکس اسلایدر کارت‌های تسهیلات
  const [index, setIndex] = useState(1);

  // محاسبات پرداخت — مقادیر به فرمت فارسی نمایش داده می‌شوند
  const [calculatedPayment, setCalculatePayment] = useState({
    bankPrePayment: digitsEnToFa("1,000,000"),
    yearlySubscribePayment: digitsEnToFa("1,000,000"),
    finalPaymentToUser: digitsEnToFa("1,000,000"),
    paymentPerMounth: digitsEnToFa("94,077"),
  });

  // اسلایدهای دریافتی از API (Facility list)
  const [slides, setSlides] = useState([]);

  const [monthGhest, setMonthGhest] = useState(12); // تعداد اقساط (ماه)
  const Images = ["/image/backCard.png", "/image/backCard1.png", "/image/backCard2.png"]; // پس‌زمینه‌های کارت

  const dispatch = useDispatch();
  const profile = useSelector((store) => store.profile);

  // فراخوانی API برای گرفتن لیست تسهیلات هنگام mount
  useEffect(() => {
    const fetchData = async () => {
      const { response, error } = await allFacility();
      if (response) {
        // response.data: آرایه‌ی Facility → برای رندر کارت‌ها/اسلایدها
        setSlides(response.data);
      } else {
        console.log(error);
        // درصورت نیاز: toast.error(error?.response?.data?.error || "خطا در دریافت تسهیلات")
      }
    };
    fetchData();
  }, []);

  const router = useRouter();

  // فرمت عدد به نمایش فارسی
  const formatNumber = (number) => number.toLocaleString("fa-IR");

  // محاسبه‌ی پیش‌پرداخت، مبلغ نهایی دریافتی کاربر، و قسط ماهانه
  // - prePayment = 5% مبلغ
  // - finalPaymentToUser = مبلغ - prePayment
  // - payment: فرمول قسط ثابت (Amortization) با نرخ سالانه 23% → r = 23/100/12
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
      yearlySubscribePayment: formatNumber(Math.ceil(prePayment)), // ظاهراً همان 5% به‌عنوان «حق اشتراک سالانه» نیز نمایش داده می‌شود
      finalPaymentToUser: formatNumber(Math.ceil(finalPaymentToUser)),
      paymentPerMounth: formatNumber(Math.ceil(payment)),
    }));
  };

  // تغییر ایندکس اسلایدر بر اساس جهت
  // mozoe === "azafe" → افزایش ایندکس (حرکت به جلو)
  // else → کاهش ایندکس (حرکت به عقب)
  const updateSlider = (mozoe) => {
    if (mozoe == "azafe") {
      if (index == slides.length - 1) return;
      setIndex((last) => last + 1);
    } else {
      if (index == 0) return;
      setIndex((last) => last - 1);
    }
  };

  // هنگام تغییر مبلغ ورودی، محاسبات به‌روزرسانی می‌شود
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    calculatePrePayment(value, monthGhest);
  };

  // مدیریت سوایپ روی اسلایدر
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setEndX(e.changedTouches[0].clientX);
    const diff = endX - startX;

    // اگر فاصله‌ی سوایپ کافی بود، ایندکس اسلایدر را تغییر بده
    if (Math.abs(diff) > 10) {
      if (diff > 0) {
        updateSlider("azafe");   // یادداشت: طبق منطق فعلی، سوایپ به راست ایندکس را زیاد می‌کند
      } else {
        updateSlider("azafee");  // یادداشت: این مقدار با else هندل می‌شود؛ غلط‌املایی عمدی حفظ شده تا منطق فعلی تغییر نکند
      }
    }
  };

  // مرحله‌ی فعلی (برای نمایش UI چندمرحله‌ای)
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
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
            {slides.length !==0 && slides.map((item, i) => (
              <div
                key={i}
                className={`z-0 flex-none cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-4 text-white transition-transform duration-300 md:h-[217px] md:w-[398] ${i == 0 ? "z-10 scale-125 opacity-100" : "opacity-50"}`}
                style={{
                  width: '300px', // ابعاد دلخواه
                  height: 'auto',
                  backgroundImage: `url(${Images[0]})`,
                  backgroundSize: 'contain', // یا 'contain' بسته به نیاز
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="flex w-full items-center justify-between px-2">
                  <p>
                    {
                      item.name.split(" ")[0]
                    }
                  </p>
                  <p>
                    {
                      item.name.split(" ")[1]
                    }
                  </p>
                </div>
                <div className="mt-[10px] flex flex-col items-center justify-center md:mt-[14px]">
                  <p className="text-[7px] font-bold md:text-[14px]">
                    ارائه تسهیلات تا سقف
                  </p>
                  <p className="text-[13px] font-bold md:text-[24px]">
                    {digitsEnToFa(item.max_value)} تومان
                  </p>
                </div>

                <div className="flex w-full items-center justify-between md:mt-[30px]">
                  <div className="text-[5px] font-normal md:text-[10px]">
                    تامین مالی توسط {item.bank.name}
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
            if (profile.confirmed_address && profile.confirmed_data){

            router.push("/dashboard/calculate-credit");
            dispatch(addFacility({facility: slides[0]}))
            } else {
              router.push("/dashboard/authentication")
            }
          }}
        >
           {profile.confirmed_address && profile.confirmed_data ? "درخواست اعتبار" : "احراز هویت"}
        </div>
        {/*  */}

        <div className="mb-10 mt-10 grid w-full max-w-5xl grid-cols-2 gap-6 rounded-2xl bg-evaamBorderColor p-6 text-sm md:mb-0 md:grid-cols-4 md:gap-4 md:p-5">
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Tick1 />
            <div>حساب بانکی فعال در طرح مربوطه</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Tick2 />
            <div>چک صیادی جهت ضمانت</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Tick3 />
            <div>استعلام حساب بانکی</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <Tick4 />
            <div>امضاء قرارداد در اپلیکیشن بانکی</div>
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

    </>
  );
}
