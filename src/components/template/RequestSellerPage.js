"use client"

import { GetAllRequest } from "@/service/adminPanel"
import { useEffect, useState } from "react"
import AddShop from "../../../public/icons/Admin/AddShop"
import DeletedRequest from "../../../public/icons/Admin/DeletedRequest"
import Link from "next/link"

const head = [
    "نام و نام خانوادگی",
    "نام فروشگاه",
    "شماره تماس",
    "تاریخ",
    "وب سایت",
    "وضعیت"
]

export default function RequestSellerPage() {

    const [tabelData, setTabelData] = useState([])
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const { response, error } = await GetAllRequest()

            if( response ) {
                setIsLoading(false)
                setTabelData(response.data.data[0] ? response.data.data :  [])
            } else {
                setIsLoading(false)
                console.log(error);
            }
        }

        fetchData()
    }, [])

    const formatData = new Intl.DateTimeFormat("fa-Ir")

    if(loading) {
        return (
            <div>
                <h1>
                    Loading...
                </h1>
            </div>
        )
    }

    return (
        <div>

            {
                tabelData.length == 0 ? (
                    <div
                        className="
                            flex
                            items-center
                            justify-center
                            w-full
                            h-full
                        "
                    >
                        <h1>
                            درخواستی وجود ندارد
                        </h1>
                    </div>
                ) : (
                    <div
                        className="
                            px-8
                        "
                    >
                        <div
                            className="
                                bg-[#F0F2F5]
                                flex
                                items-center
                                justify-between
                                py-[23px]
                                px-4
                                rounded-[14px]
                            "
                        >
                            {
                                head.map((item, index) => (
                                    <p
                                        key={index}
                                        className="
                                            text-center
                                            w-[20%]
                                        "
                                    >
                                        {
                                            item
                                        }
                                    </p>
                                ))
                            }
                        </div>

                        <div
                            className="
                                h-[400px]
                                overflow-y-scroll
                            "
                        >
                            {
                                tabelData.map(item => (
                                    <div
                                        key={item.id}
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            py-[23px]
                                            border-b
                                            border-[#E1E6EF]
                                        "
                                    >
                                            <p
                                                className="
                                                    w-[20%]
                                                    text-center
                                                "
                                            >
                                                {
                                                    `${item.first_name} ${item.last_name}`
                                                }
                                            </p>
                                            <p
                                                className="
                                                    w-[20%]
                                                    text-center
                                                "
                                            >
                                                {
                                                    item.shop_name
                                                }
                                            </p>
                                            <p
                                                className="
                                                    w-[20%]
                                                    text-center
                                                "
                                            >
                                                {
                                                    item.phone_number
                                                }
                                            </p>
                                            <p
                                                className="
                                                    w-[20%]
                                                    text-center
                                                "
                                            >
                                                {
                                                    formatData.format(new Date(item.created_at))
                                                }
                                            </p>
                                            <p
                                                className="
                                                    w-[20%]
                                                    text-center
                                                "
                                            >
                                                {
                                                    item.site_url
                                                }
                                            </p>
                                            <div
                                                className="
                                                    w-[20%]
                                                    flex
                                                    items-center
                                                    justify-center
                                                    gap-7
                                                "
                                            >
                                                <Link
                                                    href={`sellers/create-seller/${item.id}`}
                                                    className="
                                                        cursor-pointer
                                                    "
                                                >
                                                    <AddShop />
                                                </Link>
                                                <div
                                                    className="
                                                        cursor-pointer
                                                    "
                                                >
                                                    <DeletedRequest />
                                                </div>
                                            </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}