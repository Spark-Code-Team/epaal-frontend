import banner from "../../../../public/image/landing-banner.png";

import Image from "next/image";

export default function BankBanner() {
  return (
    <>
      <div
        className="mx-auto mt-20 hidden h-auto flex-col items-center rounded-2xl py-10 lg:mb-20 lg:flex lg:h-80 lg:w-[90%] lg:flex-row lg:justify-center"
        style={{
          background: "url('/image/bank-bg.png') center/100% 100% no-repeat",
        }}
      >
        <div className="flex flex-col items-center gap-6 lg:h-[90%] lg:w-[95%] lg:flex-row lg:justify-evenly lg:gap-0">
          <div className="mx-auto mt-5 flex flex-col items-center gap-5 px-6 lg:mt-0 lg:h-full lg:w-1/2 lg:justify-evenly lg:gap-6 lg:px-0">
            <div className="lg:w-5/6">
              <p className="text-center text-2xl text-white lg:text-right lg:text-3xl lg:font-bold">
                خرید اقساطی
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="text-center text-white lg:text-right lg:text-lg lg:font-normal">
                بدون نیاز به ضامن فقط با کسب رتبه اعتباری مناسب
              </p>
            </div>
            <div className="hidden w-full flex-row items-center justify-between lg:flex lg:gap-5 lg:px-10">
              <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
                راهنمایی طرح ها
              </button>
              <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
                ثبت درخواست آنلاین
              </button>
            </div>
          </div>
          <div className="mb-0 flex flex-col items-center lg:h-full lg:w-1/2">
            <Image
              src={banner}
              width={1000}
              height={1000}
              className="h-auto w-52 lg:h-full lg:w-3/4"
              alt="coin-banner.png"
            />
          </div>
          <div className="mb-5 flex w-full flex-row items-center justify-evenly lg:hidden lg:gap-5 lg:px-10">
            <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
              راهنمایی طرح ها
            </button>
            <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
              ثبت درخواست آنلاین
            </button>
          </div>
        </div>
      </div>
      <div
        className="mx-auto mt-20 h-auto flex-col items-center rounded-2xl py-10 bg-gradient-to-l from-evaamGreen to-evaamCyan lg:hidden"
      >
        <div className="flex flex-col items-center gap-6 lg:h-[90%] lg:w-[95%] lg:flex-row lg:justify-evenly lg:gap-0">
          <div className="mx-auto mt-5 flex flex-col items-center gap-5 px-6 lg:mt-0 lg:h-full lg:w-1/2 lg:justify-evenly lg:gap-6 lg:px-0">
            <div className="lg:w-5/6">
              <p className="text-center text-2xl text-white lg:text-right lg:text-3xl lg:font-bold">
                خرید اقساطی
              </p>
            </div>
            <div className="lg:w-5/6">
              <p className="text-center text-white lg:text-right lg:text-lg lg:font-normal">
                بدون نیاز به ضامن فقط با کسب رتبه اعتباری مناسب
              </p>
            </div>
            <div className="hidden w-full flex-row items-center justify-between lg:flex lg:gap-5 lg:px-10">
              <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
                راهنمایی طرح ها
              </button>
              <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
                ثبت درخواست آنلاین
              </button>
            </div>
          </div>
          <div className="mb-0 flex flex-col items-center lg:h-full lg:w-1/2">
            <Image
              src={banner}
              width={1000}
              height={1000}
              className="h-auto w-52 lg:h-full lg:w-3/4"
              alt="coin-banner.png"
            />
          </div>
          <div className="mb-5 flex w-full flex-row items-center justify-evenly lg:hidden lg:gap-5 lg:px-10">
            <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
              راهنمایی طرح ها
            </button>
            <button className="rounded-lg bg-white p-2 text-center transition-all duration-300 ease-in-out hover:bg-evaamCyan hover:text-white lg:h-10 lg:w-full lg:rounded-xl">
              ثبت درخواست آنلاین
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
