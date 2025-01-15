import { IoMdSearch } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

const ProductManagementAdmin = () => {

    const items = [1, 2, 3, 4, 5, 6];


    return (

        <>

            <div className="w-[94%] mx-auto">

                <div className="w-full mx-auto mt-8 pb-9 flex justify-between items-center">

                    <div className="w-[20%] text-xl">
                        <p>مدیریت محصولات</p>
                    </div>

                    <div className="w-[76%] flex justify-between items-center">


                        <div className="w-[23%] text-[#054366] text-[14px] flex justify-center items-center">
                            <button className="flex justify-between items-center">
                                <FiDownload className="ml-2" /> دریافت خروجی اکسل
                            </button>
                        </div>


                        <div className="w-[33%] h-8 flex justify-around border-[1.5px] border-[#C5C5C6] rounded-md">

                            <div className="w-[32px] h-[32px] flex justify-center items-center pr-3">
                                <IoMdSearch size={25} color={"#57585A"} />
                            </div>

                            <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو بین دسته ها" />

                        </div>


                        <div className="w-[37%] flex bg-white border-[1.5px] border-[#C5C5C6] rounded-md justify-around items-center pt-[4px] pb-[4px]">
                            <button className="p-2 rounded-md text-sm">در انتظار تایید</button>
                            <button className="p-2 bg-[#054366] text-white rounded-md text-sm">رد شده</button>
                            <button className="p-2 rounded-md text-sm">تایید شده</button>
                        </div>

                    </div>

                </div>


                <div>

                    <table className="min-w-full table-auto border-collapse">

                        <thead className="bg-[#F0F2F5] text-black text-[16px] h-14">

                            <tr>
                                <th>تاریخ ایجاد</th>
                                <th>نام محصول</th>
                                <th>قیمت</th>
                                <th>شناسه محصول</th>
                                <th>فروشگاه</th>
                                <th>عملیات</th>
                            </tr>

                        </thead>



                        <tbody>

                            {
                                items.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border-b px-4 py-5 text-center">۱۴۰۲/۰۲/۱۵ ۲۰:۲۱:۴۵</td>
                                        <td className="border-b px-4 py-5 text-center">شامپو</td>
                                        <td className="border-b px-4 py-5 text-center">6 تومن</td>
                                        <td className="border-b px-4 py-5 text-center">ایدی نیست</td>
                                        <td className="border-b px-4 py-5 text-center">گلرنگ</td>
                                        <td className="border-b px-4 py-5 text-center">
                                            <span className="bg-[#FFE5E5] border-2 border-[#E10000] rounded-md p-2">رد شده</span>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </>

    )

}


export default ProductManagementAdmin;