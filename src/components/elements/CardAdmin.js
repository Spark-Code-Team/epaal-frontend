"use client"

import { Modal } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import DeleteAdmin from "../../../public/icons/DeleteAdmin";
import EditAdmin from "../../../public/icons/EditAdmin";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import DeleteIcon from "../../../public/icons/DeleteIcon";



export default function CardAdmin({ data, handelDelete }) {

    const [openModal, setOpenModal] = useState({
        delete: false,
        edit: false,
    });

    const handelModal = (name) => {
        if(openModal[name]) {
            setOpenModal(last => ({...last, [name]: false}))
        } else {
            setOpenModal(last => ({...last, [name]: true}))
        }
    } 

    return (
        <>
        
            <div className="w-1/4 mt-4">

                <div className="w-[95%] h-[256px] bg-white flex flex-wrap justify-around border-2 rounded-xl border-[#E1E6EF] m-auto p-3">

                    <Image src={data.picture ? data.picture : "/"} alt="topic" width={226} height={122}/>

                    <div className="w-full text-center mt-4">
                        {
                            data.name
                        }
                    </div>

                    <div className="w-full flex justify-between mt-3">

                        <div className="w-[48px] h-[42px] flex justify-center mt-2 items-center border-2 border-[#EB1C24] p-1 rounded-md"
                            onClick={() => handelModal("delete")}
                        >
                            <Link href="#">
                               <DeleteAdmin />
                            </Link>
                        </div>

                        <div className="w-[67%] flex justify-center items-center">

                            <div className="w-[83%] flex">
                                <Link href="#" className="w-[160px] h-[42px] flex justify-around items-center bg-[#054366] p-1 rounded-md text-white">
                                    ویرایش <EditAdmin/>
                                </Link>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            

            {/* delete Modal */}
            <Modal
                show={openModal.delete}
                onClose={() => setOpenModal("delete")}
                dismissible
                size="sm"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div
                    className="
                        w-[393px]
                        h-[163px]
                        flex
                        flex-col
                        items-center
                        justify-center
                        mx-auto
                        rounded-xl
                    "
                >
                    <p
                        className="
                            text-[20px]
                            font-medium
                            py-8
                            px-[64px]
                        "
                    >
                        آیا از حذف دسته اطمینان دارید؟
                    </p>
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
                            onClick={() => handelModal("delete")}
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
                            onClick={() => {
                                handelDelete(data.id)
                                handelModal("delete")
                            }}
                        >
                            حذف
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    )
}