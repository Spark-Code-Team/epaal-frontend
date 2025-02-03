// nextjs
import Image from "next/image";

// img
import banner from "../../../../public/image/landing-banner.png";
import Flash from "../../../../public/icons/flash";
import RequestedLoan from "@/components/elements/RequestedLoan";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="min-h-0 w-full md:my-14">
      <div className="relative flex w-full flex-col items-center rounded-b-[34px] bg-gradient-to-r from-[#41B1AC] to-[#FFD037] py-5 sm:flex-row sm:justify-evenly sm:rounded-b-[0px] md:justify-evenly md:rounded-b-[0px] md:rounded-t-[34px]">
        <div className="flex w-full md:flex md:flex-row md:justify-evenly lg:flex-row lg:items-center lg:justify-around">
          <div className="flex items-center md:mt-20 md:flex-col lg:w-1/2 lg:flex-col">
            <div>
              <p className="text-[40px] font-bold text-green-900 md:text-[25px] text-center">
                دریافت اعتبار خرید با چند کلیک!
              </p>
            </div>
            <div>
              <p className="text-2xl text-center font-extralight text-green-700 md:mt-10 md:text-lg lg:mt-12">
                بدون ضمانت‌های پیچیده، خریدتو انجام بده.
              </p>
            </div>
            <div
              id="buttons-container"
              className="flex items-center justify-evenly md:mt-10 lg:mt-20 lg:w-full lg:flex-row md:w-full"
            >
              <button className="items-center justify-center rounded-lg bg-evaamCyan lg:px-14 lg:py-4 text-white transition-all duration-300 ease-in-out hover:rounded-xl md:px-6 md:py-2 md:text-sm">
                ثبت درخواست وام
              </button>
              <button className="items-center justify-center rounded-lg border-2 border-evaamCyan bg-none lg:px-14 lg:py-4 text-cyan-600 transition-all duration-300 ease-in-out hover:rounded-xl hover:bg-evaamCyan hover:text-white md:px-6 md:py-2 md:text-sm">
                فروشگاه ایوام
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={banner}
              width={500}
              height={500}
              alt="this is banner.jpg"
              className="w-auto h-auto"
            />
          </div>
        </div>
        <RequestedLoan />
      </div>
      <div className="hidden min-h-48 w-full rounded-b-[34px] bg-gradient-to-r from-[#41B1AC] to-[#FFD037] sm:flex md:flex"></div>
    </div>
  );
}
