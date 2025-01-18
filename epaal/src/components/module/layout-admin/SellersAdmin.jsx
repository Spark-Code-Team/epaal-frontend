import Image from "next/image";
import Link from "next/link";
import Pagination from "../../elements/Pagination";
import PlusAdminWhite from "../../../../public/icons/PlusAdminWhite";
import SearchAdmin from "../../../../public/icons/SearchAdmin";

const SellersAdmin = ()=>{

    const items = [
        { id: 1, name: 'فروشنده ۱' },
        { id: 2, name: 'فروشنده ۲' },
        { id: 3, name: 'فروشنده ۳' },
    ];

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
                                    <SearchAdmin/>
                                </div>

                                <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو بین فروشندگان"/>

                            </div>

                        </div>


                        <div className="w-1/2 flex justify-end">

                            <Link href="/admin/sellers/create-seller" className="w-[176px] bg-[#D1D0D0] p-2 flex justify-around items-center rounded-md text-[15px]">
                                افزودن فروشنده جدید
                                <PlusAdminWhite/>
                            </Link>

                        </div>


                    </div>

                </div>

                <div className="w-full h-[1px] bg-[#8A8B8D] mt-5 mb-4"> </div>


                {
                    items.map((item , index)=>(

                            <div key={index} className="w-full mx-auto p-3 flex border-b-[1.3px] border-[#8A8B8D]">

                                <div className="w-1/2 flex items-center">

                                    <div className="w-9 h-9 border-[1px] border-[#8A8B8D] rounded-md flex justify-center items-center">1</div>

                                    <div className="w-10 h-10 flex justify-center items-center mr-4">
                                        <Image src={"/image/web-app.png"} alt="" width={38} height={38}/>
                                    </div>

                                    <div className="mr-4">
                                        <p>دیجی کالا</p>
                                    </div>

                                </div>

                                <div className="w-1/2 flex justify-end items-center">

                                    <Link href={`/admin/sellers/${item.id}`} className="bg-[#054366] text-white  w-32 h-9 text-center flex justify-center items-center ml-3 rounded-md">مشاهده جزئیات</Link>
                                    <Link href="#" className="bg-[#054366] text-white  w-32 h-9 text-center flex justify-center items-center rounded-md">تسویه حساب</Link>

                                </div>

                            </div>

                    ))
                }


                <Pagination />


            </div>

        </>

    )

}


export default SellersAdmin;