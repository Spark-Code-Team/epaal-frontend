import { IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const CategoryAdmin = ()=>{

    const items = [1 , 2 , 3 , 4 , 5];

    return(

        <>

            <div className="w-[92%] mx-auto">

                <div className="w-full mt-8 text-xl">دسته بندی محصولات</div>

                <hr style={{marginTop:"14px" , border:"1px solid #C5C5C6"}}/>


                <div className="w-full mt-7 flex pb-7">

                    <div className="w-1/2 flex items-center">

                        <div className="w-60 h-8 flex justify-around border-[1.5px] border-[#C5C5C6] rounded-md">

                            <div className="w-[32px] h-[32px] flex justify-center items-center pr-3">
                                <IoMdSearch size={25}/>
                            </div>

                            <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm" placeholder="جست و جو بین دسته ها"/>

                        </div>

                    </div>

                    <div className="w-1/2 flex justify-end">

                        <button className="w-40 bg-[#054366] text-white p-2 flex justify-around items-center rounded-md">
                            افزودن دسته جدید
                            <FaPlus/>
                        </button>

                    </div>

                </div>





                {
                    items.map((item , index)=>(

                        <div key={index} className="w-full mx-auto flex border-b-[1px] border-black">

                            <div className="w-1/2 flex items-center p-3">

                                <div className="w-[30px] h-[30px] flex justify-center items-center">
                                    <Image src={"/image/vector-admin.png"} width={20} height={15} alt={""}/>
                                </div>

                                <p className="mr-4">کالای دیجیتال</p>

                            </div>

                            <div className="w-1/2 p-3 flex justify-end">

                                <div className="w-[40%] flex justify-between">

                                    <Link href={""} className="w-[70px] h-[40px] block bg-[#FFAAAA] text-[#FF0000] flex justify-center items-center rounded-md">حذف</Link>
                                    <Link href={""} className="w-[85px] h-[40px] block bg-[#EEEEEE] text-[#236184] flex justify-center items-center rounded-md">ویرایش</Link>

                                </div>

                            </div>

                        </div>

                    ))
                }





                <div className="w-full mx-auto mt-10 flex mb-3">

                    <div className="w-1/3 mx-auto flex justify-start">

                        <button className="p-2 flex justify-between items-center border-[1px] border-[#57585A] text-[#57585A] rounded-md">
                            <IoIosArrowForward/>
                            صفحه قبلی
                        </button>

                    </div>

                    <div className="w-1/3 mx-auto flex justify-center items-center text-[#57585A]">
                        صفحه 1 از 10
                    </div>

                    <div className="w-1/3 mx-auto flex justify-end">

                        <button className="p-2 text-[#57585A] flex justify-between items-center border-[1px] border-[#57585A] rounded-md">
                            صفحه بعدی
                            <IoIosArrowBack/>
                        </button>

                    </div>

                </div>



            </div>

        </>

    )

}


export default CategoryAdmin;