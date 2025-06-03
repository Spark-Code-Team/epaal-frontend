"use client"

import LayoutAdmin from "@/components/layout/AdminLayout/LayoutAdmin";
import { fetchRole } from "@/redux/features/userRole/useRole";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function AdminLayout({ children }) {

    const dispatch = useDispatch()
    const store = useSelector(store => store)
    

  useEffect(() => {
    if(!store.role.id) {
      dispatch(fetchRole())
    }
    
  }, [])

    return (
      <LayoutAdmin>
          { children }
      </LayoutAdmin>
    )
}