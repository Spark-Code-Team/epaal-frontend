"use client";
import FacilityState from "@/components/elements/FacilityState";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useState } from "react";

export default function CreditFinalWaitingModule() {
  const cardBg = "/image/backCard.png";

  const [index, setIndex] = useState(1);

  return (
    <>

      <div className="flex w-full flex-col items-center md:mb-32">
        <div className="flex w-[90%] flex-col items-center">
          <div className="my-5 w-full text-lg font-bold">
            <p>شارژ نهایی کیف پول</p>
          </div>
          <div>
            <div
              className={`z-0 flex h-[180px] w-[290px] flex-col items-center justify-evenly rounded-2xl bg-cover bg-center bg-no-repeat p-5 text-white md:h-[217px] md:w-[398]`}
              style={{
                background: `url(${cardBg}) center/100% 100% no-repeat`,
              }}
            >
              <div className="flex w-full items-center justify-between px-2">
                <p>های‌بانک</p>
                <p>Hi Bank</p>
              </div>
              <div className="flex flex-col items-center justify-center md:mt-[14px]">
                <p className="text-[10px] font-bold md:text-[18px]">
                  ارائه تسهیلات تا سقف
                </p>
                <p className="text-[16px] font-bold md:text-[24px]">
                  {digitsEnToFa("100,000,000")} میلیون تومان
                </p>
              </div>

              <div className="flex w-full items-center justify-between md:mt-[30px]">
                <div className="text-[10px] font-normal md:text-[12px]">
                  تامین مالی توسط بانک کارآفرین
                </div>
                {/* <div className="rounded-xl bg-[#232336b3] px-[5px] py-2 text-[7px] backdrop-blur-[40px] md:text-[14px]">
                      {digitsEnToFa("18")} ماهه
                    </div> */}
              </div>
            </div>
          </div>
          <div className="my-5 text-center font-bold">
            <p>کاربر گرامی، طرح مورد نظر شما، با موفقیت برایتان فعال شد.</p>
          </div>
        </div>
      </div>
    </>
  );
}
