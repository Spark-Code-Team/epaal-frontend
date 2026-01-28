"use client";
import Link from "next/link";

const BodyAuthBank = () => {
  return (
    <>
      <div className="border=[#E1EDF0] m-auto flex h-[814px] w-[806px] flex-wrap items-center rounded-xl border-2 bg-white p-4 shadow-md">
        <p className="w-full text-center font-bold">امکان سنجی دریافت اعتبار</p>
        <p className="mt-8 w-full text-center">مرحله اول: بررسی رفتار مالی</p>
        <p className="mt-3 w-full text-center">
          مرحله دوم: نتیجه رتبه بندی اعتباری ایرانیان
        </p>

        <p className="mt-12 w-full text-center font-bold">
          معیار های سنجش رفتار مالی:
        </p>

        <p className="mt-12 w-full text-center">
          سابقه شما در بازپرداخت بدهی در ای-وام
        </p>
        <p className="mt-5 w-full text-center">
          سابقه شما در بازپرداخت اقساط تسهیلات بانکی
        </p>
        <p className="mt-3 w-full text-center">نداشتن چک برگشتی</p>

        <Link
          href="/bank-credit"
          className="f m-auto mt-12 flex h-[40px] w-[440px] items-center justify-center rounded-md bg-[#1D434C] text-center text-white"
        >
          شروع امکان سنجی
        </Link>
      </div>
    </>
  );
};

export default BodyAuthBank;
