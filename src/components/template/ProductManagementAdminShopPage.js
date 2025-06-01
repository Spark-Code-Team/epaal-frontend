"use client"

import { useState } from "react"
import HedearStatusProduct from "../module/AddShopProduct/HedearStatusProduct"


export default function ProductManagementAdminShopPage() {

    const [accepted, setAccepted] = useState(false)
    const [search , setSearch] = useState("")

    return (
        <>
            <HedearStatusProduct 
                accepted={accepted}
                setAccepted={setAccepted}
                search={search}
                setSearch={setSearch}
            />
        </>
    )
}