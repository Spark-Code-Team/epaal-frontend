"use client";


// React
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Logo from "@/components/elements/Logo";

export default function BurgerMenu({ navColor}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Bars3Icon 
        className={`
            cursor-pointer
            ${navColor ? "text-[#000]" : "text-[#fff]"}
            w-6
            h-6
            ml-3
            overflow-x-hidden
            md:hidden
          `}

          onClick={() => setOpen(true)}
      />
      <div
        className={`
          fixed
          top-0
          right-0
          w-full
          h-screen
          transform
          ${open ? "translate-x-2" : "translate-x-full"}
          transition-transform
          bg-opacity-15
          bg-neutral-300
          duration-500 
          ease-in-out 
          z-50
          md:hidden
        `}
        onClick={() => setOpen(false)}
      >
        <div
          className="
            fixed
            top-0 
            right-0
            h-full
            bg-white
            flex
            flex-col
            items-center
          "
        >
          <div
            className="
              p-3
              flex
              justify-center
              items-center
            "
          >
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <Logo
              color="#1d434c"
              width="30px"
              height="30px"
            />
          </div>
          <div
            className="
              w-full
              p-4
              border-y-[1px]
              border-slate-300
            "
          >
            <Link href={"/shopping-zarmayeh"}>فروشگاه های زرمایه</Link>
          </div>
          <div
            className="
              w-full
              p-4
              border-b-[1px]
              border-slate-300
            "
          >
            <Link href={"#"}>راهنمای دریافت وام</Link>
          </div>
          <div
            className="
              w-full
              p-4
              border-b-[1px]
              border-slate-300
            "
          >
            <Link href={"#"}>بلاگ</Link>
          </div>
          <div
            className="
              w-full
              p-4
              border-b-[1px]
              border-slate-300
            "
          >
            <Link href={"#"}>سوالات متداول</Link>
          </div>
        </div>
      </div>
    </>
  );
}
