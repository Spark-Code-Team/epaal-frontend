"use client"

// components
import BurgerMenu from "../../module/layoutModule/BurgerMenu";
import NavElements from "../../module/layoutModule/NavElements";

// logo
import EvaamLogo from "../../../../public/icons/evaam-icon";

//react
import { useCallback, useEffect, useState } from "react";

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

      console.log(scrollY);
      
      // remove event on unmount to prevent a memory leak with the cleanup
      return () => {
        window.removeEventListener("scroll", onScroll, { passive: true });
      }
  }, []);

  return (
    <div
      className={`
        flex
        flex-col
        sticky
        top-0
        w-full
        ${navColor ? "bg-white" : "bg-[#2852E4]"}
        md:bg-white
        mx-auto
        max-w-full
        z-10
      `}
    >
      <div
        className="
          flex
          w-full
          items-center
          justify-between
        "
      >
        <div
          className="
              relative
              flex
              items-center
              md:w-1/2
              justify-evenly
              pr-3
          "
        >
          <BurgerMenu navColor={navColor}/>
          <div
            className="
              hidden
              cursor-pointer
              md:flex
            "
          >
            <EvaamLogo color="#2852E4" height="24px" width="24px"/>   
          </div>
          <div
            className="
              cursor-pointer
              pr-3
              md:hidden
            "
          >
            <EvaamLogo color={navColor ? "#000" : "#ffff"} height="24px" width="24px"/>   
          </div>
          <NavElements />
        </div>
        <div
          className="p-[12px]
          "
        >
          <div
            className={`
              text-xs
              px-[18px]
              py-[11.5px]
              ${navColor ? "bg-[#2852E4]" : "bg-white"}
              ${navColor ? "text-white" : "text-black"}
            md:bg-[#2852E4]
            md:text-white  
              rounded-lg 
            `}
          >
            ورود به حساب کاربری
          </div>
        </div>
      </div>
    </div>
  );
}
