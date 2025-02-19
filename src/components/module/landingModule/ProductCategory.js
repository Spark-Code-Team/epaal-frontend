import mobile from "../../../../public/image/mobile.png"
import arayeshy from "../../../../public/image/arayeshy.png"
import Image from "next/image"
import FlashButton from "@/components/elements/FlashButton"


const category = [
    {
        title: "کلای دیجیتال",
        image: mobile
    },
    {
        title: "کلای دیجیتال",
        image: mobile
    },
    {
        title: "زیبایی",
        image: arayeshy
    },
    {
        title: "کلای دیجیتال",
        image: mobile
    },
]


export default function ProductCategory() {

    return (
        <div
            className="
                w-full
                flex
                flex-col
                items-center
            "
        >
            <div
                className="
                    text-[14px]
                    font-bold
                "
            >
                دسته بندی محصولات
            </div>
            <div
                className="
                    flex
                    flex-wrap
                    gap-[24px]
                    items-center
                    justify-between
                    w-full
                    px-[24px]
                    md:px-[40px]
                    pt-[32px]
                "
            >
                {
                    category.map((item, index) => (
                        <div
                            key={index}
                            className="
                                flex
                                flex-col
                                items-center
                                justify-center
                                gap-[14px]
                            "
                        >
                            <div
                                className="
                                    rounded-xl
                                    bg-gradient-to-t
                                    from-[#26889E]
                                    to-white
                                    w-[71px]
                                    h-[77px]
                                    md:w-[213px]
                                    md:h-[199px]
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <Image 
                                    src={item.image}
                                    width={2000}
                                    height={2000}
                                    alt="category"
                                    className="
                                        w-[50px]
                                        h-[90px]
                                        md:w-[103px]
                                        md:h-[180px]
                                    "
                                />
                            </div>
                            <p
                                className="
                                    text-[12px]
                                    font-normal
                                    md:text-[18px]
                                    md:font-medium
                                "
                            >
                                {
                                    item.title
                                }
                            </p>
                        </div>
                    ))
                }
            </div>
            <div>
                <FlashButton
                    title="رفتن به فروشگاه"
                    href="#"
                />
            </div>
        </div>
    )
}