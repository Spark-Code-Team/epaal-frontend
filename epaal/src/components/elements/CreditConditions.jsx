import Image from "next/image";
import Link from "next/link";
import {MdOutlineArrowBackIosNew} from "react-icons/md";

const CreditConditions = ()=>{

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] mx-auto">

                <div className="w-full text-center text-xl">شرایط دریافت اعتبار</div>

                <div className="w-full m-auto lg:mt-8 mt-8 flex flex-wrap justify-around">

                    <div>
                        <Image src="/image/10.webp" alt="" width={300} height={437}/>
                    </div>

                    <div>
                        <Image src="/image/11.webp" alt="" width={300} height={437}/>
                    </div>

                    <div>
                        <Image src="/image/12.webp" alt="" width={300} height={437}/>
                    </div>

                </div>

                <div className="lg:w-[800px] w-full m-auto text-center text-base">سقف وام قابل دریافت بستگی به <span className="font-bold">ارزیابی رفتار بانکی و نوع ضمانت</span> شما دارد که می‌تواند تا ۲۰۰ میلیون تومان باشد.</div>
                <div className="lg:w-[800px] w-full m-auto mt-4 text-center text-base">برای مشخص شدن سقف وام، درخواست وام خود را تکمیل کنید.</div>

                <div className="lg:w-[422px] w-full m-auto mt-5 text-base flex justify-center">
                    <Link href={""} className="text-[#2852E4] flex items-center space-x-4">
                        <span className="me-1">ثبت درخواست وام</span>
                        <MdOutlineArrowBackIosNew size={13} />
                    </Link>
                </div>

            </div>
        </>

    )

}


export default CreditConditions;