"use client";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function Footer() {
  return (
    <>
      <footer className="flex h-20 flex-col items-center justify-between bg-gray-200">
        <div className="flex w-full items-center justify-between border-b-[1px] border-b-[#748297] px-[30px]">
          <div>
            <EvaamLogo color="#1d1d1d" height="50px" width="50px" />
          </div>

          <div className="flex items-center justify-center">
            <p className="mx-4 py-[28px] text-sm">تلفن پشتیبانی: {digitsEnToFa("02126612872")}</p>
            <RiInstagramFill color="#748297" size={24} />
            <span className="mr-[20px]">
              <FaLinkedin color="#748297" size={24} />
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between border-b-[1px] border-b-[#748297] bg-gray-200 py-[32px] sm:flex-row">
          <div className="flex justify-between sm:w-[150%]">
            <div className="w-[50%] pr-[40px]">
              <ul className="text-[13px] font-[400] leading-8 text-[#334155]">
                <li className="text-[14px] font-[600] text-[#334155]">ایوام</li>
                <li>درباره ما</li>
                <li>فرصت‌های شغلی</li>
                <li>تماس باما</li>
                <li>بلاگ</li>
                <li>قوانین و مقررات</li>
                <li>فروشنده شوید</li>
              </ul>
            </div>
            <div className="w-[50%] pr-[65px] sm:pr-[0px]">
              <ul className="text-[13px] font-[400] leading-8 text-[#334155]">
                <li className="text-[14px] font-[600] text-[#334155]">
                  راهنما
                </li>
                <li>سوالات متداول</li>
                <li>درباره ما</li>
                <li>راهنمای دریافت وام</li>
                <li>محاسبه اقساط</li>
                <li>شرایط دریافت وام</li>
                <li>مدارک دریافت وام</li>
              </ul>
            </div>
          </div>

          <div className="flex w-full justify-center gap-x-4 bg-gray-200 pt-[32px] sm:justify-end sm:pl-[30px] sm:pt-[75px]">
            <Image
              src={"/image/30.jpg"}
              alt=""
              width={80}
              height={80}
              className="h-[80px] w-[80px]"
            />
            <Image
              src={"/image/31.jpg"}
              alt=""
              width={80}
              height={80}
              className="h-[80px] w-[80px]"
            />
            <Image
              src={"/image/66.png"}
              alt=""
              width={80}
              height={80}
              className="h-[80px] w-[80px]"
            />
          </div>
        </div>

        <div className="w-full items-center bg-gray-200 px-[30px] py-[32px]">
          <p className="text-[18px] font-[700] text-[#64748B]">
            مزایای خرید قسطی از ایوام
          </p>
          <p className="py-[30px] text-[13px] font-[400] text-[#64748B]">
            خرید قسطی کالا از یکی از گزینه‌های بسیار مناسب برای کسانی است که در
            حال حاضر به صورت نقدی نمی‌توانند کالای مورد نیاز خود را خریداری
            کنند. متقاضیان می‌توانند با دریافت وام آنلاین به راحتی و با کارمزد
            پایین تر در مقایسه با رقبا خرید اقساطی خود را انجام دهند.
          </p>
          <p className="pb-[30px] text-[16px] font-[700] text-[#64748B]">
            وام بدون پیش پرداخت
          </p>
        </div>

        <div className="flex h-[65px] w-full items-center justify-between bg-[#E2E8F0] px-[30px] pb-[30px]">
          <div>
            <p className="text-[12px] font-[600] text-[#475569]">
              کلیه حقوق مادی و معنوی متعلق به ایوام می باشد.
            </p>
          </div>

          <div className="flex rounded-[8px] border-[1px] border-gray-700 px-[10px] py-[5px] text-[13px] font-[600] text-[#475569]">
            <button onClick={() => scrollTo(0, 0)}>
              <span>
                <FaAngleUp color="#153BBF" width={24} height={24} size={20} />
              </span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
