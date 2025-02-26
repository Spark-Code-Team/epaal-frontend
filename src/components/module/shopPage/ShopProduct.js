"use client";

import { decrement, increment } from "@/redux/features/shopCart/shopCart";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ShopProduct({ product }) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  const productIndex = store.counter.selected.findIndex(
    (item) => item.id == product.id,
  );

  return (
    <div className="my-16 w-full md:w-1/5">
      <div className="sticky top-20 mx-auto flex h-[200px] w-[200px] flex-col justify-between rounded-xl border-[2px] border-evaamGreen p-2">
        <div className="pt-3 text-center">
          <div>قیمت محصول:</div>
          <div>
            {" "}
            {digitsEnToFa(product.price)}
            تومان
          </div>
        </div>
        <div className="flex w-full items-center">
          <div
            className="w-full cursor-pointer rounded-xl border border-green-600 p-3 text-center text-green-600 transition-all hover:bg-green-600 hover:text-green-200"
            onClick={() => dispatch(increment(product))}
          >
            افزودن به سبد خرید
          </div>
          {store.counter.selected[productIndex]?.quantity >= 1 ? (
            <div className="flex w-1/2 justify-around">
              <div
                onClick={() => dispatch(increment(product))}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-green-500"
              >
                +
              </div>
              <div>{store.counter.selected[productIndex]?.quantity}</div>
              <div
                onClick={() => dispatch(decrement(product))}
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-md border border-red-500"
              >
                -
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
