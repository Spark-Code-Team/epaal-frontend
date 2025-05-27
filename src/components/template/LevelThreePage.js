"use client"

import Link from "next/link";
import PlusAdmin from "../../../public/icons/PlusAdmin";
import CardAdmin from "../elements/CardAdmin";
import { useEffect, useState } from "react";
import { DeleteLowlevelTopic, GetAllLowlevel } from "@/service/adminPanel";
import { toast } from "react-toastify";


export default function LevelThreePage() {

    const [ topics, setTopics ] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await GetAllLowlevel()

            if(response) {
                setTopics(response.data.data || [])
            }
        }

        fetchData()
    }, [loading])

      const handelDelete = async (id) => {
        const {response, error} = await DeleteLowlevelTopic(id)
    
        if(response) {
          setLoading(last => !last)
          toast.success("دسته بندی با موفقیت حذف شد")
        }
      }

    return (
        <div className="mx-auto mb-4 w-[94%]">
            <div className="mx-auto mt-8 flex w-full">
            <div className="flex w-1/2 items-center">
                <p className="text-xl">مدیریت دسته بندی ها</p>

                <p className="mr-6 text-base text-[#8A8B8D]">سطح سه</p>
            </div>

            <div className="flex w-1/2 justify-end">
                <Link
                    href="/admin/categories/create-level-three"
                    className="flex w-[166px] items-center justify-around rounded-md bg-[#054366] p-2 text-[15px] text-white"
                >
                    افزودن دسته جدید
                    <PlusAdmin />
                </Link>
            </div>
            </div>

            <div className="mt-10 flex w-full flex-wrap">
            {topics.length ? (
                topics.map((item, index) => (
                    <CardAdmin
                        key={index}
                        data={item}
                        handelDelete={handelDelete}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </div>
    )
}