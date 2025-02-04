"use client";

import BankCardShow from "@/components/elements/BankCardShow";
import selectedTarh from "../../../../public/image/selectedTarh.png";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Bounce, toast } from "react-toastify";

export default function SelectedTarhInformation({ setState }) {
  const [input, setInput] = useState("");

  const router = useRouter()

  return (
    <div className="sm: mt-20 flex h-full w-full gap-[60px] bg-white px-20 py-2">
      <BankCardShow image={selectedTarh} />

      <div className="flex h-[570px] w-full flex-col justify-between">
        <div className="flex h-[60%] flex-col justify-between py-2">
          <p className="text-[20px] font-bold">اطلاعات تکمیلی</p>
          <div className="flex flex-col gap-8">
            <div className="flex gap-5 border-r-[5px] border-[#3A616A] px-2">
              <div>
                <p className="text-[18px] font-bold">
                  مجموع اقساط+هزینه خدمات و زیرساخت
                </p>
                <div className="text-[18px] font-medium text-[#8A8B8D]">
                  <p>مبلغ هر قسط</p>
                  <p>
                    این هزینه درمرحله آخر ثبت نام به صورت نقدی دریافت می شود
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[18px] font-bold">40000000 میلیون تومان</p>
                <p className="text-[18px] font-medium text-[#8A8B8D]">
                  16.667.000 میلیون تومان
                </p>
              </div>
            </div>

            <div className="border-r-[5px] border-[#3A616A] px-2">
              <p className="text-[18px] font-bold">شرایط و مدارک مورد نیاز</p>
              <p className="text-[18px] font-medium text-[#8A8B8D]">
                داشتن حداقل 18 و حداکثر 70 سال سن
              </p>
              <p className="text-[18px] font-medium text-[#8A8B8D]">
                داشتن رتبه کافی امکان سنجی
              </p>
            </div>
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-3">
          <label className="text-[16px] font-normal">
            شماره شبا حساب بانکی خود را وارد کنید
          </label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="شماره شبا خود را وارد کنید"
            className="rounded-md border-[2px] p-3"
          />
          <Link
            href="https://cafebazaar.ir/app/ir.karafarinbank.digital.mb"
            className="text-blue-500"
          >
            حساب بانکی ندارید؟ برای افتتاح حساب اینجا کلیلک کنید
          </Link>
        </div>

        <div className="flex w-full justify-between">
          <div
            onClick={() => setState(1)}
            className="flex h-[42px] w-[134px] cursor-pointer items-center justify-center rounded-md border-2 border-[#1D434C]"
          >
            مرحله قبلی
          </div>
          <div
            onClick={() => {
                router.push("/shopping-evaam")
                toast.success("عملیات با موفقیت انجام شد", {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
            }}
            className="flex h-[42px] w-[134px] cursor-pointer items-center justify-center rounded-md bg-[#1D434C] text-white"
          >
            تایید و ادامه
          </div>
        </div>
      </div>
    </div>
  );
}
