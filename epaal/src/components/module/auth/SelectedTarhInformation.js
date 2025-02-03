import BankCardShow from "@/components/elements/BankCardShow";
import selectedTarh from "../../../../public/image/selectedTarh.png"
import { useState } from "react";
import Link from "next/link";



export default function SelectedTarhInformation({ setState }) {

    const [input, setInput] = useState("")

    return (
        <div
            className="
                w-full
                h-full
                flex
                gap-[60px]
                bg-white
                px-20
                py-2
            "
        >

            <BankCardShow 
                image={selectedTarh}
            />

<div
                className="
                    flex
                    flex-col
                    justify-between
                    h-[570px]
                    w-full
                "
            >
                <div
                    className="
                        h-[60%]
                        flex
                        flex-col
                        justify-between
                        py-2
                    "
                >
                    <p
                        className="
                            text-[20px]
                            font-bold
                        "
                    >
                        اطلاعات تکمیلی
                    </p>
                    <div
                        className="
                            flex
                            flex-col
                            gap-8
                        "
                    >

                                <div
                                    className="
                                        border-r-[5px]
                                        border-[#3A616A]
                                        px-2
                                        flex
                                        gap-5
                                    "
                                >
                                    <div>
                                        <p
                                            className="
                                                text-[18px]
                                                font-bold
                                            "
                                        >
                                            مجموع اقساط+هزینه خدمات و زیرساخت        
                                        </p>
                                        <div
                                            className="
                                                text-[18px]
                                                font-medium
                                                text-[#8A8B8D]
                                            "
                                        >
                                            <p>
                                                مبلغ هر قسط
                                            </p>
                                            <p>
                                                این هزینه درمرحله آخر ثبت نام به صورت نقدی دریافت می شود
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <p
                                            className="
                                                text-[18px]
                                                font-bold
                                            "
                                        >
                                            40000000 میلیون تومان      
                                        </p>
                                        <p
                                            className="
                                                text-[18px]
                                                font-medium
                                                text-[#8A8B8D]
                                            "
                                        >
                                            16.667.000 میلیون تومان
                                        </p>
                                    </div>
                                </div>

                                <div

                                    className="
                                        border-r-[5px]
                                        border-[#3A616A]
                                        px-2
                                    "
                                >
                                    <p
                                        className="
                                            text-[18px]
                                            font-bold
                                        "
                                    >
                                        
                                        شرایط و مدارک مورد نیاز
                                        
                                    </p>
                                    <p
                                        className="
                                            text-[18px]
                                            font-medium
                                            text-[#8A8B8D]
                                        "
                                    >
                                        
                                        داشتن حداقل 18 و حداکثر 70 سال سن
                                        
                                    </p>
                                    <p
                                        className="
                                            text-[18px]
                                            font-medium
                                            text-[#8A8B8D]
                                        "
                                    >
                                        
                                        داشتن رتبه کافی امکان سنجی
                                        
                                    </p>
                                </div>

                    </div>
                </div>
                
                <div
                                    className="
                                        flex
                                        flex-col
                                        gap-3
                                        mb-5
                                    "
                                >
                                    <label
                                        className="
                                            text-[16px]
                                            font-normal
                                        "
                                    >
                                        شماره شبا حساب بانکی خود را وارد کنید 
                                    </label>
                                    <input 
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="شماره شبا خود را وارد کنید"
                                        className="
                                            border-[2px]
                                            rounded-md
                                            p-3
                                        "
                                    />
                                    <Link
                                        href="#"
                                        className="
                                            text-blue-500
                                        "
                                    >
                                        حساب بانکی ندارید؟ برای افتتاح حساب اینجا کلیلک کنید 
                                    </Link>
                                </div>

                <div 
                    className="
                        w-full 

                        flex 
                        justify-between
                    "
                >
                    <div
                        onClick={() => setState(1)} 
                        className="
                            w-[134px]
                            h-[42px] 
                            border-2 
                            border-[#1D434C] 
                            flex 
                            items-center 
                            justify-center 
                            rounded-md
                            cursor-pointer
                        "
                    >
                        مرحله قبلی
                    </div>
                    <div
                        className="
                            w-[134px] 
                            h-[42px] 
                            bg-[#1D434C] 
                            text-white 
                            flex 
                            items-center 
                            justify-center 
                            rounded-md
                            cursor-pointer
                        "
                    >      
                        تایید و ادامه
                    </div>
                </div>
            </div>

        </div>
    )
}