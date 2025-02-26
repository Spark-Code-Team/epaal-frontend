"use client";

import Image from "next/image";
import sayyadiCheck from "@/../public/icons/dashboard/sayyadi.svg";
import { useRouter } from "next/navigation";

export default function InfoDigitalModule() {
  const router = useRouter();
  return (
    <>
      <div className="mb-10 w-full">
        <div className="mt-5 flex w-full flex-row items-center justify-start text-evaamGreen">
          <p className="text-lg font-bold">ثبت مدارک مورد نیاز</p>
        </div>
        <div className="mt-5">
          <Image src={sayyadiCheck} alt="sayyadi.jpg" width={900} />
        </div>
        <div className="mt-5 text-center">
          <p>چک صیادی بنفش رنگ</p>
        </div>
        <div className="mt-5 text-center">
          <p>
            برای ضمانت تسهیلات خود باید دارنده چک صیادی بنفش رنگ مانند نمونه
            بالا باشید.این جک تنها به عنوان ضمانت از شما دریافت میشود و در صورت
            عدم پرداخت اقساط چک ضمانت اجرا میشود.
          </p>
        </div>
        <div className="mt-5 h-auto w-[350px] rounded-xl bg-slate-200 p-4">
          <div className="mb-4 font-bold">
            <p>مراحل:</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-evaamCyan"></div>
            <div className="">
              <p>نوشتن چک مطابق راهنمایی که ارائه میشود.</p>
            </div>
          </div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>

          <div className="flex flex-row items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-evaamCyan"></div>
            <div className="">
              <p>ثبت چک در سامانه صیاد</p>
            </div>
          </div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>

          <div className="flex flex-row items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-evaamCyan"></div>
            <div className="">
              <p>بارگذاری تصویر چک</p>
            </div>
          </div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>

          <div className="flex flex-row items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-evaamCyan"></div>
            <div className="">
              <p>ارسال چک به دفتر ایوام</p>
            </div>
          </div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>
          <div className="mr-1 text-[8px] font-extrabold text-evaamCyan">|</div>

          <div className="flex flex-row items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-evaamCyan"></div>
            <div className="">
              <p>بازگرداندن چک بعداز تسویه آخرین قسط</p>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            router.push("/dashboard/upload-digital");
          }}
          className="mb-10 cursor-pointer mt-5 rounded-xl bg-evaamGreen py-2 text-center text-white"
        >
          <div className="">تایید و ادامه</div>
        </div>
      </div>
    </>
  );
}
