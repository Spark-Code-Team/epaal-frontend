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