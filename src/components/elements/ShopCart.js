"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { digitsEnToFa } from "@persian-tools/persian-tools";

export default function ShopCart({ products, icon }) {
  console.log(" ============== products ==============", products)
  return (
    <Link
      href={`/shopping-evaam/products/${products.id}`}
      className="flex w-[350px] flex-col items-center rounded-[10px] border border-[#A7A8A9] px-2 py-[10px] md:w-[372px]"
    >
      {products.fake_picture != undefined ? (
        <>
          <Image
            src={`${products.fake_picture}`}
            width={500}
            height={500}
            className="h-[150px] w-[150px] md:h-[248px] md:w-[248px]"
            alt="shop"
          />
        </>
      ) : (
        <>
          <div>no pic</div>
        </>
      )}

      <div className="w-full text-[10px] font-medium md:text-[16px]">
        {products.name != undefined ? (<>
            {products.name.slice(0, 15) + "..."}
        </>) : (<>
            <p> ... </p>
        </>) }
      </div>
      <div className="flex w-full items-center justify-between gap-5 text-[10px] font-bold md:text-[16px]">
        <p className="w-/ bg-red-300 text-center"></p>
        <div className="my-2 flex items-center gap-1 md:my-[9px] md:gap-2">
          <p>{digitsEnToFa("35,690,000")}</p>
          <p>تومان</p>
        </div>
      </div>
      <div className="w-full rounded-[10px] bg-evaamGreen p-[6px] text-center text-[9px] font-normal text-white md:p-[11px] md:text-[14px] md:font-normal">
        سفارش
      </div>
    </Link>
  );
}
