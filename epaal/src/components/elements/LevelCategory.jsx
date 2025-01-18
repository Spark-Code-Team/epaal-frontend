"use client"

import {FaPlus} from "react-icons/fa6";
import CardAdmin from "./CardAdmin";
import { Modal } from "flowbite-react";
import { useRef, useState } from "react";
import CrossIcon from "../../../public/icons/Admin/CrossIcon";
import AddPicture from "../../../public/icons/Admin/AddPicture";
import Image from "next/image";

const LevelCategory = ()=>{

    const [categoryModal, setCategoryModal] = useState(false)
    const [addCategory, setAddCategory] = useState({
        name: "",
        image: ""
    })
    const [img,setImg] = useState("")

    const items = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

    const imageRef = useRef(null)


    const ImageChange =(e) => {

        const reader = new FileReader()

        reader.readAsDataURL(e.target.files[0])
        
        reader.onloadend = () => {
            setImg(reader.result)
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

                        <button className="bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]"
                            onClick={() => setCategoryModal(true)}
                        >
                            افزودن دسته جدید
                            <FaPlus />
                        </button>

                    </div>

                </div>


                <div className="w-full mt-10 flex flex-wrap">

                    {
                        items.map((item , index)=>(
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
                                text-[#A7A8A9]
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
                            className="
                                w-[151px]
                                px-6
                                py-3
                                bg-[#054366]
                                rounded-xl
                                text-white
                                text-center
                                cursor-pointer
                                text-[14px]
                            "
                        >
                            ایجاد دسته
                        </div>
                    </div>
                </div>
            </Modal>

            <input 
                type="file"
                value={addCategory.image}
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