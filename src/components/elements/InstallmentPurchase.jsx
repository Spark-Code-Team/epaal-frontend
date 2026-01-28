import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

import IconOne from "@/../public/image/Component 2.svg";
import IconTwo from "@/../public/image/Component 3.svg";
import IconThree from "@/../public/image/Component 4.svg";
import IconFour from "@/../public/image/Component 5.svg";

const InstallmentPurchase = () => {
  return (
    <>
      <div className="mb-16 mt-20 min-h-80 w-full rounded-b-[260px] bg-gradient-to-b from-[#1D434C] to-[#41B1AC] pb-24 pt-1 sm:min-h-80 lg:h-96 lg:pb-0">
        <div className="m-auto mt-8 w-[85%] text-center text-xl text-white lg:mt-10 lg:w-[90%]">
          مزایای خرید قسطی از ای-وام
        </div>

        <div className="mx-auto mt-10 grid w-[95%] grid-cols-1 gap-6 text-center md:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          <div className="flex items-center justify-evenly rounded-lg p-4 text-white">
            <div className="flex h-16 w-16 justify-center rounded-lg bg-white p-2">
              <Image src={IconOne} alt={""} width={50} height={50} />
            </div>

            <div className="mr-3 flex flex-1 flex-col">
              <h3 className="mb-1 text-[17px] font-bold">
                تا 1۰۰ میلیون تومان
              </h3>
              <p className="text-[13px]">بالاترین اعتبار خرید اقساطی کالا</p>
            </div>
          </div>

          <div className="flex items-center justify-evenly rounded-lg p-4 text-white">
            <div className="flex h-16 w-16 justify-center rounded-lg bg-white p-2">
              <Image src={IconTwo} alt={""} width={50} height={50} />
            </div>

            <div className="mr-3 flex flex-1 flex-col">
              <h3 className="mb-1 text-[17px] font-bold">
                بازپرداخت تا ۶۰ ماه
              </h3>
              <p className="text-[13px]">بالا‌ترین مدت بازپرداخت</p>
            </div>
          </div>

          <div className="flex items-center justify-evenly rounded-lg p-4 text-white">
            <div className="flex h-16 w-16 justify-center rounded-lg bg-white p-2">
              <Image src={IconThree} alt={""} width={60} height={60} />
            </div>

            <div className="mr-3 flex flex-1 flex-col">
              <h3 className="mb-1 text-[17px] font-bold">بدون ضامن</h3>
              <p className="text-[13px]">دریافت اعتبار کالا بدون ضامن</p>
            </div>
          </div>

          <div className="flex items-center justify-evenly rounded-lg p-4 text-white">
            <div className="flex h-16 w-16 justify-center rounded-lg bg-white p-2">
              <Image src={IconFour} alt={""} width={50} height={50} />
            </div>

            <div className="mr-3 flex flex-1 flex-col">
              <h3 className="mb-1 text-[17px] font-bold">بدون پیش پرداخت</h3>
              <p className="text-[13px]">خرید کالا از دم قسط</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstallmentPurchase;
