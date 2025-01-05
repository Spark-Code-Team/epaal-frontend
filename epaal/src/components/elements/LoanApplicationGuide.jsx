import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import {red} from "next/dist/lib/picocolors";
import Image from "next/image";

const LoanApplicationGuide = ()=>{

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] mx-auto flex flex-wrap">

                <div className="w-full text-center text-xl">راهنمای درخواست وام</div>

                <div className="lg:w-1/2 w-full sm:w-1/2 lg:mt-10 mt-8">
                    <Image src={"/image/video_cover.webp"} alt={""} width={380} height={180} class="m-auto"/>
                </div>

                <div className="lg:w-1/2 w-full sm:w-1/2 lg:mt-10 mt-8">

                    <div className="lg:w-[422px] w-full m-auto text-[15px] lg:mt-0 mt-8">برای اطلاع از نحوه ثبت درخواست وام فوری، فرآیند خرید قسطی از فروشگاه، دریافت وام بدون ضامن، اعتبارسنجی، ضمانت‌ها و امکانات دیگر دیجی‌شهر ویدئو را مشاهده کنید.</div>
                    <div className="lg:w-[422px] w-full m-auto mt-10 text-[15px]">همچنین برای دریافت اطلاعات بیشتر می‌توانید وارد صفحه راهنمای دیجی‌شهر شوید.</div>

                    <div className="lg:w-[422px] w-full m-auto mt-10 text-[15px] flex justify-right">
                        <Link href={""} className="text-[#2852E4] flex items-center space-x-4">
                            <span className="me-1">صفحه راهنمای ایپال</span>
                            <MdOutlineArrowBackIosNew size={20} />
                        </Link>
                    </div>

                </div>

            </div>
        </>

    )

}


export default LoanApplicationGuide;