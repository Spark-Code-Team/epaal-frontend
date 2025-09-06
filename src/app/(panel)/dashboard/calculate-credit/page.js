"use client";

import { useEffect, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { redirect, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addInAndCh } from "@/redux/features/facilityChose/facilityChose";

export default function CalculateCredit() {


  const [inputValue, setInputValue] = useState(1000000);
  const [index, setIndex] = useState(1);
  const [calculatedPayment, setCalculatePayment] = useState({
    bankPrePayment: digitsEnToFa("1,000,000"),
    yearlySubscribePayment: digitsEnToFa("1,000,000"),
    finalPaymentToUser: digitsEnToFa("1,000,000"),
    paymentPerMounth: digitsEnToFa("94,077"),
  });
  // const items = [6, 12, 24, 36];
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [monthGhest, setMonthGhest] = useState(12);


  const store = useSelector(store => store.facility)
  const dispatch = useDispatch()

  console.log(store);
  

  const router = useRouter();

  const formatNumber = (number) => {
    return number.toLocaleString("fa-IR"); // نمایش عدد به فرمت فارسی
  };

  const calculatePrePayment = (e, month) => {
    let numberOfEvent = Number(e);

    let prePayment = numberOfEvent * 0.05;

    let finalPaymentToUser = numberOfEvent - prePayment;

    let r = 23 / 100 / 12;
    let denominator = 1 - Math.pow(1 + r, -month);
    let payment = (numberOfEvent * r) / denominator;

    setCalculatePayment((prev) => ({
      ...prev,
      bankPrePayment: formatNumber(Math.ceil(prePayment)),
      yearlySubscribePayment: formatNumber(Math.ceil(prePayment)),
      finalPaymentToUser: formatNumber(Math.ceil(finalPaymentToUser)),
      paymentPerMounth: formatNumber(Math.ceil(payment)),
    }));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // ذخیره مقدار جدید
    calculatePrePayment(value, monthGhest);
  };

  useEffect(() => {
    if(!store.selectedFacility) {
      redirect("/get-credit")
    }
  }, [])

  return (
    <>
      <div className="relative mx-auto mt-[80px] mb-10 flex w-[90%] flex-col items-center rounded-3xl border-2 border-[#d9d9d9] px-3 py-7 md:mb-[48px] md:h-[918px] md:w-3/4 md:px-[86px] md:mt-[500px]">
        <div className="pb-7 md:pb-[47px] md:pt-[80px]">
          <p className="hidden text-[24px] font-bold text-[#1D2433] md:flex">
            جزئیات طرح انتخابی
          </p>
        </div>

        <div className="flex w-full items-center justify-between">
          <p className="flex md:hidden">میزان اعتبار درخواستی</p>
          <p className="flex items-center text-[18px] font-bold">
            <span className="hidden md:flex">مبلغ:</span>
            <span className="mr-[13px] text-[16px] font-bold text-[#587E88] md:text-[36px]">
              {formatNumber(Number(inputValue))}
              <span className="mr-[6px] text-[12px] md:text-[18px]">تومان</span>
            </span>
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center md:flex-row">
          <div className="hidden text-center text-[14px] text-[#8A8B8D] md:flex">
            {digitsEnToFa("1,000,000")} <span> تومان </span>
          </div>
          <input
            step={1000000}
            min={1000000}
            max={100000000}
            value={inputValue}
            type="range"
            className="mx-3 my-4 w-full appearance-none rounded-lg"
            onChange={handleChange}
            style={{
              background: `linear-gradient(to left, #1d434c ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%)`,
            }}
          />
          <div className="hidden text-center text-[14px] text-[#8A8B8D] md:flex">
            {digitsEnToFa("100,000,000")} <span> تومان </span>
          </div>
          <div className="mb-6 flex w-full items-center justify-between md:hidden">
            <p> {digitsEnToFa("1,000,000")} تومان</p>
            <p>{digitsEnToFa("100,000,000")} تومان</p>
          </div>
        </div>

        <div className="my-[26px] flex w-full flex-col md:flex-row md:items-center md:flex md:flex-wrap">
          <p>مدت بازپرداخت:</p>

          <div className="my-[16px] flex items-center gap-4 md:my-[50px] md:mr-[16px] md:flex md:flex-wrap md:items-center md:justify-center">
            {
              (store?.selectedFacility?.insatllments || []).map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col text-center w-[79px] cursor-pointer items-center justify-center rounded-xl p-2 text-[12px] md:w-[113px] md:text-[16px] ${monthGhest == index? "bg-[#1D434C] text-white" : "bg-[#F0F0F1] text-[#1D434C]"} `}
                  onClick={() => setMonthGhest(index)}
                >
                  {digitsEnToFa(item.number_of_installment)} ماهه
                </div>
              ))
            }
          </div>
        </div>

        <div className="grid w-full grid-cols-1 text-[12px]">
          <div className="mb-[37px] flex w-full items-center justify-between">
            <div className=" ">مبلغ شارژ کیف پول</div>
            <div className=" ">
              {calculatedPayment.finalPaymentToUser} تومان
            </div>
          </div>
          <div className="mb-[37px] flex w-full items-center justify-between">
            <div className=" ">اصل تسهیلات ثبتی در بانک</div>
            <div className=" ">{formatNumber(Number(inputValue))} تومان</div>
          </div>
          <div className="mb-[37px] flex w-full items-center justify-between">
            <div className=" ">
              {" "}
              <p>واریز نقدی پیش پرداخت</p>
            </div>
            <div className=" ">{calculatedPayment.bankPrePayment} تومان</div>
          </div>
          <div className="mb-[37px] flex w-full items-center justify-between">
            <div className=" ">هزینه اشتراک ایوام</div>
            <div className=" ">
              {calculatedPayment.yearlySubscribePayment} تومان
            </div>
          </div>
            {
              /* <div className="mb-[37px] flex w-full items-center justify-between">
                <div className=" ">
                  {" "}
                  <p>دریافتیِ نهایی</p>
                </div>
                <div className=" ">35,000,000 تومان</div>
              </div> */
            }
          <div className="mb-[37px] flex w-full items-center justify-between">
            <div className=" ">اقساط ماهانه</div>
            <div className=" ">{calculatedPayment.paymentPerMounth}تومان</div>
          </div>
        </div>

        <div
          className="w-3/4 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
          onClick={() => {
            router.push("/dashboard/confirm-bank");
            dispatch(addInAndCh({choosen_value: inputValue, id: store.selectedFacility.insatllments[monthGhest].id}))
          }}
        >
          تایید و ادامه
        </div>
      </div>
    </>
  );
}
