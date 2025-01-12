'use client';
import {IoIosArrowBack, IoIosArrowForward, IoMdSearch} from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import {useParams} from "next/navigation";


const SellerDetailAdmin = ()=>{

    const params = useParams();

    const {sellerId} = params;

    const sellers = [
        {
            id: 1,
            name: 'فروشنده ۱',
            details: [
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳' },
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳' },
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳' }
            ],
            columns: ['شماره فاکتور', 'تاریخ', 'خرید کننده ( شماره تماس )'],
        },
        {
            id: 2,
            name: 'فروشنده ۲',
            details: [
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳', column4: 'مقدار۴' },
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳', column4: 'مقدار۴' },
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳', column4: 'مقدار۴' }
            ],
            columns: ['شماره فاکتور', 'تاریخ', 'خرید کننده ( شماره تماس )', 'مبلغ فاکتور'],
        },
        {
            id: 3,
            name: 'فروشنده ۳',
            details: [
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳', column4: 'مقدار۴', column5: 'مقدار۵' },
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳', column4: 'مقدار۴', column5: 'مقدار۵' },
                { column1: 'مقدار۱', column2: 'مقدار۲', column3: 'مقدار۳', column4: 'مقدار۴', column5: 'مقدار۵' }
            ],
            columns: ['شماره فاکتور', 'تاریخ', 'خرید کننده ( شماره تماس )', 'مبلغ فاکتور' , 'نهایی'],
        },
    ];


    const seller = sellers.find((s)=> s.id === parseInt(sellerId));

    if (!seller){
        return <p>فروشنده با این مشخصات یافت نشد !</p>
    }

    return(

        <>

            <div className="w-[92%] mx-auto">

                <div className="w-full mx-auto mt-8 flex">

                    <div className="w-[47%] flex items-center text-xl pr-16">
                        <p>مشاهده جزئیات فروشندگان</p>
                    </div>


                    <div className="w-[53%] flex justify-between items-center">

                        <div className="w-60 h-8 bg-[#E1E6EF] flex justify-around rounded-md">

                            <div className="w-[32px] h-[32px] flex justify-center items-center pr-3">
                                <IoMdSearch size={25} color={"#57585A"}/>
                            </div>

                            <input type="text" name="" className="w-52 h-8 bg-transparent border-[1px] border-none outline-none focus:ring-0 text-sm text-[#57585A]" placeholder="جست و جو توسط شناسه ..."/>

                        </div>

                        <input type="date" className="bg-[#E1E6EF] border-transparent"/>

                        <div>

                            <button className="flex items-center justify-center rounded-md bg-[#054366] text-white d-block w-20 text-center p-2">
                                فیلتر <IoFilterOutline/>
                            </button>

                        </div>


                    </div>

                </div>

                <div className="w-full h-[1px] bg-[#F0F2F5] mt-3"> </div>


                <div className="w-full mt-6 flex justify-end">

                    <div className="w-36 p-2 flex justify-around items-center bg-[#054366] text-white rounded-md">
                        نمایش 1 تا 10 <MdKeyboardArrowUp size={20}/>
                    </div>

                </div>


                {/*table*/}
                <div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 rounded-md">
                        <thead className="text-xs text-gray-700 uppercase bg-[#F0F2F5] dark:bg-gray-700 dark:text-gray-400">
                            <tr>

                                {
                                    seller.columns.map((col , index)=>(
                                        <th key={index} scope="col" className="px-8 py-5">{col}</th>
                                 ))
                                }

                            </tr>

                        </thead>

                        <tbody>

                        {
                            seller.details.map((row , index)=>(

                                <tr className="bg-white border-b mt-10 dark:bg-gray-800 dark:border-gray-700" key={index}>
                                    {seller.columns.map((col , index)=>(
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"  key={index}>
                                            {row[`column${index + 1}`]}
                                        </td>
                                    ))}
                                </tr>

                            ))
                        }

                        </tbody>

                    </table>

                </div>





                {/*  pagination  */}
                <div className="w-full bg-[#E2E2E2] pr-10 pl-10 pt-3 pb-3 mx-auto mt-14 flex mb-3 rounded-md">

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


export default SellerDetailAdmin;