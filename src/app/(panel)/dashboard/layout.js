"use client"

import LayoutUser from "@/components/layout/UserPanelLayout/LayoutUser"
import { fetchStatus } from "@/redux/features/facilityState/facilityState"
import { fetchProfile } from "@/redux/features/profileUser/profileUser"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserLayout({children}) {

    const dispatch = useDispatch()
    const profile = useSelector(store => store.profile)
    const status = useSelector(store => store.status)

    

    useEffect(() => {
        
        if (!profile.id) {
            dispatch(fetchProfile())
        }

        if(!status.id) {
            dispatch(fetchStatus())
        }

    }, [])

    return (
        <>
            <LayoutUser>
                {children}
            </LayoutUser>
        </>
    )
}