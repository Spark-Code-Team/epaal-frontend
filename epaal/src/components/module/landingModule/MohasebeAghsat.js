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
        <>
        <div className=" w-1/2 mx-auto overflow-hidden flex items-center justify-center">
            <div className="flex p-10 transition-transform duration-500" style={{ transform: `translateX(${index * 33.33 - 33.33}%)` }}>
                {slides.map((src, i) => (
                    <div 
                        key={i} 
                        className={`flex-none w-[300px] h-[200px] p-4 transition-transform duration-300 cursor-pointer bg-cover bg-center bg-no-repeat rounded-2xl z-0 ${i === index ? "scale-125 z-10 opacity-100" : "opacity-50"}`} 
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
                        className="bg-opacity-50 text-white bg-[#E2E2E2] h-[5px]"
                        onClick={() => updateSlider("azafee")}
                    >
                        F
                    </div>
                    <div
                        className="
                            w-[42px]
                            h-[5px]
                            bg-[#8A8B8D]
                        "
                    >

                    </div>
                    <div
                        className="bg-opacity-50 text-white bg-[#E2E2E2] h-[5px]"
                        onClick={() => updateSlider("azafe")}
                    >
                        F
                    </div>
                </div>
            </div>
        </>
    );
};

export default MohasebeAghsat;
