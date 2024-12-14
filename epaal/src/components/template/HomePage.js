"use client"

// react
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function HomePage() {
  
  const { push } = useRouter()

  useEffect(() => {

    push("/epaal-home")

    }, [])

    return (
        <></>
    )
}