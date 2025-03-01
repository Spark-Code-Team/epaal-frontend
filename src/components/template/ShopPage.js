"use client";

import Image from "next/image";
import ArrowBannerIcon from "../../../public/icons/ArrowBannerIcon";

//images:
import laptop from "@/../public/image/laptop.svg";
import CategoryCard from "../elements/categoryCard";

import ShopCart from "../elements/ShopCart";
import ShopTitle from "../elements/ShopTitle";
import FlashButton from "../elements/FlashButton";

import motor from "../../../public/image/motorShop.png";
import kitchen from "../../../public/image/kitchen.png";
import { useEffect, useState } from "react";
import { GETAllProducts } from "@/service/products";
import { toast } from "react-toastify";

const alaki = [1, 2, 3, 4, 5, 6, 7, 8];

export default function shop() {
  const [products, setProducts] = useState([]);

  const categories = [
    { id: 1, name: "کالای دیجیتال", icon: laptop, alt: "1.jpg" },
    { id: 2, name: "لوازم خانگی برقی", icon: laptop, alt: "2.jpg" },
    { id: 3, name: "زیبایی و سلامت", icon: laptop, alt: "3.jpg" },
    { id: 4, name: "مد و پوشاک", icon: laptop, alt: "4.jpg" },
    { id: 5, name: "موبایل", icon: laptop, alt: "5.jpg" },
    { id: 6, name: "خانه و آشپزخانه", icon: laptop, alt: "6.jpg" },
    { id: 7, name: "موتورسیکلت", icon: laptop, alt: "7.jpg" },
  ];

  //! temp product | must change logic of fetching:
  useEffect(() => {
    async function fetchProducts() {
      const { response, error } = await GETAllProducts();
      if (response) {
        setProducts(response.data);
      } else {
        toast.error("failed");
      }
    }

    // calling fetch products func:
    fetchProducts();
  }, []);

  console.log("================= products -> \n", products);

  //! temp product | must change logic of fetching:

  return (
    <>
      <div className="my-10 flex h-auto w-full flex-col items-center justify-self-center md:w-[90%]">
        <div
          className="flex h-96 w-[95%] flex-row items-center rounded-3xl bg-[length:200%_400%] bg-center bg-no-repeat object-contain"
          style={{
            backgroundImage: `url("/image/main-banner.svg")`,
          }}
        >
          <div className="flex h-[80%] w-1/2 flex-col items-start justify-evenly p-4 md:p-16">
            <div>
              <h1 className="text-lg font-extrabold text-white md:text-3xl">
                خرید اعتباری با ایوام
              </h1>
            </div>
            <div>
              <p className="text-[8.0px] text-sm font-normal text-white md:w-3/4 md:text-[15px]">
                با دریافت طرح های اعتبای میتوانید خرید خود را به صورت اقساط
                انجام دهید.
              </p>
            </div>
            <button className="flex flex-row items-center justify-between rounded-xl bg-white px-4 py-2 text-[10px] text-evaamGreen md:text-lg">
              <div>دریافت طرح اعتباری</div>
              <div>
                <ArrowBannerIcon color="#1D434C" />
              </div>
            </button>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-evenly">
            <Image
              src={"/image/playstation.png"}
              width={300}
              height={300}
              alt="banner.jpg"
              className="h-[200px] w-[200px] md:h-[500px] md:w-[500px]"
            />
          </div>
        </div>
        <div className="my-12 flex w-full flex-row flex-wrap items-center justify-center gap-5 md:my-20">
          {categories.map((c) => (
            <div key={c.id}>
              <CategoryCard category={c} />
            </div>
          ))}
        </div>
        <div className="w-full px-3">
          <ShopTitle title="پربازدیدترین محصولات موتورسیکلت" />
          <div className="no-scrollbar my-7 flex w-full gap-[20px] overflow-x-scroll py-2 md:gap-7">
            {products.length >= 1 ? (
              <>
                {products.map((item) => (
                  <ShopCart products={item} key={item.id} icon={kitchen} />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          <FlashButton title={"مشاهده همه"} />
        </div>

        {/* second banner */}
        <div className="flex h-96 w-[95%] flex-row items-center rounded-3xl bg-gradient-to-r from-violet-900 to-blue-800">
          <div className="flex h-[80%] w-1/2 flex-col items-start justify-evenly p-4 md:p-16">
            <div>
              <h1 className="text-[17px] font-extrabold text-white md:text-3xl">
                لذت شنیدن موسیقی
              </h1>
            </div>
            <div>
              <p className="text-[10.0px] font-normal text-white md:w-3/4 md:text-xl">
                خرید اقساطی انواع هدفون و هدست
              </p>
            </div>
            <button className="flex flex-row items-center justify-between rounded-xl bg-white px-4 py-2 text-[10px] text-evaamGreen md:text-lg">
              <div>دریافت طرح اعتباری</div>
              <div>
                <ArrowBannerIcon color="#1D434C" />
              </div>
            </button>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-evenly">
            <Image
              src={"/image/headset.png"}
              width={300}
              height={300}
              alt="banner.jpg"
              className="h-[200px] w-[300px] md:h-[500px] md:w-[800px]"
            />
          </div>
        </div>
        {/* second banner */}

        {/* kitchen */}
        <div className="my-20 w-full px-3">
          <ShopTitle title="پرفروش ترین لوازم خانگی برقی" />
          <div className="no-scrollbar my-7 flex w-full gap-[20px] overflow-x-scroll py-2 md:gap-7">
            {products.length >= 1 ? (
              <>
                {products.map((item) => (
                  <ShopCart products={item} key={item.id} icon={kitchen} />
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* kitchen */}

        {/* third banner */}

        <div className="flex h-96 w-[95%] flex-row items-center rounded-3xl bg-gradient-to-l from-red-900 to-red-600">
          <div className="flex w-1/2 flex-col items-center justify-evenly">
            <Image
              src={"/image/home.png"}
              width={300}
              height={300}
              alt="banner.jpg"
              className="h-[200px] w-[300px] md:h-[500px] md:w-[800px]"
            />
          </div>
          <div className="flex h-[80%] w-1/2 flex-col items-start justify-evenly p-4 md:p-16">
            <div className="w-full">
              <h1 className="text-[17px] font-extrabold text-white md:text-4xl">
                لوازم خانگی برقی
              </h1>
            </div>
            <div className="w-full">
              <p className="text-[10.0px] font-normal text-white md:w-full md:text-3xl">
                خرید اقساطی انواع خانگی برقی
              </p>
            </div>
            <button className="flex flex-row items-center justify-between rounded-xl bg-white px-4 py-2 text-[10px] text-red-600 md:text-lg">
              <div>دریافت طرح اعتباری</div>
              <div>
                <ArrowBannerIcon color="#FF0000" />
              </div>
            </button>
          </div>
        </div>
        {/* third banner */}
      </div>
    </>
  );
}
