import Image from "next/image";
import Link from "next/link";

const ProductCategories = () => {
  return (
    <>
      <div className="mx-auto mt-[430px] w-[90%] sm:w-[90%] lg:w-[90%] lg:mb-[100px]">
        <div className="w-full text-center text-xl">دسته بندی محصولات</div>

        <div className="m-auto mt-8 flex w-full flex-wrap justify-around lg:mt-10">
          <div className="">
            <Link href="">
              <Image src="/image/2.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">موبایل</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/3.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">زیورآلات</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/4.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">کالای دیجیتال</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/5.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">موتور سیکلت</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/6.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">لوازم خانگی</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/7.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">ابزار صنعتی</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/8.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">آرایشی بهداشتی</p>
            </Link>
          </div>

          <div className="">
            <Link href="">
              <Image src="/image/9.webp" alt={""} width={130} height={130} />
              <p className="mt-1 text-center text-base">ورزش و سفر</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
