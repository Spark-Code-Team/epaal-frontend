import Image from "next/image";
import ArrowBannerIcon from "../../../public/icons/ArrowBannerIcon";

//images:
import laptop from "@/../public/image/laptop.svg";
import CategoryCard from "../elements/categoryCard";

export default function shop() {
  const categories = [
    { id: 1, name: "کالای دیجیتال", icon: laptop, alt: "1.jpg" },
    { id: 2, name: "لوازم خانگی برقی", icon: laptop, alt: "2.jpg" },
    { id: 3, name: "زیبایی و سلامت", icon: laptop, alt: "3.jpg" },
    { id: 4, name: "مد و پوشاک", icon: laptop, alt: "4.jpg" },
    { id: 5, name: "موبایل", icon: laptop, alt: "5.jpg" },
    { id: 6, name: "خانه و آشپزخانه", icon: laptop, alt: "6.jpg" },
    { id: 7, name: "موتورسیکلت", icon: laptop, alt: "7.jpg" },
  ];
  return (
    <>
      <div className="my-10 flex h-screen w-full flex-col items-center justify-self-center md:w-[90%]">
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

        {/* categories */}
        <div className="mt-20 flex w-full flex-row flex-wrap items-center justify-center gap-5">
          {categories.map((c) => (
            <div key={c.id}>
              <CategoryCard category={c} />
            </div>
          ))}
        </div>
        {/* categories */}
      </div>
    </>
  );
}
