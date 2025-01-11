"use client"

// react
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LottiePlayer from "@/utils/LottiePlayer";
import LoadingAnimation from "../../../public/lottie/LoadingAnimation.json"


export default function HomePage() {
  
  const { push } = useRouter()

  useEffect(() => {

    push("/epaal-home")

    }, [])

    return (
      <div
          className="
              w-screen
              h-screen
              overflow-hidden
              flex
              justify-center
              items-center
          "
      >
        <div
          className="
            w-1/2
            h-1/2
            mx-auto
            overflow-hidden
          "
        >
            <LottiePlayer 
                  animation={LoadingAnimation}
            />
        </div>
      </div>
    )
}