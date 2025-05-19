"use client"

import { useEffect, useRef, useState } from "react";
import CategoryTitleLevel from "../elements/CategoryTitleLevel";
import PhotoSelect from "../elements/PhotoSelect";
import { GetAllTopLevelTopic } from "@/service/adminPanel";
import CrossIcon from "../../../public/icons/Admin/CrossIcon";
import Image from "next/image";
import AddPicture from "../../../public/icons/Admin/AddPicture";



export default function CategorylevelTowPage({ level }) {

    const [state, setState] = useState({
        name: "",
        image: "",
        parent: ""
    })
    const [photo, setPhoto] = useState("")
    const [img,setImg] = useState("")

    const inputRef = useRef(null)
    
    
    const UploadePhoto =(e) => {
        setImg(e.target.files[0])
    }

    const [options, setOptions] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await GetAllTopLevelTopic()

            if(response) {
                setOptions(response.data.data)
            } else {
                console.log(error);
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
                {/* <PhotoSelect /> */}
        <div
            className="
                pr-8
                pt-8
            "
        >
            <p
                className="
                    mb-4
                    text-[20px]
                    font-medium
                "
            >
                تصویر برای دسته انتخاب کنید
            </p>
            <div
                className="
                    border-[1px]
                    border-[#6D6E70]
                    border-dashed
                    w-full
                    h-[157px]
                    flex
                    items-center
                    justify-center
                "
            >
                <div
                    className="
                        flex
                        items-center
                        justify-center
                        w-full
                        h-full
                        gap-2
                    "
                >
                    {
                        img ? (
                            <div
                                className="
                                    relative
                                "
                            >
                                <div
                                    className="
                                        absolute
                                        top-[-10px]
                                        right-[-10px]
                                        bg-red-600
                                        rounded-xl
                                        cursor-pointer
                                        z-10
                                    "
                                    onClick={() => setImg("")}
                                >
                                    <CrossIcon />
                                </div>
                                <Image
                                    src={URL.createObjectURL(img)}
                                    width={300}
                                    height={300}
                                    className="
                                        w-[300px]
                                        h-full
                                    "
                                    alt="alt"
                                />
                            </div>
                        ) : (
                            <div
                                onClick={() => inputRef.current.click()}
                                className="
                                    cursor-pointer
                                "
                            >
                                <AddPicture />
                            </div>
                        )
                    }
                </div>
            </div>

            <input 
                type="file"
                ref={inputRef}
                className="
                    hidden
                "
                onChange={(e) => UploadePhoto(e)}
            />
                <select
                title="انتخاب والد"
                    className="
                        w-full
                        mx-auto
                        pr-8
                        mt-2
                    "
                >
                    <option
                        disabled
                        selected
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