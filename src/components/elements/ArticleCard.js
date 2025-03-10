import Image from "next/image"
import curv1 from "../../../public/icons/CURVE-1.svg"
import curv2 from "../../../public/icons/CURVE-2.svg"
import { digitsEnToFa } from "@persian-tools/persian-tools"
import ArrowArticle from "../../../public/icons/ArrowArticle"



export default function ArticleCard() {

    return (
        <div
            className="
                flex
                items-center
                flex-col
                w-[392px]
                gap-6
            "
        >
            <div
                className="
                    relative
                    w-[392px]
                    h-[220px]
                    bg-slate-500
                    rounded-3xl
                "
                style={{
                    background: "url('/image/c1.jpg') center/100% 100% no-repeat"
                }}
            >
                <Image 
                    src={curv1}
                    width={300}
                    height={300}
                    alt="alt"
                    className="
                        absolute
                        bottom-0
                        right-0
                        w-[80px]
                    "
                    draggable={false}
                />

                <Image 
                    src={curv2}
                    width={300}
                    height={300}
                    alt="alt"
                    className="
                        absolute
                        top-[-1px]
                        left-[-1px]
                        w-[150px]
                    "
                    draggable={false}
                />

                <p
                    className="
                        absolute
                        left-7
                        top-4
                        text-[#3A4E59]
                    "
                >
                    {
                        digitsEnToFa("1403/09/03")
                    }
                </p>

                <div
                    className="
                        absolute
                        right-3
                        bottom-4
                    "
                >
                    <ArrowArticle />
                </div>
            </div>
            <p
                className="
                    text-lg
                    font-normal
                    text-[#8A8B8D]
                "
            >
                این متن متعلق به مقاله است وبرای خواندن و مشاهده مقاله روی تصویر کلیک کنید...
            </p>
        </div>
    )
}