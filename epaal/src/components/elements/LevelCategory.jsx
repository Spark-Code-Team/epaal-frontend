import {FaPlus} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const LevelCategory = ()=>{

    const items = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

    return(

        <>

            <div className="w-[94%] mx-auto mb-4">

                <div className="w-full mx-auto mt-8 flex">

                    <div className="w-1/2 flex items-center">

                        <p className="text-xl">مدیریت دسته بندی ها</p>

                        <p className="text-base mr-6 text-[#8A8B8D]">سطح یک</p>

                    </div>

                    <div className="w-1/2 flex justify-end">

                        <button className="bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]">
                            افزودن دسته جدید
                            <FaPlus/>
                        </button>

                    </div>

                </div>


                <div className="w-full mt-10 flex flex-wrap">

                    {
                        items.map((item , index)=>(

                            <div key={index} className="w-1/4 mt-4">

                                <div className="w-[95%] bg-white border-2 rounded-xl border-[#E1E6EF] m-auto p-3">

                                    <Image src="/image/image-admin.png" alt="" width={226} height={122}/>

                                    <div className="w-full text-center mt-3">کالای دیجیتال</div>

                                    <div className="w-full flex justify-between mt-3">

                                        <div className="w-[21%] flex justify-center border-2 border-[#EB1C24] p-1 rounded-md">
                                            <Link href="#">
                                                <RiDeleteBin5Line size={23} color={"#EB1C24"}/>
                                            </Link>
                                        </div>

                                        <div className="w-[67%] flex justify-center items-center">

                                            <div className="w-[83%] flex">
                                                <Link href="#" className="w-full flex justify-center items-center bg-[#054366] p-1 rounded-md text-white">
                                                    ویرایش <FaEdit size={19}/>
                                                </Link>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))
                    }

                </div>


            </div>

        </>

    )

}


export default LevelCategory;