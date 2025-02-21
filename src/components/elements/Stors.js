"use client";

import Image from "next/image";
import bimeBazar from "../../../public/image/bimebazarr.png";
import matinn from "../../../public/image/matinn.png";
import daricc from "../../../public/image/daricc.png";
import zitroo from "../../../public/image/zitroo.png";
import techno from "../../../public/image/TechnoLife.svg";
import ali from "../../../public/image/AliBaba.svg";
import sabz from "../../../public/image/KheiliSabz.svg";
import khanomi from "../../../public/image/Khanoomi.svg";
import didar from "../../../public/image/Didar.svg";
import dewo from "../../../public/image/Daewoo.svg";
import sfood from "../../../public/image/SnappFood.svg";
import gshop from "../../../public/image/GooshiShop.svg";
import green from "../../../public/image/Green.svg";

const storha = [
  {
    name: "بیمه بازار",
    image: bimeBazar,
  },
  {
    name: "متین خودرو",
    image: matinn,
  },
  {
    name: "داریک",
    image: daricc,
  },
  {
    name: "تکنولایف",
    image: techno,
  },

  {
    name: "علی‌بابا",
    image: ali,
  },
  {
    name: "دیدار",
    image: didar,
  },
  {
    name: "خانومی",
    image: khanomi,
  },
  {
    name: "خیلی‌سبز",
    image: sabz,
  },

  {
    name: "اسنپ‌فود",
    image: sfood,
  },
  {
    name: "گوشی‌شاپ",
    image: gshop,
  },
  {
    name: "گرین",
    image: green,
  },
];

export default function Stors() {
  return (
    <div className="relative mb-7 mt-[30px] overflow-x-hidden bg-[#E1EDF0] px-[14px] py-8">
      <div className="animate-scroll flex w-full gap-[22px]">
        {storha.concat(storha, storha, storha, storha).map((item, index) => (
          <div
            key={index}
            className="flex flex-shrink-0 flex-col items-center justify-between gap-3"
          >
            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-white md:h-[202px] md:w-[202px]">
              <Image
                src={item.image}
                width={1000}
                height={1000}
                className="h-[55px] w-[55px] md:h-[134px] md:w-[134px]"
                alt="alt"
              />
            </div>
            <div className="text-xs font-bold text-evaamGreen">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
