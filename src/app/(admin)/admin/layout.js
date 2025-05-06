"use client"

import LayoutAdmin from "@/components/layout/AdminLayout/LayoutAdmin";
import { redirect } from "next/navigation";



export default function AdminLayout({ children }) {

    // redirect("/admin/confirm-users-clues") 


    return (
        <LayoutAdmin>
            { children }
        </LayoutAdmin>
    )
}