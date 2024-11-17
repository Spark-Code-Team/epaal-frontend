import {  BuildingStorefrontIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function BottomNavbar() {
    return (
        <nav className="container sticky md:hidden bottom-0 px-4 border-t border-t-gray-200 bg-white">
            <ul className="list-none flex items-center justify-between p-4">
                <li className="flex flex-col gap-2 items-center justify-center text-gray-500 h-12 w-16">
                    <Link href={'#'} className="flex flex-col gap-2 items-center justify-center text-gray-500 ">
                    <UserIcon className="h-6 w-6 "/>
                    <p className="text-[11px]">حساب کاربری</p>
                    </Link>
                </li>
                <li className="flex flex-col gap-2 items-center justify-center text-gray-500  h-12 w-16">
                <Link href={'#'} className="flex flex-col gap-2 items-center justify-center text-gray-500 ">
                    <BuildingStorefrontIcon className="h-6 w-6 "/>
                    <p className="text-[11px]">فروشگاه</p>
                </Link>
                </li>
                <li className="flex flex-col gap-2 items-center justify-center text-gray-500  h-12 w-16">
                <Link href={'#'} className="flex flex-col gap-2 items-center justify-center text-gray-500 ">
                    <ShoppingCartIcon className="h-6 w-6 "/>
                    <p className="text-[11px]">سبد خرید</p>
                </Link>
                </li>


            </ul>
        </nav>
    )
}
