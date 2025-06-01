"use client";

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
import { useRouter } from "next/navigation";

const options = [
  {
    title: "فروشگاه ایوام",
    href: "/shopping-evaam",
  },
  {
    title: "راهنما خرید اقساطی",
    href: "#",
  },
  {
    title: "پذیرندگان",
    href: "#",
  },
  {
    title: "تماس با ما",
    href: "#",
  },
];

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [navColor, setNavColor] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!store.role.id) {
      dispatch(fetchRole());
    }

    console.log(store);
  }, []);

  const pathname = usePathname();

  const onScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    setScrollY(pageYOffset);
    if (pageYOffset > 50) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  const secureRoute = () => {
    if (store.role.role == "admin") {
      router.push("/admin");
    } else if (store.role.role == "shop_admin") {
      router.push("/admin/admin-shop/add-product");
    } else {
      router.push("/dashboard/");
    }
  };

  return (
    <>
      <div
        className={`fixed left-[50%] top-0 mx-auto flex w-full max-w-[1440px] translate-x-[-50%] justify-between py-6 md:items-center md:px-[112px] ${navColor ? "bg-white shadow-3xl" : ""} z-50 px-4 transition-all`}
      >
        <div className="flex w-[600px] items-center gap-3 md:gap-8">
          <div onClick={() => setBurgerMenu(true)} className="cursor-pointer">
            <Bars3Icon
              className={`h-6 w-6 ${navColor || pathname != "/evaam-home" ? "text-black" : "text-white"} md:hidden`}
            />
          </div>

          <Logo
            width="50px"
            height="26px"
            color={navColor || pathname != "/evaam-home" ? "black" : "white"}
          />
          <NavElements
            navColor={navColor}
            pathname={pathname}
            options={options}
          />
        </div>
        {store.role.id ? (
          <div>
            <div>
              <button>{/* <PiShoppingCartSimpleBold /> */}</button>
            </div>
            <div
              onClick={() => secureRoute()}
              className={`flex w-[230px] cursor-pointer items-center justify-center gap-[1px] rounded-2xl bg-[#00000033] px-[10px] py-1 text-[10px] font-medium backdrop-blur-xl md:w-[150px] md:text-[14px] ${navColor || pathname != "/evaam-home" ? "text-black" : "text-white"} z-50`}
            >
              حساب کاربری
              <LoginIcon
                color={
                  navColor || pathname != "/evaam-home" ? "black" : "white"
                }
              />
            </div>
          </div>
        ) : (
          <Link
            href="/login"
            className={`flex w-[230px] cursor-pointer items-center justify-center gap-[1px] rounded-2xl bg-[#00000033] px-[10px] py-1 text-[10px] font-medium backdrop-blur-xl md:w-[150px] md:text-[14px] ${navColor || pathname != "/evaam-home" ? "text-black" : "text-white"} z-50`}
          >
            <p>ثبت نام / ورود</p>
            <LoginIcon
              color={navColor || pathname != "/evaam-home" ? "black" : "white"}
            />
          </Link>
        )}
      </div>

      {/* Burger Menu */}
      <div
        className={`fixed right-0 top-0 h-screen w-full bg-[#0a0a0a4d] md:hidden ${burgerMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} z-50 flex justify-between transition-all duration-300`}
      >
        <div className="h-full w-[60%] bg-white">
          {/* Logo */}
          <div className="flex items-center justify-center border-b border-evaamGreen py-5">
            <Logo width="40px" height="40px" color="#1d434c" />
          </div>

          {/* options */}
          <div className="flex flex-col">
            {options.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="border-b border-evaamGreen py-5 pr-5 transition-all hover:bg-evaamGreen hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="m-5 h-fit cursor-pointer rounded-lg bg-white p-2"
          onClick={() => setBurgerMenu(false)}
        >
          <RxCross2 fill="red" className="h-6 w-6 text-red-700" />
        </div>
      </div>
    </>
  );
}
