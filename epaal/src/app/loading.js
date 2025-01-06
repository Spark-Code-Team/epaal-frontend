import LottiePlayer from "@/utils/LottiePlayer";
import LoadingAnimation from "../../public/lottie/LoadingAnimation.json"



export default function Loading() {

    return (
        <div
            className="
                w-full
                h-full
            "
        >
            <LottiePlayer 
                animation={LoadingAnimation}
            />
        </div>
    )
}