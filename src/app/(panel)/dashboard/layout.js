"use client"

import LayoutUser from "@/components/layout/UserPanelLayout/LayoutUser"
import { fetchRole } from "@/redux/features/userRole/useRole"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserLayout({children}) {

    const store = useSelector(store => store)
    const dispatch = useDispatch()


    useEffect(() => {
        if(!store.role.id) {
            dispatch(fetchRole())
        }
    }, [])

    if(!store.role.id) {
        redirect("/")
    }

    return (
        <>
            <LayoutUser>
                {children}
            </LayoutUser>
        </>
    )
}