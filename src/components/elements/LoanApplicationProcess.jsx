"use client";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import Image from "next/image";

const LoanApplicationProcess = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      id: 1,
      title: "ثبت درخواست",
      icon: "/image/13.webp",
      description:
        "با مراجعه به سایت ای-وام و کلیک روی گزینه درخواست وام، وارد پنل کاربری شوید.",
    },
    {
      id: 2,
      title: "ثبت اطلاعات شخصی",
      icon: "/image/14.webp",
      description: "بعد از ثبت درخواست، اطلاعات شخصی و شغلی خود را وارد ‌کنید.",
    },
    {
      id: 3,
      title: "تعیین میزان وام درخواستی",
      icon: "/image/15.webp",
      description:
        "در این مرحله با توجه به رتبه اعتباری خود، می‌توانید میزان اعتبار و تعداد ماه‌های بازپرداخت اقساط را انتخاب کنید.",
    },
    {
      id: 4,
      title: "بررسی مدارک",
      icon: "/image/16.webp",
      description:
        "پس از بررسی‌ مدارک و اطلاعات‌ وارد شده، پشتیبانی ای-وام با شما تماس می‌گیرد و هماهنگی‌های لازم انجام می‌شود.",
    },
    {
      id: 5,
      title: "شارژ کیف پول",
      icon: "/image/17.webp",
      description:
        "پس از تایید بانک، کیف پولتان در فروشگاه ای-وام شارژ شده و می‌توانید کالای دلخواه خود را به صورت قسطی خریداری کنید.",
    },
  ];

  return (
    <>
      <div className="mx-auto mt-20 w-[90%] sm:w-[90%] lg:w-[90%]">
        <div className="w-full text-center text-xl">مراحل درخواست وام</div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 items-start gap-10 p-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-wrap items-center rounded-lg bg-white p-4 shadow-md ${items.length - 1 === index ? "w-full justify-self-center sm:col-span-2 sm:w-1/2 lg:col-span-2 lg:w-1/2" : "w-full"}`}
            >
              <div className="flex items-center">
                <div className="-mr-7 flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-white">
                  {item.id}
                </div>
              </div>
              <div className="w-full flex-1">
                <div className="flex items-center justify-between">
                  <div className="mb-4 flex items-center sm:mb-0 sm:mr-6">
                    {/*<span className="text-xl">{item.icon}</span>*/}
                    <Image src={item.icon} alt="" width={25} height={25} />
                    <h3 className="mr-4 text-base text-lg font-bold text-[#1D4ED8]">
                      {item.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="text-blue-500"
                  >
                    {openIndex === index ? (
                      <FiChevronUp size={20} />
                    ) : (
                      <FiChevronDown size={20} />
                    )}
                  </button>
                </div>
                {openIndex === index && item.description && (
                  <p className="mr-10 mt-4 text-sm text-[#707172] text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoanApplicationProcess;
