"use client"

import { Modal } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import CrossIcon from "../../../../../public/icons/Admin/CrossIcon";
import TickIcon from "../../../../../public/icons/Admin/TickIcon";
import AddOption from "@/components/elements/AddOption";



export default function FieldCard() {

    const [ showModal, setShowModal] = useState({
        delete: false,
        edit: false
    })

    const [selectFilter, setSelectFilter] = useState({
        select: false,
        filter: false
    })

    const [option, setOption] = useState([""])

    const handelShowModal = (name) => {

        if(showModal[name]) {
            setShowModal(last => ({...last, [name]: false}))
        } else {
            setShowModal(last => ({...last, [name]: true}))
        }
    }

    const handelSelective = (name) => {

        if(selectFilter[name]) {
            setSelectFilter(last => ({...last, [name]: false}))
        } else {
            setSelectFilter(last => ({...last, [name]: true}))
        }
    }

    console.log(showModal);
    console.log(option);
    
    
    

    return (
        <>
            <div className="w-full mx-auto p-3 flex justify-between border-b-[1.5px] border-[#E1E6EF]">

            <div className="flex items-center p-2">
                <p className="text-[#57585A]">1 - </p>

                <p className="mr-2 text-[#57585A]">نام فیلد</p>
            </div>

            <div className="flex items-center">

                <div className="w-10 h-9 cursor-pointer border-[1.5px] border-black flex items-center justify-center ml-3 rounded-md"
                    onClick={() => handelShowModal("edit")}
                >
                        <FaEdit size={23} />
                </div>

                <div className="w-10 h-9 border-[1.5px] border-[#EB1C24] flex items-center justify-center rounded-md cursor-pointer"
                    onClick={() => handelShowModal("delete")}
                >
                        <RiDeleteBin5Line size={23} color="#EB1C24" />
                </div>

            </div>

        </div>

        {/* delte Modal */}
        <Modal 
            show={showModal.delete}
            onClose={() => handelShowModal("delete")}
            dismissible
            size="sm"
            style={{
                display: "flex"

            }}
        >
            <div
                className="
                    w-full
                    h-[163px]
                    mx-auto
                    flex
                    flex-col
                    justify-center
                    items-center
                "
            >
                <div
                    className="
                        w-full
                        text-center
                    "
                >
                    <p
                        className="
                            text-[20px]
                            font-medium
                            px-[68px]
                            py-[32px]
                        "
                    >
                        آیا از حذف فیلد اطمینان دارید؟
                    </p>
                </div>
                <div
                        className="
                            flex
                            gap-[9px]
                            pb-8
                        "
                    >
                        <div
                            className="
                                bg-white
                                w-40
                                h-12
                                p-3
                                text-center
                                text-[#EB1C24]
                                rounded-[10px]
                                text-[16px]
                                font-normal
                                border-[1px]
                                border-[#EB1C24]
                                cursor-pointer
                            "
                            onClick={() => handelShowModal("delete")}
                        >
                            انصراف
                        </div>
                        <div
                            className="
                                bg-[#054366]
                                w-40
                                h-12
                                p-3
                                text-center
                                text-white
                                rounded-[10px]
                                text-[16px]
                                font-normal
                                cursor-pointer
                            "
                        >
                            حذف
                        </div>
                    </div>
            </div>
        </Modal>

        <Modal
            show={showModal.edit}
            onClose={() => handelShowModal("edit")}
            dismissible
            size="sm"
            style={{
                display: "flex"
            }}
        >
            <div
                className="
                    w-[470px]
                    min-h-[277px]
                    px-[24px]
                    py-[32px]
                "
            >
                {/* title */}
                <div
                    className="
                        w-full
                        flex
                        items-center
                        justify-between
                        border-b
                    "
                >
                    <p
                        className="
                            text-[18px]
                            font-semibold
                        "
                    >
                        ایجاد فیلد برای دسته بندی انتخاب شده
                    </p>
                    <div
                        onClick={() => handelShowModal("edit")}
                        className="
                            cursor-pointer
                        "
                    >
                        <CrossIcon />
                    </div>
                </div>

                {/* field type */}
                <div
                    className="
                        w-full
                        pt-[15px]
                        flex
                        gap-[25px]
                    "
                >
                    <p
                        className="
                            text-[16px]
                            font-normal
                        "

                    >
                        نوع فیلد:
                    </p>
                    <div
                        onClick={() => handelSelective("filter")}
                        className="
                            cursor-pointer
                            flex
                            items-center
                            gap-[11px]
                        "
                    >
                        <p
                            className="
                                text-[16px]
                                font-normal
                            "
                        >
                            فیلتری
                        </p>
                        {
                            selectFilter.filter ? (
                                <TickIcon />
                            ) : (
                                <div
                                    className="
                                        w-[22px]
                                        h-[22px]
                                        rounded-[4px]
                                        bg-[#E2E2E2]
                                    "
                                >

                                </div>
                            )
                        }
                    </div>
                    <div
                        onClick={() => handelSelective("select")}
                        className="
                            cursor-pointer
                            flex
                            items-center
                            gap-[11px]
                        "
                    >
                        <p
                            className="
                                text-[16px]
                                font-normal
                            "
                        >
                            انتخابی
                        </p>
                        {
                            selectFilter.select ? (
                                <TickIcon />
                            ) : (
                                <div
                                    className="
                                        w-[22px]
                                        h-[22px]
                                        rounded-[4px]
                                        bg-[#E2E2E2]
                                    "
                                >

                                </div>
                            )
                        }
                    </div>
                </div>

                {/* field name */}
                <div
                    className="
                        pt-[22px]
                    "
                >
                    <p
                        className="
                            text-[14px]
                            font-normal
                            pb-2
                        "
                    >
                        نام فیلد:
                    </p>
                    <input 
                        placeholder="نام فیلد را وارد کنید"
                        className="
                            w-full
                            border
                            border-[#E1E6EF]
                            h-[38px]
                            p-3
                            rounded-lg
                            text-[14px]
                            text-[#a3a2a2]
                            font-normal
                        "
                    />
                </div>

                {
                    selectFilter.filter ? (
                        <div>
                            {
                                option.map((item, index) => (
                                    <AddOption 
                                        option={item}
                                        index={index}
                                        setOption={setOption}
                                        key={index}
                                    />
                                ))
                            }
                        </div>
                    ) : null
                }

                {/* create field */}
                <div
                    className="
                        w-full
                        py-2
                        bg-[#054366]
                        rounded-[10px]
                        text-center
                        mt-4
                        mb-[26px]
                        h-9
                        text-white
                    "
                >
                    ایجاد فیلد
                </div>
            </div>
        </Modal>
        </>
    )
}