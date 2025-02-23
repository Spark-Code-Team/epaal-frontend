"use client"

import { useState } from "react";
import AddressAuth from "../module/authenticationPage/AddressAuth";
import IdentityAuth from "../module/authenticationPage/IdentityAuth";



export default function AuthenticationPage() {

    const [active, setActive] = useState(false)

    return (
        <div
            className="
                grid
                grid-cols-2
                gap-9
                w-full
                h-full
            "
        >
            <IdentityAuth setActive={setActive} />
            <AddressAuth active={active} />
        </div>
    )
}