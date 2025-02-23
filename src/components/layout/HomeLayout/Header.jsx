"use client"

// components
import NavElements from "../../module/layoutModule/NavElements";
import Logo from "@/components/elements/Logo";

// react
import { useCallback, useEffect, useState } from "react";

// icons
import LoginIcon from "../../../../public/icons/LoginIcon";
import { Bars3Icon } from "@heroicons/react/24/outline";

//
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole } from "@/redux/features/userRole/useRole";

const options = [
  {
      title: "فروشگاه ایوام",
      href: "/shopping-evaam"
  },
  {
      title: "راهنما خرید اقساطی",
      href: "#"
  },
  {
      title: "پذیرندگان",
      href: "#"
  },
  {
      title: "تماس با ما",
      href: "#"
  }
]

export default function Header() {

  const [scrollY, setScrollY] = useState(0)
  const [navColor, setNavColor] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)

  const store = useSelector(store => store)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!store.role.id) {
      dispatch(fetchRole())
    }
  }, [])
  

  const pathname  = usePathname()
  

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    setScrollY(pageYOffset);
    if(pageYOffset > 50) {
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
    <>
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
          ${(navColor) ? "bg-white shadow-3xl" : ""}
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
          <div
            onClick={() => setBurgerMenu(true)}
            className="
              cursor-pointer
            "
          >
            <Bars3Icon
              className={`
                w-6
                h-6
                ${(navColor || pathname != "/evaam-home") ? "text-black" : "text-white"}
                md:hidden
              `}
            />
          </div>

          <Logo 
            width="50px"
            height="26px"
            color={(navColor || pathname != "/evaam-home") ? "black" : "white"}
          />
          <NavElements 
            navColor={navColor}
            pathname={pathname}
            options={options}
          />
        </div>
        {
          store.role.id ? (
            <Link
              href="/dashboard/authentication"
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
                w-[230px]
                md:w-[150px]
                ${(navColor || pathname != "/evaam-home") ? "text-black" : "text-white"}
                z-50
              `}
            >
              حساب کاربری
              <LoginIcon 
                color={(navColor || pathname != "/evaam-home") ? "black" : "white"}
              />
            </Link>
          ) : (
          <Link
          href="/login"
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
            w-[230px]
            md:w-[150px]
            ${(navColor || pathname != "/evaam-home") ? "text-black" : "text-white"}
            z-50
          `}
        >
          <p>ثبت نام / ورود</p>
          <LoginIcon 
            color={(navColor || pathname != "/evaam-home") ? "black" : "white"}
          />
        </Link>
          )
        }

      </div>

      {/* Burger Menu */}
      <div
        className={`
            w-full
            fixed
            h-screen
            md:hidden
            bg-[#0a0a0a4d]   
            top-0
            right-0
            ${burgerMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
            transition-all
            duration-300
            flex
            justify-between
            z-50
        `}
      >
        <div
          className="
            h-full
            w-[60%]
            bg-white
          "
        >

          {/* Logo */}
          <div
            className="
              flex
              items-center
              justify-center
              py-5
              border-b
              border-evaamGreen
            "
          >
            <Logo 
              width="40px"
              height="40px"
              color="#1d434c"
            />
          </div>

          {/* options */}
          <div
            className="
              flex
              flex-col

            "
          >
            {
              options.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    pr-5
                    py-5
                    border-b
                    transition-all
                    border-evaamGreen
                    hover:bg-evaamGreen
                    hover:text-white
                  "
                >
                  { 
                    item.title
                  }
                </Link>
              ))
            }
          </div>
        </div>
          <div
              className="
                  bg-white
                  h-fit
                  m-5
                  p-2
                  rounded-lg
                  cursor-pointer
              "
              onClick={() => setBurgerMenu(false)}
          >
              <RxCross2 
                  fill="red"
                  className="
                      w-6
                      h-6
                      text-red-700
                  "
              />
          </div>
      </div>
    </>
  );
}
