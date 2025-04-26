"use client"

import SelectField from "@/components/elements/SelectField"
import { getAllField } from "@/service/shop"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"



export default function ConstantDynamic () {

    const [fields, setFields] = useState([])

    const store = useSelector(store => store.addProduct)
    

    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await getAllField(store.product_topic_id)

            if(response) {
                console.log(response);
                setFields(response.data.data)
            } else {
                console.log(error);
            }
        }

        fetchData()
    }, [])
    
    
    return (
        <div
            className="
                mt-[35px]
                h-64
                overflow-y-scroll
            "
        >
            {
                fields.length == 0 ? (
                    <div
                        className="
                            w-full
                            h-full
                            flex
                            items-center
                            justify-center
                        "
                    >
                        <h1>
                            فیلد پیدا نشد
                        </h1>
                    </div>
                ) : (
                    fields.map((item, index) => (
                        <SelectField 
                            key={index}
                            item={item}
                        />
                    ))
                )
            }
        </div>
    )
}