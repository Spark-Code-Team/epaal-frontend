"use client"

import { useState } from "react";
import AddressAuth from "../module/authenticationPage/AddressAuth";
import IdentityAuth from "../module/authenticationPage/IdentityAuth";



export default function AuthenticationPage() {

    const [active, setActive] = useState(false)
    const [showAddress, setShowAddress] = useState(1)

    return (
        <div
            className="
                w-full
                h-full
            "
        >
            {
                showAddress == 1 ? (
                    <IdentityAuth 
                        setActive={setActive}
                        setShowAddress={setShowAddress}
                    />
                ) : (
                    <AddressAuth 
                        active={active}
                    />
                )
            }
        </div>
    )
}