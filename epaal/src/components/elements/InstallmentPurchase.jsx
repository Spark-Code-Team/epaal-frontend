import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

const InstallmentPurchase = ()=>{

    return(

        <>

            <div className="w-full lg:h-96 min-h-80 lg:pb-0 pb-24 sm:min-h-80 bg-[#224cc2] mt-20 rounded-b-[260px] pt-1">

                <div className="lg:w-[90%] w-[85%] m-auto text-center text-xl text-white lg:mt-10 mt-8">مزایای خرید قسطی از دیجی‌شهر</div>

                <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:mt-24 mt-10 text-center">

                    <div className="text-white rounded-lg p-4 flex items-center justify-evenly">

                        <div className="bg-white p-2 rounded-lg w-16 h-16 flex justify-center">
                            <Image src={"/image/component 1.png"} alt={""} width={33} height={33}/>
                        </div>

                        <div className="flex flex-col flex-1 mr-3">
                            <h3 className="text-[17px] font-bold mb-1">تا ۲۰۰ میلیون تومان</h3>
                            <p className="text-[13px]">بالاترین اعتبار خرید اقساطی کالا</p>
                        </div>

                    </div>


                    <div className="text-white rounded-lg p-4 flex items-center justify-evenly">

                        <div className="bg-white p-2 rounded-lg w-16 h-16 flex justify-center">
                            <Image src={"/image/component 1.png"} alt={""} width={33} height={33}/>
                        </div>

                        <div className="flex flex-col flex-1 mr-3">
                            <h3 className="text-[17px] font-bold mb-1">بازپرداخت تا ۶۰ ماه</h3>
                            <p className="text-[13px]">بالا‌ترین مدت بازپرداخت</p>
                        </div>

                    </div>

                    <div className="text-white rounded-lg p-4 flex items-center justify-evenly">

                        <div className="bg-white p-2 rounded-lg w-16 h-16 flex justify-center">
                            <Image src={"/image/component 1.png"} alt={""} width={33} height={33}/>
                        </div>

                        <div className="flex flex-col flex-1 mr-3">
                            <h3 className="text-[17px] font-bold mb-1">بدون ضامن</h3>
                            <p className="text-[13px]">دریافت اعتبار کالا بدون ضامن</p>
                        </div>

                    </div>


                    <div className="text-white rounded-lg p-4 flex items-center justify-evenly">

                        <div className="bg-white p-2 rounded-lg w-16 h-16 flex justify-center">
                            <Image src={"/image/component 1.png"} alt={""} width={33} height={33}/>
                        </div>

                        <div className="flex flex-col flex-1 mr-3">
                            <h3 className="text-[17px] font-bold mb-1">بدون پیش پرداخت</h3>
                            <p className="text-[13px]">خرید کالا از دم قسط</p>
                        </div>

                    </div>


                </div>

            </div>
        </>

    )

}


export default InstallmentPurchase;