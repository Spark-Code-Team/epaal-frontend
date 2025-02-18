import banner from "../../../../public/image/landing-banner.png";

import Image from "next/image";

export default function BankBanner() {
  return (
    <div
      className="mx-auto flex rounded-2xl lg:mt-20 lg:h-80 lg:w-[90%] lg:flex-row lg:items-center lg:justify-center lg:mb-20"
      style={{
        background: "url('/image/bank-bg.png') center/100% 100% no-repeat",
      }}
    >
      <div className="flex lg:h-[90%] lg:w-[95%] lg:flex-row lg:justify-evenly">
        <div className="flex lg:h-full lg:w-1/2 lg:flex-col lg:items-center lg:justify-evenly lg:gap-6">
          <div className="lg:w-5/6">
            <p className="text-justify text-white lg:text-right lg:text-3xl lg:font-bold">
              خرید اقساطی
            </p>
          </div>
          <div className="lg:w-5/6">
            <p className="text-justify text-white lg:text-right lg:text-lg lg:font-normal">
              بدون نیاز به ضامن فقط با کسب رتبه اعتباری مناسب
            </p>
          </div>
          <div className="flex lg:w-full lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:px-10">
            <button className="rounded-xl bg-white text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full">
              راهنمایی طرح ها
            </button>
            <button className="rounded-xl bg-white text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full">
              ثبت درخواست آنلاین
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center lg:h-full lg:w-1/2">
          <Image
            src={banner}
            width={1000}
            height={1000}
            className="lg:h-full lg:w-3/4"
            alt="coin-banner.png"
          />
        </div>
      </div>
    </div>
  );
}
