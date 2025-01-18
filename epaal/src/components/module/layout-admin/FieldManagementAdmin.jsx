import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Pagination from "@/components/elements/Pagination";
import FieldCard from "../adminModule/FieldManagment/FieldCard";

const FieldManagementAdmin = () => {


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
                                    <IoMdSearch size={25} color={"#57585A"} />
                                </div>

                                <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو بین دسته ها" />

                            </div>

                        </div>


                        <div className="w-1/2 flex justify-end">

                            <Link href="#" className="bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]">
                                افزودن فیلد جدید
                                <FaPlus />
                            </Link>

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

        </>

    )

}


export default FieldManagementAdmin;