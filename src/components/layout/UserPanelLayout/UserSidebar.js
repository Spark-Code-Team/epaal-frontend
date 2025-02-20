"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/elements/Logo";
import { IoIosArrowDown } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import BagSVG from "../../../../public/icons/dashboard/Bag";
import BellSVG from "../../../../public/icons/dashboard/bell";
import DefaultPic from "../../../../public/icons/dashboard/DefaultPic";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Wallet from "../../../../public/icons/dashboard/sidebar/wallet";
import Cart from "../../../../public/icons/dashboard/sidebar/Cart";
import Credit from "../../../../public/icons/dashboard/sidebar/Credit";
import Information from "../../../../public/icons/dashboard/sidebar/Information";
import Achivement from "../../../../public/icons/dashboard/sidebar/Achivement";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import LeftAroowBlur from "../../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FiLogOut } from "react-icons/fi";
export default function UserSidebar() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  return (
    <>
      {/* side bar in mobile */}
      <div className="bg-evaamBorderColor z-10 fixed left-1/2 top-5 flex w-[85%] -translate-x-1/2 transform flex-row items-center justify-between rounded-3xl p-4 px-6 text-black md:static md:hidden">
        <div
          id="right"
          className="flex flex-row items-center justify-evenly gap-2 text-evaamGreen"
        >
          <div
            onClick={() => {
              setBurgerMenu(true);
            }}
          >
            <RxHamburgerMenu className="h-10 w-7" />
          </div>

          <div className="border-evaamBorderColor h-10 w-10 rounded-full border">
            <DefaultPic />
          </div>
          <div className="flex flex-col items-center justify-evenly gap-1">
            <div className="text-xs">ایمان پورپاک</div>
            <div className="text-xs">{digitsEnToFa("09125143940")}</div>
          </div>
        </div>
        <div
          id="left"
          className="flex flex-row items-center justify-evenly gap-1"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-evaamGreen bg-none">
            <BellSVG width="25" height="25" color="red" stroke="none" />
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-evaamGreen">
            <BagSVG width="25" height="25" color="red" stroke="none" />
          </div>
        </div>

        <div
          className={`absolute -right-8 -top-5 h-screen w-screen bg-[#0a0a0a4d] md:hidden ${burgerMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex justify-between transition-all duration-300`}
        >
          <div className="h-full w-[75%] rounded-tl-3xl bg-white">
            {/* logo  */}
            <div className="mb-5 flex items-center justify-between border-b border-[#d9d9d9] p-4">
              <Logo width="40px" height="40px" color="#1d434c" />
              <div
                className="m-5 h-fit cursor-pointer rounded-lg bg-white p-2"
                onClick={() => setBurgerMenu(false)}
              >
                <RxCross2 fill="red" className="h-6 w-6 text-gray-500" />
              </div>
            </div>

            {/* parts */}
            <div className="mr-3 flex flex-col gap-6">
              <Link
                href="#"
                className="flex items-center justify-start gap-3 border-[#d9d9d9] px-3 pb-3"
                onClick={() => {
                  setBurgerMenu(false);
                }}
              >
                <div>
                  <Wallet fill="#1D434C" height="25" width="25" />
                </div>
                <div>کیف پول</div>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-start gap-3 border-[#d9d9d9] px-3 pb-3"
                onClick={() => {
                  setBurgerMenu(false);
                }}
              >
                <div>
                  <Cart fill="#1D434C" height="25" width="25" />
                </div>
                <div>سفارشات</div>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-start gap-3 border-[#d9d9d9] px-3 pb-3"
                onClick={() => {
                  setBurgerMenu(false);
                }}
              >
                <div>
                  <Credit fill="#1D434C" height="25" width="25" />
                </div>
                <div>تسهیلات</div>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-start gap-3 border-[#d9d9d9] px-3 pb-3"
                onClick={() => {
                  setBurgerMenu(false);
                }}
              >
                <div>
                  <Information fill="#1D434C" height="25" width="25" />
                </div>
                <div>راهنما</div>
              </Link>
              <Link
                href="/dashboard/get-credit"
                className="flex items-center justify-start gap-3 border-[#d9d9d9] px-3 pb-3"
                onClick={() => {
                  setBurgerMenu(false);
                }}
              >
                <div>
                  <Achivement fill="#1D434C" height="25" width="25" />
                </div>
                <div>درخواست اعتبار</div>
              </Link>
            </div>
          </div>

          {/* cross buttom */}
        </div>
      </div>
      {/* side bar in mobile */}

      <div className="hidden md:flex md:h-screen md:w-80 md:flex-col md:bg-evaamBackground md:px-10 md:py-10">
        <div id="profile" className="h-1/6">
          <div className="flex flex-row items-center justify-between px-4">
            {" "}
            <div className="border-evaamBorderColor h-16 w-16 rounded-full border-4 p-1">
              <DefaultPic />
            </div>
            <div className="flex flex-col items-center justify-evenly gap-1">
              <div className="text-lg font-bold">ایمان پورپاک</div>
              <div className="text-lg">{digitsEnToFa("09125143940")}</div>
            </div>
          </div>
        </div>
        <div id="nav" className="flex h-5/6 flex-col justify-between py-6">
          <div id="links" className="flex h-3/4 flex-col justify-evenly">
            <Link
              href="#"
              className="flex flex-row items-center justify-between gap-3 border-[#d9d9d9] px-3 py-3 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-[#93B9C3]"
            >
              <div className="flex w-1/2 flex-row items-center justify-between">
                <div>
                  <Wallet fill="#1D434C" height="25" width="25" />
                </div>
                <div>کیف پول</div>
              </div>
              <div>
                <LeftAroowBlur fill="#1D434C" height="25" width="25" />
              </div>
            </Link>
            <Link
              href="#"
              className="flex flex-row items-center justify-between gap-3 border-[#d9d9d9] px-3 py-3 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-[#93B9C3]"
            >
              <div className="flex w-1/2 flex-row items-center justify-between">
                <div>
                  <Cart fill="#1D434C" height="25" width="25" />
                </div>
                <div>سفارشات</div>
              </div>
              <div>
                <LeftAroowBlur fill="#1D434C" height="25" width="25" />
              </div>
            </Link>
            <Link
              href="#"
              className="flex flex-row items-center justify-between gap-3 border-[#d9d9d9] px-3 py-3 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-[#93B9C3]"
            >
              <div className="flex w-1/2 flex-row items-center justify-between">
                <div>
                  <Credit fill="#1D434C" height="25" width="25" />
                </div>
                <div>تسهیلات</div>
              </div>
              <div>
                <LeftAroowBlur fill="#1D434C" height="25" width="25" />
              </div>
            </Link>
            <Link
              href="#"
              className="flex flex-row items-center justify-between gap-3 border-[#d9d9d9] px-3 py-3 transition-all duration-300 ease-in-out hover:rounded-3xl hover:bg-[#93B9C3]"
            >
              <div className="flex w-1/2 flex-row items-center justify-between">
                <div>
                  <Information fill="#1D434C" height="25" width="25" />
                </div>
                <div>راهنما</div>
              </div>
              <div>
                <LeftAroowBlur fill="#1D434C" height="25" width="25" />
              </div>
            </Link>
            <Link
              href="/dashboard/get-credit"
              className="flex flex-row items-center justify-between gap-3 rounded-3xl border-[#d9d9d9] bg-[#93B9C3] px-3 py-3"
            >
              <div className="flex w-auto flex-row items-center justify-between gap-2">
                <div>
                  <Achivement fill="#1D434C" height="25" width="25" />
                </div>
                <div>درخواست اعتبار</div>
              </div>
              <div>
                <LeftAroowBlur fill="#1D434C" height="25" width="25" />
              </div>
            </Link>
          </div>
          <div id="logout" className="border-t-2 border-gray-200 px-3 py-6">
            <button className="flex w-full flex-row items-center justify-evenly">
              <div>
                <FiLogOut stroke="red" />
              </div>
              <div className="text-red-600">خروج از حساب کاربری</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
