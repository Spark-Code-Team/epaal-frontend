import Carousel from "../elements/carousel";
import Link from "next/link";
import Image from "next/image";

import Search from "../elements/search";

import test1 from "@/../public/image/c1.jpg";
import test2 from "@/../public/image/c2.png";
import test3 from "@/../public/image/c3.jpg";

import CategoryCard from "../elements/categoryCard";
import mobilesCategory from "@/../public/image/mobilesCategory.png";
import digitalsCategory from "@/../public/image/digitalsCategory.png";
import homeCategory from "@/../public/image/homeCategory.png";
import ProductCard from "../elements/productCard";

import banner1 from "@/../public/image/banner1.png";
import banner2 from "@/../public/image/banner2 .png";
import banner3 from "@/../public/image/banner3.png";
import banner5 from "@/../public/image/banner5.png";
import banner6 from "@/../public/image/banner6.png";
import banner8 from "@/../public/image/banner8.png";
import banner9 from "@/../public/image/banner9.png";
import banner10 from "@/../public/image/banner10.png";

import Yamaha150 from "@/../public/image/yamaha150.png";
import Kavir180 from "@/../public/image/kavir180.png";
import Cross180 from "@/../public/image/cross180.png";
import Yamaha160 from "@/../public/image/yamaha160.png";
import Vego110 from "@/../public/image/vego110.png";

import iphone12 from "@/../public/image/iphon12.png";
import sam23 from "@/../public/image/sam23.png";
import ip12power from "@/../public/image/ip12w.png";
import sam50 from "@/../public/image/sam-a50.png";
import sam70 from "@/../public/image/sam-a70.png";
import samfe from "@/../public/image/sam-fe.png";

import iwatch2 from "@/../public/image/iwatch2.png";
import iwatch3 from "@/../public/image/iwatch3.png";
import airpod from "@/../public/image/airpod.png";
import m3 from "@/../public/image/m3.png";

import Iphone from "@/../public/image/iphone.jpg";
import Samsung from "@/../public/image/samsung.jpg";
import Xiami from "@/../public/image/xiami.jpg";

import IphoneProduct from "@/../public/image/iphone-prod.png";
import { StaticData } from "../../../public/staticData/StaticData";


export default function shop() {
  const images = [test1, test2, test3];
  return (
    <>
      <div className="w-full">
        <Carousel images={images} />
      </div>
      <div className="my-4 grid grid-cols-3 place-items-center gap-2 p-2 sm:grid-cols-1">
        <div className="mx-auto mt-20 w-[90%] sm:w-[90%] lg:w-[90%]">
          <div className="w-full text-center text-xl">دسته بندی محصولات</div>

          <div className="m-auto mt-8 flex w-full flex-wrap justify-around lg:mt-10">
            <div className="">
              <Link href="shopping-evaam/phone">
                <Image src="/image/2.webp" alt={""} width={130} height={130} />
                <p className="mt-1 text-center text-base">موبایل</p>
              </Link>
            </div>

            <div className="">
              <Link href="#">
                <Image src="/image/3.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">زیورآلات</p>
              </Link>
            </div>

            <div className="">
              <Link href="shopping-evaam/labtop">
                <Image src="/image/4.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">لپ تاپ</p>
              </Link>
            </div>

            <div className="">
              <Link href="#">
                <Image src="/image/5.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">موتور سیکلت</p>
              </Link>
            </div>

            <div className="">
              <Link href="shopping-evaam/console">
                <Image src="/image/6.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">کنسول بازی</p>
              </Link>
            </div>

            <div className="">
              <Link href="#">
                <Image src="/image/7.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">ابزار صنعتی</p>
              </Link>
            </div>

            <div className="">
              <Link href="#">
                <Image src="/image/8.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">آرایشی بهداشتی</p>
              </Link>
            </div>

            <div className="">
              <Link href="#">
                <Image src="/image/9.webp" alt="alt" width={130} height={130} />
                <p className="mt-1 text-center text-base">ورزش و سفر</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={banner1}
        alt="banner1"
        width={1000}
        height={1000}
        className="lg:h-auto lg:w-full"
      />

      {/* papular phones */}
      <div className="mt-10 flex flex-col items-center gap-5 lg:w-full">
        <div>برندهای محبوب گوشی</div>
        <div className="lg: flex w-full flex-row items-center justify-evenly">
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={Xiami}
              width={150}
              height={150}
              className="rounded-lg transition-all ease-in-out hover:shadow-lg"
              alt="phone-photo"
            />
            <div>شیائومی</div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={Iphone}
              width={150}
              height={150}
              className="rounded-lg transition-all ease-in-out hover:shadow-lg"
              alt="phone-photo"
            />
            <div>اپل</div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={Samsung}
              width={150}
              height={150}
              className="rounded-lg transition-all ease-in-out hover:shadow-lg"
              alt="phone-photo"
            />
            <div>سامسونگ</div>
          </div>
        </div>
      </div>
      {/* papular phones */}

      {/* tow banners */}
      <div className="justify-evenl mt-10 flex flex-row items-center gap-5 lg:w-full">
        <div>
          <Image src={banner2} width={1000} height={1000} className="" alt="alt" />
        </div>
        <div>
          <Image src={banner3} width={1000} height={1000} className="" alt="alt" />
        </div>
      </div>
      {/* tow banners */}

      {/* apple products */}
      <div>
        <div className="mt-10 pr-5 text-green-700">محصولات اپل</div>
        <div className="no-scrollbar container my-4 mt-4 grid grid-flow-col gap-2 overflow-y-scroll p-2">
          <ProductCard
            image={IphoneProduct}
            className="!bg-gradient-to-tl from-green-600 to-yellow-200"
            title={
              <button className="w-3/4 rounded-md border-2 border-solid border-yellow-300 py-2 font-bold text-black sm:w-48">
                مشاهده همه
              </button>
            }
          />

          {
            StaticData.map(item => (
              <ProductCard 
                variant="new"
                title={item.title}
                image={item.image}
                price={item.price}
                key={item.id}
                href={`/shopping-evaam/products/${item.id}`}
              />
            ))
          }
        </div>
      </div>
      {/* apple products */}

      {/* papular homies */}
      <div className="mt-10 flex flex-col items-center gap-5 lg:w-full">
        <div>برندهای محبوب گوشی</div>
        <div className="lg: flex w-full flex-row items-center justify-evenly">
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={Xiami}
              width={150}
              className="rounded-lg transition-all ease-in-out hover:shadow-lg"
              alt="phone-photo"
            />
            <div>شیائومی</div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={Iphone}
              width={150}
              className="rounded-lg transition-all ease-in-out hover:shadow-lg"
              alt="phone-photo"
            />
            <div>اپل</div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={Samsung}
              width={150}
              className="rounded-lg transition-all ease-in-out hover:shadow-lg"
              alt="phone-photo"
            />
            <div>سامسونگ</div>
          </div>
        </div>
      </div>
      {/* papular homies */}

      {/* tow banners */}
      <div className="justify-evenl mt-10 flex flex-row items-center gap-5 lg:w-full">
        <div>
          <Image src={banner5} width={1000} className="" />
        </div>
        <div>
          <Image src={banner6} width={1000} className="" />
        </div>
      </div>
      {/* tow banners */}

      {/* papular products */}
      <div>
        <div className="mt-10 pr-5 text-green-700">پرفروش ترین محصولات</div>
        <div className="no-scrollbar container my-4 mt-4 grid grid-flow-col gap-4 overflow-y-scroll p-2">
          <ProductCard
            variant="new"
            discount={15}
            price={69700000}
            image={iphone12}
            title="گوشی آیفون 12 256 گیگ رم 12"
          />
          <ProductCard
            variant="new"
            discount={15}
            price={69700000}
            image={sam23}
            title=""
          />
          <ProductCard
            price={75000000}
            image={ip12power}
            title="گوشی آیفون 12 256 گیگ رم 12 به همراه شارژر 70 واتی"
          />
          <ProductCard
            variant="off"
            discount={15}
            price={69700000}
            image={sam50}
            title="گوشی سامسونگ A50 256 گیگ رم 8 - دو سیم کارت"
          />
          <ProductCard
            variant="off"
            discount={15}
            price={19700000}
            image={samfe}
            title="گوشی سامسونگ FE 512 گیگ رم 8 - دو سیم کارت"
          />
        </div>
      </div>
      {/* papular products */}

      {/* three banners */}
      <div className="justify-evenl mt-10 flex flex-row items-center gap-5 lg:w-full">
        <div>
          <Image src={banner8} width={1000} className="" />
        </div>
        <div>
          <Image src={banner9} width={1000} className="" />
        </div>
        <div>
          <Image src={banner10} width={1000} className="" />
        </div>
      </div>
      {/* three banners */}

      {/* motorcycle products */}
      <div>
        <div className="mt-10 pr-5 text-green-700">محصولات موتورسیکلت</div>
        <div className="no-scrollbar container my-4 mt-4 grid grid-flow-col gap-4 overflow-y-scroll p-2">
          <ProductCard
            image={Kavir180}
            className="!bg-gradient-to-tl from-green-600 to-yellow-200"
            title={
              <button className="w-3/4 rounded-md border-2 border-solid border-yellow-300 py-2 font-bold text-black sm:w-48">
                مشاهده همه
              </button>
            }
          />
          <ProductCard
            variant="new"
            discount={15}
            price={169700000}
            image={Yamaha150}
            title="موتور یاماها 150cc"
          />
          <ProductCard
            price={239000000}
            image={Cross180}
            title="موتور کراس 180cc کویر"
          />
          <ProductCard
            variant="off"
            discount={15}
            price={569700000}
            image={Yamaha160}
            title="موتور یاماها 160cc"
          />
          <ProductCard
            variant="off"
            discount={15}
            price={69700000}
            image={Vego110}
            title="موتور وگو 110"
          />
        </div>
      </div>
      {/* motorcycle products */}
    </>
  );
}
