"use client"

import FacilityState from "@/components/elements/FacilityState";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ConfirmPrepaymentModule() {

  const store = useSelector(store => store)
  const router = useRouter()

  return (
    <>
      <FacilityState
          curentState={7}
      />
      <div className="w-full">
        <div className="my-5 text-lg font-bold">
          <p>دریافت پیش‌پرداخت</p>
        </div>
        <div className="my-10 flex flex-col rounded-3xl bg-gray-200 px-5 py-10 gap-3">
          <div className="font-extrabold  text-lg">
            <p>اشتراک "ایوام" چیست؟</p>
          </div>
          <div>
            <p>
              اشتراک ایوام یک طرح است که میتوانید به عنوان پیش پرداخت طرح
              اعتباری مد نظر خود آن را دریافت کنید و قادر به استفاده از مبلغ وام
              دریافتی خود شوید.
            </p>
          </div>
          <div className="font-extrabold  text-lg">
            <p>توجه:</p>
          </div>
          <div>
            <p>
              با پرداخت این اشتراک قادر خواهید بود که فقط یک طرح را فعال سازی
              کنید و برای طراح های دیگر مورد استفاده قرار نمیگیرد.
            </p>
          </div>
          <div>
            <p>مبلغ پیش پرداخت جهت فعال سازی اعتبار مورد نظر:</p>
          </div>
          <div className="text-center text-xl font-bold">
            {digitsEnToFa("5,850,000")} تومان
          </div>
        </div>
        <Link href="/prepayment" className="my-10 bg-evaamGreen w-full rounded-2xl text-white text-center py-4">
            <button className="w-full">
                پذیرفتم و پرداخت
            </button>
        </Link>
      </div>
    </>
  );
}
