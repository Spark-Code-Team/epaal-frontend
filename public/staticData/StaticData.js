import s24 from "./s24.jpeg";
import iphone16 from "./iphone.jpeg";
import Redmi from "./RedmiNote.jpg";
import ps5 from "./ps5.jpeg";
import hp from "./hp.jpeg";
import dell from "./dell.jpeg";
import xbox from "./Xbox.jpeg";
import switchh from "./switch.jpeg";
import asus from "./asus.jpeg";

import Image from "next/image";
import bimeBazar from "@/../public/image/bimebazarr.png";
import matinn from "@/../public/image/matinn.png";
import daricc from "@/../public/image/daricc.png";
import zitroo from "@/../public/image/zitroo.png";
import techno from "@/../public/image/TechnoLife.svg";
import ali from "@/../public/image/AliBaba.svg";
import sabz from "@/../public/image/KheiliSabz.svg";
import khanomi from "@/../public/image/Khanoomi.svg";
import didar from "@/../public/image/Didar.svg";
import dewo from "@/../public/image/Daewoo.svg";
import sfood from "@/../public/image/SnappFood.svg";
import gshop from "@/../public/image/GooshiShop.svg";
import green from "@/../public/image/Green.svg";

export const StaticData = [
  {
    merchant: "تکنولایف",
    merchantIcon: techno,
    title: "گوشی موبایل سامسونگ s23 ultra دو سیم کارت ظرفیت 256 گیگابایت",
    price: "75,000,000",
    category: "phone",
    faCategory: "موبایل",
    memmory: ["256", "128", "512"],
    attrebites: [
      { id: 1, name: "رم", value: "32 گیگابایت" },
      { id: 2, name: "برند", value: "سامسونگ" },
      { id: 3, name: "اقلام همراه", value: "کابل type-c" },
      { id: 4, name: "رزولوشن دوربین اصلی", value: "48 مگاپیکسل" },
      { id: 5, name: "اندازه صفحه نمایش", value: "6.1 اینچ" },
      { id: 6, name: "کیفیت صفحه نمایش", value: "1920 در 1080 پیکسل" },
    ],
    id: 1,
    image: s24,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [
      {
        ram: "12 گیگابایت",
        mojod: true,
      },
      {
        ram: "8 گیگابایت",
        mojod: true,
      },
    ],
    information: [
      { id: 1, key: "ابعاد", value: "8.9 × 78.1 × 163.4 میلی‌متر" },
      {
        id: 2,
        key: "مدل",
        value:
          "Galaxy S23 Ultra ",
      },
      {
        id: 3,
        key: "مشخصات باتری",
        value: "باتری از نوع لیتیوم-یون با ظرفیت ۴۳۵۲ میلی‌آمپر‌ساعت",
      },
      {
        id: 4,
        key: "ویژگی های خاص",
        value:
          "مقاوم در برابر آب، مناسب عکاسی، مناسب عکاسی سلفی، مناسب بازی، مجهز به حس‌گر تشخیص چهره",
      },
      { id: 5, key: "نسخه سیستم عامل", value: "iOS ۱۵" },
      { id: 6, key: "پردازنده‌ مرکزی", value: "۲x Avalanche + ۴x Blizzard" },
    ],
  },
  {
    title: "iphone 16",
    price: "100",
    category: "phone",
    faCategory: "موبایل",
    memmory: ["256", "128", "512"],
    id: 2,
    image: iphone16,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [
      {
        ram: "12 گیگابایت",
        mojod: true,
      },
      {
        ram: "8 گیگابایت",
        mojod: true,
      },
    ],
  },
  {
    title: "Redmi note 8 xiaomi 128 گیگابایت",
    price: "12",
    category: "phone",
    faCategory: "موبایل",
    memmory: ["256", "128", "512"],
    id: 3,
    image: Redmi,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [
      {
        ram: "12 گیگابایت",
        mojod: true,
      },
      {
        ram: "8 گیگابایت",
        mojod: true,
      },
    ],
  },
  {
    title: "ps5",
    price: "49.300",
    category: "console",
    faCategory: "کنسول بازی",
    memmory: ["1 ترابایت"],
    id: 4,
    image: ps5,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [],
  },
  {
    title: "XBOX SERIES S",
    price: "32.500",
    category: "console",
    faCategory: "کنسول بازی",
    memmory: ["1 ترابایت"],
    id: 5,
    image: xbox,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [],
  },
  {
    title: "nintendo swich",
    price: "32.700",
    category: "console",
    faCategory: "کنسول بازی",
    memmory: ["128"],
    id: 6,
    image: switchh,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [],
  },
  {
    title: "labtop asus",
    price: "61.200",
    category: "labtop",
    faCategory: "لب تاپ",
    memmory: ["512", "1 ترابایت"],
    id: 7,
    image: asus,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [
      {
        ram: "12 گیگابایت",
        mojod: true,
      },
      {
        ram: "8 گیگابایت",
        mojod: true,
      },
    ],
  },
  {
    title: "labtop dell",
    price: "57.200",
    category: "labtop",
    faCategory: "لب تاپ",
    memmory: ["512", "1 ترابایت"],
    id: 8,
    image: dell,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [
      {
        ram: "12 گیگابایت",
        mojod: true,
      },
      {
        ram: "8 گیگابایت",
        mojod: true,
      },
    ],
  },
  {
    title: "labtop hp",
    price: "62",
    category: "labtop",
    faCategory: "لب تاپ",
    memmory: ["512", "1 ترابایت"],
    id: 9,
    image: hp,
    colors: [
      {
        color: "silver",
        title: "نقره ای",
        mojod: true,
      },
      {
        color: "gold",
        title: "طلایی",
        mojod: false,
      },
      {
        color: "navajowhite",
        title: "کرمی",
        mojod: false,
      },
    ],
    ram: [
      {
        ram: "12 گیگابایت",
        mojod: true,
      },
      {
        ram: "8 گیگابایت",
        mojod: true,
      },
    ],
  },
];
