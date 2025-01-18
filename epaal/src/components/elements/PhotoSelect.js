"use client"

import { useRef, useState } from "react";
import AddPicture from "../../../public/icons/Admin/AddPicture";
import Image from "next/image";



export default function PhotoSelect () {

    const inputRef = useRef(null)

    const [photo, setPhoto] = useState("")
    const [img,setImg] = useState("")

    const UploadePhoto =(e) => {

        const reader = new FileReader()

        reader.readAsDataURL(e.target.files[0])
        
        reader.onloadend = () => {
            setImg(reader.result)
        }
    }

    return (
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
                        cursor-pointer
                        w-full
                        h-full
                    "
                    onClick={() => inputRef.current.click()}
                >
                    {
                        img ? (
                            <Image 
                                src={img}
                                width={300}
                                height={300}
                                className="
                                    w-[300px]
                                    h-full
                                "
                                alt="alt"
                            />
                        ) : (
                            <AddPicture />
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
                value={photo}
                onChange={(e) => UploadePhoto(e)}
            />
        </div>
    )
}