"use client";

import { pallete } from "@/constant/Pallete";
import { fetchUserCart } from "@/redux/features/shopCart/shopCart";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import GranteedIcon from "../../../../public/icons/garanteed";

import techno from "@/../public/image/TechnoLife.svg";
import { AddSingleProductsToCart } from "@/service/products";
import { toast } from "react-toastify";

export default function ShopProduct({
  product,
  defaultInstance,
  setDefaultInstance,
}) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  // const productIndex = store.counter.selected.findIndex(
  //   (item) => item.id == product.id,
  // );

  async function addProdutToCart(instanceID) {
    const { response, error } = await AddSingleProductsToCart(instanceID);

    if (response) {
      dispatch(fetchUserCart());
      toast.success("با موفقیت به سبد خرید شما اضافه شد ✅");
    } else {
      toast.error("خطا در خرید کالا ❌");
    }
  }

  return (
    <>
      <div className="my-16 hidden w-full md:block md:w-1/5">
        <div className="sticky top-20 mx-auto flex h-auto w-[200px] flex-col items-start justify-between gap-4 rounded-xl border-[2px] border-gray-300 p-4">
          <div className="pt-3">
            <div>فروشنده:</div>
            <div className="flex flex-row items-center justify-center gap-2 text-lg font-bold">
              {" "}
              <span>
                <Image
                  src={techno}
                  quality={100}
                  width={100}
                  height={100}
                  className="h-20 w-20"
                />
              </span>
              {product.shop.shop_name}{" "}
            </div>
          </div>
          <div className="pt-3">
            <div>قیمت محصول:</div>
            <div className="font-bold">
              {" "}
              {new Intl.NumberFormat("fa-IR").format(
                product.instances[0].price,
              )}
              تومان
            </div>
          </div>
          <div className="pt-3">
            <div className="flex flex-row items-center justify-center gap-2 text-lg">
              {" "}
              <span>
                <GranteedIcon height={20} width={20} fill={pallete.primary} />
              </span>
              <span className="text-sm">گارانتی محصول:</span>
              <span className="font-bold">فعال</span>
            </div>
          </div>

          <div className="flex w-full items-center">
            <div
              className={`w-full scale-105 cursor-pointer rounded-xl bg-evaamGreen p-3 text-center text-white transition-all duration-300 ease-in-out ${store.cart.cartItems.length >= 1 ? "hidden" : "block"}`}
              onClick={() => {
                addProdutToCart(defaultInstance.id);
              }}
            >
              افزودن به سبد خرید
            </div>
            {/* {store.counter.selected[productIndex]?.quantity >= 1 ? (
              <div className="flex w-full items-center justify-around border border-evaamGreen p-2 rounded-lg shadow-md">
                <div
                  onClick={() => dispatch(increment(product))}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-evaamGreen text-2xl transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  +
                </div>
                <div className="border-evaamBrightGradient flex h-10 w-10 flex-col items-center justify-center rounded-full border">
                  {store.counter.selected[productIndex]?.quantity}
                </div>
                <div
                  onClick={() => dispatch(decrement(product))}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-red-600 text-2xl transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-md"
                >
                  -
                </div>
              </div>
            ) : null} */}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-between gap-4 border-t border-[#E1EDF0] bg-white px-7 py-7 md:hidden">
        <div>
          <p className="text-[15px]">مبلغ قابل پرداخت :</p>
          <p className="mt-1 text-[18px] font-bold text-[#3A616A]">
            {" "}
            {new Intl.NumberFormat("fa-IR").format(product.instances[0].price)}
            تومان
          </p>
        </div>
        <div
          // className={`h-auto w-52 rounded-xl bg-evaamGreen p-[10px] text-center text-[20px] text-white ${store.counter.selected[productIndex]?.quantity >= 1 ? "hidden" : "block"}`}
            className={`h-auto w-52 rounded-xl bg-evaamGreen p-[10px] text-center text-[20px] text-white`}

            onClick={() => dispatch(increment(product))}
        >
          ثبت سفارش
        </div>
        {/*{store.counter.selected[productIndex]?.quantity >= 1 ? (*/}
        {/*  <div className="gap flex w-full items-center justify-around rounded-lg border border-evaamGreen p-2 shadow-md">*/}
        {/*    <div*/}
        {/*      onClick={() => dispatch(increment(product))}*/}
        {/*      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-evaamGreen text-2xl transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-md"*/}
        {/*    >*/}
        {/*      +*/}
        {/*    </div>*/}
        {/*    <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full border border-evaamBrightGradient">*/}
        {/*      {store.counter.selected[productIndex]?.quantity}*/}
        {/*    </div>*/}
        {/*    <div*/}
        {/*      onClick={() => dispatch(decrement(product))}*/}
        {/*      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-red-600 text-2xl transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-md"*/}
        {/*    >*/}
        {/*      -*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*) : null}*/}
      </div>
    </>
  );
}
