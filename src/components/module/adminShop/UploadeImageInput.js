"use client"

import ShopAdminProductImage from "@/components/elements/ShopAdminProductImage";
import { useEffect, useState } from "react";

const rols = [
    "حداقل باید سه تصویر برای محصول خود بارگذاری کنید",
    "حجم تصویر حداکثر 6 مگابایت باشد ",
    "تصویر محصول بدون طرح/لوگو/متن باشد",
    "فرمت تصویر JPG یا JPEG باشد"
]


export default function UploadeImageInput() {

    const [images, setImages] = useState(["", "", "", ""])

    return (
        <div
            className="
                w-[1070px]
                h-[211px]
                rounded-xl
                border
                border-[#E1EDF0]
                flex
            "

        >
            <div
                className="
                    p-[22px]
                "
            >
                <ul
                    className="
                        flex
                        gap-8
                    "
                >
                    {
                        images.map((item, index) => (
                            <ShopAdminProductImage 
                                key={index}
                                setImages={setImages}
                                index={index}
                                images={images}
                            />
                        ))
                    }
                </ul>
            </div>
            <div
                className="
                    px-[22px]
                    py-[48px]
                    text-[12px]
                "
            >
                <ul>
                    {
                        rols.map((item, index) => (
                            <li
                                className="
                                    mb-3
                                    list-disc
                                "
                                key={index}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}