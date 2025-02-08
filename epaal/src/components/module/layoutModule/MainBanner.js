
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
                items-center
                justify-center
            "
        >
            <div
                className="
                    w-1/2
                    flex
                    flex-col
                    mr-[108px]
                    text-white
                    gap-4
                "
            >
                <p
                    className="
                        text-[40px]
                        font-bold
                    "
                >
                    خرید اقساطی
                </p>
                <p
                    className="
                        text-[24px]
                        font-medium
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
                        gap-[20px]
                        w-fit
                        px-4
                        py-2
                        mt-4
                    "
                >
                    <p
                        className="
                            text-black
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
                        flex
                        items-center
                        justify-end
                        mt-[45px]
                        gap-2
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
                    w-1/2
                    flex
                    items-center
                    justify-center
                "
            >
                <Image 
                    width={500}
                    height={500}
                    className="
                        w-[415px]
                        h-[415px]
                    "
                    src={lvazemBanner}
                    alt="alt"
                />
            </div>
        </div>
    )
}