import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import { red } from "next/dist/lib/picocolors";
import Image from "next/image";

const LoanApplicationGuide = () => {
  return (
    <>
      <div className="mx-auto mt-20 flex w-[90%] flex-wrap sm:w-[90%] lg:w-[90%]">
        <div className="w-full text-center text-xl">راهنمای درخواست وام</div>

        <div className="mt-8 w-full sm:w-1/2 lg:mt-10 lg:w-1/2">
          <Image
            src={"/image/video_cover.webp"}
            alt={""}
            width={380}
            height={180}
            class="m-auto"
          />
        </div>

        <div className="mt-8 w-full sm:w-1/2 lg:mt-10 lg:w-1/2">
          <div className="m-auto mt-8 w-full text-[15px] lg:mt-0 lg:w-[422px]">
            برای اطلاع از نحوه ثبت درخواست وام فوری، فرآیند خرید قسطی از
            فروشگاه، دریافت وام بدون ضامن، اعتبارسنجی، ضمانت‌ها و امکانات دیگر
            دیجی‌شهر ویدئو را مشاهده کنید.
          </div>
          <div className="m-auto mt-10 w-full text-[15px] lg:w-[422px]">
            همچنین برای دریافت اطلاعات بیشتر می‌توانید وارد صفحه راهنمای
            دیجی‌شهر شوید.
          </div>

          <div className="justify-right m-auto mt-10 flex w-full text-[15px] lg:w-[422px]">
            <Link
              href={""}
              className="flex items-center space-x-4 text-[#2852E4]"
            >
              <span className="me-1">صفحه راهنمای ایوام</span>
              <MdOutlineArrowBackIosNew size={20} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanApplicationGuide;
