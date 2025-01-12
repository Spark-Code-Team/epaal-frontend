"use client"

import Lottie from "react-lottie-player";



export default function LottiePlayer({ animation }) {

    return (
        <Lottie 
            animationData={animation}
            loop
            play
            className="
                w-[80%]
                h-[80%]
            "
        />
    )
}