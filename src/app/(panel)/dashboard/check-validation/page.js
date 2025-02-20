"use client";

import { useEffect, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

import WaitBag from "../../../../../public/icons/dashboard/wait-bag";
import TickBag from "../../../../../public/icons/dashboard/tickBag";

import OtpInput from "react18-input-otp";

import CheckValidation from "../../../../../public/icons/dashboard/checkVal";
import SentIcon from "../../../../../public/icons/dashboard/sent";
import SuccessIcon from "../../../../../public/icons/dashboard/success";

export default function ConfirmBank() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [otp, setOtpValue] = useState({ otpValue: null });

  const changeHandler = (enteredOtp) => {
    setOtpValue((last) => ({ ...last, otpValue: enteredOtp }));
  };

  return (
    <>
      {isSuccess ? (
        <>
          <div className="mt-20 flex flex-col items-center justify-between gap-10 text-center">
            <div>
              <h1>دریافت اعتبار برای شما ممکن است</h1>
              <br />
              <p>تبریک! برای دریافت اعتبار فرآیند ثبت نام را ادامه دهید</p>
            </div>
            <div>
              <SuccessIcon />
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
                    تایید و آپلود مدارک
            </div>
          </div>
        </>
      ) : (
        <>
          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
                onClick={() => setIsOpen(false)}
              ></div>

              {/* محتویات Modal */}
              <div className="relative z-10 flex scale-100 transform flex-col items-center rounded-lg bg-white p-6 opacity-100 transition-all duration-300">
                <h2 className="mb-4 text-xl font-bold">اعتبارسنجی</h2>
                <SentIcon />
                <p className="mb-4 mt-5">
                  کد ارسال شده شمارۀ کاربری خود را وارد کنید
                </p>
                <OtpInput
                  value={otp.otpValue}
                  onChange={changeHandler}
                  numInputs={8}
                  containerStyle={{
                    direction: "ltr", // چپ به راست
                  }}
                  inputStyle={{
                    direction: "ltr",
                    width: "35px",
                    height: "41px",
                    margin: "0 5px",
                    border: "1px solid #c6c6c6",
                    borderRadius: "10px",
                  }}
                  className="mb-6 mt-5"
                />
                <div className="flex w-full flex-row items-center justify-center">
                  <button
                    className="rounded-xl bg-evaamCyan px-4 py-2 text-white"
                    onClick={() => {
                      setIsSuccess(true);
                      setIsOpen(false);
                    }}
                  >
                    تایید و اعتبارسنجی
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="hidden flex-col items-center justify-evenly gap-7 md:mt-10 md:flex">
            <div className="md:mt-10 md:flex md:flex-row">
              <div className="md:flex md:flex-col md:items-start md:gap-10">
                <div>
                  <h2 className="text-lg font-bold">
                    امکان سنجی دریافت اعتبار
                  </h2>
                  <br />
                  <h3>
                    <span className="font-bold">مرحله اول:</span> بررسی رفتار
                    مالی
                  </h3>
                  <h3>
                    <span className="font-bold">مرحله دوم:</span> نتیجه رتبه
                    بندی اعتبار ایرانیان
                  </h3>
                </div>
                <div>
                  {" "}
                  <h2 className="text-lg font-bold">
                    معیارهای سنجش رفتار مالی
                  </h2>
                  <br />
                  <h3 className="flex flex-row items-center gap-4">
                    <span className="block h-3 w-3 rounded-full bg-evaamGreen"></span>
                    سابقه شما در بازپرداخت بدهی
                  </h3>
                  <h3 className="flex flex-row items-center gap-4">
                    <span className="block h-3 w-3 rounded-full bg-evaamGreen"></span>
                    سابقه شما در بازپرداخت اقساط بانکی
                  </h3>
                  <h3 className="flex flex-row items-center gap-4">
                    <span className="block h-3 w-3 rounded-full bg-evaamGreen"></span>
                    نداشتن چک برگشتی
                  </h3>
                </div>
                <div>
                  {" "}
                  <h2 className="text-xs font-thin text-cyan-600">
                    در ادامه یک کد به شماره همراه شما پیامک خواهد شد،آن را به
                    دقت وارد کنید.
                  </h2>
                </div>
              </div>
              <div>
                <CheckValidation />
              </div>
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              شروع اعتبارسنجی
            </div>
          </div>

          {/* mobile */}
          <div className="mt-14 flex flex-col items-center justify-evenly gap-7 md:mt-10 md:hidden">
            <div className="md:mt-10 md:flex md:flex-row">
              <div className="md:flex md:flex-col md:items-start md:gap-10">
                <div>
                  <h2 className="text-lg font-bold">
                    امکان سنجی دریافت اعتبار
                  </h2>
                  <br />
                  <h3>
                    <span className="font-bold">مرحله اول:</span> بررسی رفتار
                    مالی
                  </h3>
                  <h3>
                    <span className="font-bold">مرحله دوم:</span> نتیجه رتبه
                    بندی اعتبار ایرانیان
                  </h3>
                </div>
                <div>
                  <CheckValidation />
                </div>
                <div>
                  {" "}
                  <h2 className="text-lg font-bold">
                    معیارهای سنجش رفتار مالی
                  </h2>
                  <br />
                  <h3 className="flex flex-row items-center gap-4">
                    <span className="block h-3 w-3 rounded-full bg-evaamGreen"></span>
                    سابقه شما در بازپرداخت بدهی
                  </h3>
                  <h3 className="flex flex-row items-center gap-4">
                    <span className="block h-3 w-3 rounded-full bg-evaamGreen"></span>
                    سابقه شما در بازپرداخت اقساط بانکی
                  </h3>
                  <h3 className="flex flex-row items-center gap-4">
                    <span className="block h-3 w-3 rounded-full bg-evaamGreen"></span>
                    نداشتن چک برگشتی
                  </h3>
                </div>
                <div className="mt-5">
                  {" "}
                  <h2 className="text-xs font-thin text-cyan-600">
                    در ادامه یک کد به شماره همراه شما پیامک خواهد شد،آن را به
                    دقت وارد کنید.
                  </h2>
                </div>
              </div>
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              شروع اعتبارسنجی
            </div>
          </div>
          {/* mobile */}
        </>
      )}
    </>
  );
}
