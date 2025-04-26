"use client"

import CartIcon from "../../../../public/icons/Cart";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Search from "@/components/elements/search";
import { IoIosArrowDown } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Logo from "@/components/elements/Logo";
import { fetchRole } from "@/redux/features/userRole/useRole";

import { pallete } from "@/constant/Pallete";
import CategoryIcon from "../../../../public/icons/category";
import { GETUserCart } from "@/service/products";
import { setCart } from "@/redux/features/shopCart/shopCart";

const categories = [
    "گوشی موبایل",
    "کالای دیجیتال",
    "لوازم خانگی برقی",
    "خانه و آشپزخانه",
    "موتورسیکلت و لوازم جانبی خودرو",
    "مد و پوشاک",
    "زیبایی و سلامت"
]

const rightCategories = [
    "گوشی موبایل",
    "کالای دیجیتال",
    "لوازم خانگی برقی",
    "خانه و آشپزخانه",
    "موتورسیکلت و لوازم جانبی خودرو",
    "مد و پوشاک",
    "زیبایی و سلامت",
    "ابراز و تجهیزات صنعتی",
    "ورزش و سفر"
]

const headCategories = [
    0,
    1,
    2,
    3,
    4
]

const bottomCategories = [
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
    {
        title: "title",
        children: [
            "child1",
            "child2",
            "child3",
            "child4",
            "child5",
        ]
    },
]



export default function ShopHeader() {

  const [scrollY, setScrollY] = useState(0)
  const [navScroll, setNavScroll] = useState(true)
  const [showCategories, setShowCategories] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [burgerChangeItems, setBurgerChangeItems] = useState(false)
  const [login, setLogin] = useState(false)


  const store = useSelector(store => store)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if(!store.role.id) {
        dispatch(fetchRole())
    }

    async function fetchUserCart() {
        const {response, error} = await GETUserCart()

        if(response){
            console.log("cart =================> \n", dispatch(setCart(response.data.data)))
        } else {
            console.error("error on cart ==============> ", error)
        }
    }

    fetchUserCart()
  }, [])

  const router = useRouter()

  const handelCartShop = () => {
    localStorage.setItem("selected", JSON.stringify(store.counter))
    router.push("/shopping-evaam/products/shop-checkout")
  }
  

  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    setScrollY(pageYOffset);
    if(scrollY > 120) {
        setNavScroll(false)
        setShowCategories(false)
    } else {
        setNavScroll(true)
    }
}, [scrollY]);

  useEffect(() => {
      //add eventlistener to window
      window.addEventListener("scroll", onScroll, { passive: true });

      setLogin(localStorage.getItem("login"))
      
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
                    md:p-2
                    p-3
                    z-50
                    transition-all
                    delay-[900ms]
                    bg-white
                "
            >

                <div
                    className="
                        md:w-[60%]
                        w-[20%]
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
                        <RxHamburgerMenu 
                            className="
                                flex
                                md:hidden
                                w-6
                                h-6
                            "
                            onClick={() => setBurgerMenu(true)}
                        />
                        <Link
                            href="/shopping-evaam"
                        >
                            <Logo 
                                width="45px"
                                height="45px"
                                color={pallete.primary}
                            />
                        </Link>
                    
                    </div>
                    <div
                        className="
                            hidden
                            md:flex
                            w-full
                            h-14
                        "
                    >
                        <Search />
                    </div>
                </div>

                <div
                    className={`
                        flex
                        items-center
                        justify-between
                        md:w-[12%]
                        w-[45%]
                    `}
                >

                    {
                        store.role.id ? (
                            <>
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
                                    text-[13px]\
                                    cursor-pointer
                                "
                                onClick={() => {
                                    if(store.role.role == "shop_admin") {
                                        router.push("/admin/admin-shop")
                                    } else if(store.role.role == "admin") {
                                        router.push("/admin")
                                    } else {
                                        router.push("/shopping-evaam/products/shop-checkout")
                                    }
                                    
                                }}
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
                                    cursor-pointer
                                "
                            >
                                <div
                                    onClick={() => handelCartShop()}
                                    className="
                                        relative
                                        cursor-pointer
                                    "
                                >
                                    <CartIcon 
                                        width="24px"
                                        height="24px"
                                        color="#475569"
                                    />
                                    <div
                                    className={`
                                        w-5
                                        h-5
                                        absolute
                                        top-[-15px]
                                        left-[15px]
                                        bg-green-600
                                        text-white
                                        text-center
                                        rounded-lg
                                        ${ store.counter.counter == 0 ? "hidden" : null}
                                    `}
                                    >
                                    { store.counter.counter }
                                    </div>
                                </div>
                            </div>
                            </>
                        ) : (
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-end
                                "
                            >
                                <Link
                                    href="/login"
                                    className="
                                        w-fit
                                        p-[5px]
                                        text-center
                                        border-[2px]
                                        text-white
                                        rounded-lg
                                        bg-evaamGreen
                                    "
                                >
                                    ورود / ثبت نام
                                </Link>
                            </div>
                        )
                    }
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
                    ${navScroll ? "translate-y-[0] opacity-100" : "translate-y-[-5%] opacity-0"}
                    relative
                `}
            >
                <div
                    className="
                        flex
                        md:hidden
                        w-full
                        mx-auto
                        h-12
                    "
                >
                    <Search />
                </div>
                
                <div
                    className="
                        md:flex
                        hidden
                        items-center
                        justify-between
                        w-full
                        bg-evaamGreen
                        text-white
                        px-10
                        py-3
                    "
                >
                    <div
                        className="
                            bg-white
                            text-evaamGreen
                            w-auto
                            p-2
                            rounded-xl
                            cursor-pointer
                            flex 
                            items-center
                            justify-evenly
                            gap-5
                            font-bold
                        "
                        onClick={() => setShowCategories(true)}
                        >
                         <span>
                            <CategoryIcon stroke={pallete.primary} fill={pallete.white} height={20} width={20}/>
                         </span>
                            <p className="text-sm">دسته بندی کالاها</p>
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
                                    cursor-pointer
                                "
                                onClick={() => setShowCategories(item)}
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
                    className={`
                        ${showCategories ? " opacity-100" : "hidden"}
                        ${navScroll ? "" : "translate-y-[-50%] opacity-0"}
                        transition-all
                        min-w-full
                        min-h-screen
                        absolute
                        bottom-[-320px]
                        right-0
                        top-14
                        bg-blurbg
                        hidden
                    `}
                >
                    <div
                        className="
                            w-[90%]
                            mx-auto
                            bg-white
                            h-3/4
                            min-h-80
                            flex
                        "
                        onMouseLeave={() => setShowCategories(false)}
                    >

                       
                        <div
                            className="
                                w-[20%]
                                flex
                                flex-col
                                justify-between
                                bg-[#ecebeb]
                                pr-2
                                border-l
                                border-l-[#d9d9d9]
                                
                            "
                        >
                            {
                                rightCategories.map((item, index) => (
                                    <div
                                        key={index}
                                        className="
                                            w-full
                                            h-16
                                            flex
                                            items-center
                                            justify-center
                                            rounded-tr-xl
                                            rounded-br-xl
                                            bg-[#ecebeb]
                                            cursor-pointer
                                            hover:bg-white
                                            transition-all
                                            pl-0
                                            border-l
                                            border-l-[#d9d9d9]
                                            mr-[1px]
                                            hover:border
                                            hover:border-[#d9d9d9]
                                            hover:border-l-2
                                            hover:border-l-white
                                            mb-[5px]
                                        "
                                        onMouseEnter={() => setShowCategories(item)}
                                    >
                                        <p>{item}</p>
                                    </div>
                                ))
                            }
                        </div>


                        <div
                            className="
                                w-[80%]
                                flex
                                flex-col
                            "
                        >
                            {/* head categories */}
                            <div
                                className="
                                    w-[100%]
                                    flex
                                    flex-col
                                    justify-between
                                    mx-auto
                                    gap-10
                                    px-14
                                    pt-3
                                "
                            >
                                <p
                                    className="
                                        text-blue-800
                                    "
                                >
                                    همه محصولات
                                </p>
                                <div
                                    className="
                                        flex
                                        w-[100%]
                                        items-center
                                        justify-between
                                    "
                                >
                                    {
                                        headCategories.map((item, index) => (
                                            <div
                                                key={index}
                                                className="
                                                    flex
                                                    flex-col
                                                    justify-center
                                                    items-center
                                                    gap-4
                                                    hover:scale-110
                                                    transition-all
                                                    cursor-pointer
                                                "
                                            >
                                                <Image 
                                                    src="/"
                                                    width={300}
                                                    height={300}
                                                    className="
                                                        w-24
                                                        h-24
                                                        rounded-xl
                                                        border
                                                        hover:border-blue-800
                                                        hover:border-[2px]
                                                        transition-all
                                                    "
                                                    alt="alt"
                                                />
                                                <p>
                                                    دسته بندی
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>


                            {/* colums categories */}
                            <div
                                className="
                                    flex
                                    w-[100%]
                                    mx-auto
                                    justify-around
                                    flex-wrap
                                    overflow-y-scroll
                                    h-full
                                    p-2
                                    gap-11
                                    pb-8
                                "
                            >
                                {
                                    bottomCategories.map((item, index) => (
                                        <div
                                            key={index}
                                            className="
                                                w-[20%]
                                            "
                                        >
                                            <p>
                                                { item.title }
                                            </p>
                                            <div
                                                className="
                                                    border-b
                                                    border-b-[#d9d9d9]
                                                "
                                            >
                                                <div
                                                    className="
                                                        w-2/5
                                                        h-1
                                                        bg-[#afaeae]
                                                    "
                                                >

                                                </div>
                                            </div>
                                            <div
                                                className="
                                                    flex
                                                    flex-col
                                                    gap-3
                                                "
                                            >
                                                {
                                                    item.children.map((item, index) => (
                                                        <p
                                                            key={index}
                                                        >
                                                            { item }
                                                        </p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* burger Menu */}
            <div
                className={`
                    w-full
                    h-screen
                    md:hidden
                    bg-[#0a0a0a4d]   
                    absolute
                    top-0
                    right-0
                    ${burgerMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                    transition-all
                    duration-300
                    flex
                    justify-between
                `}
            >
                <div
                    className="
                        w-[75%]
                        h-full
                        bg-white
                    "
                >

                    {/* logo  */}
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            p-4
                            border-b
                            border-[#d9d9d9]
                        "
                    >
                        <Logo 
                            width="40px"
                            height="40px"
                            color="#1d434c"
                        />
                        <div
                            className="
                                text-evaamGreen
                                bg-evaamCyan
                                p-2
                                rounded-xl
                                flex
                            "
                        >
                            درخواست وام
                        </div>
                    </div>

                    {/* parts */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-6
                        "
                    >
                            <Link 
                                href="#"
                                className="
                                    border-b
                                    border-[#d9d9d9]
                                    p-3
                                    flex
                                    items-center
                                    
                                "
                            >
                                بلاگ
                            </Link>
                            <Link 
                                href="#"
                                className="
                                    border-b
                                    border-[#d9d9d9]
                                    px-3
                                    flex
                                    items-center
                                    pb-3
                                "
                            >
                                سوالات متدوال
                            </Link>
                            <div
                                className="
                                    flex
                                    w-full
                                    items-center
                                    justify-between
                                    border-b
                                    border-[#d9d9d9]
                                    pb-3
                                    px-3
                                "
                            >
                                <p>سایر</p>
                                <IoIosArrowDown />
                            </div>

                            <div
                                className="
                                    max-h-96
                                    overflow-y-scroll
                                "
                            >
                                <p
                                    className={`
                                        border-b
                                        border-[#d9d9d9]
                                        pb-5
                                        px-3
                                        text-blue-700
                                        ${ burgerChangeItems ? "hidden" : "flex"}
                                    `}
                                >
                                    دسته بندی محصولات
                                </p>
                                <div
                                    onClick={() => setBurgerChangeItems(false)}
                                >
                                    <p
                                        className={`
                                            border-b
                                            border-[#d9d9d9]
                                            pb-5
                                            px-3
                                            text-blue-700
                                            ${ burgerChangeItems ? "flex" : "hidden"}
                                        `}
                                    >
                                        بازگشت به دسته بندی ها
                                    </p>
                                </div>
                                {
                                    burgerChangeItems ? (
                                            <div
                                                className="
                                                    flex
                                                    flex-col
                                                    items-center
                                                    justify-center
                                                    gap-3
                                                    overflow-y-scroll
                                                "
                                            >
                                                {
                                                    headCategories.map(item => (
                                                        <div
                                                            key={item}
                                                            className="
                                                                flex
                                                                flex-col
                                                                items-center
                                                                justify-center
                                                                hover:scale-110
                                                                transition-all
                                                            "
                                                        >
                                                            <Image 
                                                                src="/"
                                                                width={300}
                                                                height={300}
                                                                className="
                                                                    h-20
                                                                    w-20
                                                                    rounded-xl
                                                                "
                                                                alt="alt"
                                                            />
                                                            <p>
                                                                دسته بندی
                                                            </p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                    ) : (
                                        categories.map((item, index) => (
                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                py-5
                                                px-3
                                                border-b
                                                border-b-[#d9d9d9]
                                            "
                                            onClick={() => setBurgerChangeItems(item)}
                                        >
                                            <p>{item}</p>
                                            <IoIosArrowDown />
                                        </div>
                                    )))
                                }
                            </div>
                    </div>
                </div>

                {/* cross buttom */}
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
        </header>
    )
}