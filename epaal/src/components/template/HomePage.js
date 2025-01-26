"use client"

// react
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LottiePlayer from "@/utils/LottiePlayer";
import LoadingAnimation from "../../../public/lottie/LoadingAnimation.json"


export default function HomePage() {
  
  const { push } = useRouter()

  useEffect(() => {

    push("/evaam-home")

    }, [])

    return (
      <div
          className="
              w-[80%]
              h-screen
              overflow-hidden
              flex
              justify-center
              items-center
              mx-auto
          "
      >
        <div
          className="
            w-1/2
            h-full
            mx-auto
            overflow-hidden
            flex
            justify-center
            items-center
          "
        >
            <LottiePlayer 
                  animation={LoadingAnimation}
            />
        </div>
      </div>
    )
}