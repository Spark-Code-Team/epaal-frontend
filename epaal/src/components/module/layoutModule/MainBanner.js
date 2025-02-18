
import Image from "next/image"
import lvazemBanner from "../../../../public/image/lvazemBanner.png"
import ArrowBannerIcon from "../../../../public/icons/ArrowBannerIcon"
import MohasebeIcon from "../../../../public/icons/MohasebeIcon"



export default function MainBanner() {

    return (
        <div
            id="bn"
            className="
                h-[627px]
                flex
                flex-col
                md:flex-row
                items-center
                justify-center
            "
        >
            <div
                className="
                    md:w-1/2
                    flex
                    flex-col
                    md:mr-[108px]
                    text-white
                    gap-4
                    text-center
                    md:text-justify
                "
            >
                <p
                    className="
                        text-[28px]
                        md:text-[40px]
                        font-bold
                    "
                >
                    خرید اقساطی
                </p>
                <p
                    className="
                        text-[16px]
                        md:text-[24px]
                        font-medium
                        text-justify
                    "
                >
                    بدون نیاز به ضامن فقط با کسب رتبه اعتباری مناسب 
                </p>
                <div
                    className="
                        rounded-2xl
                        bg-white
                        flex
                        items-center
                        mx-auto
                        md:mx-0
                        gap-[20px]
                        w-fit
                        px-4
                        py-2
                        mt-4
                    "
                >
                    <p
                        className="
                            text-[#1D434C]
                            text-[14px]
                        "
                    >
                        راهنمای خرید اقساطی
                    </p>
                    <div
                        className="
                            bg-[#1D434C]
                            rounded-[10px]
                            w-8
                            h-8
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <ArrowBannerIcon />
                    </div>
                </div>
                <div
                    className="
                        w-full
                        md:flex
                        items-center
                        justify-end
                        mt-[45px]
                        gap-2
                        hidden
                    "
                >
                    <p
                        className="
                            text-[16px]
                        "
                    >
                        محاصبه اقساط
                    </p>
                    <MohasebeIcon />
                </div>
            </div>
            <div
                className="
                    md:w-1/2
                    w-full
                    flex
                    items-center
                    justify-center
                "
            >
                <Image 
                    width={500}
                    height={500}
                    className="
                        md:w-[415px]
                        md:h-[415px]
                        w-[304px]
                        h-[304px]
                    "
                    src={lvazemBanner}
                    alt="alt"
                />
            </div>
        </div>
    )
}