"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"


export default function SecureRoute ({currentState}) {

    const status = useSelector(store => store.status)
    const router = useRouter()

    useEffect(() => {
        if(status.level_number < currentState) {
            router.back()
        }
    }, [])

    return <></>
}