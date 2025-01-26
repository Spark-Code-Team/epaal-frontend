import BeautyProduct from "../../public/image/beauty-pack.jpg";
import BeautyService from "../../public/image/beauty-service.jpg";

import PhoneProduct from "../../public/image/phone-kala.jpg";
import PhoneService from "../../public/image/phone-service.jpg";

import FixMobile from "../../public/image/fix-phone.jpg";
import MobileFacility from "../../public/image/mobile-fac.jpg";
import ChangingPhone from "../../public/image/change-phone.jpg";

import TrendingPhone from "../../public/image/trending.jpg";
import Iphone from "../../public/image/iphone.jpg";
import Samsung from "../../public/image/samsung.jpg";
import Xiami from "../../public/image/xiami.jpg";


export const categories = [
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