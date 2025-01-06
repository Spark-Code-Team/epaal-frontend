"use client";

import CartIcon from "../../../../public/icons/Cart";
import EvaamLogo from "../../../../public/icons/evaam-icon";
import Search from "@/components/elements/search";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import metroMan from "../../../../public/image/metroman.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

// images:
import BeautyProduct from "@/../public/image/beauty-pack.jpg";
import BeautyService from "@/../public/image/beauty-service.jpg";

import PhoneProduct from "@/../public/image/phone-kala.jpg";
import PhoneService from "@/../public/image/phone-service.jpg";

import FixMobile from "@/../public/image/fix-phone.jpg";
import MobileFacility from "@/../public/image/mobile-fac.jpg";
import ChangingPhone from "@/../public/image/change-phone.jpg";

import TrendingPhone from "@/../public/image/trending.jpg";
import Iphone from "@/../public/image/iphone.jpg";
import Samsung from "@/../public/image/samsung.jpg";
import Xiami from "@/../public/image/xiami.jpg";

const categories = [
  {
    id: 1,
    name: "گوشی موبایل",
    productImage: PhoneProduct,
    serviceImage: PhoneService,

    serviceCategories: [
      { id: 1, name: "تعمیرات گوشی", image: FixMobile },
      { id: 2, name: "تسهیلات گوشی", image: MobileFacility },
      { id: 3, name: "تعویض گوشی", image: ChangingPhone },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "تعمیرات گوشی",
        children: [
          "تعمیرات گوشی شیائومی",
          "تعمیرات گوشی سامسونگ",
          "تعمیرات گوشی آیفون",
        ],
      },
      {
        id: 2,
        title: "تسهیلات گوشی",
        children: ["تسهیلات گوشی سامسونگ", "تسهیلات گوشی آیفون"],
      },
      {
        id: 3,
        title: "تعویض گوشی",
        children: ["تعویض گوشی سامسونگ"],
      },
    ],

    categories: [
      { id: 1, name: "پرچمدار", image: TrendingPhone },
      { id: 2, name: "اپل", image: Iphone },
      { id: 3, name: "سامسونگ", image: Samsung },
      { id: 4, name: "شیائومی", image: Xiami },
    ],
    subCategories: [
      {
        id: 1,
        title: "اپل",
        children: ["آیفون 13", "آیفون 14", "آیفون 15", "آیفون 16"],
      },
      {
        id: 2,
        title: "سامسونگ",
        children: ["گلگسی S22", "گلگسی S23", "گلگسی S24"],
      },
      {
        id: 3,
        title: "شیائومی",
        children: ["پوکو X5", "13T", "ردمی نوت 13", "ردمی نوت 14 "],
      },
    ],
  },
  {
    id: 2,
    name: "دیجیتال",

    serviceCategories: [
      { id: 1, name: "پرچمدsار" },
      { id: 2, name: "اپsل" },
      { id: 3, name: "سامسونsگ" },
      { id: 4, name: "شیائومsی" },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["اsیسوس", "مsک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپs تاپ",
        children: ["ایسsوس", "sمک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["ایسsوس", "مsک", "لنوsو", "sدل", "sایسsر"],
      },
    ],

    categories: [
      { id: 1, name: "لپ تاپ" },
      { id: 2, name: "کنسول" },
      { id: 3, name: "موبایل" },
      { id: 4, name: "کامپیوتر" },
    ],
    subCategories: [
      {
        id: 1,
        title: "goshi",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
    ],
  },
  {
    id: 3,
    name: "لوازم خانگی برقی",
    serviceCategories: [
      { id: 1, name: "پرچمدsار" },
      { id: 2, name: "اپsل" },
      { id: 3, name: "سامسونsگ" },
      { id: 4, name: "شیائومsی" },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["اsیسوس", "مsک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپs تاپ",
        children: ["ایسsوس", "sمک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["ایسsوس", "مsک", "لنوsو", "sدل", "sایسsر"],
      },
    ],
    categories: [
      { id: 1, name: "جاروبرقی" },
      { id: 2, name: "ماکرویو" },
      { id: 3, name: "یخچال" },
      { id: 4, name: "قهوه ساز" },
    ],
    subCategories: [
      {
        id: 1,
        title: "barghi",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
    ],
  },
  {
    id: 4,
    name: "خانه و آشپزخانه",
    serviceCategories: [
      { id: 1, name: "پرچمدsار" },
      { id: 2, name: "اپsل" },
      { id: 3, name: "سامسونsگ" },
      { id: 4, name: "شیائومsی" },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["اsیسوس", "مsک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپs تاپ",
        children: ["ایسsوس", "sمک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["ایسsوس", "مsک", "لنوsو", "sدل", "sایسsر"],
      },
    ],
    categories: [
      { id: 1, name: "مبلمان" },
      { id: 2, name: "فرش و قالیچه" },
      { id: 3, name: "تلویزیون" },
      { id: 4, name: "ظروف آشپزخانه" },
    ],
    subCategories: [
      {
        id: 1,
        title: "khaneh",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
    ],
  },
  {
    id: 5,
    name: "موتورسیکلت و لوازم خودرو",
    serviceCategories: [
      { id: 1, name: "پرچمدsار" },
      { id: 2, name: "اپsل" },
      { id: 3, name: "سامسونsگ" },
      { id: 4, name: "شیائومsی" },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["اsیسوس", "مsک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپs تاپ",
        children: ["ایسsوس", "sمک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["ایسsوس", "مsک", "لنوsو", "sدل", "sایسsر"],
      },
    ],
    categories: [
      { id: 1, name: "هوندا" },
      { id: 2, name: "لنت ترمز" },
      { id: 3, name: "کویر" },
      { id: 4, name: "آینه" },
    ],
    subCategories: [
      {
        id: 1,
        title: "mmotor",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
    ],
  },
  {
    id: 6,
    name: "مد و پوشاک",
    serviceCategories: [
      { id: 1, name: "پرچمدsار" },
      { id: 2, name: "اپsل" },
      { id: 3, name: "سامسونsگ" },
      { id: 4, name: "شیائومsی" },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["اsیسوس", "مsک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپs تاپ",
        children: ["ایسsوس", "sمک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["ایسsوس", "مsک", "لنوsو", "sدل", "sایسsر"],
      },
    ],
    categories: [
      { id: 1, name: "پیراهن و تیشرت" },
      { id: 2, name: "شلوار" },
      { id: 3, name: "کت و شلوار" },
      { id: 4, name: "کفش" },
    ],
    subCategories: [
      {
        id: 1,
        title: "lebas",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
    ],
  },
  {
    id: 7,
    name: "زیبایی و سلامت",
    serviceCategories: [
      { id: 1, name: "پرچمدsار" },
      { id: 2, name: "اپsل" },
      { id: 3, name: "سامسونsگ" },
      { id: 4, name: "شیائومsی" },
    ],
    serviceSubCategories: [
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["اsیسوس", "مsک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپs تاپ",
        children: ["ایسsوس", "sمک", "لنوsو", "دsل", "ایسsر"],
      },
      {
        id: 1,
        title: "لپ sتاپ",
        children: ["ایسsوس", "مsک", "لنوsو", "sدل", "sایسsر"],
      },
    ],
    categories: [
      { id: 1, name: "مرطوب کننده ها" },
      { id: 2, name: "پاک کننده آرایش" },
      { id: 3, name: "عطر و ادکلن" },
      { id: 4, name: "مکمل های غذایی" },
    ],
    subCategories: [
      {
        id: 1,
        title: "zibaii",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
      {
        id: 1,
        title: "لپ تاپ",
        children: ["ایسوس", "مک", "لنوو", "دل", "ایسر"],
      },
    ],
  },
];

const headCategories = [0, 1, 2, 3, 4];

export default function ShopHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [navScroll, setNavScroll] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [burgerChangeItems, setBurgerChangeItems] = useState(false);

  const [isService, setIsService] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectCategoryName, setSelectCategoryName] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  const [selectedSub2Category, setSelectedSub2Category] = useState([]);
  const [selectServices, setSelectServices] = useState(false);
  const [selectServicesProdcutImage, setSelectServicesProdcutImage] =
    useState("");
  const [selectServicesImage, setSelectServicesImage] = useState("");

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

    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <header className="sticky top-0 z-10">
      <div className="z-50 flex items-center justify-between bg-white p-3 transition-all delay-[900ms] md:p-2">
        <div className="flex w-[20%] gap-4 md:w-[60%]">
          <div className="flex items-center gap-5 text-green-700">
            <RxHamburgerMenu
              className="flex h-6 w-6 md:hidden"
              onClick={() => setBurgerMenu(true)}
            />
            <EvaamLogo width="45px" height="45px" color="#166534" />
            <p className="hidden md:flex">ایوام</p>
          </div>
          <div className="hidden h-14 w-full md:flex">
            <Search />
          </div>
        </div>

        <div className="flex w-[45%] items-center justify-between md:w-[12%]">
          <div className="flex h-[26px] items-center justify-center rounded-lg border-2 border-[#9ED6D9] p-4 text-[13px]">
            حساب کاربری
          </div>

          <div className="flex h-[26px] w-[26px] items-center justify-center rounded-lg border-2 border-[#9ED6D9] p-4">
            <div>
              <CartIcon width="24px" height="24px" color="#475569" />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`z-0 flex items-center justify-between bg-white p-2 transition-all duration-300 ${navScroll ? "translate-y-[0] opacity-100" : "translate-y-[-5%] opacity-0"} relative`}
      >
        <div className="mx-auto flex h-12 w-full md:hidden">
          <Search />
        </div>

        <div className="hidden w-[88%] items-center justify-between md:flex">
          <div
            className="w-fit cursor-pointer rounded-xl bg-[#b5f7ee80] p-2 text-[#007c7d] transition-all ease-in-out hover:bg-green-200"
            onClick={() => setShowCategories(true)}
          >
            دسته بندی کالاها
          </div>

          <div>|</div>

          {categories.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-1 rounded-lg p-3 text-[13px] transition-all ease-in-out hover:bg-green-200"
              onClick={() => {
                setShowCategories(true);
                setSelectedCategory(item.id);
                setSelectedSubCategory(item.categories);
                setSelectedSub2Category(item.subCategories);
                setSelectCategoryName(item.name);
                setSelectServicesImage(item.serviceImage);
                setSelectServicesProdcutImage(item.productImage);
              }}
            >
              <p>{item.name}</p>
              <IoIosArrowDown width={24} height={24} />
            </div>
          ))}
        </div>

        <div className="hidden rounded-xl bg-green-200 p-2 text-green-600 md:flex">
          درخواست وام
        </div>

        {/* categories */}
        <div
          className={` ${showCategories ? "opacity-100" : "hidden"} ${navScroll ? "" : "translate-y-[-50%] opacity-0"} absolute bottom-[-320px] right-0 top-14 min-h-screen min-w-full bg-blurbg transition-all`}
        >
          <div
            className={`mx-auto h-3/4 min-h-80 w-[90%] bg-[#ecebeb] ${selectServices ? "flex" : "flex flex-row"} `}
            onMouseLeave={() => {
              setShowCategories(false);
              setSelectServices(false);
            }}
          >
            {/* header categories */}
            {/* select type of service */}
            <div
              className={` ${selectServices ? "flex w-[20%] flex-col justify-evenly border-l border-l-[#d9d9d9] bg-[#ecebeb] pr-2" : "flex w-[100%] flex-row items-center justify-evenly"} `}
            >
              <div
                className="flex h-60 w-60 flex-col items-center justify-evenly transition-all ease-in-out hover:shadow-lg"
                onClick={() => {
                  setIsService(true);
                  setSelectServices(true);
                }}
              >
                <Image
                  className="rounded-xl"
                  src={selectServicesImage}
                  height={selectServices ? 150 : 300}
                  width={selectServices ? 150 : 300}
                  alt="service image"
                />
                <div className="mt-5">خدمات {selectCategoryName}</div>
              </div>

              <div
                className="flex h-60 w-60 flex-col items-center justify-evenly transition-all ease-in-out hover:shadow-lg"
                onClick={() => {
                  setIsService(false);
                  setSelectServices(true);
                }}
              >
                <Image
                  className="rounded-xl"
                  src={selectServicesProdcutImage}
                  height={selectServices ? 150 : 300}
                  width={selectServices ? 150 : 300}
                  alt="service image"
                />
                <div className="mt-5">کالای {selectCategoryName}</div>
              </div>
            </div>
            {/* select type of service */}
            <div
              className={` ${selectServices ? "block" : "hidden"} flex w-[20%] flex-col justify-between border-l border-l-[#d9d9d9] bg-[#ecebeb] pr-2`}
            >
              {isService && selectServices ? (
                <>
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className={` ${selectServices ? "block" : "hidden"} rousnded-tr-xl flex h-16 w-full items-center justify-center rounded-br-xl ${item.id === selectedCategory ? "bg-[#d9d9d9]" : "bg-none"} mb-[5px] mr-[1px] cursor-pointer border-l border-l-[#d9d9d9] pl-0 transition-all hover:border hover:border-l-2 hover:border-[#d9d9d9] hover:border-l-white`}
                      onMouseEnter={() => {
                        setShowCategories(item.name);
                        setSelectedCategory(item.id);
                        setSelectedSubCategory(item.serviceCategories);
                        setSelectedSub2Category(item.serviceSubCategories);
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {categories.map((item, index) => (
                    <div
                      key={index}
                      className={` ${selectServices ? "block" : "hidden"} rousnded-tr-xl flex h-16 w-full items-center justify-center rounded-br-xl ${item.id === selectedCategory ? "bg-[#d9d9d9]" : "bg-none"} mb-[5px] mr-[1px] cursor-pointer border-l border-l-[#d9d9d9] pl-0 transition-all hover:border hover:border-l-2 hover:border-[#d9d9d9] hover:border-l-white`}
                      onMouseEnter={() => {
                        setShowCategories(item.name);
                        setSelectedCategory(item.id);
                        setSelectedSubCategory(item.categories);
                        setSelectedSub2Category(item.subCategories);
                      }}
                    >
                      <p>{item.name}</p>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div
              className={` ${selectServices ? "block" : "hidden"} flex w-[80%] flex-col`}
            >
              {/* head categories */}
              <div className="mx-auto flex w-[100%] flex-col justify-between gap-10 px-14 pt-3">
                <p className="text-blue-800">همه محصولات</p>
                <div className="flex w-[100%] items-center justify-between">
                  {selectedSubCategory.map((item, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer flex-col items-center justify-center gap-4 transition-all hover:scale-110"
                    >
                      <Image
                        src={item.image}
                        width={300}
                        height={300}
                        className="h-24 w-24 rounded-xl border transition-all hover:border-[2px] hover:border-blue-800"
                        alt="alt"
                      />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* colums categories */}
              <div className="mx-auto flex h-full w-[100%] flex-wrap justify-around gap-11 overflow-y-scroll p-2 pb-8">
                {selectedSub2Category.map((item, index) => (
                  <div key={index} className="mt-5 w-[20%]">
                    <p>{item.title}</p>
                    <div className="border-b border-b-[#d9d9d9]">
                      <div className="h-1 w-2/5 bg-[#afaeae]"></div>
                    </div>
                    <div className="mt-4 flex flex-col gap-3">
                      {item.children.map((item, index) => (
                        <div
                          className="cursor-pointer rounded-md p-1 transition-all ease-in-out hover:shadow-xl"
                          key={index}
                        >
                          {item}
                        </div>
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
        className={`absolute top-0 h-screen w-screen bg-[#0a0a0a4d] md:hidden ${burgerMenu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex justify-between transition-all duration-300`}
      >
        <div className="h-full w-[75%] bg-white">
          {/* logo  */}
          <div className="flex items-center justify-between border-b border-[#d9d9d9] p-4">
            <div className="flex items-center gap-3">
              <EvaamLogo width="35px" height="35px" color="blue" />
              <p>ایپال</p>
            </div>
            <div className="flex rounded-xl bg-[#c1def0] p-2 text-blue-800">
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
                        src={metroMan}
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
                    onClick={() => setBurgerChangeItems(item.name)}
                  >
                    <p>{item.name}</p>
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
