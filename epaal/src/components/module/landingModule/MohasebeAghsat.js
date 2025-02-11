"use client"

import { useState } from "react";

import aks from "../../../../public/image/airpod.png"
import aks1 from "../../../../public/image/bank-bg.png"
import aks2 from "../../../../public/image/phone-service.jpg"
import aks3 from "../../../../public/image/samsung.jpg"
import Image from "next/image";

const MohasebeAghsat = () => {
    const [index, setIndex] = useState(1);
    const slides = [
        aks,
        aks1,
        aks2,
        aks3
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
        <div className="relative w-3/5 mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(${index * 33.33 - 33.33}%)` }}>
                {slides.map((src, i) => (
                    <div 
                        key={i} 
                        className={`flex-none w-1/3 p-4 transition-transform duration-300 cursor-pointer ${i === index ? "scale-125 z-10 opacity-100" : "opacity-50"}`} 
                        onClick={() => updateSlider(i)}
                    >
                        <Image width={300} height={300} src={src} alt={`Slide ${i + 1}`} className="w-full rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
            <div className=" flex justify-between transform -translate-y-1/2">
                <button
                    className="bg-black bg-opacity-50 text-white px-4 py-2"
                    onClick={() => updateSlider("azafee")}
                >❮</button>
                <button
                    className="bg-black bg-opacity-50 text-white px-4 py-2"
                    onClick={() => updateSlider("azafe")}
                >❯</button>
            </div>
        </>
    );
};

export default MohasebeAghsat;
