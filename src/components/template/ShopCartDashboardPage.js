"use client"

import { useState } from "react"

import empety from "../../../public/image/CartEmpty.png"
import Image from "next/image"
import FlashButton from "../elements/FlashButton"



export default function ShopCartDashboardPage() {

    const [state, setSatate] = useState(true)

    return (
        <div
            className="
                flex
                flex-col
                items-center
            "
        >
            {
                state ? (
                    <div>

                    </div>
                ) : (
                    <>                    
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
                    </>
                )
            }
        </div>
    )
}