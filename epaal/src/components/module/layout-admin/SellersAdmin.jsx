import {IoIosArrowBack, IoIosArrowForward, IoMdSearch} from "react-icons/io";
import {FaPlus} from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

const SellersAdmin = ()=>{

    const items = [1 , 2 , 3 , 4 , 5 , 6];

    return(

        <>

            <div className="w-[92%] mx-auto">

                {/*پیاده سازی سرچ بار و دکمه افزودن فروشنده*/}
                <div className="w-full mx-auto mt-8 flex">

                    <div className="w-[53%] flex items-center text-xl pr-16">
                        <p>مدیریت فروشندگان</p>
                    </div>

                    <div className="w-[47%] flex">

                        <div className="w-1/2 flex items-center">

                            <div className="w-60 h-8 flex justify-around border-[1.5px] border-[#C5C5C6] rounded-md">

                                <div className="w-[32px] h-[32px] flex justify-center items-center pr-3">
                                    <IoMdSearch size={25} color={"#57585A"}/>
                                </div>

                                <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو بین دسته ها"/>

                            </div>

                        </div>


                        <div className="w-1/2 flex justify-end">

                            <button className="bg-[#054366] text-white p-2 flex justify-around items-center rounded-md text-[15px]">
                                افزودن فروشنده جدید
                                <FaPlus/>
                            </button>

                        </div>


                    </div>

                </div>

                <div className="w-full h-[1px] bg-[#8A8B8D] mt-5 mb-4"> </div>


                {
                    items.map((item , index)=>(

                            <div key={index} className="w-full mx-auto p-3 flex border-b-[1.3px] border-[#8A8B8D]">

                                <div className="w-1/2 flex flex items-center">

                                    <div className="w-9 h-9 border-[1px] border-[#8A8B8D] rounded-md flex justify-center items-center">1</div>

                                    <div className="w-10 h-10 flex justify-center items-center mr-4">
                                        <Image src={"/image/web-app.png"} alt="" width={38} height={38}/>
                                    </div>

                                    <div className="mr-4">
                                        <p>دیجی کالا</p>
                                    </div>

                                </div>

                                <div className="w-1/2 flex justify-end items-center">

                                    <Link href="#" className="bg-[#054366] text-white block w-32 h-9 text-center flex justify-center items-center ml-3 rounded-md">مشاهده جزئیات</Link>
                                    <Link href="#" className="bg-[#054366] text-white block w-32 h-9 text-center flex justify-center items-center rounded-md">تسویه حساب</Link>

                                </div>

                            </div>

                    ))
                }





                {/*  pagination  */}
                <div className="w-full bg-[#E2E2E2] pr-10 pl-10 pt-3 pb-3 mx-auto mt-10 flex mb-3 rounded-md">

                    <div className="w-1/3 mx-auto flex justify-start">

                        <button className="p-1 flex justify-between items-center border-[1px] bg-white border-[#57585A] text-[#57585A] rounded-md">
                            <IoIosArrowForward/>
                            صفحه قبلی
                        </button>

                    </div>

                    <div className="w-1/3 mx-auto flex justify-center items-center text-[#57585A]">
                        صفحه 1 از 10
                    </div>

                    <div className="w-1/3 mx-auto flex justify-end">

                        <button className="p-1 text-[#57585A] flex justify-between items-center border-[1px] bg-white border-[#57585A] rounded-md">
                            صفحه بعدی
                            <IoIosArrowBack/>
                        </button>

                    </div>

                </div>


            </div>

        </>

    )

}


export default SellersAdmin;