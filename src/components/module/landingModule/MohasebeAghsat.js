"use client"

import { useState } from "react";
import CurveLAnding from "../../../../public/icons/CurveLAnding";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

const MohasebeAghsat = () => {

    const [inputValue, setInputValue] = useState(1000000);
    const [index, setIndex] = useState(1);
    const [calculatedPayment, setCalculatePayment] = useState({
        bankPrePayment: "-",
        yearlySubscribePayment: "-",
        finalPaymentToUser: "-",
        paymentPerMounth: digitsEnToFa(0),
    });
    const items = [6, 12, 24, 36];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [monthGhest, setMonthGhest] = useState(0)
    const slides = [
        "/image/backCard.png",
        "/image/backCard1.png",
        "/image/backCard2.png"
    ];

    const router = useRouter()

    const formatNumber = (number) => {
        return number.toLocaleString("fa-IR"); // نمایش عدد به فرمت فارسی
      };

    const calculatePrePayment = (e) => {
        let numberOfEvent = Number(e);
    
        let prePayment = numberOfEvent * 0.05;
    
        let finalPaymentToUser = numberOfEvent - prePayment;
    
        let r = 23 / 100 / 12;
        let denominator = 1 - Math.pow(1 + r, -items[currentIndex]);
        let payment = (numberOfEvent * r) / denominator;
    
        setCalculatePayment((prev) => ({
          ...prev,
          bankPrePayment: formatNumber(Math.ceil(prePayment)),
          yearlySubscribePayment: formatNumber(Math.ceil(prePayment)),
          finalPaymentToUser: formatNumber(Math.ceil(finalPaymentToUser)),
          paymentPerMounth: formatNumber(Math.ceil(payment)),
        }));
    };

    const updateSlider = (mozoe) => {
        if(mozoe == "azafe") {
            if( index == slides.length - 1) return
            setIndex(last => last + 1)
        } else {
            if( index == 0) return
            setIndex(last => last - 1)
        }
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value); // ذخیره مقدار جدید
        calculatePrePayment(value);
      };

    return (
        <div
            className="
                w-full
                relative
                md:min-h-[1386px]
                min-h-[1000px]
            "
        >
            <div
                className="
                    w-full
                    mx-auto
                    flex
                    flex-col
                    items-center
                    absolute
                    top-[-100px]
                    md:h-[1386px]
                "
            >
                <div
                    className="
                        md:w-[80%]
                        w-full
                        flex
                        flex-col
                        bg-white
                        rounded-[54px]
                    "
                >
                    <div
                        className="
                            w-full
                            text-center
                            md:text-[24px]
                            text-[14px]
                            font-bold
                            mb-[20px]
                            mt-[38px]
                        "
                    >
                        طرح های اعتباری و اقساط آن
                    </div>

                    <div className=" w-full mx-auto overflow-hidden flex items-center justify-center">
                        <div className="flex p-10 transition-transform duration-500" style={{ transform: `translateX(${index * 33.33 - 33.33}%)` }}>
                            {slides.map((src, i) => (
                                <div 
                                    key={i} 
                                    className={`flex-none w-[226px] md:w-[398] text-white h-[124px] md:h-[217px] p-4 transition-transform duration-300 cursor-pointer bg-cover bg-center bg-no-repeat rounded-2xl z-0 ${i === index ? "scale-125 z-10 opacity-100" : "opacity-50"}`} 
                                    onClick={() => updateSlider(i)}
                                    style={{
                                        background: `url(${src}) center/100% 100% no-repeat`,
                                    }}
                                >
                                    <div
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            px-2
                                        "
                                    >
                                        <p>بلو</p>
                                        <p>blu</p>
                                    </div>
                                    <div
                                        className="
                                            flex
                                            flex-col
                                            items-center
                                            justify-center
                                            md:mt-[14px]
                                            mt-[10px]
                                        "
                                    >
                                        <p
                                            className="
                                                md:text-[14px]
                                                text-[7px]
                                                font-bold
                                            "
                                        >
                                            ارائه تسهیلات تا سقف    
                                        </p>
                                        <p
                                            className="
                                                md:text-[24px]
                                                text-[13px]
                                                font-bold
                                            "
                                        >
                                            100,000,000 میلیون تومان
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            md:mt-[30px]
                                        "
                                    >
                                        <div
                                            className="
                                                md:text-[10px]
                                                text-[5px]
                                                font-normal
                                            "
                                        >
                                            تامین مالی توسط بلوبانک
                                        </div>
                                        <div
                                            className="
                                                px-[5px]
                                                py-2
                                                bg-[#232336b3]
                                                backdrop-blur-[40px]
                                                rounded-xl
                                                md:text-[14px]
                                                text-[7px]
                                            "
                                        >
                                            18 ماهه
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full mt-4 flex justify-center items-center transform -translate-y-1/2">
                            <div
                                className="
                                    w-[120px]
                                    flex
                                    items-center
                                    gap-3
                                "
                            >
                                <div
                                    className="bg-opacity-50 text-white bg-[#E2E2E2] w-10 h-[5px] rounded-md"
                                    onClick={() => updateSlider("azafee")}
                                >
                                    
                                </div>
                                <div
                                    className="
                                        w-[42px]
                                        h-[5px]
                                        bg-[#8A8B8D]
                                        rounded-md
                                    "
                                >

                                </div>
                                <div
                                    className="bg-opacity-50 text-white bg-[#E2E2E2] rounded-md w-10 h-[5px]"
                                    onClick={() => updateSlider("azafe")}
                                >
                                    
                                </div>
                            </div>
                    </div>

                    <div
                        className="
                            md:w-3/4
                            w-[90%]
                            mx-auto
                            md:mb-[48px]
                            md:h-[918px]
                            py-7
                            border-2
                            border-[#d9d9d9]
                            mt-[40px]
                            rounded-3xl
                            relative
                            md:px-[86px]
                            px-3
                            flex
                            flex-col
                            items-center
                        "
                    >
                        <div
                            className="
                                md:pt-[80px]
                                md:pb-[47px]
                                pb-7
                            "
                        >
                            <p
                                className="
                                    text-[24px]
                                    font-bold
                                    text-[#1D2433]
                                    hidden
                                    md:flex
                                "
                            >
                                جزئیات طرح انتخابی
                            </p>
                        </div>

                        <div
                            className="
                                w-full
                                flex
                                items-center
                                justify-between
                            "
                        >
                            <p
                                className="
                                    md:hidden
                                    flex
                                "
                            >
                                میزان اعتبار درخواستی
                            </p>
                            <p
                                className="
                                    text-[18px]
                                    font-bold
                                    flex
                                    items-center
                                "
                            >
                                <span
                                    className="
                                        hidden
                                        md:flex
                                    "
                                >
                                    مبلغ:
                                </span>
                                <span
                                    className="
                                        text-[#587E88]
                                        md:text-[36px]
                                        text-[16px]
                                        font-bold
                                        mr-[13px]
                                    "
                                >
                                    {
                                        inputValue
                                    }
                                    <span
                                        className="
                                            md:text-[18px]
                                            text-[12px]
                                            mr-[6px]
                                        "
                                    >
                                        تومان
                                    </span>
                                </span>
                            </p>
                        </div>

                        <div
                            className="
                                w-full
                                flex
                                flex-col
                                md:flex-row
                                items-center
                                justify-center
                            "
                        >
                            <div
                                className="
                                    text-center
                                    text-[14px]
                                    text-[#8A8B8D]
                                    hidden
                                    md:flex
                                "
                            >
                                2,000,000
                            </div>
                            <input
                                step={1000000}
                                min={1000000}
                                max={100000000}
                                value={inputValue}
                                type="range"
                                className="mx-3 my-4 w-full appearance-none rounded-lg"
                                onChange={handleChange}
                                style={{
                                    background: `linear-gradient(to left, #1d434c ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%, #e5e7eb ${((inputValue - 1000000) / (100000000 - 1000000)) * 100}%)`,
                                }}
                            />
                            <div
                                className="
                                    text-center
                                    text-[14px]
                                    text-[#8A8B8D]
                                    hidden
                                    md:flex
                                "
                            >
                                50,000,000
                            </div>
                            <div
                                className="
                                    md:hidden
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    mb-6
                                "
                            >
                                <p> 5 میلیون</p>
                                <p>50 میلیون</p>
                            </div>
                        </div>

                        {/* <div
                            className="
                                w-full
                                flex
                                items-center
                            "
                        >
                            <p>
                                مدت بازپرداخت:
                            </p>
                            
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-4
                                    my-[50px]
                                    mr-[50px]
                                "
                            >
                                <div
                                    className={`
                                        w-[113px]
                                        p-[8px]
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        cursor-pointer
                                        text-[16px]
                                        ${monthGhest == 6 ? "bg-[#1D434C] text-white" : "text-[#1D434C] bg-[#F0F0F1]"}
                                    `}
                                    onClick={() => setMonthGhest(6)}
                                >
                                    6 ماهه 
                                </div>
                                <div
                                    className={`
                                        w-[113px]
                                        p-[8px]
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        cursor-pointer
                                        text-[16px]
                                        ${monthGhest == 12 ? "bg-[#1D434C] text-white" : "text-[#1D434C] bg-[#F0F0F1]"}
                                    `}
                                    onClick={() => setMonthGhest(12)}
                                >
                                    12 ماهه
                                </div>
                                <div
                                    className={`
                                        w-[113px]
                                        p-[8px]
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        cursor-pointer
                                        text-[16px]
                                        ${monthGhest == 18 ? "bg-[#1D434C] text-white" : "text-[#1D434C] bg-[#F0F0F1]"}
                                    `}
                                    onClick={() => setMonthGhest(18)}
                                >
                                    18 ماهه
                                </div>
                                <div
                                    className={`
                                        w-[113px]
                                        p-[8px]
                                        rounded-xl
                                        flex
                                        items-center
                                        justify-center
                                        cursor-pointer
                                        text-[16px]
                                        ${monthGhest == 24 ? "bg-[#1D434C] text-white" : "text-[#1D434C] bg-[#F0F0F1]"}
                                    `}
                                    onClick={() => setMonthGhest(24)}
                                >
                                    24 ماهه
                                </div>
                            </div>
                        </div> */}

                        <div
                            className="
                                grid
                                grid-cols-1
                                w-full
                                text-[12px]
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    w-full
                                    mb-[37px]
                                "
                            >
                                <div
                                    className="
                                        
                                    "
                                >
                                    مبلغ شارژ کیف پول
                                </div>
                                <div
                                    className="
                                        
                                    "
                                >
                                    {calculatedPayment.finalPaymentToUser} تومان 
                                </div>
                            </div>
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    mb-[37px]
                                "
                            >
                                <div
                                    className="
                                        
                                    "
                                >
                                    اصل تسهیلات ثبتی در بانک
                                </div>
                                <div
                                    className="
                                        
                                    "
                                >
                                    {inputValue} تومان 
                                </div>
                            </div>
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    mb-[37px]
                                "
                            >
                                <div
                                    className="
                                    
                                    "
                                >
                                    مبلغ بازپرداخت نهایی
                                </div>
                                <div
                                    className="
                                    
                                    "
                                >
                                    {calculatedPayment.bankPrePayment} تومان 
                                </div>
                            </div>
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    mb-[37px]
                                "
                            >

                                <div
                                    className="
                                    
                                    "
                                >
                                    هزینه عملیات دریافتی ایوام
                                </div>
                                <div
                                    className="
                                    
                                    "
                                >
                                    35,000,000 تومان 
                                </div>
                            </div>
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    mb-[37px]
                                "                                
                            >
                                <div
                                    className="
                                    
                                    "
                                >
                                    شیوه پرداخت هزینه عملیات
                                </div>
                                <div
                                    className="
                                    
                                    "
                                >
                                    35,000,000 تومان 
                                </div>

                            </div>
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-between
                                    mb-[37px]
                                "
                            >
                                <div
                                    className="
                                    
                                    "
                                >
                                    مبلغ قابل پرداخت نقدی
                                </div>
                                <div
                                    className="
                                    
                                    "
                                >
                                    35,000,000 تومان 
                                </div>
                            </div>
                        </div>

                        <div
                            className="
                                w-3/4
                                p-[10px]
                                text-center
                                rounded-xl
                                bg-[#1D434C]
                                text-white
                                mt-[41px]
                                hover:cursor-pointer
                            "
                            onClick={()=>{
                                router.push("/bank-credit")
                            }}
                        >
                            درخواست  اعتبار
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default MohasebeAghsat;
