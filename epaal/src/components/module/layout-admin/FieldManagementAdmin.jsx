import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Pagination from "@/components/elements/Pagination";
import SearchAdmin from "../../../../public/icons/SearchAdmin";
import PlusAdmin from "../../../../public/icons/PlusAdmin";
import DeleteAdmin from "../../../../public/icons/DeleteAdmin";
import EditAdminBlack from "../../../../public/icons/EditAdminBlack";

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
                                    <SearchAdmin/>
                                </div>

                                <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو بین فیلدها" />

                            </div>

                        </div>


                        <div className="w-1/2 flex justify-end">

                            <Link href="#" className="w-[156px] bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]">
                                افزودن فیلد جدید
                                <PlusAdmin/>
                            </Link>

                        </div>


                    </div>

                </div>


                {
                    items.map((item, index) => (

                        <div key={index} className="w-full mx-auto p-3 flex justify-between border-b-[1.5px] border-[#E1E6EF]">

                            <div className="flex items-center p-2">
                                <p className="text-[#57585A]">1 - </p>

                                <p className="mr-2 text-[#57585A]">نام فیلد</p>
                            </div>

                            <div className="flex items-center">

                                <div className="w-10 h-9 border-[1.5px] border-black flex items-center justify-center ml-3 rounded-md">
                                    <Link href="#">
                                        <EditAdminBlack/>
                                    </Link>
                                </div>

                                <div className="w-10 h-9 border-[1.5px] border-[#EB1C24] flex items-center justify-center rounded-md">
                                    <Link href="#">
                                        <DeleteAdmin/>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    ))
                }


                <Pagination/>

            </div>

        </>

    )

}


export default FieldManagementAdmin;