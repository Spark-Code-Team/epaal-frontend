"use client"

import LayoutUser from "@/components/layout/UserPanelLayout/LayoutUser"
import { fetchProfile } from "@/redux/features/profileUser/profileUser"
import { profileData  } from "@/service/userPanel"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


export default function UserLayout({children}) {

    const dispatch = useDispatch()
    const store = useSelector(store => store)

    console.log(store);

    const testHome = async () => {
        const { response, error } = await profileData()

        if(response) {
            console.log(" ============== res =============== \n" , response) 
        } else {
            console.log(" ============== error =============== \n", error) 
        }
    }
    

    useEffect(() => {
        if (!store.profile.id) {
            dispatch(fetchProfile())
        }
        console.log("in use effect")
        testHome()

    }, [])

    return (
        <>
            <LayoutUser>
                {children}
            </LayoutUser>
        </>
    )
}