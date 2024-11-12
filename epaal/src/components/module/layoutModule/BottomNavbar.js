import {  BuildingStorefrontIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function BottomNavbar() {
    return (
        <nav className="container sticky bottom-0 px-4 border-t border-t-gray-200 bg-white">
            <ul className="list-none flex items-center justify-between p-4">
                <li className="flex flex-col gap-2 items-center justify-center text-gray-500 h-12 w-16">
                    <UserIcon className="h-6 w-6 "/>
                    <p className="text-[11px]">حساب کاربری</p>
                </li>
                <li className="flex flex-col gap-2 items-center justify-center text-gray-500  h-12 w-16">
                    <BuildingStorefrontIcon className="h-6 w-6 "/>
                    <p className="text-[11px]">فروشگاه</p>
                </li>
                <li className="flex flex-col gap-2 items-center justify-center text-gray-500  h-12 w-16">
                    <ShoppingCartIcon className="h-6 w-6 "/>
                    <p className="text-[11px]">سبد خرید</p>
                </li>


            </ul>
        </nav>
    )
}
