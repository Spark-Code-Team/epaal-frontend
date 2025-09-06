"use client";
import CheckRounded from "@/../public/icons/dashboard/round-check.svg";

import CheckBoxSVG from "@/../public/icons/check-tick.svg";
import { addCommas, digitsEnToFa, removeCommas } from "@persian-tools/persian-tools";
import Cleave from "cleave.js/react";
import { FaKeyboard } from "react-icons/fa";

import { useState, useEffect } from "react";

// recaptcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
  LoadCanvasTemplateNoReload,
} from "react-simple-captcha";

import reloadSVG from "@/../public/icons/reload.svg";

import { RiBankCard2Line, RiBankCardLine } from "react-icons/ri";
import Image from "next/image";
import LogoEvaam from "../../../../public/icons/LogoEvaam";
import Logo from "@/components/elements/Logo";
import { useRouter } from "next/navigation";
import { getPayValue, RamzDovom } from "@/service/userPanel";
import { toast } from "react-toastify";

export default function PrepaymentModule() {
  // مبلغ پیش‌پرداخت که از سرور گرفته می‌شود (string)
  const [mablagh, setMablagh] = useState("");

  // گرفتن مبلغ پیش‌پرداخت در mount
  useEffect(() => {
    const fetchGheamat = async () => {
      const { response, error } = await getPayValue(); // GET /facility/prepayment → { data: "<amount_as_string>" }
      if (response) {
        setMablagh(response.data.data); // مقدار رشته‌ای برگشتی را در state می‌نشانیم
      } else {
        console.log(error);
      }
    };
    fetchGheamat();
  }, []);

  const router = useRouter();

  // زمان فعلی برای نمایش در UI
  const today = new Date();
  const [dateTime, setDateTime] = useState(new Date());

  // وضعیت چک‌باکس تأیید قوانین/شرایط (در صورت استفاده در UI)
  const [checkBox, setCheckBox] = useState(false);

  // ورودی کاربر برای کپچا/کد (در صورت استفاده)
  const [userInput, setUserInput] = useState("");

  // پیام کمکی برای کاربر (خطا/موفقیت محلی UI)
  const [message, setMessage] = useState("");

  // تایمر معکوس برای اعتبار کد/فرصت پرداخت
  // نکته: این مقدار «۱۰ دقیقه» است (۱۰*۶۰). اگر قصد «۵ دقیقه» دارید مقدار را 5*60 کنید.
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  // قالب تاریخ کوتاه شمسی برای نمایش
  const shortDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(today);

  // قالب زمان (ساعت:دقیقه:ثانیه) برای نمایش
  const time = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(dateTime);

  useEffect(() => {
    // راه‌اندازی کَپچا (۵ رقم عددی، پس‌زمینه شفاف، متن مشکی)
    loadCaptchaEnginge(5, "transparent", "black", "numbers");

    // تایمر به‌روزرسانی ساعت نمایش داده‌شده هر ۱ ثانیه
    const timer = setInterval(() => setDateTime(new Date()), 1000);

    // تایمر معکوس برای timeLeft (هر ۱ ثانیه یک ثانیه کم می‌کند)
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdown); // اتمام شمارش معکوس
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // پاک‌سازی تایمرها در unmount
    return () => {
      clearInterval(countdown);
      clearInterval(timer);
    };
  }, []);

  // فراخوانی API برای ارسال «رمز دوم پرداخت» از سرور به موبایل کاربر
  const getRamz = async () => {
    const { response, error } = await RamzDovom();
    if (response) {
      toast.success("رمز دوم برای شما ارسال شد");
    } else {
      console.log(error);
      // درصورت نیاز: toast.error(error?.response?.data?.message || "ارسال رمز دوم ناموفق بود")
    }
  };

  // محاسبه‌ی دقیقه/ثانیه‌های باقیمانده برای نمایش
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="flex h-60 w-full flex-col items-start justify-center bg-[length:150%_100%] bg-center bg-no-repeat md:bg-[length:100%_300%]"
          style={{
            backgroundImage: `url("/icons/prepayment-banner.svg")`,
          }}
        >
          <div className="mx-auto -mt-16 flex w-[90%] flex-row items-center justify-between md:px-32">
            <div>
              <p className="font-bold text-white">
                درگاه پرداخت اینترنتی ایوام
              </p>
            </div>
            <div className="text-white">
              {time} {shortDate}
            </div>
          </div>
        </div>
        <div className="-mt-20 mb-10 flex h-auto w-[90%] flex-col items-center gap-8 rounded-3xl border-2 border-gray-400 bg-white py-5">
          <div className="flex w-[90%] flex-row items-center justify-between">
            <div className="flex flex-row items-center">
              <div>
                <Logo height="60" width="60" color="#1D434C" />
              </div>
            </div>
            <div className="flex flex-row items-center justify-center rounded-lg bg-evaamBorderColor px-6 py-2">
              {/* شمارنده معکوس به‌صورت دقیقه و ثانیه */}
              <p className="text-lg font-bold">
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </p>
            </div>
          </div>
          {/* bank card */}
          <div className="flex w-[90%] flex-col">
            <div>
              <p>شماره کارت</p>
            </div>
            <div className="flex w-full flex-row items-center justify-evenly gap-1 rounded-xl bg-gray-200">
              <div>
                <Cleave
                  dir="ltr"
                  placeholder="____ ____ ____ ____"
                  options={{ creditCard: true }}
                  className="border-none bg-gray-200 text-center outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <RiBankCardLine />
              </div>
            </div>
          </div>
          {/* bank card */}

          {/* cvv2 */}
          <div className="flex w-[90%] flex-col">
            <div>
              <p>شماره شناسایی دوم (CVV2)</p>
            </div>
            <div className="flex w-full flex-row items-center justify-evenly gap-1 rounded-xl bg-gray-200">
              <div>
                <Cleave
                  dir="ltr"
                  placeholder="CVV2"
                  maxLength="4"
                  options={{ creditCard: true }}
                  className="flex flex-row items-center justify-center border-none bg-gray-200 text-center outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                />
              </div>
              <div>
                <FaKeyboard />
              </div>
            </div>
          </div>
          {/* cvv2 */}

          {/* expire time */}
          <div className="flex w-[90%] flex-col">
            <div>
              <p>تاریخ انقضا</p>
            </div>
            <div className="flex w-full flex-row items-center justify-evenly gap-3 rounded-xl">
              <div className="">
                <input
                  dir="ltr"
                  placeholder="ماه"
                  max="2"
                  className="w-36 rounded-xl border-none bg-gray-200 py-2 text-center outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                />
              </div>
              <div className="">
                <input
                  dir="ltr"
                  placeholder="سال"
                  max="2"
                  className="w-36 rounded-xl border-none bg-gray-200 py-2 text-center outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                />
              </div>
            </div>
          </div>
          {/* expire time */}

          {/* security code */}
          <div className="flex w-[90%] flex-col">
            <div>
              <p>کد امنیتی</p>
            </div>
            <div className="flex w-full flex-row items-center justify-evenly gap-3 rounded-xl">
              <div className="flex w-36 flex-row items-center justify-evenly rounded-xl bg-gray-200">
                <div>
                  <Cleave
                    dir="ltr"
                    placeholder="کد امنیتی"
                    maxLength="5"
                    options={{ creditCard: true }}
                    className="flex w-24 flex-row items-center justify-center border-none bg-gray-200 text-center outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                  />
                </div>
                <div
                  onClick={() =>
                    loadCaptchaEnginge(5, "transparent", "black", "mix")
                  }
                >
                  <Image
                    src={reloadSVG}
                    width={300}
                    height={300}
                    alt="reload.svg"
                    className="h-5 w-5"
                  />
                </div>
              </div>
              <div className="bg- bg-evaamCyanBlur flex h-10 w-36 flex-col items-start justify-center rounded-xl">
                <LoadCanvasTemplateNoReload />
              </div>
            </div>
          </div>
          {/* security code */}

          {/* second pass */}
          <div className="flex w-[90%] flex-col">
            <div>
              <p>رمز دوم</p>
            </div>
            <div className="flex w-full flex-row items-center justify-evenly gap-3 rounded-xl">
              <div className="">
                <input
                  dir="ltr"
                  placeholder="رمز دوم"
                  className="w-36 rounded-xl border-none bg-gray-200 py-2 text-center outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                />
              </div>
              <div onClick={() => getRamz()} className="cursor-pointer w-36 rounded-xl border-none bg-evaamGreen py-2 text-center text-white">
                <p>دریافت رمز پویا</p>
              </div>
            </div>
          </div>
          {/* second pass */}

          {/* save card number */}
          <div className="flex w-[90%] flex-row items-center justify-start gap-4">
            <div
              onClick={() => {
                setCheckBox((prev) => !prev);
              }}
            >
              {checkBox ? (
                <>
                  <Image
                    src={CheckBoxSVG}
                    alt="tick.svg"
                    width={800}
                    height={800}
                    className="h-6 w-6 rounded-sm"
                  />
                </>
              ) : (
                <>
                  <div className="flex h-5 w-5 flex-row items-center justify-center rounded-md border-2 border-evaamGreen"></div>
                </>
              )}
            </div>

            <div className="text-sm font-bold text-black">
              <p>شماره کارت در درگاه ایوام ذخیره شود.</p>
            </div>
          </div>
          {/* save card number */}

          {/* ACTION BUTTONS */}
          <div className="flex w-full flex-col items-center justify-center gap-3">
            <div
              className="flex h-10 w-[90%] flex-row items-center justify-center rounded-xl bg-lime-500 text-center text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-lime-600"
              onClick={() => {
                router.push("/payment-result");
              }}
            >
              پرداخت {digitsEnToFa(addCommas(`${mablagh}`))} تومان
            </div>
            <div className="flex h-10 w-[90%] flex-row items-center justify-center rounded-xl border border-red-600 text-center text-red-500">
              انصراف
            </div>
          </div>
          {/* ACTION BUTTONS */}
        </div>
      </div>
    </>
  );
}
