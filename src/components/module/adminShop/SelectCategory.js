"use client"

import { Modal } from "flowbite-react";
import { useState } from "react";
import CrossIcon from "../../../../public/icons/Admin/CrossIcon";
import SearchAdminShop from "../../../../public/icons/Admin/AdminShop/SearchAdminShop";
import AroowLeft from "../../../../public/icons/Admin/AdminShop/AroowLeft";
import LeftAroowBlur from "../../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import FullStateCircul from "../../../../public/icons/Admin/AdminShop/FullStateCircul";
import EmpetyStateCircul from "../../../../public/icons/Admin/AdminShop/EmpetyStateCircul";
import CheckTrueCategory from "../../../../public/icons/Admin/CheckTrueCategory";
import CheckDefaultCategory from "../../../../public/icons/Admin/CheckDefaultCategory";
import SelectcategoryAdminShop from "@/components/elements/SelectcategoryAdminShop";
import ProductAndService from "@/components/elements/ProductAndService";
import LowlevelCategory from "@/components/elements/LowlevelCategory";
import AvalabelProduct from "@/components/elements/AvalabelProduct";

const optins = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
]



export default function SelectCategory() {

    const [showModal, setShowModal] = useState(false)
    const [modalState, setModalState] = useState(1)

    const [ selectedIntro, setSelectedIntro ] = useState({
        toplevel_topic: {},
        midlevel_topic: {},
        lowlevel_topic: {},
        product_topic_id: {}
    })

    return (
        <>        
            <div
                className="
                    border
                    rounded-xl
                    border-[#E1E6EF]
                    pt-2
                    pr-3
                    pb-[7px]
                    pl-[18px]
                    mt-[42px]
                    mx-auto
                    flex
                    items-center
                    justify-between
                    w-[95%]
                "
            >
                <p
                    className="
                        text-[18px]
                        font-normal
                    "
                >
                            { 
                                selectedIntro.product_topic_id?.name ? (
                                    <div
                                        className="
                                            flex
                                            items-center
                                            justify-center
                                            gap-3
                                        "
                                    >
                                        <p>
                                            {
                                                selectedIntro.toplevel_topic.name
                                            }
                                        </p>
                                        -
                                        <p>
                                            {
                                                selectedIntro.midlevel_topic.name
                                            }
                                        </p>
                                        -
                                        <p>
                                            {
                                                selectedIntro.lowlevel_topic.name
                                            }
                                        </p>
                                        -
                                        <p>
                                            {
                                                selectedIntro.toplevel_topic.name
                                            }
                                        </p>
                                    </div>
                                ) : (
                                    <p>
                                        لطفا یک دسته را انتخاب کنید
                                    </p>
                                )
                            }
                </p>
                <div
                    className="
                        hover:bg-[#C8E1EE]
                        p-2
                        transition-all
                        rounded-[10px]
                    "
                    onClick={() => setShowModal(true)}
                >
                    <p
                        className="
                            text-[18px]
                            font-normal
                            text-[#054366]
                            cursor-pointer
                        "
                    >
                        انتخاب
                    </p>
                </div>
            </div>

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                size="6xl"
                className="
                    flex
                "
            >
                <div
                    className="
                        w-[1022px]
                        h-fit
                        mx-auto
                    "
                >
                    {/* Title */}
                    <div
                        className="
                            flex
                            items-center
                            w-full
                            justify-between
                            my-7
                            pb-[14px]
                            border-b
                        "
                    >
                        <p
                            className="
                                text-[20px]
                                font-semibold
                            "
                        >
                            انتخاب دسته بندی
                        </p>
                        <div
                            onClick={() => setShowModal(false)}
                            className="
                                cursor-pointer
                            "
                        >
                            <CrossIcon />
                        </div>
                    </div>

                    {/* search */}
                    <div
                        className="
                            w-full
                            bg-[#e1e6ef]
                            rounded-xl
                            p-3
                            flex
                            gap-3
                        "
                    >
                        <SearchAdminShop />
                        <input 
                            className="
                                border-none
                                focus:outline-none
                                focus:ring-0
                                w-full
                                bg-inherit
                            "
                            placeholder="جست و جو بین دسته ها"
                        />
                    </div>

                    {/* categories */}
                    {
                        modalState == 1 ? (
                            <SelectcategoryAdminShop
                                modalState={modalState}
                                setModalState={setModalState}
                                setShowModal={setShowModal}
                                selectedIntro={selectedIntro}
                                setSelectedIntro={setSelectedIntro}
                            />
                        ) : modalState == 2 ? (
                            <ProductAndService 
                                modalState={modalState}
                                setModalState={setModalState}
                                setShowModal={setShowModal}
                                selectedIntro={selectedIntro}
                                setSelectedIntro={setSelectedIntro}
                            />
                        ) : modalState == 3 ? (
                            <LowlevelCategory 
                                modalState={modalState}
                                setModalState={setModalState}
                                setShowModal={setShowModal}
                                selectedIntro={selectedIntro}
                                setSelectedIntro={setSelectedIntro}
                            />
                        ) : (
                        <AvalabelProduct 
                            modalState={modalState}
                            setModalState={setModalState}
                            setShowModal={setShowModal}
                            selectedIntro={selectedIntro}
                            setSelectedIntro={setSelectedIntro}
                        />
                        )
                    }


                </div>

            </Modal>
        </>
    )
}