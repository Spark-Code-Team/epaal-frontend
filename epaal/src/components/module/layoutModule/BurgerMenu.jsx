"use client";

// Nextjs
import Image from "next/image";

// IMG
import burger from "../../../../public/icons/burgerMenu.svg";

// React
import { useState } from "react";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image
        src={burger}
        width={24}
        height={24}
        className="
                    w-6
                    h-6
                    cursor-pointer
                "
        alt="burger menu logo"
        onClick={() => setOpen(true)}
      />
      <div
        className={`
                    fixed
                    top-0
                    right-0
                    w-screen
                    h-screen
                    transform
                    ${open ? "translate-x-0" : "translate-x-full"}
                    transition-transform
                    bg-opacity-40
                    bg-slate-300
                    duration-500 
                    ease-in-out 
                `}
        onClick={() => setOpen(false)}
      >
        <div
          className="
                        fixed
                        top-0 
                        right-0
                        h-full
                        bg-[#1D434C]
                    "
        >
          dsojgvsp
        </div>
      </div>
    </>
  );
}
