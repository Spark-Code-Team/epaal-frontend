"use client";

import CartIcon from "../../../../public/icons/Cart";
import Search from "@/components/elements/search";
import { IoIosArrowDown } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Logo from "@/components/elements/Logo";
import { fetchRole } from "@/redux/features/userRole/useRole";

import { pallete } from "@/constant/Pallete";
import CategoryIcon from "../../../../public/icons/category";
import { GETUserCart } from "@/service/products";
import {fetchUserCart} from "@/redux/features/shopCart/shopCart";

const categories = [
  "گوشی موبایل",
  "کالای دیجیتال",
  "لوازم خانگی برقی",
  "خانه و آشپزخانه",
  "موتورسیکلت و لوازم جانبی خودرو",
  "مد و پوشاک",
  "زیبایی و سلامت",
];

const rightCategories = [
  "گوشی موبایل",
  "کالای دیجیتال",
  "لوازم خانگی برقی",
  "خانه و آشپزخانه",
  "موتورسیکلت و لوازم جانبی خودرو",
  "مد و پوشاک",
  "زیبایی و سلامت",
  "ابراز و تجهیزات صنعتی",
  "ورزش و سفر",
];

const headCategories = [0, 1, 2, 3, 4];

const bottomCategories = [
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
  {
    title: "title",
    children: ["child1", "child2", "child3", "child4", "child5"],
  },
];

export default function ShopHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [navScroll, setNavScroll] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [burgerChangeItems, setBurgerChangeItems] = useState(false);
  const [login, setLogin] = useState(false);


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);


  useEffect(() => {
    if (!store.role.id) {
      dispatch(fetchRole());
    }

    dispatch(fetchUserCart());
  }, []);

  useEffect(() => {
    console.log("cartItems updated: ", cartItems);
  }, [cartItems]);


  // useEffect(() => {
  //   if (!store.role.id) {
  //     dispatch(fetchRole());
  //   }
  //
  //   async function fetchUserCart() {
  //     const { response, error } = await GETUserCart();
  //
  //     if (response) {
  //       console.log(" -------------> cart in shop header ---------------> ", response.data.data)
  //       dispatch(fetchRole())
  //     } else {
  //       console.error("error on cart ==============> ", error);
  //     }
  //   }
  //
  //   fetchUserCart();
  // }, []);


  const router = useRouter();

  const handelCartShop = () => {
    localStorage.setItem("selected", JSON.stringify(store.counter));
    router.push("/shopping-evaam/products/shop-checkout");
  };

  const onScroll = useCallback(
    (event) => {
      const { pageYOffset, scrollY } = window;
      setScrollY(pageYOffset);
      if (scrollY > 120) {
        setNavScroll(false);
        setShowCategories(false);
      } else {
        setNavScroll(true);
      }
    },
    [scrollY],
  );

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });

    setLogin(localStorage.getItem("login"));

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <header className="sticky top-0 z-10">
      <div className="z-50 flex items-center justify-between bg-white p-3 transition-all delay-[900ms] md:p-2">
        <div className="flex w-[20%] gap-4 md:w-[60%]">
          <div className="flex items-center gap-5 text-blue-800">
            <RxHamburgerMenu
              className="flex h-6 w-6 md:hidden"
              onClick={() => setBurgerMenu(true)}
            />
            <Link href="/shopping-evaam">
              <Logo width="45px" height="45px" color={pallete.primary} />
            </Link>
          </div>
          <div className="hidden h-14 w-full md:flex">
            <Search />
          </div>
        </div>

        <div className={`flex w-[45%] items-center justify-between md:w-[12%]`}>
          {store.role.id ? (
            <>
              <div 
                onClick={() => {
                  if (store.role.role == "admin") {
                    router.push("/admin")
                  } else if (store.role.role == "shop_admin") {
                    router.push("/admin/admin-shop/add-product")
                  } else {
                    router.push("/dashboard/")
                  }
                }}
                className="flex cursor-pointer h-[26px] items-center justify-center rounded-lg border-2 border-[#9ED6D9] p-4 text-[13px]">
                حساب کاربری
              </div>

              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-lg border-2 border-[#9ED6D9] p-4">
                <div
                  onClick={() => handelCartShop()}
                  className="relative cursor-pointer"
                >
                  <CartIcon width="24px" height="24px" color="#475569" />
                  <div
                    className={`absolute left-[15px] top-[-15px] h-5 w-5 rounded-lg bg-green-600 text-center text-white`}
                  >
                    {/*{cartItems.data.length}*/}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex w-full items-center justify-end">
              <Link
                href="/login"
                className="w-fit rounded-lg border-[2px] bg-evaamGreen p-[5px] text-center text-white"
              >
                ورود / ثبت نام
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className={`z-0 flex items-center justify-between bg-white p-2 transition-all duration-300 ${navScroll ? "translate-y-[0] opacity-100" : "translate-y-[-5%] opacity-0"} relative`}
      >
        <div className="mx-auto flex h-12 w-full md:hidden">
          <Search />
        </div>

        <div className="hidden w-full items-center justify-between bg-evaamGreen px-10 py-3 text-white md:flex">
          <div
            className="flex w-auto cursor-pointer items-center justify-evenly gap-5 rounded-xl bg-white p-2 font-bold text-evaamGreen"
            onClick={() => setShowCategories(true)}
          >
            <span>
              <CategoryIcon
                stroke={pallete.primary}
                fill={pallete.white}
                height={20}
                width={20}
              />
            </span>
            <p className="text-sm">دسته بندی کالاها</p>
          </div>

          <div>|</div>

          {categories.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-1 text-[13px]"
              onClick={() => setShowCategories(item)}
            >
              <p>{item}</p>
              <IoIosArrowDown width={24} height={24} />
            </div>
          ))}
        </div>

        {/* <div
                    className="
                        text-white
                        bg-evaamGreen
                        p-2
                        rounded-xl
                        md:flex
                        hidden
                    "
                >
                    درخواست وام
                </div> */}

        {/* categories */}
        <div
          className={` ${showCategories ? "opacity-100" : "hidden"} ${navScroll ? "" : "translate-y-[-50%] opacity-0"} absolute bottom-[-320px] right-0 top-14 hidden min-h-screen min-w-full bg-blurbg transition-all`}
        >
          <div
            className="mx-auto flex h-3/4 min-h-80 w-[90%] bg-white"
            onMouseLeave={() => setShowCategories(false)}
          >
            <div className="flex w-[20%] flex-col justify-between border-l border-l-[#d9d9d9] bg-[#ecebeb] pr-2">
              {rightCategories.map((item, index) => (
                <div
                  key={index}
                  className="mb-[5px] mr-[1px] flex h-16 w-full cursor-pointer items-center justify-center rounded-br-xl rounded-tr-xl border-l border-l-[#d9d9d9] bg-[#ecebeb] pl-0 transition-all hover:border hover:border-l-2 hover:border-[#d9d9d9] hover:border-l-white hover:bg-white"
                  onMouseEnter={() => setShowCategories(item)}
                >
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="flex w-[80%] flex-col">
              {/* head categories */}
              <div className="mx-auto flex w-[100%] flex-col justify-between gap-10 px-14 pt-3">
                <p className="text-blue-800">همه محصولات</p>
                <div className="flex w-[100%] items-center justify-between">
                  {headCategories.map((item, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer flex-col items-center justify-center gap-4 transition-all hover:scale-110"
                    >
                      <Image
                        src="/"
                        width={300}
                        height={300}
                        className="h-24 w-24 rounded-xl border transition-all hover:border-[2px] hover:border-blue-800"
                        alt="alt"
                      />
                      <p>دسته بندی</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* colums categories */}
              <div className="mx-auto flex h-full w-[100%] flex-wrap justify-around gap-11 overflow-y-scroll p-2 pb-8">
                {bottomCategories.map((item, index) => (
                  <div key={index} className="w-[20%]">
                    <p>{item.title}</p>
                    <div className="border-b border-b-[#d9d9d9]">
                      <div className="h-1 w-2/5 bg-[#afaeae]"></div>
                    </div>
                    <div className="flex flex-col gap-3">
                      {item.children.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* burger Menu */}
      <div
        className={`absolute right-0 top-0 h-screen w-full bg-[#0a0a0a4d] md:hidden ${burgerMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex justify-between transition-all duration-300`}
      >
        <div className="h-full w-[75%] bg-white">
          {/* logo  */}
          <div className="flex items-center justify-between border-b border-[#d9d9d9] p-4">
            <Logo width="40px" height="40px" color="#1d434c" />
            <div className="flex rounded-xl bg-evaamCyan p-2 text-evaamGreen">
              درخواست وام
            </div>
          </div>

          {/* parts */}
          <div className="flex flex-col gap-6">
            <Link
              href="#"
              className="flex items-center border-b border-[#d9d9d9] p-3"
            >
              بلاگ
            </Link>
            <Link
              href="#"
              className="flex items-center border-b border-[#d9d9d9] px-3 pb-3"
            >
              سوالات متدوال
            </Link>
            <div className="flex w-full items-center justify-between border-b border-[#d9d9d9] px-3 pb-3">
              <p>سایر</p>
              <IoIosArrowDown />
            </div>

            <div className="max-h-96 overflow-y-scroll">
              <p
                className={`border-b border-[#d9d9d9] px-3 pb-5 text-blue-700 ${burgerChangeItems ? "hidden" : "flex"} `}
              >
                دسته بندی محصولات
              </p>
              <div onClick={() => setBurgerChangeItems(false)}>
                <p
                  className={`border-b border-[#d9d9d9] px-3 pb-5 text-blue-700 ${burgerChangeItems ? "flex" : "hidden"} `}
                >
                  بازگشت به دسته بندی ها
                </p>
              </div>
              {burgerChangeItems ? (
                <div className="flex flex-col items-center justify-center gap-3 overflow-y-scroll">
                  {headCategories.map((item) => (
                    <div
                      key={item}
                      className="flex flex-col items-center justify-center transition-all hover:scale-110"
                    >
                      <Image
                        src="/"
                        width={300}
                        height={300}
                        className="h-20 w-20 rounded-xl"
                        alt="alt"
                      />
                      <p>دسته بندی</p>
                    </div>
                  ))}
                </div>
              ) : (
                categories.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-b-[#d9d9d9] px-3 py-5"
                    onClick={() => setBurgerChangeItems(item)}
                  >
                    <p>{item}</p>
                    <IoIosArrowDown />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* cross buttom */}
        <div
          className="m-5 h-fit cursor-pointer rounded-lg bg-white p-2"
          onClick={() => setBurgerMenu(false)}
        >
          <RxCross2 fill="red" className="h-6 w-6 text-red-700" />
        </div>
      </div>
    </header>
  );
}