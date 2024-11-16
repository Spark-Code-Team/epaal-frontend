import Image from "next/image";

const LoanReceiptDocuments = ()=>{

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] bg-green-600 shadow-lg mx-auto">

                <div className="w-full text-center text-xl">مدارک لازم برای دریافت وام</div>

                <div className="w-full m-auto lg:mt-24 mt-0 flex flex-wrap">

                    <div className="lg:w-1/4 w-72 sm:w-1/2 mx-auto lg:mt-0 mt-24">

                        <div className="w-[88%] bg-[#EEF2FF] h-full m-auto mt-15 pt-1 lg:pb-8 pb-12 rounded-3xl">

                            <div className="w-40 m-auto flex justify-center -mt-20">
                                <Image src={"/image/18.webp"} alt="" width={170} height={170}/>
                            </div>

                            <p className="text-center -mt-3 text-base text-[#2751e4]">تصاویر مجوز فعالیت</p>
                            <p className="text-center mt-4 text-sm text-[#7590eb]">برای صاحبان شغل</p>

                        </div>

                    </div>

                    <div className="lg:w-1/4 w-72 sm:w-1/2 mx-auto lg:mt-0 mt-24">

                        <div className="w-[88%] bg-[#EEF2FF] h-full m-auto pt-1 lg:pb-8 pb-12 rounded-3xl">

                            <div className="w-40 m-auto flex justify-center -mt-20">
                                <Image src={"/image/19.webp"} alt="" width={170} height={170}/>
                            </div>

                            <p className="text-center -mt-3 text-base text-[#2751e4]"> فیش حقوقی و معرفی‌نامه شغلی</p>
                            <p className="text-center mt-4 text-sm text-[#7590eb]">برای کارمندان</p>

                        </div>

                    </div>

                    <div className="lg:w-1/4 w-72 sm:w-1/2 mx-auto lg:mt-0 mt-24">

                        <div className="w-[88%] bg-[#EEF2FF] h-full m-auto pt-1 lg:pb-8 pb-12 rounded-3xl">

                            <div className="w-40 m-auto flex justify-center -mt-20">
                                <Image src={"/image/20.webp"} alt="" width={170} height={170}/>
                            </div>

                            <p className="text-center -mt-3 text-base text-[#2751e4]">تصاویر شناسنامه و کارت ملی</p>

                        </div>

                    </div>

                    <div className="lg:w-1/4 w-72 sm:w-1/2 mx-auto lg:mt-0 mt-24">

                        <div className="w-[88%] bg-[#EEF2FF] h-full m-auto pt-1 lg:pb-8 pb-12 rounded-3xl">

                            <div className="w-40 m-auto flex justify-center -mt-20">
                                <Image src={"/image/21.webp"} alt="" width={170} height={170}/>
                            </div>

                            <p className="text-center -mt-3 text-base text-[#2751e4]">تصاویر مجوز فعالیت</p>

                        </div>

                    </div>

                </div>

            </div>
        </>

    )

}


export default LoanReceiptDocuments;