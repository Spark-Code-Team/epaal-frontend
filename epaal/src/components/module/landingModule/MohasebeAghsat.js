"use client"

import { useState } from "react";

const MohasebeAghsat = () => {
    const [index, setIndex] = useState(1);
    const slides = [
        "/image/backCard.png",
        "/image/backCard1.png",
        "/image/backCard2.png"
    ];

    const updateSlider = (mozoe) => {
        if(mozoe == "azafe") {
            if( index == slides.length - 1) return
            setIndex(last => last + 1)
        } else {
            if( index == 0) return
            setIndex(last => last - 1)
        }
    };

    return (
        <div
            className="
                w-full
                relative
                min-h-[1386px]
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
                    top-[-150px]
                    h-[1386px]
                "
            >
                <div
                    className="
                        w-[80%]
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
                            text-[24px]
                            font-bold
                            my-[40px]
                        "
                    >
                        طرح های اعتباری و اقساط آن
                    </div>

                    <div className=" w-full mx-auto overflow-hidden flex items-center justify-center">
                        <div className="flex p-10 transition-transform duration-500" style={{ transform: `translateX(${index * 33.33 - 33.33}%)` }}>
                            {slides.map((src, i) => (
                                <div 
                                    key={i} 
                                    className={`flex-none w-[300px] text-white h-[200px] p-4 transition-transform duration-300 cursor-pointer bg-cover bg-center bg-no-repeat rounded-2xl z-0 ${i === index ? "scale-125 z-10 opacity-100" : "opacity-50"}`} 
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
                                            mt-[14px]
                                        "
                                    >
                                        <p
                                            className="
                                                text-[14px]
                                                font-bold
                                            "
                                        >
                                            ارائه تسهیلات تا سقف    
                                        </p>
                                        <p
                                            className="
                                                text-[24px]
                                                font-bold
                                            "
                                        >
                                            50,000,000 ملیون ریال
                                        </p>
                                    </div>

                                    <div
                                        className="
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            mt-[30px]
                                        "
                                    >
                                        <div
                                            className="
                                                text-[10px]
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
                                                text-[14px]
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

                </div>
            </div>
        </div>
    );
};

export default MohasebeAghsat;
