
// nextjs
import Image from "next/image";

// img
import banner from "../../../../public/image/landing-banner.png"



export default function Banner() {


    return (
        <div
            className="
            bg-[#2852e4]
              w-full
              rounded-b-[34px]
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    w-full
                    py-5
                "
            >
                <p
                    className="
                       text-[31px]
                     text-white
                    "
                >
                    خریدی که اعتبار دارد
                </p>
                <p className="
                    py-5
                    text-[14px]
                    text-white
                ">
                    دریافت وام و خرید اقساطی کالا
                </p>
                <Image 
                    src={banner}
                    width={1000}
                    height={1000}
                    alt="banner"
                    className="
                        w-72
                        h-72
                    "
                />
            </div>
        </div>
    )
}