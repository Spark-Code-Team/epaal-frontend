"use client"

import { useEffect, useState } from "react";
import CategoryTitleLevel from "../elements/CategoryTitleLevel";
import PhotoSelect from "../elements/PhotoSelect";
import { GetAllTopLevelTopic } from "@/service/adminPanel";



export default function CategorylevelTowPage({ level }) {

    const [state, setState] = useState({
        name: "",
        image: "",
        parent: ""
    })

    const [options, setOptions] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await GetAllTopLevelTopic()

            if(response) {
                console.log("888888888888888888888888888888888888888888888888888888",response);

                setOptions(response.data.data)
            } else {
                console.log("888888888888888888888888888888888888888888888888888888",error);
            }
        }

        fetchData()
    }, [])

    return (
        <div
            className="
                flex
            "
        >
            <div
                className="
                    w-full
                "
            >
                <CategoryTitleLevel level={level} />
        <div
            className="
                pr-8
                pt-[49px]
                flex
                flex-col
            "
        >
            <label
                className="
                    text-[20px]
                    pb-3
                    font-medium
                "
            >
               نام دسته :
            </label>
            <input 
                type="text"
                placeholder="نام دسته را انتخاب کنید"
                value={state.name}
                onChange={(e) => setState(last => ({...last, name: e.target.value}))}
                className="
                    rounded-[10px]
                    text-[14px]
                    focus:border-black
                    focus:outline-none
                    focus:ring-0
                "
            />
        </div>
                <PhotoSelect />
                <select
                    className="
                        w-full
                        pr-8
                    "
                >
                    <option
                        disabled
                    >
                        انتخاب والد
                    </option>
                    {
                        options.map(items => (
                            <option
                                key={items.id}
                                value={items.id}
                            >
                                {
                                    items.name
                                }
                            </option>
                        ))
                    }
                </select>
            </div>
            <div
                className="
                    w-[425px]
                    relative
                "
            >
                <button
                    className="
                        absolute
                        bottom-2
                        left-4
                        W-[182px]
                        bg-[#054366]
                        text-white
                        p-3
                        rounded-xl
                    "
                >
                    ایجاد دسته
                </button>
            </div>
        </div>
    )
}