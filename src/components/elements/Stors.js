"use client";

import { useState } from "react";
import bimeBazar from "../../../public/image/bimebazarr.png";
import matinn from "../../../public/image/matinn.png";
import daricc from "../../../public/image/daricc.png";
import zitroo from "../../../public/image/zitroo.png";
import Image from "next/image";

const storha = [bimeBazar, matinn, daricc, zitroo];

export default function Stors() {
  const [heightChange, setHeightChange] = useState(false);

  return (
    <div
      className={`relative mb-7 mt-[30px] flex w-full flex-wrap items-center justify-center gap-[22px] overflow-y-hidden bg-[#E1EDF0] px-[14px] py-8 md:gap-[49px] md:px-[108px] md:py-[40px]`}
    >
      {storha.map((item, index) => (
        <div
          className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-white md:h-[202px] md:w-[202px]"
          key={index}
        >
          <Image
            src={item}
            width={1000}
            height={1000}
            className="h-[55px] w-[55px] md:h-[134px] md:w-[134px]"
            alt="alt"
          />
        </div>
      ))}
      {/* <div
                className={`
                    w-full
                    h-9
                    absolute
                    bottom-0
                    bg-[#E1EDF0]
                    shadow-topShodow
                `}
            >
                <div

                >

                </div>
            </div> */}
    </div>
  );
}
