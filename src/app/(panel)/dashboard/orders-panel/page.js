"use client";

import BlurTitle from "@/components/elements/BlurTitle";
import EmptyCartIcon from "../../../../../public/icons/dashboard/EmptyCart";
import Link from "next/link";

export default function OrdersPanel() {
  const static_orders = [];

  return (
    <>
      {static_orders.length == 0 ? (
        <div className="mt-32 flex flex-col items-center md:mt-0 md:items-center md:justify-center">
          <EmptyCartIcon />
          <p className="mt-5 font-bold text-gray-400">
            درحال حاضر سفارشی برای شما ثبت نشده است
          </p>
          <Link href='/evaam-home' >
          <button  className="mt-10 rounded-2xl bg-evaamGreen px-10 py-3 text-white transition-all duration-300 ease-in-out hover:shadow-md">
            بازگشت به صفحه اصلی
          </button>
          </Link>

        </div>
      ) : (
        <>
          <div>you have orders</div>
        </>
      )}
    </>
  );
}
