"use client"

import { useState } from "react"
import empety from "../../../public/image/CartEmpty.png"
import Image from "next/image"
import FlashButton from "../elements/FlashButton"
import aks from "../../../public/image/sam23.png"
import PlusDashboard from "../../../public/icons/dashboard/PlusDashboard"
import TrashDashBoard from "../../../public/icons/dashboard/TrashDashboard"
import { digitsEnToFa } from "@persian-tools/persian-tools"



export default function ShopCartDashboardPage() {

    const [state, setSatate] = useState(true)
    const [inputValue, setInputValue] = useState(0)

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <>
            {
                state ? (
                    <div
                        className="
                            w-full
                            h-full
                            relative
                            mb-[300px]
                            md:mb-0
                        "
                    >
                        {/* title */}
                        <p
                            className="
                                pt-[24px]
                                px-2
                                text-[14px]
                                font-normal
                            "
                        >
                            سبد خرید
                        </p>

                        <div
                            className="
                                mt-[34px]
                                flex
                                gap-3
                            "
                        >
                            <Image 
                                src={aks}
                                width={500}
                                height={500}
                                className="
                                    w-[94px]
                                    h-[94px]
                                "
                                alt="alt"
                            />
                            <div
                                className="
                                    text-[10px]
                                    flex
                                    flex-col
                                    pt-2
                                    gap-2
                                "
                            >
                                <p
                                    className="
                                        font-semibold
                                    "
                                >
                                    گوشی موبایل شیائومی Redmi 12 4G دو سیم کارت ظرفیت 128 گیگابایت رم 8 گیگابایت
                                </p>
                                <p
                                    className="
                                        text-[#8A8B8D]
                                    "
                                >
                                    فروشنده:
                                    <span
                                        className="
                                            text-black
                                            mr-2
                                        "
                                    >
                                    دیجی کالا
                                    </span>
                                </p>
                                <p
                                    className="
                                        text-[#8A8B8D]
                                    "
                                >
                                    گارانتی
                                    <span
                                        className="
                                        text-black
                                        mr-2
                                    "
                                    >
                                    18 ماهه
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                flex
                                w-full
                                items-center
                                justify-between
                                mt-5
                                text-[10px]
                            "
                        >
                            <div
                                className="
                                    h-[32px]
                                    border
                                    border-[#E1EDF0]
                                    rounded-[10px]
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    p-3
                                "
                            >
                                <PlusDashboard />
                                <div
                                    className="
                                        text-[10px]
                                        flex
                                        flex-col
                                        items-center
                                        justify-center
                                    "
                                >
                                    <p>
                                        1
                                    </p>
                                    <p>
                                        حداکثر
                                    </p>
                                </div>
                                <TrashDashBoard />
                            </div>

                            <div
                                className="

                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                    "

                                >
                                    <p
                                        className="
                                            line-through
                                            text-[#8A8B8D]
                                        "
                                    >

                                        11,980,000

                                    </p>
                                        <p
                                            className="
                                                bg-[#DF5232]
                                                w-fit
                                                p-2
                                                text-white
                                                underline-offset-2
                                                rounded-[28px]
                                            "
                                        >
                                            0%
                                        </p>
                                </div>

                                <div
                                    className="
                                        flex
                                        gap-1
                                        mt-1
                                    "
                                >
                                    <p>
                                        11,980,000
                                    </p>
                                    <p>
                                        تومان
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                                w-full
                                border
                                border-[#E1EDF0]
                                px-[22px]
                                py-[18px]
                                text-[10px]
                                flex
                                flex-col
                                gap-3
                                rounded-xl
                                mt-[18px]
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <p>قیمت کالاها (1)</p>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                    "
                                >
                                    <p>
                                        11,980,000
                                    </p>
                                    <p>
                                        تومان
                                    </p>
                                </div>
                            </div>
                            <div
                                className="
                                    text-[#F24822]
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <p>
                                    مجموع تخفیف کالاها
                                </p>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                    "
                                >
                                    <p>
                                        11,980,000
                                    </p>
                                    <p>
                                        تومان
                                    </p>
                                </div>
                            </div>
                            <div
                                className="
                                    w-full
                                    h-[1px]
                                    bg-[#E1EDF0]
                                "
                            >

                            </div>
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <p>
                                    مبلغ قابل پرداخت
                                </p>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                    "
                                >
                                    <p>
                                        11,980,000
                                    </p>
                                    <p>
                                        تومان
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                border
                                border-[#E1EDF0]
                                w-full
                                rounded-xl
                                mt-2
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    w-full
                                    py-[18px]
                                    text-[14px]
                                    font-semibold
                                "
                            >
                                <p>
                                    محاسبه خرید اقساطی زرمایه
                                </p>
                            </div>

                            <div
                                className="
                                    w-full
                                    h-[1px]
                                    bg-[#E1EDF0]
                                "
                            >

                            </div>

                            <div
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    p-[18px]
                                    
                                "
                            >
                                <p
                                    className="
                                        text-[#1D2433]
                                        text-[12px]
                                    "
                                >
                                    میزان اعتبار درخواستی
                                
                                </p>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                        text-[#3A616A]
                                        font-bold
                                        text-[12px]
                                    "
                                >
                                    <p>
                                        11,980,000
                                    </p>
                                    <p>
                                        تومان
                                    </p>
                                </div>
                            </div>

                            <div className="flex p-2 w-full flex-col items-center justify-center md:flex-row">
                                <div className="hidden text-center text-[14px] text-[#8A8B8D] md:flex">
                                    {digitsEnToFa("1,000,000")} <span> تومان </span>
                                </div>
                                <input
                                    step={1000000}
                                    min={1000000}
                                    max={100000000}
                                    value={inputValue}
                                    type="range"
                                    className="mx-3 my-4 w-full appearance-none rounded-lg"
                                    onChange={handleChange}
                                    style={{
                                    background: `linear-gradient(to left, #1d434c ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%)`,
                                    }}
                                />
                                <div className="hidden text-center text-[14px] text-[#8A8B8D] md:flex">
                                    {digitsEnToFa("100,000,000")} <span> تومان </span>
                                </div>
                                <div className="mb-6 flex w-full items-center text-[12px] justify-between md:hidden">
                                    <p> {digitsEnToFa("1,000,000")} تومان</p>
                                    <p>{digitsEnToFa("100,000,000")} تومان</p>
                                </div>
                            </div>

                            <div
                                className="
                                    w-full
                                    flex
                                    flex-col
                                    p-2
                                    text-[12px]
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        w-full
                                    "
                                >
                                    <p>مدت بازپرداخت :</p>
                                    <p>12 ماه</p>
                                </div>
                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        w-full
                                        mt-3
                                    "
                                >
                                    <p>مبلغ هر قسط :</p>
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1
                                        text-[#3A616A]
                                        font-bold
                                    "
                                >
                                    <p>
                                        11,980,000
                                    </p>
                                    <p>
                                        تومان
                                    </p>
                                </div>
                                </div>
                            </div>

                            <div
                                className="
                                   py-3
                                   w-full
                                   flex
                                   items-center
                                   justify-center 
                                "
                            >
                                <div
                                    className="
                                        text-white
                                        bg-[#1D434C]
                                        w-[165px]
                                        p-[10px]
                                        text-center
                                        rounded-xl
                                        text-[12px]
                                    "
                                >
                                    درخواست اعتبار
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                                fixed
                                bottom-0
                                left-0
                                w-full
                                flex
                                items-center
                                justify-between
                                border-t
                                border-[#E1EDF0]
                                py-7
                                bg-white
                                px-7
                                md:hidden
                            "
                        >
                            <div>
                                <p
                                    className="
                                        text-[12px]
                                    "
                                >
                                    مبلغ قابل پرداخت :
                                </p>
                                <p
                                    className="
                                        text-[14px]
                                        text-[#3A616A]
                                        mt-1
                                    "
                                > 
                                    11,980,000 تومان
                                </p>
                            </div>
                            <div
                                className="
                                    bg-[#1D434C]
                                    p-[10px]
                                    text-white
                                    rounded-xl
                                    text-[12px]
                                "
                            >
                                ثبت سفارش
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                        "
                    >                    
                        <Image 
                            src={empety}
                            width={5000}
                            height={5000}
                            className="
                                w-[244px]
                                h-[202px]
                                mt-[149px]
                                md:mt-0
                            "
                            alt="cart"
                        />
                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                font-medium
                            "
                        >
                            <p>
                                سبد خرید شما خالی است!
                            </p>
                            <p
                                className="
                                    text-[10px]
                                    text-[#8A8B8D]
                                    mt-4
                                "
                            >
                                میتوانید برای مشاهده محصولات بیشتر به صفحه فروشگاه بروید:
                            </p>
                        </div>
                        <div
                            className="
                                w-full
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <FlashButton 
                                title="صفحه فروشگاه"
                                href="/shopping-evaam"
                            />
                        </div>
                    </div>
                )
            }
        </>
    )
}