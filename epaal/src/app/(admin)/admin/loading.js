import LottiePlayer from "@/utils/LottiePlayer";

import Loading from "../../../../public/lottie/Admin Loading.json"



export default function AdminLoading() {

    return (
        <div
            className="
                w-[80%]
                h-[80%]
                flex
                items-center
                justify-center
                overflow-hidden
            "
        >
            <div
                className="
                    w-1/3
                    h-1/3
                "
            >
                <LottiePlayer 
                    animation={Loading}
                />
            </div>
        </div>
    )
}