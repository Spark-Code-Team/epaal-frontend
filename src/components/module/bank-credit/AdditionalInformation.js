import Image from "next/image";
import soalTarh from "../../../../public/image/soalTarh.png";
import BankCardShow from "@/components/elements/BankCardShow";
import Link from "next/link";

const constant = [
  {
    title: "مصرف اعتبار",
    description:
      "شما میتوانید تمام یا بخشی از مبلغ سبد خرید را به صورت اعتباری پرداخت کنید",
  },
  {
    title: "بازپرداخت قسط",
    description:
      "بدهی شما یکم ماه آتی سر رسید می شود و تا پنجم فرصت پرداخت بدون جریمه دارید",
  },
  {
    title: "بازپرداخت صورت حساب",
    description:
      "بدهی شما یکم ماه آتی سر رسید می شود و تا پنجم فرصت پرداخت بدون جریمه دارید",
  },
];

export default function AdditionalInformation({ setState }) {

  return (
    <div className=" my-7 flex  w-full gap-[60px] bg-white px-7 pt-10 pb-6 md:px-20 md:py-2">
      <BankCardShow image={soalTarh} />

      <div className="flex h-[570px] w-full flex-col justify-between">
        <div className="flex h-[60%] flex-col justify-between py-2">
          <p className="text-[16px] md:text-[20px] font-bold">اطلاعات تکمیلی</p>
          <div className="flex flex-col gap-8">
            {constant.map((item, index) => (
              <div key={index} className="border-r-[5px] border-[#3A616A] px-2">
                <p className="text-[14px] md:text-[18px] font-bold">{item.title}</p>
                <p className="text-[14px] md:text-[18px] font-medium text-[#8A8B8D]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-between">
          <Link
            href="/authentication"
            className="flex h-[42px] w-[134px] items-center justify-center rounded-md border-2 border-[#1D434C]"
          >
            مرحله قبلی
          </Link>
          <div
            onClick={() => setState(2)}
            className="flex h-[42px] w-[134px] cursor-pointer items-center justify-center rounded-md bg-[#1D434C] text-white"
          >
            تایید و ادامه
          </div>
        </div>
      </div>
    </div>
  );
}
