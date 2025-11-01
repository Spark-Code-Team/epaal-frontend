"use client";

import Image from "next/image";
import sayyadiCheck from "@/../public/icons/dashboard/sayyadi.svg";
import { useRouter } from "next/navigation";
import FacilityState from "@/components/elements/FacilityState";
import { useSelector } from "react-redux";

export default function InfoDigitalModule() {
  const router = useRouter();
  const store = useSelector((store) => store);

  const steps = [
    "نوشتن چک مطابق راهنمایی که ارائه می‌شود.",
    "ثبت چک در سامانه صیاد",
    "بارگذاری تصویر چک",
    "ارسال چک به دفتر زرمایه",
    "بازگرداندن چک بعد از تسویه آخرین قسط",
  ];

  const NumberIcon = ({ n, large }) => (
    <span
      aria-hidden="true"
      className={`flex select-none items-center justify-center font-bold text-white shadow ${
        large ? "h-12 w-12 text-lg" : "h-8 w-8 text-sm"
      } rounded-xl bg-evaamCyan`}
      title={`مرحله ${n}`}
    >
      {n}
    </span>
  );

  return (
    <>
      <FacilityState curentState={4} />

      <div className="w-full">
        {/* تیتر */}
        <div className="mt-5 flex w-full items-center justify-start text-evaamGreen px-4 md:px-6">
          <p className="text-base font-bold md:text-lg">ثبت مدارک مورد نیاز</p>
        </div>

        {/* تصویر نمونه چک - واکنش‌گرا */}
        <div className="mt-5 px-4 md:px-6">
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-gray-200 bg-white">
            <Image
              src={sayyadiCheck}
              alt="نمونه چک صیادی بنفش"
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* عنوان زیر تصویر */}
        <div className="mt-4 text-center px-4 md:px-6">
          <p className="text-sm md:text-base">چک صیادی بنفش رنگ</p>
        </div>

        {/* توضیحات */}
        <div className="mt-4 px-4 text-justify leading-7 text-gray-700 md:px-6">
          <p className="text-sm md:text-base">
            برای ضمانت تسهیلات خود باید دارنده چک صیادی بنفش رنگ مانند نمونه بالا
            باشید. این چک تنها به عنوان ضمانت از شما دریافت می‌شود و در صورت عدم
            پرداخت اقساط، چک ضمانت اجرا می‌شود.
          </p>
        </div>

        {/* مراحل با آیکون اعداد (بدون خط و دایره) */}
        <div className="mt-6 px-4 md:px-6">
          <div className="mx-auto w-full max-w-3xl rounded-xl bg-slate-100 p-4 md:p-6">
            <div className="mb-4">
              <p className="text-sm font-bold md:text-base">مراحل:</p>
            </div>

            {/* موبایل: لیست عمودی */}
            <div className="sm:hidden space-y-4">
              {steps.map((txt, i) => (
                <div key={i} className="flex items-start gap-3">
                  <NumberIcon n={i + 1} />
                  <p className="text-sm leading-6 text-gray-800">{txt}</p>
                </div>
              ))}
            </div>

            {/* تبلت/دسکتاپ: استپر افقی بدون خطوط اتصال */}
            <div className="hidden sm:grid sm:grid-cols-5 sm:gap-6">
              {steps.map((txt, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <NumberIcon n={i + 1} large />
                  <p className="mt-3 text-sm leading-6 text-gray-800">{txt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* دکمه اقدام */}
        <div className="mt-6 px-4 md:px-6">
          <button
            onClick={() => router.push("/dashboard/upload-digital")}
            className="mb-10 w-full max-w-3xl mx-auto block rounded-xl bg-evaamGreen py-3 text-center text-white transition-all hover:scale-[1.01] hover:shadow-md"
          >
            تایید و ادامه
          </button>
        </div>
      </div>
    </>
  );
}
