

import Image from "next/image"
import motor from "../../../public/image/motorShop.png"
import Link from "next/link"
import { digitsEnToFa } from "@persian-tools/persian-tools"


export default function ShopCart({href="#"}) {

    return (
        <Link
            href={href}
            className="
                w-[299px]
                md:w-[272px]
                py-[10px]
                px-2
                rounded-[10px]
                border
                border-[#A7A8A9]
                flex
                flex-col
                items-center
            "
        >
            <Image 
                src={motor}
                width={500}
                height={500}
                className="
                    h-[150px]
                    w-[150px]
                    md:w-[248px]
                    md:h-[248px]
                "
                alt="shop"
            />
            <div
                className="
                    w-full
                    text-[10px]
                    md:text-[16px]
                    font-medium
                "
            >
                موتورسیکلت بنلی مدل 180s
            </div>
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-[10px]
                    md:text-[16px]
                    gap-5
                    font-bold
                "
            >
                <p
                    className="
                        text-[px]
                        text-center
                    "
                >
                    شروع از
                </p>
                <div
                    className="
                        flex
                        items-center
                        gap-1
                        my-2
                        md:gap-2
                        md:my-[9px]
                    "
                >
                    <p>
                        {
                            digitsEnToFa("35,690,000")
                        }
                    </p>
                    <p>
                        تومان
                    </p>
                </div>
            </div>
            <div
                className="
                    w-full
                    bg-evaamGreen
                    text-white
                    rounded-[10px]
                    text-center
                    md:p-[11px]
                    md:text-[14px]
                    md:font-normal
                    font-normal
                    text-[9px]
                    p-[6px]
                "
            >
                سفارش
            </div>
        </Link>
    )
}