import Image from "next/image";
import Link from "next/link";


import beh from "@/../public/image/behdasht.png"
import jwer from "@/../public/image/jewer.png"
import digit from "@/../public/image/digit.png"
import sanat from "@/../public/image/sanat.png"
import mobile from "@/../public/image/mobo.png"
import motor from "@/../public/image/moto.png"
import sport from "@/../public/image/sport.png"

const ProductCategories = () => {
  return (
    <>
      <div className="mx-auto mt-[700px] sm:mt-[430px] w-[90%] sm:w-[90%] lg:w-[90%] lg:mb-[100px]">
        <div className="w-full text-center text-xl">دسته بندی محصولات</div>

        <div className="m-auto mt-8 flex w-full flex-wrap justify-around lg:mt-10">
          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={mobile} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">موبایل</p>
            </Link>
          </div>

          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={jwer} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">زیورآلات</p>
            </Link>
          </div>

          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={digit} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">کالای دیجیتال</p>
            </Link>
          </div>

          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={motor} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">موتور سیکلت</p>
            </Link>
          </div>

          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={sport} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">لوازم خانگی</p>
            </Link>
          </div>

          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={sanat} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">ابزار صنعتی</p>
            </Link>
          </div>

          <div className="bg-gradient-to-t from-evaamCyan rounded-3xl to-gray-100 p-3">
            <Link href="">
              <Image src={beh} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">آرایشی بهداشتی</p>
            </Link>
          </div>

          {/* <div className="">
            <Link href="">
              <Image src={} alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">ورزش و سفر</p>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
