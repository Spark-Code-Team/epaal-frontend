
// nextjs
import Image from "next/image";

// img
import banner from "../../../../public/image/landing-banner.png"
import Flash from "../../../../public/icons/flash";
import RequestedLoan from "@/components/elements/RequestedLoan";
import Link from "next/link";



export default function Banner() {


    return (
        <div
            className="
              w-full
              min-h-0
              md:my-14
            "
        >
            <div
                className="
                    flex
                    flex-col
                    items-center
                    sm:justify-evenly
                    sm:flex-row
                    md:justify-evenly
                    w-full
                    bg-gradient-to-r
                    from-[#41B1AC]
                    to-[#FFD037]
                    py-5
                    relative
                    rounded-b-[34px]
                    md:rounded-t-[34px]
                    md:rounded-b-[0px]
                    sm:rounded-b-[0px]
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
                    <div
                    className="
                        hidden
                        items-center
                        justify-between
                        gap-6
                        md:flex
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
                    <Link
                        href="/shopping-evaam"
                        className="
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
                        فروشگاه ایوام
                    </Link>
                </div>
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
                        md:hidden
                        sm:hidden
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
                    <Link
                        href="/shopping-evaam"
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
                        فروشگاه ایوام
                    </Link>
                </div>

                <div 
                    className="
                        flex
                        flex-col
                        items-center
                        pt-5
                        text-white
                        text-[14.25px]
                        md:hidden
                        sm:hidden
                    "
                >
                    <p>
                        محاسبه اقساط ایوام
                    </p>
                    <Flash />
                </div>

                <div
                        className="
                            w-full
                            h-56
                            md:hidden
                            sm:hidden
                        "
                    >

                </div>

            <div
                className="
                    items-center
                    justify-center
                    absolute
                    bottom-[-270px]
                    w-3/4
                    md:bottom-[-320px]
                    sm:bottom-[-340px]
                "
            >
                <div 
                    className="
                        md:flex
                        sm:flex
                        flex-col
                        items-center
                        pt-5
                        text-white
                        text-[14.25px]
                        hidden
                    "
                >
                    <p>
                        محاسبه اقساط ایوام
                    </p>
                    <Flash />
                </div>
                <RequestedLoan />
            </div>
            </div>
            <div
                className="
                    min-h-48
                    w-full
                    bg-gradient-to-r
                    from-[#41B1AC]
                    to-[#FFD037]
                    rounded-b-[34px]
                    hidden
                    sm:flex
                    md:flex
                "
            >

            </div>
        </div>
    )
}