"use client"

import CardAdmin from "./CardAdmin";
import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
import CrossIcon from "../../../public/icons/Admin/CrossIcon";
import AddPicture from "../../../public/icons/Admin/AddPicture";
import Image from "next/image";
import PlusAdmin from "../../../public/icons/PlusAdmin";
import { CreateTopLevelTopic } from "@/service/adminPanel";
import axios from "axios";
import { getCookie } from "@/utils/cookie";
import { toast } from "react-toastify";

const LevelCategory = ()=>{

    const [categoryModal, setCategoryModal] = useState(false);
    const [addCategory, setAddCategory] = useState({
        name: "",
        image: ""
    })
    const [img,setImg] = useState("");

    const formData = new FormData()

    const imageRef = useRef(null)


    const ImageChange =(e) => {

        setAddCategory(last => ({...last, image: e.target.files[0]}))
        setImg(URL.createObjectURL(e.target.files[0]))
    }

    const handelSendData = async () => {
        formData.append("picture", addCategory.image)
        formData.append("name", addCategory.name)

        const token = getCookie("accessToken")

        try {
            axios.post(`${process.env.NEXT_PUBLIC_API_URL}product/toplevel_topic`,
             formData,
             {
                headers: {
                  "Content-Type": "multipart/form-data",
                  "Authorization": `Bearer ${token}`
                },
              }
            ).then(res => {
                toast.success("دسته بندی با موفقیت ساخته شد")
                setAddCategory({image: "", name: ""})
                setCategoryModal(false)
            })
        } catch(error) {
            console.log(error)
            toast.error(error.data?.message || "مشکلی پیش آمده")
        }
    }

    return(

        <>

            <div className="w-[94%] mx-auto mb-4">

                <div className="w-full mx-auto mt-8 flex">

                    <div className="w-1/2 flex items-center">

                        <p className="text-xl">مدیریت دسته بندی ها</p>

                        <p className="text-base mr-6 text-[#8A8B8D]">سطح یک</p>

                    </div>

                    <div className="w-1/2 flex justify-end">

                        <button className="w-[166px] bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]"
                            onClick={() => setCategoryModal(true)}
                        >
                            افزودن دسته جدید
                            <PlusAdmin/>
                        </button>

                    </div>

                </div>


                <div className="w-full mt-10 flex flex-wrap">

                    {
                        [...Array(9)].map((item , index)=>(
                            <CardAdmin 
                                key={index}
                            />
                        ))
                    }

                </div>


            </div>

            <Modal
                show={categoryModal}
                onClose={() => setCategoryModal(false)}
                dismissible
                size="xl"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div
                    className="
                        w-[557px]
                        h-[445px]
                        rounded-[10px]
                        bg-white
                        mx-auto
                        px-7
                    "
                >
                    {/* title  */}

                    <div
                        className="
                            w-full
                            flex
                            justify-between
                            items-center
                            pt-7
                            pb-4
                            border-b
                        "
                    >
                        <p
                            className="
                                text-[20px]
                                font-semibold
                                pr-2
                            "
                        >
                            ایجاد دسته جدید (سطح یک)
                        </p>
                        <div
                            onClick={() => setCategoryModal(false)}
                            className="
                                cursor-pointer
                            "
                        >
                            <CrossIcon />
                        </div>
                    </div>

                    {/* name input */}
                    <div
                        className="
                            pt-[18px]
                        "
                    >
                        <p
                            className="
                                text-[14px]
                                font-medium
                                pb-3
                                text-right
                            "
                        >
                            نام دسته :
                        </p>
                        <input 
                            value={addCategory.name}
                            onChange={(e) => setAddCategory(last => ({...last, name: e.target.value}))}
                            placeholder="نام دسته را وارد کنید"
                            className="
                                w-[501px]
                                border-[1px]
                                border-black
                                p-[10px]
                                text-[14px]
                                font-normal
                                rounded-xl
                            "
                        />
                    </div>

                    {/* image input */}
                    <div
                        className="
                            pt-[18px]
                        "
                    >
                        <p
                            className="
                                text-[14px]
                                font-medium
                                pb-[18px]
                            "
                        >
                            تصویر انتخاب کنید :
                        </p>
                        <div
                            className="
                                border-[1px]
                                border-[#6D6E70]
                                border-dashed
                                w-full
                                h-[135px]
                                flex
                                items-center
                                justify-center
                            "
                            onClick={() => imageRef.current.click()}
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
                    
                    <div
                        className="
                            w-full
                            flex
                            justify-end
                            py-4
                        "
                    >
                        <div
                            className={`
                                w-[151px]
                                px-6
                                py-3
                                ${addCategory.image && addCategory.name ? "bg-[#054366] text-white" : "bg-slate-100 text-black"}
                                rounded-xl
                                text-center
                                cursor-pointer
                                text-[14px]
                            `}

                            onClick={() => handelSendData()}
                        >
                            ایجاد دسته
                        </div>
                    </div>
                </div>
            </Modal>

            <input 
                type="file"
                onChange={(e) => ImageChange(e)}
                ref={imageRef}
                className="
                    hidden
                "
            />

        </>

    )

}


export default LevelCategory;