"use client";
import Link from "next/link";
import ArrowLeft from "../../../../../public/icons/ArrowLeft";
import EmptyCartIcon from "../../../../../public/icons/dashboard/EmptyCart";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { userOrder } from "@/service/userPanel";

export default function OrdersPanel() {
  const [order, setOrder] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    async function fetchOrder() {
      setIsLoading(true);
      setError(false);

      const { response, error } = await userOrder();
      console.log("response", response);
      if (error && error.status === 404) {
        setOrder([]);
        setIsLoading(false);
      } else {
        setOrder(response.orders);
        setIsLoading(false);
      }

      // setIsLoading(false);
    }
    fetchOrder();
  }, []);
  if (isLoading) return <div>در حال بارگذاری...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <>
      {order.length === 0 ? (
        <div className="mt-32 flex flex-col items-center md:mt-0 md:items-center md:justify-center">
          <EmptyCartIcon />
          <p className="mt-5 font-bold text-gray-400">
            درحال حاضر سفارشی برای شما ثبت نشده است
          </p>
          <button
            className="mt-10 rounded-2xl bg-evaamGreen px-10 py-3 text-white transition-all duration-300 ease-in-out hover:shadow-md"
            onClick={() => router.push("/shopping-evaam")}
          >
            بازگشت به صفحه محصولات
          </button>
        </div>
      ) : (
        <>
          <div className="no-scrollbar flex max-h-[calc(100vh-100px)] flex-col gap-4 overflow-y-auto p-4">
            {order.map((i) => (
              <div
                key={i.id}
                className="h-[264px] w-[987px] rounded-[31px] bg-[#F9F9F9] p-8"
              >
                <div className="flex justify-between">
                  <div className="text-[12px] leading-none">
                    <p>
                      {i?.date} | {i.time} | {i?.total_price} تومان | کد سفارش:{" "}
                      {i?.code}
                    </p>
                  </div>
                  <div className="justify-betwee flex gap-2">
                    <p>مشاهده بیشتر </p>
                    <button>←</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-6 flex gap-4">
              {order?.bought_product_instances.map((i) => {
                <Link
                  key={i.id}
                  className="relative aspect-square h-[142px] w-[142px] overflow-hidden rounded-lg"
                >
                  <img src={product_image?.product_pic} />
                </Link>;
              })}

              <div className="flex items-center">
                <ArrowLeft width={24} height={24} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
