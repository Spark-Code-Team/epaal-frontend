"use client"

import CartIcon from "../../../../public/icons/Cart";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Search from "@/components/elements/search";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import metroMan from "../../../../public/image/metroman.jpg"
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";


// images:
import BeautyProduct from "@/../public/image/beauty.png"
import BeautyService from "@/../public/image/beauty-service.jpg"


const categories = [
    {
        id: 1,
        name: "گوشی موبایل",
        productImage: BeautyProduct,
        serviceImage: BeautyService,
        categories: [
            {id: 1 , name: "پرچمدار"},
            {id: 2, name: "اپل"},
            {id: 3, name: "سامسونگ"},
            {id: 4, name: "شیائومی"},
        ],
        subCategories: [
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
    },
    {
        id: 2,
        name:  "کالای دیجیتال",
        categories: [
            {id: 1 , name: "لپ تاپ"},
            {id: 2, name: "کنسول"},
            {id: 3, name: "موبایل"},
            {id: 4, name: "کامپیوتر"},
        ]
        ,
        subCategories: [
            {   
                id: 1,
                title: 'goshi',
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
        
    },
    {
        id: 3,
        name: "لوازم خانگی برقی",
        categories: [
            {id: 1 , name: "جاروبرقی"},
            {id: 2, name: "ماکرویو"},
            {id: 3, name: "یخچال"},
            {id: 4, name: "قهوه ساز"},
        ]
        ,
        subCategories: [
            {   
                id: 1,
                title: "barghi",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
    },
    {
        id: 4,
        name: "خانه و آشپزخانه",
        categories: [
            {id: 1 , name: "مبلمان"},
            {id: 2, name: "فرش و قالیچه"},
            {id: 3, name: "تلویزیون"},
            {id: 4, name: "ظروف آشپزخانه"},
        ],
        subCategories: [
            {   
                id: 1,
                title: "khaneh",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
    },
    {
        id: 5,
        name: "موتورسیکلت و لوازم خودرو",
        categories: [
            {id: 1 , name: "هوندا"},
            {id: 2, name: "لنت ترمز"},
            {id: 3, name: "کویر"},
            {id: 4, name: "آینه"},
        ],
        subCategories: [
            {   
                id: 1,
                title: "mmotor",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
    },
    {
        id: 6,
        name:  "مد و پوشاک",
        categories: [
            {id: 1 , name: "پیراهن و تیشرت"},
            {id: 2, name: "شلوار"},
            {id: 3, name: "کت و شلوار"},
            {id: 4, name: "کفش"},
        ],
        subCategories: [
            {   
                id: 1,
                title: "lebas",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
    },
    {
        id: 7,
        name:  "زیبایی و سلامت",
        categories: [
            {id: 1 , name: "مرطوب کننده ها"},
            {id: 2, name: "پاک کننده آرایش"},
            {id: 3, name: "عطر و ادکلن"},
            {id: 4, name: "مکمل های غذایی"},
        ],
        subCategories: [
            {   
                id: 1,
                title: "zibaii",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
            {   
                id: 1,
                title: "لپ تاپ",
                children: [
                    "ایسوس",
                    "مک",
                    "لنوو",
                    "دل",
                    "ایسر",
                ]
            },
        ]
    },   
   
]

// const rightCategories = [
//     {
//         id: 1,
//         name: "گوشی موبایل",
//     },
//     {
//         id: 2,
//         name:  "کالای دیجیتال",
//     },
//     {
//         id: 3,
//         name: "لوازم خانگی برقی",
//     },
//     {
//         id: 4,
//         name: "خانه و آشپزخانه",
//     },
//     {
//         id: 5,
//         name: "موتورسیکلت و خودرو",
//     },
//     {
//         id: 6,
//         name:  "مد و پوشاک",
//     },
//     {
//         id: 7,
//         name:  "زیبایی و سلامت"
//     },   
// ]

const headCategories = [
    0,
    1,
    2,
    3,
    4
]

// const bottomCategories = [
//     {   
//         id: 1,
//         title: "لپ تاپ",
//         children: [
//             "ایسوس",
//             "مک",
//             "لنوو",
//             "دل",
//             "ایسر",
//         ]
//     },
//     {
//         id:2,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {
//         id:3,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {
//         id:4,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {
//         id:5,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {
//         id:6,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {
//         id:7,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {
//         id:8,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
//     {   
//         id:9,
//         title: "title",
//         children: [
//             "child1",
//             "child2",
//             "child3",
//             "child4",
//             "child5",
//         ]
//     },
// ]


export default function ShopHeader() {

  const [scrollY, setScrollY] = useState(0)
  const [navScroll, setNavScroll] = useState(true)
  const [showCategories, setShowCategories] = useState(false)
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [burgerChangeItems, setBurgerChangeItems] = useState(false)

  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectCategoryName, setSelectCategoryName] = useState("")
  const [selectedSubCategory, setSelectedSubCategory] = useState([])
  const [selectedSub2Category, setSelectedSub2Category] = useState([])
  const [selectServices, setSelectServices] = useState(false)
  const [selectServicesProdcutImage, setSelectServicesProdcutImage] = useState("")
  const [selectServicesImage, setSelectServicesImage] = useState("")
  

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
                        <EvaamLogo 
                            width="45px"
                            height="45px"
                            color="blue"
                        />
                        <p
                            className="
                                hidden
                                md:flex
                            "
                        >
                            ایوام
                        </p>
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
                    className="
                        flex
                        items-center
                        justify-between
                        md:w-[12%]
                        w-[45%]
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
                            cursor-pointer
                            hover:bg-green-200
                            transition-all
                            ease-in-out
                        "
                        onClick={() => setShowCategories(true)}
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
                                    cursor-pointer
                                    hover:bg-green-200
                                    transition-all
                                    ease-in-out
                                    p-3
                                    rounded-lg
                                "
                                onClick={() => {
                                setShowCategories(true)
                                setSelectedCategory(item.id)
                                setSelectedSubCategory(item.categories)
                                setSelectedSub2Category(item.subCategories)
                                setSelectCategoryName(item.name)
                                setSelectServicesImage(item.serviceImage)
                                setSelectServicesProdcutImage(item.productImage)
                                }}
                            >
                                <p>{item.name}</p>
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
                        text-green-600
                        bg-green-200
                        p-2
                        rounded-xl
                        md:flex
                        hidden
                    "
                >
                    درخواست وام
                </div>
                
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
                    `}
                >
                    <div
                        className={`
                            w-[90%]
                            mx-auto
                            bg-[#ecebeb]
                            h-3/4
                            min-h-80
                            ${selectServices ? 'flex' : 'flex flex-row'}
                        `}
                        onMouseLeave={() => {setShowCategories(false)
                            setSelectServices(false)
                        }}
                    >

                        {/* header categories */}
                        {/* select type of service */}
                        <div
                            className={`
                                ${selectServices ? 'w-[20%] flex flex-col justify-evenly bg-[#ecebeb] pr-2 border-l border-l-[#d9d9d9]' : 'w-[100%] flex flex-row items-center justify-evenly'}
                            `}
                        >
                           <div className="h-60 w-60 bg-green-300 flex flex-col items-center justify-evenly" onClick={()=>setSelectServices(false)}>
                            
                            <Image
                                src={selectServicesImage}
                                height={300}
                                width={300}
                                alt='service image'
                            />
                            خدمات {selectCategoryName}</div>
                                        
                           <div className="h-60 w-60 bg-green-300 flex flex-col items-center justify-evenly" onClick={()=>setSelectServices(true)} >
                            
                            <Image
                                src={selectServicesProdcutImage}
                                height={100}
                                width={100}
                                alt='service image'
                            />
                            کالای {selectCategoryName}</div>
                                  
                                
                            
                        </div>
                        {/* select type of service */}
                        <div
                            className=
                            {  
                                `
                                ${selectServices ? 'block' : 'hidden'}
                                w-[20%]
                                flex
                                flex-col
                                justify-between
                                bg-[#ecebeb]
                                pr-2
                                border-l
                                border-l-[#d9d9d9]`
                            }
                            
                        >
                            {
                                categories.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`
                                            ${selectServices ? 'block' : 'hidden'}
                                            w-full
                                            h-16
                                            flex
                                            items-center
                                            justify-center
                                            rousnded-tr-xl
                                            rounded-br-xl
                                            ${item.id === selectedCategory ? "bg-[#d9d9d9]" : "bg-none"}
                                            cursor-pointer
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
                                        `}
                                        onMouseEnter={() => {
                                            setShowCategories(item.name)
                                setSelectedCategory(item.id)
                                setSelectedSubCategory(item.categories)
                                setSelectedSub2Category(item.subCategories)
                                        }
                                        
                                        }
                                    >
                                        <p>{item.name}</p>
                                    </div>
                                ))
                            }
                        </div>


                        <div
                            className={`
                                ${selectServices ? 'block': 'hidden'}
                                w-[80%]
                                flex
                                flex-col
                            `}
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
                                        
                                        selectedSubCategory.map((item, index) => (
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
                                                    src={metroMan}
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
                                                    {item.name}
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
                                    selectedSub2Category.map((item, index) => (
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
                    w-screen
                    h-screen
                    md:hidden
                    bg-[#0a0a0a4d]   
                    absolute
                    top-0
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
                        <div
                            className="
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <EvaamLogo 
                                width="35px"
                                height="35px"
                                color="blue"
                            />
                            <p>
                                ایپال      
                            </p>
                        </div>
                        <div
                            className="
                                text-blue-800
                                bg-[#c1def0]
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
                                                                src={metroMan}
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
                                            onClick={() => setBurgerChangeItems(item.name)}
                                        >
                                            <p>{item.name}</p>
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