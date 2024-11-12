"use client";

// Nextjs
import Image from "next/image";

// IMG
import burger from "../../../../public/icons/burgerMenu.svg";
import logo from "../../../../public/image/evaam-logo.png";

// React
import { useState } from "react";
import Link from "next/link";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={burger}
        width={24}
        height={24}
        className="
          w-6
          h-6
          cursor-pointer
          md:hidden
        "
        alt="burger menu logo"
        onClick={() => setOpen(true)}
      />
      <div
        className={`
          fixed
          top-0
          right-0
          w-screen
          h-screen
          transform
          ${open ? "translate-x-0" : "translate-x-full"}
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
            w-56
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
            <Image
              src={logo}
              width={26}
              height={26}
              alt="evaam logo"
              className=" 
                w-6
                h-6  
                ml-2
              "
            />

            <p
              className="
              text-white
                text-[16px]
            "
            >
              ایوام
            </p>
          </div>
          <div
            className="
              w-full
              p-4
              border-y-[1px]
              border-slate-300
            "
          >
            <Link href={"#"}>فروشگاه های ایوام</Link>
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
