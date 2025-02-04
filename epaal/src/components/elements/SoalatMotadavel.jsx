'use client';
import {useState} from "react";
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

const SoalatMotadavel = ()=>{

    const [openIndex , setOpenIndex] = useState(null);

    const toggleAccordion = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    }

    const items = [
        {id:1 , title:"برای دریافت وام به چه مدارکی نیاز است؟" ,  description:"از جمله مدارکی که برای دریافت وام نیاز است شامل مدارک هویتی (تصاویر صفحات شناسنامه و تصویر کارت ملی یا تصویر رسید ثبت احوال)، مدارک سکونتی (سند یا اجاره‌نامه منزل) و مدارک شغلی که برای کارمندان شامل تصویر آخرین فیش حقوقی و معرفی‌نامه شغلی خطاب به بانک شهر و برای سایر افراد شامل تصویر جواز کسب یا کارت بازرگانی و اجاره‌نامه یا سند محل کار می‌شود. همچنین متقاضی دریافت وام آنلاین خرید کالا علاوه بر رتبه اعتباری، باید در بانک شهر حساب داشته باشد. "},
        {id:2 , title:"مراحل دریافت وام خرید اعتباری چگونه است؟" ,  description:"در سایت ایوام ثبت‌نام کنید و اطلاعات شخصی و شغلی خود را ثبت کنید."},
        {id:3 , title:"وام ایوام به چه صورتی قابل استفاده است؟" ,  description:"وام شما بصورت اعتبار برای خرید کالا از فروشگاه آنلاین ایوام قابل استفاده است. لینک سایت فروشگاه: https://dgshahr.com/shop"} ,
        {id:4 , title:"سقف دریافت اعتبار چقدر است؟ " ,  description:"سقف وام قابل دریافت بستگی به ارزیابی رفتار بانکی و نوع ضمانت شما دارد که می‌تواند تا 100 میلیون تومان باشد. "} ,
    ]

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] m-auto">

                <div className="w-full m-auto text-center text-xl">سوالات متداول</div>

                <div className="gap-10 p-4 w-full mx-auto items-start">
                    {items.map((item, index) => (
                        <div key={item.id} className={"w-full bg-white border-[1px] border-gray-400 rounded-lg p-4 flex flex-wrap items-center mt-5"}>

                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center mb-4 sm:mb-0 sm:mr-6">
                                        {/*<span className="text-xl">{item.icon}</span>*/}
                                        <h3 className="font-bold mr-4 text-base text-[#1D4ED8]">{item.title}</h3>
                                    </div>
                                    <button onClick={() => toggleAccordion(index)} className="text-blue-500">
                                        {openIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                                    </button>
                                </div>
                                {openIndex === index && item.description && (
                                    <p className="mt-4 lg:mr-10 mr-0 text-[#707172] text-sm">{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>

    )

}


export default SoalatMotadavel;