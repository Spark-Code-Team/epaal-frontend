"use client"

import { useEffect, useRef, useState } from "react";
import CategoryTitleLevel from "../elements/CategoryTitleLevel";
import { GetAllLowlevel, GetAllTopLevelTopic } from "@/service/adminPanel";
import CrossIcon from "../../../public/icons/Admin/CrossIcon";
import Image from "next/image";
import AddPicture from "../../../public/icons/Admin/AddPicture";
import axios from "axios";
import { toast } from "react-toastify";
import { getCookie } from "@/utils/cookie";



export default function CategorylevelTowPage() {

    const [state, setState] = useState({
        name: "",
        image: "",
        parent: ""
    })
    const [options, setOptions] = useState([])

    const inputRef = useRef(null)

    const formData = new FormData()
    
    const UploadePhoto =(e) => {
        setState(last => ({...last, image: e.target.files[0]}))
    }

    const sendData = async () => {
        formData.append("name", state.name)
        formData.append("toplevel_topic", state.parent)
        formData.append("picture", state.image)

        const token = getCookie("accessToken");

        try {
            axios
                .post(
                `${process.env.NEXT_PUBLIC_API_URL}product/midlevel_topic`,
                formData,
                {
                    headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                    },
                },
                )
                .then((res) => {
                    toast.success("دسته بندی با موفقیت ساخته شد");
                    setState({ image: "", name: "", parent: "" });
                });
        } catch (error) {
            toast.error(error.data?.message || "مشکلی پیش آمده");
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await GetAllTopLevelTopic()

            if(response) {
                setOptions(response.data.data || [])
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
                <CategoryTitleLevel level="سطح دو" />
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
                        state.image ? (
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
                                    onClick={() => setState(last => ({...last, image: ""}))}
                                >
                                    <CrossIcon />
                                </div>
                                <Image
                                    src={URL.createObjectURL(state.image)}
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
                    onChange={(e) => setState(last => ({...last, parent: e.target.value}))}
                >
                    <option
                        disabled
                        selected
                    >
                        انتخاب والد
                    </option>
                    {
                        options.length != 0 ? options.map(items => (
                            <option
                                key={items.id}
                                value={items.id}
                            >
                                {
                                    items.name
                                }
                            </option>
                        )) : null
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
                    onClick={() => sendData()}
                >
                    ایجاد دسته
                </button>
            </div>
        </div>
    )
}