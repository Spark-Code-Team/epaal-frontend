import { FiPlus } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import Link from "next/link";

const Chert = ()=>{

    const items = [1 , 2 , 3 , 4 , 5 , 6]

    return(

        <>

            <div className="w-full mt-14">

                <div className="w-[90%] mx-auto flex">

                    <div className="w-1/2 flex">

                        <div className="w-[165px] bg-[#00397A] text-white p-2 text-center rounded-sm">
                            <Link href={"#"} className="flex items-center justify-between">
                                افزودن ادمین جدید <FiPlus/>
                            </Link>
                        </div>

                    </div>

                    <div className="w-1/2 flex justify-end">

                        <div className="w-52 bg-[#00397A] flex justify-around rounded-full">

                            <div className="w-[70%]">
                                <input type="text" className="w-full rounded-full text-white bg-[#00397A] border-none outline-none focus:ring-0" placeholder="جست و جو"/>
                            </div>

                            <div className="w-[25%] flex justify-center items-center">
                                <GrSearch size={25} color="white"/>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="w-full mt-14">

                <div className="w-[90%] border-2 border-[#00397A] rounded-md mx-auto pb-6">

                    <div className="w-full flex bg-[#00397A] pr-9 pl-9 pt-3 pb-3">

                        <div className="w-1/2 flex">

                            <div className="w-40 bg-white p-1 text-center rounded-md">اسم کاربر</div>
                            <div className="w-40 bg-white p-1 mr-5 text-center rounded-md">تاریخ عضویت</div>

                        </div>

                        <div className="w-1/2 flex justify-end">

                            <div className="w-40 bg-white p-1 text-center rounded-md">نمایش اطلاعات</div>

                        </div>

                    </div>




                    {
                        items.map((item , index)=>(

                            <div key={index} className="w-[95%] bg-white h-12 shadow-md mx-auto mt-7 rounded-md"> </div>

                        ))
                    }



                </div>

            </div>

        </>

    )

}


export default Chert;