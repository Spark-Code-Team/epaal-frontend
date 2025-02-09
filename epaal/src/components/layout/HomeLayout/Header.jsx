"use client"

// components
import BurgerMenu from "../../module/layoutModule/BurgerMenu";
import NavElements from "../../module/layoutModule/NavElements";

// logo
import EvaamLogo from "../../../../public/icons/evaam-icon";

//react
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EvaamLogoo from "../../../../public/icons/EvaamLogoo";
import EvaamMatn from "../../../../public/icons/EvaamMatn";
import Logo from "@/components/elements/Logo";
import LoginIcon from "../../../../public/icons/LoginIcon";

export default function Header() {

  const router = useRouter()

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
        px-[112px]
        flex
        justify-between
        items-center
        fixed
        mx-auto
        ${navColor ? "bg-white shadow-3xl" : ""}
        transition-all
      `}
    >
      <div
        className="
          flex
          items-center
          gap-8
          w-[600px]
        "
      >
        <Logo 
          width="56px"
          height="33px"
          color={navColor ? "black" : "white"}
        />
        <NavElements 
          navColor={navColor}
        />
      </div>
      <div
        className={`
          py-2
          px-[16px]
          text-[14px]
          font-medium
          bg-[#00000033]
          rounded-2xl
          flex
          items-center
          backdrop-blur-xl
          gap-[1px]
          cursor-pointer
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
