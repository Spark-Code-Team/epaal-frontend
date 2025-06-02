"use client"

import { useState } from "react"
import HedearStatusProduct from "../module/AddShopProduct/HedearStatusProduct"
import ProductThManage from "../module/adminShop/ProductThManage"


const thStatic = [
    "تصویر محصول",
    "نام محصول",
    "تاریخ ایجاد",
    "وضعیت",
    "فعال",
    "عملیات"
]

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

            <div
                className="
                    mt-2
                "
            >

                <table className="min-w-full table-auto border-collapse">

                    <thead className="bg-[#F0F2F5] text-black text-[16px] h-14">

                        <tr>
                            {
                                thStatic.map((item, index) => (
                                    <th
                                        key={index}
                                    >
                                        {
                                            item
                                        }
                                    </th>
                                ))
                            }
                        </tr>

                    </thead>



                    <tbody>

                        {
                            [...Array(9)].map((item, index) => (
                                <ProductThManage 
                                    key={index}
                                />
                            ))
                        }

                    </tbody>

                </table>

            </div>
        </>
    )
}