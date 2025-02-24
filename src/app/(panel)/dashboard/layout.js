"use client"

import LayoutUser from "@/components/layout/UserPanelLayout/LayoutUser"


export default function UserLayout({children}) {

    return (
        <>
            <LayoutUser>
                {children}
            </LayoutUser>
        </>
    )
}