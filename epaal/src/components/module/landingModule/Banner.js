
// nextjs
import Image from "next/image";

// img
import banner from "../../../../public/image/landing-banner.png"
import Flash from "../../../../public/icons/flash";
import RequestedLoan from "@/components/elements/RequestedLoan";



export default function Banner() {


    return (
        <div
            className="
            bg-[#2852e4]
              w-full
              rounded-b-[34px]
              min-h-0
              relative
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    sm:justify-between
                    sm:flex-row
                    md:justify-between
                    w-full
                    py-5
                "
            >
                <div
                    className="
                       text-center 
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
                </div>
                <div
                    className="
                        relative
                    "
                >
                    <Image 
                        src={banner}
                        width={1000}
                        height={1000}
                        alt="banner"
                        className="
                            w-[200px]
                            h-[200px]
                            sm:w-[250px]
                            sm:h-[250px]
                            md:w-[280px]
                            md:h-[280px]
                        "
                    />
                    <div
                        className="
                            min-w-24
                            max-w-24
                            max-h-24
                            min-h-24
                            bg-cyan-500
                            rounded-full
                            absolute
                            top-[30%]
                            left-[30%]
                            blur-xl
                        "
                    >

                    </div>
                </div>
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        gap-6
                    "
                >
                    <div
                        className="
                            flex
                            w-44
                            py-[10px]
                            px-[32.46px]
                            items-center
                            justify-center
                            bg-white
                            text-[14px]
                            rounded-lg
                            cursor-pointer
                        "
                    >
                        ثبت درخواست وام
                    </div>
                    <div
                        className="
                            flex
                            w-44
                            py-[10px]
                            px-[32.46px]
                            items-center
                            justify-center
                            rounded-lg
                            border-white
                            border-[2px]
                            text-[14px]
                            text-white
                            cursor-pointer
                        "
                    >
                        فروشگاه ایپال
                    </div>
                </div>

                <div 
                    className="
                        flex
                        flex-col
                        items-center
                        pt-5
                        text-white
                        text-[14.25px]
                    "
                >
                    <p>
                        محاسبه اقساط دیجی شهر
                    </p>
                    <Flash />
                </div>
                <div
                    className="
                        min-h-60
                    "
                >

                </div>
                <RequestedLoan />
            </div>
        </div>
    )
}