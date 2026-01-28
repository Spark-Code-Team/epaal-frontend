"use client";

import { useState } from "react";
import empety from "../../../public/image/CartEmpty.png";
import Image from "next/image";
import FlashButton from "../elements/FlashButton";
import aks from "../../../public/image/sam23.png";
import PlusDashboard from "../../../public/icons/dashboard/PlusDashboard";
import TrashDashBoard from "../../../public/icons/dashboard/TrashDashboard";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function ShopCartDashboardPage() {
  const [state, setSatate] = useState(true);
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {state ? (
        <div className="relative mb-[300px] h-full w-full md:mb-0">
          {/* title */}
          <p className="px-2 pt-[24px] text-[14px] font-normal">سبد خرید</p>

          <div className="mt-[34px] flex gap-3">
            <Image
              src={aks}
              width={500}
              height={500}
              className="h-[94px] w-[94px]"
              alt="alt"
            />
            <div className="flex flex-col gap-2 pt-2 text-[10px]">
              <p className="font-semibold">
                گوشی موبایل شیائومی Redmi 12 4G دو سیم کارت ظرفیت 128 گیگابایت
                رم 8 گیگابایت
              </p>
              <p className="text-[#8A8B8D]">
                فروشنده:
                <span className="mr-2 text-black">دیجی کالا</span>
              </p>
              <p className="text-[#8A8B8D]">
                گارانتی
                <span className="mr-2 text-black">18 ماهه</span>
              </p>
            </div>
          </div>

          <div className="mt-5 flex w-full items-center justify-between text-[10px]">
            <div className="flex h-[32px] items-center justify-center gap-3 rounded-[10px] border border-[#E1EDF0] p-3">
              <PlusDashboard />
              <div className="flex flex-col items-center justify-center text-[10px]">
                <p>1</p>
                <p>حداکثر</p>
              </div>
              <TrashDashBoard />
            </div>

            <div className=" ">
              <div className="flex items-center gap-1">
                <p className="text-[#8A8B8D] line-through">11,980,000</p>
                <p className="w-fit rounded-[28px] bg-[#DF5232] p-2 text-white underline-offset-2">
                  0%
                </p>
              </div>

              <div className="mt-1 flex gap-1">
                <p>11,980,000</p>
                <p>تومان</p>
              </div>
            </div>
          </div>

          <div className="mt-[18px] flex w-full flex-col gap-3 rounded-xl border border-[#E1EDF0] px-[22px] py-[18px] text-[10px]">
            <div className="flex items-center justify-between">
              <p>قیمت کالاها (1)</p>
              <div className="flex items-center gap-1">
                <p>11,980,000</p>
                <p>تومان</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-[#F24822]">
              <p>مجموع تخفیف کالاها</p>
              <div className="flex items-center gap-1">
                <p>11,980,000</p>
                <p>تومان</p>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#E1EDF0]"></div>
            <div className="flex items-center justify-between">
              <p>مبلغ قابل پرداخت</p>
              <div className="flex items-center gap-1">
                <p>11,980,000</p>
                <p>تومان</p>
              </div>
            </div>
          </div>

          <div className="mt-2 flex w-full flex-col items-center rounded-xl border border-[#E1EDF0]">
            <div className="flex w-full items-center justify-center py-[18px] text-[14px] font-semibold">
              <p>محاسبه خرید اقساطی ای-وام</p>
            </div>

            <div className="h-[1px] w-full bg-[#E1EDF0]"></div>

            <div className="flex w-full items-center justify-between p-[18px]">
              <p className="text-[12px] text-[#1D2433]">
                میزان اعتبار درخواستی
              </p>
              <div className="flex items-center gap-1 text-[12px] font-bold text-[#3A616A]">
                <p>11,980,000</p>
                <p>تومان</p>
              </div>
            </div>

            <div className="flex w-full flex-col items-center justify-center p-2 md:flex-row">
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
              <div className="mb-6 flex w-full items-center justify-between text-[12px] md:hidden">
                <p> {digitsEnToFa("1,000,000")} تومان</p>
                <p>{digitsEnToFa("100,000,000")} تومان</p>
              </div>
            </div>

            <div className="flex w-full flex-col p-2 text-[12px]">
              <div className="flex w-full items-center justify-between">
                <p>مدت بازپرداخت :</p>
                <p>12 ماه</p>
              </div>
              <div className="mt-3 flex w-full items-center justify-between">
                <p>مبلغ هر قسط :</p>
                <div className="flex items-center gap-1 font-bold text-[#3A616A]">
                  <p>11,980,000</p>
                  <p>تومان</p>
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-center py-3">
              <div className="w-[165px] rounded-xl bg-[#1D434C] p-[10px] text-center text-[12px] text-white">
                درخواست اعتبار
              </div>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 flex w-full items-center justify-between border-t border-[#E1EDF0] bg-white px-7 py-7 md:hidden">
            <div>
              <p className="text-[12px]">مبلغ قابل پرداخت :</p>
              <p className="mt-1 text-[14px] text-[#3A616A]">
                11,980,000 تومان
              </p>
            </div>
            <div className="rounded-xl bg-[#1D434C] p-[10px] text-[12px] text-white">
              ثبت سفارش
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src={empety}
            width={5000}
            height={5000}
            className="mt-[149px] h-[202px] w-[244px] md:mt-0"
            alt="cart"
          />
          <div className="flex flex-col items-center font-medium">
            <p>سبد خرید شما خالی است!</p>
            <p className="mt-4 text-[10px] text-[#8A8B8D]">
              میتوانید برای مشاهده محصولات بیشتر به صفحه فروشگاه بروید:
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            <FlashButton title="صفحه فروشگاه" href="/shopping-evaam" />
          </div>
        </div>
      )}
    </>
  );
}
