import mobile from "../../../../public/image/mobile.png";
import arayeshy from "../../../../public/image/arayeshy.png";
import Image from "next/image";
import FlashButton from "@/components/elements/FlashButton";
import BlurTitle from "@/components/elements/BlurTitle";

const category = [
  //TODO: عکس برای دسته بندی های اضافه شد
  {
    title: "زیبایی",
    image: arayeshy,
  },
  {
    title: "کالای دیجیتال",
    image: mobile,
  },
  {
    title: "طلا و جواهر",
    image: mobile,
  },
  {
    title: "لوازم خانگی",
    image: mobile,
  },
];

export default function ProductCategory() {
  return (
    <div className="mt-[28px] flex w-full flex-col items-center">
      <BlurTitle title="دسته بندی محصولات" />
      <div className="flex w-full flex-wrap items-center justify-between gap-[24px] px-[24px] pt-[32px] md:px-[40px]">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-[14px]"
          >
            <div className="flex h-[77px] w-[71px] items-center justify-center rounded-xl bg-gradient-to-t from-[#26889E] to-white md:h-[199px] md:w-[213px]">
              <Image
                src={item.image}
                width={2000}
                height={2000}
                alt="category"
                className="h-[90px] w-[50px] md:h-[180px] md:w-[103px]"
              />
            </div>
            <p className="text-[12px] font-normal md:text-[18px] md:font-medium">
              {item.title}
            </p>
          </div>
        ))}
      </div>
      <div>
        <FlashButton title="رفتن به فروشگاه" href="#" />
      </div>
    </div>
  );
}
