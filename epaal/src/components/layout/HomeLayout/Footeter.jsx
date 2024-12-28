"use client"
import EvaamLogo from "../../../../public/icons/evaam-icon"
import Image from "next/image"
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";





export default function Footer() {

    return (
<>

<footer className="bg-gray-200 h-20 flex items-center justify-between flex-col">
           

           <div className="flex items-center justify-between w-full border-b-[1px] border-b-[#748297] px-[30px]">
           <div >
           <EvaamLogo color="#1d1d1d" height="50px" width="50px"/>
           </div>

           <div className="flex justify-center items-center ">
           <p className="ml-4 text-sm py-[28px] ">تلفن پشتیبانی: 021-91001022</p>
           <RiInstagramFill color="#748297" size={24}/>
           <span className="mr-[20px]"><FaLinkedin color="#748297" size={24}/></span>
           </div>
           </div>

           <div className="py-[32px] flex flex-col sm:flex-row justify-between w-full bg-gray-200 border-b-[1px] border-b-[#748297] ">
               <div className="flex justify-between sm:w-[150%]">
                   <div className="w-[50%] pr-[40px]">
                       <ul className="text-[13px] text-[#334155] font-[400] leading-8">
                           <li className="text-[14px] text-[#334155] font-[600]">ایپال</li>
                           <li>درباره ما</li>
                           <li>فرست‌های شغلی</li>
                           <li>تماس باما</li>
                           <li>بلاگ</li>
                           <li>قوانین و مقررات</li>
                           <li>فروشنده شوید</li>
                       </ul>
                   </div>
                   <div className="w-[50%] pr-[65px] sm:pr-[0px]">
                   <ul className="text-[13px] text-[#334155] font-[400] leading-8">
                           <li className="text-[14px] text-[#334155] font-[600]">راهنما</li>
                           <li>سوالات متداول</li>
                           <li>درباره ما</li>
                           <li>راهنمای دریافت وام</li>
                           <li>محاسبه اقساط</li>
                           <li>شرایط دریافت وام</li>
                           <li>مدارک دریافت وام</li>
                       </ul>
                   </div>
               </div>

               <div className="flex w-full justify-center sm:justify-end sm:pl-[30px] sm:pt-[75px] bg-gray-200 gap-x-4 pt-[32px]">
               <Image src={"/image/30.jpg"} alt="" width={80}  height={80} className="w-[80px] h-[80px]"/>
               <Image src={"/image/31.jpg"} alt="" width={80}  height={80} className="w-[80px] h-[80px]"/>
               <Image src={"/image/32.jpg"} alt="" width={80}  height={80} className="w-[80px] h-[80px]"/>
            </div>
           
           </div>

           

           <div className="py-[32px] items-center w-full bg-gray-200 px-[30px]">
            <p className="text-[18px] text-[#64748B] font-[700]">مزایای خرید قسطی از مقصد</p>
            <p className="text-[13px] text-[#64748B] font-[400] py-[30px]">خرید قسطی کالا از  یکی از گزینه‌های بسیار مناسب برای کسانی است که در حال حاضر به صورت نقدی نمی‌توانند کالای مورد نیاز خود را خریداری کنند. متقاضیانمی‌توانند با دریافت وام آنلاین به راحتی و با کارمزد پایین تر در مقایسه با رقبا خرید اقساطی خود را انجام دهند.</p>
            <p className="text-[16px] text-[#64748B] font-[700] pb-[30px]">وام بدون پیش پرداخت</p>
            
           </div>

           <div className="flex items-center bg-[#E2E8F0] w-full h-[65px] pb-[30px] justify-between px-[30px]">
            <div>
                <p className="text-[#475569] font-[600] text-[12px]">کلیه حقوق مادی و معنوی متعلق به شرکت نوآوران تجارت گستر فرین (دیجی‌شهر) می باشد.</p>
            </div>

            <div className="text-[#475569] font-[600] text-[13px] border-[1px] rounded-[8px] py-[5px] px-[10px] border-gray-700 flex">
                <button onClick={() => scrollTo(0,0)}>
                <span><FaAngleUp color="#153BBF" width={24} height={24} size={20}/></span>
                </button>
                
            </div>
           </div>
       </footer>        
</>
    )
}