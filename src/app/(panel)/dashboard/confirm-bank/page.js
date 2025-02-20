"use client";

import { useEffect, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

import WaitBag from "../../../../../public/icons/dashboard/wait-bag";
import TickBag from "../../../../../public/icons/dashboard/tickBag";

export default function ConfirmBank() {
  const [step, setStep] = useState(1);

  const router = useRouter()

  useEffect(() => {
    // setTimeout(() => {
    //   setStep(2);
    // }, 2000);
  }, []);
  return (
    <>
      {step == 1 ? (
        <>
          <div className="flex flex-col items-center justify-evenly gap-7 md:mt-10">
            <div>
              <WaitBag />
            </div>
            <div className="px-5 text-center">
              برای ثبت تسهیلات خود نیاز است حساب بلوبانک شما مورد بررسی قرار
              بگیرد. این استعلام در لحظه می باشد و در صورت دریافت جواب مورد
              تایید میتوانید روند تسهیلات را ادامه دهید.
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                setTimeout(() => {
                  setStep(2);
                }, 2000);
              }}
            >
              شروع استعلام
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md: flex flex-col items-center justify-evenly gap-7 md:mt-10 ">
            <div>
              <TickBag />
            </div>
            <div className="px-5 text-center">
              حساب شما در بانک مربوطه بررسی شد.نتیجه استعلام{" "}
              <span className="text-green-400">موفقیت آمیز</span> بود
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                router.push("/dashboard/check-validation/")
              }}
            >
                ادامه
            </div>
          </div>
        </>
      )}
    </>
  );
}
