"use client"

import { IoMdSearch } from "react-icons/io";
import Pagination from "@/components/elements/Pagination";
import FieldCard from "../adminModule/FieldManagment/FieldCard";
import { useState } from "react";
import { Modal } from "flowbite-react";
import CrossIcon from "../../../../public/icons/Admin/CrossIcon";
import TickIcon from "../../../../public/icons/Admin/TickIcon";
import PlusIcon from "../../../../public/icons/Admin/PlusIcon";
import AddOption from "@/components/elements/AddOption";
import PlusAdmin from "../../../../public/icons/PlusAdmin";
import SearchAdmin from "../../../../public/icons/SearchAdmin";

const FieldManagementAdmin = () => {

    const [addFildModal, setAddFillModal] = useState(false)
    const [selectFilter, setSelectFilter] = useState({
        select: false,
        filter: false
    })
    const [option, setOption] = useState([""])
    
    const handelSelective = (name) => {

        if(selectFilter[name]) {
            setSelectFilter(last => ({ [name]: false}))
        } else {
            setSelectFilter(last => ({ [name]: true}))
        }
    }

    const items = [1, 2, 3, 4, 5, 6 , 7];

    return (

        <>

            <div className="w-[92%] mx-auto">

                {/*پیاده سازی سرچ بار و دکمه افزودن فیلد*/}
                <div className="w-full mx-auto mt-8 flex pb-9">

                    <div className="w-[53%] flex items-center pt-1">
                        <p className="text-xl">مدیریت فیلد ها</p>
                        <p className="text-[14px] mr-5 text-[#57585A]">فروشندگان</p>
                    </div>

                    <div className="w-[47%] flex">

                        <div className="w-1/2 flex items-center">

                            <div className="w-60 h-8 flex justify-around border-[1.5px] border-[#C5C5C6] rounded-md">

                                <div className="w-[32px] h-[32px] flex justify-center items-center pr-3">
                                    <SearchAdmin/>
                                </div>

                                <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو بین دسته ها" />

                            </div>

                        </div>


                        <div className="w-1/2 flex justify-end">

                            <div className="w-[160px] bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]"
                                onClick={() => setAddFillModal(true)}
                            >
                                افزودن فیلد جدید
                                <PlusAdmin/>
                            </div>

                        </div>


                    </div>

                </div>


                {
                    items.map((item, index) => (
                        <FieldCard 
                            key={index}
                        />
                    ))
                }


                <Pagination/>

            </div>

            <Modal
                show={addFildModal}
                onClose={() => setAddFillModal(false)}
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
                        onClick={() => setAddFillModal(false)}
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
                                        <div
                                            className="
                                                pt-9
                                                overflow-y-scroll
                                                max-h-[200px]
                                                no-scrollbar
                                            "
                                        >
                                            {
                                                option.map((item, index) => (
                                                    <AddOption
                                                        value={item}
                                                        option={option}
                                                        index={index}
                                                        setOption={setOption}
                                                        key={index}
                                                    />
                                                ))
                                            }
                
                                            <div
                                                className="
                                                    w-full
                                                    flex
                                                    justify-end
                                                "
                                            >
                                                <div
                                                    className="
                                                        w-[365px]
                                                        h-[42px]
                                                        p-[10px]
                                                        border
                                                        border-[#E1E6EF]
                                                        text-[#054366]
                                                        flex
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        cursor-pointer
                                                    "
                
                                                    onClick={() => setOption(last => [...last, ""])}
                                                >
                                                    <p>
                                                        افزودن آپشن
                                                    </p>
                                                    <PlusIcon />
                                                </div>
                
                                            </div>
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


export default FieldManagementAdmin;