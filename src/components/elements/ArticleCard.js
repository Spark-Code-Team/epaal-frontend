import Image from "next/image"
import curv1 from "../../../public/icons/CURVE-1.svg"
import curv2 from "../../../public/icons/CURVE-2.svg"



export default function ArticleCard() {

    return (
        <div
            className="
                relative
                w-[392px]
                h-[220px]
                bg-slate-500
            "
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
                    w-[200px]
                    
                "
            />
        </div>
    )
}