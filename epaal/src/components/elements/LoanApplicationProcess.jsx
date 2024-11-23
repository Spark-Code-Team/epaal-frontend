'use client';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import {useState} from "react";
import Image from "next/image";

const LoanApplicationProcess = ()=>{

    const [openIndex , setOpenIndex] = useState(null);

    const toggleAccordion = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    }

    const items = [
        {id:1 , title:"ثبت درخواست" , icon:"/image/13.webp" ,  description:"با مراجعه به سایت دیجی‌شهر و کلیک روی گزینه درخواست وام، وارد پنل کاربری شوید."},
        {id:2 , title:"ثبت اطلاعات شخصی" , icon:"/image/14.webp" ,  description:"بعد از ثبت درخواست، اطلاعات شخصی و شغلی خود را وارد ‌کنید."},
        {id:3 , title:"تعیین میزان وام درخواستی" , icon:"/image/15.webp" ,  description:"در این مرحله با توجه به رتبه اعتباری خود، می‌توانید میزان اعتبار و تعداد ماه‌های بازپرداخت اقساط را انتخاب کنید."} ,
        {id:4 , title:"بررسی مدارک" , icon:"/image/16.webp" ,  description:"پس از بررسی‌ مدارک و اطلاعات‌ وارد شده، پشتیبانی دیجی‌شهر با شما تماس می‌گیرد و هماهنگی‌های لازم انجام می‌شود."} ,
        {id:5 , title:"شارژ کیف پول" , icon:"/image/17.webp" ,  description:"پس از تایید بانک، کیف پولتان در فروشگاه دیجی‌شهر شارژ شده و می‌توانید کالای دلخواه خود را به صورت قسطی خریداری کنید."}
    ]

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] mx-auto">

                <div className="w-full text-center text-xl">مراحل درخواست وام</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 max-w-4xl mx-auto items-start mt-8">
                    {items.map((item, index) => (
                        <div key={item.id} className={`bg-white rounded-lg shadow-md p-4 flex flex-wrap items-center ${items.length-1 === index ? "lg:col-span-2 sm:col-span-2 justify-self-center lg:w-1/2 w-full sm:w-1/2" : " w-full "}`}>
                            <div className="flex items-center">
                                <div className="bg-blue-600 text-white rounded-md w-8 h-8 flex items-center -mr-7 justify-center">
                                    {item.id}
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center mb-4 sm:mb-0 sm:mr-6">
                                        {/*<span className="text-xl">{item.icon}</span>*/}
                                        <Image src={item.icon} alt="" width={25} height={25}/>
                                        <h3 className="text-lg font-bold mr-4 text-base text-[#1D4ED8]">{item.title}</h3>
                                    </div>
                                    <button onClick={() => toggleAccordion(index)} className="text-blue-500">
                                        {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                                    </button>
                                </div>
                                {openIndex === index && item.description && (
                                    <p className="text-gray-600 mt-4 mr-10 text-[#707172] text-sm">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )

}


export default LoanApplicationProcess;