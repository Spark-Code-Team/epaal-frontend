import LottiePlayer from "@/utils/LottiePlayer";

import Loading from "../../../../public/lottie/Admin Loading.json"



export default function AdminLoading() {

    return (
        <div
            className="
                w-full
                h-full
                flex
                items-center
                justify-center
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