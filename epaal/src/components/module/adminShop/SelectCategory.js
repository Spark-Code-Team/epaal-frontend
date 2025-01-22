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
    const [modalState, setModalState] = useState(2)

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
                    لطفا یک دسته را انتخاب کنید
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
                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    gap-2
                                    w-full
                                    overflow-y-scroll
                                    mt-[58px]
                                    max-h-[300px]
                                "
                            >
                                {
                                    optins.map(items => (
                                        <div
                                            key={items}
                                            className="
                                                w-full
                                                flex
                                                items-center
                                                justify-between
                                                p-[18px]
                                                border
                                                rounded-xl
                                            "
                                        >
                                            <p>
                                                کالای دیجیتال
                                            </p>
                                            <div>
                                                <AroowLeft />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ) : modalState == 2 ? (
                            <div
                                className="
                                    w-full
                                    h-[300px]
                                    overflow-y-scroll
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        mt-5
                                    "
                                >
                                    <p
                                        className="
                                            text-[#868383]
                                            text-[12px]
                                        "
                                    >
                                        کالای دیجیتال
                                    </p>
                                    <LeftAroowBlur />
                                </div>

                                <div
                                    className="
                                        w-full
                                        flex
                                        gap-7
                                        mt-[14px]
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >
                                        <p>
                                            کالا
                                        </p>
                                        <CheckTrueCategory />
                                    </div>
                                    <div
                                        className="
                                            flex
                                            items-center
                                            gap-1
                                        "
                                    >
                                        <p>
                                            خدمات
                                        </p>
                                        <CheckDefaultCategory/>
                                    </div>
                                </div>

                                <div
                                    className="
                                        grid
                                        grid-cols-2
                                        gap-2
                                        w-full
                                        mt-[58px]
                                        max-h-[300px]
                                    "
                            >
                                {
                                    optins.map(items => (
                                        <div
                                            key={items}
                                            className="
                                                w-full
                                                flex
                                                items-center
                                                justify-between
                                                p-[18px]
                                                border
                                                rounded-xl
                                            "
                                        >
                                            <p>
                                                کالای دیجیتال
                                            </p>
                                            <div>
                                                <AroowLeft />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            </div>
                        ) : null
                    }


                </div>

                {/* edame button */}
                <div
                    className={`
                        w-full
                        border-t
                        flex
                        ${modalState == 1 ? "justify-end" : "justify-between"}
                        py-3
                        px-[53px]
                    `}
                >
                    <div
                        className={`
                            p-[10px]
                            border
                            rounded-xl
                            border-[#054366]
                            cursor-pointer
                            ${modalState == 1 ? "hidden" : ""}
                        `}
                        onClick={() => setModalState(last => last - 1)}
                    >
                        بازگشت به محرله قبلی
                    </div>
                    <div
                        className="
                            bg-[#e1e6ef]
                            w-fit
                            p-[10px]
                            text-white
                            rounded-xl
                            hover:bg-[#1d434c]
                            cursor-pointer
                            transition-all
                        "
                        onClick={() => setModalState(last => last + 1)}
                    >
                        ادامه
                    </div>
                </div>

            </Modal>
        </>
    )
}