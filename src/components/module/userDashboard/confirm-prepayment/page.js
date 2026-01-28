"use client";

import FacilityState from "@/components/elements/FacilityState";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ConfirmPrepaymentModule() {
  const store = useSelector((store) => store);
  const router = useRouter();

  return (
    <>
      <FacilityState curentState={7} />
      <div className="w-full">
        <div className="my-5 text-lg font-bold">
          <p>دریافت پیش‌پرداخت</p>
        </div>
        <div className="my-10 flex flex-col gap-3 rounded-3xl bg-gray-200 px-5 py-10">
          <div className="text-lg font-extrabold">
            <p>اشتراک "ای-وام" چیست؟</p>
          </div>
          <div>
            <p>
              ای-وام بستر ارائه اعتبار خرید کالا یا خدمات در سراسر ایران است،
              لذا شما با خرید اشتراک ای-وام میتوانید پس از گذراندن مراحل اخذ
              اعتبار، بصورت اقساطی تمامی کالاها یا خدمات مدنظر خود را از طریق
              این پلتفرم بصورت حضوری یا برخط (آنلاین) تهیه نمایید.
            </p>
          </div>
          <div className="text-lg font-extrabold">
            <p>توجه:</p>
          </div>
          <div>
            <p>
              با پرداخت این اشتراک قادر خواهید بود که فقط یک طرح را فعال سازی
              کنید و برای طراح های دیگر مورد استفاده قرار نمیگیرد.
            </p>
            <p>
              با پرداخت این اشتراک قادر به اخذ اعتبار از یکی از فرآیندهای
              اعتباردهی ای-وام خواهید بود و برای فعالسازی طرح های بیشتر با
              پشتیبانی تماس حاصل فرمایید.
              {digitsEnToFa("02126612872")}
            </p>
          </div>
          <div>
            <p>مبلغ پیش پرداخت جهت فعال سازی اعتبار مورد نظر:</p>
          </div>
          <div className="text-center text-xl font-bold">
            {digitsEnToFa("5,850,000")} تومان
          </div>
        </div>
        <Link
          href="/prepayment"
          className="my-10 w-full rounded-2xl bg-evaamGreen py-4 text-center text-white"
        >
          <button className="w-full">پذیرفتم و پرداخت</button>
        </Link>
      </div>
    </>
  );
}
