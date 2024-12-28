"use client"

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import CartIcon from "../../../../public/icons/Cart";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Search from "@/components/elements/search";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";


const categories = [
    "گوشی موبایل",
    "کالای دیجیتال",
    "لوازم خانگی برقی",
    "خانه و آشپزخانه",
    "موتورسیکلت و لوازم جانبی خودرو",
    "مد و پوشاک",
    "زیبایی و سلامت"
]



export default function ShopHeader() {

  const [scrollY, setScrollY] = useState(0)
  const [navScroll, setNavScroll] = useState(false)

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    setScrollY(pageYOffset);
    if(pageYOffset > 20) {
        setNavScroll(false)
    } else {
        setNavScroll(true)
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
        <header
            className="
                sticky
                top-0
                z-10
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-between
                    p-8
                    z-50
                    transition-all
                    delay-[900ms]
                    bg-white
                "
            >

                <div
                    className="
                        w-[60%]
                        flex
                        gap-4
                    "
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-5
                            text-blue-800
                        "
                    >
                        <EvaamLogo 
                            width="50px"
                            height="50px"
                            color="blue"
                        />
                        <p>ایوام</p>
                    </div>
                    <Search />
                </div>

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        w-[12%]
                    "
                >
                    <div
                        className="
                            h-[26px]
                            flex
                            items-center
                            justify-center
                            rounded-lg
                            border-2
                            p-4
                            border-[#9ED6D9]
                            text-[13px]
                        "
                    >
                        حساب کاربری
                    </div>
                    
                    <div
                        className="
                            w-[26px]
                            h-[26px]
                            rounded-lg
                            border-2
                            border-[#9ED6D9]
                            flex
                            p-4
                            items-center
                            justify-center
                        "
                    >
                        <div>
                            <CartIcon 
                                width="24px"
                                height="24px"
                                color="#475569"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`
                    flex
                    items-center
                    justify-between
                    p-2
                    z-0
                    transition-all
                    duration-300
                    bg-white
                    ${navScroll ? "translate-y-[0] opacity-100" : "translate-y-[-10%] opacity-0"}
                `}
            >
                
                <div
                    className="
                        flex
                        items-center
                        justify-between
                        w-[88%]
                    "
                >
                    <div
                        className="
                            bg-[#b5f7ee80]
                            text-[#007c7d]
                            w-fit
                            p-2
                            rounded-xl
                        "
                    >
                        دسته بندی کالاها
                    </div>

                    <div>
                        |
                    </div>

                    {
                        categories.map((item, index) => (
                            <div
                                key={index}
                                className="
                                    flex
                                    items-center
                                    gap-1
                                    text-[13px]
                                "
                            >
                                <p>{item}</p>
                                <IoIosArrowDown
                                    width={24}
                                    height={24}
                                />

                            </div>
                        ))
                    }
                </div>

                <div
                    className="
                        text-blue-800
                        bg-[#c1def0]
                        p-2
                        rounded-xl
                    "
                >
                    درخواست وام
                </div>
            </div>


        </header>
    )
}