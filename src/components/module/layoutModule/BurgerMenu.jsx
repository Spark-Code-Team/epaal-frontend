"use client";

// React
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Logo from "@/components/elements/Logo";

export default function BurgerMenu({ navColor }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Bars3Icon
        className={`cursor-pointer ${navColor ? "text-[#000]" : "text-[#fff]"} ml-3 h-6 w-6 overflow-x-hidden md:hidden`}
        onClick={() => setOpen(true)}
      />
      <div
        className={`fixed right-0 top-0 h-screen w-full transform ${open ? "translate-x-2" : "translate-x-full"} z-50 bg-neutral-300 bg-opacity-15 transition-transform duration-500 ease-in-out md:hidden`}
        onClick={() => setOpen(false)}
      >
        <div className="fixed right-0 top-0 flex h-full flex-col items-center bg-white">
          <div className="flex items-center justify-center p-3">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <Logo color="#1d434c" width="30px" height="30px" />
          </div>
          <div className="w-full border-y-[1px] border-slate-300 p-4">
            <Link href={"/shopping-evaam"}>فروشگاه های ای-وام</Link>
          </div>
          <div className="w-full border-b-[1px] border-slate-300 p-4">
            <Link href={"#"}>راهنمای دریافت وام</Link>
          </div>
          <div className="w-full border-b-[1px] border-slate-300 p-4">
            <Link href={"#"}>بلاگ</Link>
          </div>
          <div className="w-full border-b-[1px] border-slate-300 p-4">
            <Link href={"#"}>سوالات متداول</Link>
          </div>
        </div>
      </div>
    </>
  );
}
