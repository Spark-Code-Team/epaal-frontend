"use client"

// components
import NavElements from "../../module/layoutModule/NavElements";

// logo
import EvaamLogo from "../../../../public/icons/evaam-icon";

//react
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/elements/Logo";
import LoginIcon from "../../../../public/icons/LoginIcon";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {

  const [scrollY, setScrollY] = useState(0)
  const [navColor, setNavColor] = useState(false)

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    setScrollY(pageYOffset);
    if(pageYOffset > 100) {
      setNavColor(true)
    } else {
      setNavColor(false)
    }
  }, []);

  useEffect(() => {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });
      
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
      }
  }, []);

  return (
    <div
      className={`
        w-full
        max-w-[1280px]
        py-6
        md:px-[112px]
        flex
        justify-between
        md:items-center
        fixed
        top-0
        mx-auto
        ${navColor ? "bg-white shadow-3xl" : ""}
        transition-all
        z-50
        px-4
      `}
    >
      <div
        className="
          flex
           items-center
          gap-3
          md:gap-8
          w-[600px]
        "
      >
        <Bars3Icon
          className={`
            w-6
            h-6
            ${navColor ? "text-black" : "text-white"}
            md:hidden
          `}
        />

        <Logo 
          width="50px"
          height="26px"
          color={navColor ? "black" : "white"}
        />
        <NavElements 
          navColor={navColor}
        />
      </div>
      <div
        className={`
          py-1
          px-[10px]
          text-[10px]
          md:text-[14px]
          font-medium
          bg-[#00000033]
          rounded-2xl
          flex
          items-center
          justify-center
          backdrop-blur-xl
          gap-[1px]
          cursor-pointer
          w-[200px]
          md:w-[150px]
          ${navColor ? "text-black" : "text-white"}
          z-50
        `}
      >
        <p>ثبت نام / ورود</p>
        <LoginIcon 
          color={navColor ? "black" : "white"}
        />
      </div>
    </div>
  );
}
