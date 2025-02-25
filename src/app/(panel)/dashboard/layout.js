"use client"

import LayoutUser from "@/components/layout/UserPanelLayout/LayoutUser"
import { fetchProfile } from "@/redux/features/profileUser/profileUser"
import { profileData  } from "@/service/userPanel"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserLayout({children}) {

    const dispatch = useDispatch()
    const store = useSelector(store => store)
    

    useEffect(() => {
        
        if (!store.profile.id) {
            dispatch(fetchProfile())
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