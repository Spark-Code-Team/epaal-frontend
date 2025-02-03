import Image from "next/image";
import soalTarh from "../../../../public/image/soalTarh.png"
import BankCardShow from "@/components/elements/BankCardShow";
import Link from "next/link";


const constant = [
    {
        title: "مصرف اعتبار",
        description: "شما میتوانید تمام یا بخشی از مبلغ سبد خرید را به صورت اعتباری پرداخت کنید"
    },
    {
        title: "بازپرداخت قسط",
        description: "بدهی شما یکم ماه آتی سر رسید می شود و تا پنجم فرصت پرداخت بدون جریمه دارید"
    },
    {
        title: "بازپرداخت صورت حساب",
        description: "بدهی شما یکم ماه آتی سر رسید می شود و تا پنجم فرصت پرداخت بدون جریمه دارید"
    },
]


export default function AdditionalInformation({ setState }) {

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
                image={soalTarh}
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
                        {
                            constant.map((item, index) => (
                                <div
                                    key={index}
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
                                        {
                                            item.title
                                        }
                                    </p>
                                    <p
                                        className="
                                            text-[18px]
                                            font-medium
                                            text-[#8A8B8D]
                                        "
                                    >
                                        {
                                            item.description
                                        }
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div 
                    className="
                        w-full 

                        flex 
                        justify-between
                    "
                >
                    <Link 
                        href="/authentication"
                        className="
                            w-[134px]
                            h-[42px] 
                            border-2 
                            border-[#1D434C] 
                            flex 
                            items-center 
                            justify-center 
                            rounded-md
                        "
                    >
                        مرحله قبلی
                    </Link>
                    <div
                        onClick={() => setState(2)} 
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