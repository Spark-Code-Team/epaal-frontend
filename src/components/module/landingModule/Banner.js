"use client";

// nextjs
import Image from "next/image";

// img
import banner from "../../../../public/image/landing-banner.png";
import Flash from "../../../../public/icons/flash";
import RequestedLoan from "@/components/elements/RequestedLoan";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();

  return (
    <div className="min-h-0 w-full">
      <div className="relative flex w-full flex-col items-center rounded-b-[34px] bg-gradient-to-r from-[#41B1AC] to-[#FFD037] py-5 sm:flex-row sm:justify-evenly sm:rounded-b-[0px] md:justify-evenly md:rounded-b-[0px] md:rounded-t-[34px]">
        <div className="flex w-full md:flex md:flex-row md:justify-evenly lg:flex-row lg:items-center lg:justify-around">
          <div className="flex items-center sm:mx-14 sm:flex-col sm:justify-evenly md:mt-20 lg:w-1/2">
            <div>
              <p className="text-center text-[20px] font-bold text-green-900 md:text-[25px] lg:text-[40px]">
                دریافت اعتبار خرید با چند کلیک!
              </p>
            </div>
            <div>
              <p className="text-center text-2xl font-extralight text-green-700 sm:text-sm md:mt-10 md:text-lg lg:mt-12">
                بدون ضمانت‌های پیچیده، خریدتو انجام بده.
              </p>
            </div>
            <div
              id="buttons-container"
              className="flex items-center justify-evenly sm:gap-3 md:mt-10 md:w-full lg:mt-20 lg:w-full lg:flex-row"
            >
              <button
                onClick={() => {
                  router.push("/login");
                }}
                className="items-center justify-center rounded-lg bg-evaamCyan text-white transition-all duration-300 ease-in-out hover:rounded-xl sm:p-2 sm:text-sm md:px-6 md:py-2 md:text-sm lg:px-14 lg:py-4"
              >
                ثبت درخواست وام
              </button>
              <button
                onClick={() => {
                  router.push("/shopping-zarmayeh");
                }}
                className="items-center justify-center rounded-lg border-2 border-evaamCyan bg-none text-cyan-600 transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-evaamCyan hover:text-white sm:p-2 sm:text-sm md:px-6 md:py-2 md:text-sm lg:px-14 lg:py-4"
              >
                فروشگاه زرمایه
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={banner}
              width={500}
              height={500}
              alt="this is banner.jpg"
              className="h-auto w-auto"
            />
          </div>
        </div>
        <RequestedLoan />
      </div>
      <div className="hidden min-h-48 w-full rounded-b-[34px] bg-gradient-to-r from-[#41B1AC] to-[#FFD037] sm:flex md:flex"></div>
    </div>
  );
}
