import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Articles = ()=>{

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] m-auto">

                <div className="w-full m-auto text-center text-xl">جدیدترین مقالات دیجی شهر</div>

                <div className="w-full m-auto mt-10 flex justify-center flex-wrap pt-1">

                    <div className="lg:w-1/3 w-full sm:w-1/2 lg:mt-0 mt-6">

                        <div className="lg:w-80 w-full sm:w-80 bg-white h-full mx-auto pt-1 pb-4 text-zinc-800 rounded-xl">

                            <div className="lg:w-72 w-64 sm:w-72 m-auto mt-4">
                                <Image src="/image/lavazem.webp" alt={""} width={400} height={200} class="rounded-xl m-auto"/>
                            </div>

                            <div className="lg:w-72 w-full m-auto mt-4 pr-3 pl-3">چه لوازم را می‌توان از لیست جهیزیه حذف کرد؟</div>

                            <div className="lg:w-72 w-full m-auto mt-4 text-sm pr-3 pl-3">تهیه جهیزیه، یکی از مراحل هیجان‌انگیز و درعین‌حال چالش‌برانگیز آغاز زندگی مشترک است. باتوجه‌به تنوع بالای لوازم‌خانگی و ظروف، انتخاب‌های زیادی پیش روی زوج‌ها قرار می‌گیرد. درگذشته، لیست جهیزیه بیشتر ... </div>

                            <div className="lg:72 w-full m-auto mt-6 text-base flex justify-end">
                                <div className="flex items-center pr-3 pl-3 text-[#1D4ED8]">
                                    <Link href={""}>بیشتر</Link>
                                    <IoIosArrowBack/>
                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="lg:w-1/3 w-full sm:w-1/2 lg:mt-0 mt-6">

                        <div className="lg:w-80 w-full sm:w-80 bg-white h-full mx-auto pt-1 pb-4 text-zinc-800 rounded-xl">

                            <div className="lg:w-72 w-64 sm:w-72 m-auto mt-4">
                                <Image src="/image/lavazem.webp" alt={""} width={400} height={200} class="rounded-xl m-auto"/>
                            </div>

                            <div className="lg:w-72 w-full m-auto mt-4 pr-3 pl-3">چه لوازم را می‌توان از لیست جهیزیه حذف کرد؟</div>

                            <div className="lg:w-72 w-full m-auto mt-4 text-sm pr-3 pl-3">تهیه جهیزیه، یکی از مراحل هیجان‌انگیز و درعین‌حال چالش‌برانگیز آغاز زندگی مشترک است. باتوجه‌به تنوع بالای لوازم‌خانگی و ظروف، انتخاب‌های زیادی پیش روی زوج‌ها قرار می‌گیرد. درگذشته، لیست جهیزیه بیشتر ... </div>

                            <div className="lg:72 w-full m-auto mt-6 text-base flex justify-end">
                                <div className="flex items-center pr-3 pl-3 text-[#1D4ED8]">
                                    <Link href={""}>بیشتر</Link>
                                    <IoIosArrowBack/>
                                </div>
                            </div>

                        </div>

                    </div>


                    <div className="lg:w-1/3 w-full sm:w-1/2 lg:mt-0 mt-6">

                        <div className="lg:w-80 w-full sm:w-80 h-full bg-white mx-auto pt-1 pb-4 text-zinc-800 rounded-xl">

                            <div className="lg:w-72 w-64 sm:w-72 m-auto mt-4">
                                <Image src="/image/lap_asuz.webp" alt={""} width={400} height={200} class="rounded-xl m-auto"/>
                            </div>

                            <div className="lg:w-72 w-full m-auto mt-4 pr-3 pl-3">معرفی بهترین لپ‌تاپ ایسوس برای برنامه‌نویسان</div>

                            <div className="lg:w-72 w-full m-auto mt-4 text-sm pr-3 pl-3">برای برنامه‌نویسان، انتخاب یک لپ‌تاپ مناسب اهمیت بسیار بالایی دارد. لپ‌تاپی که برای برنامه‌نویسی مناسب باشد، باید دارای قدرت پردازشی بالا، حافظه کافی و قابلیت اجرای نرم‌افزارهای توسعه‌ای مختلف باشد. ... </div>

                            <div className="lg:72 w-full m-auto mt-6 text-base flex justify-end">
                                <div className="flex items-center pr-3 pl-3 text-[#1D4ED8]">
                                    <Link href={""}>بیشتر</Link>
                                    <IoIosArrowBack/>
                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>
        </>

    )

}


export default Articles;