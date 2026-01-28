"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SoalatMotadavel = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      id: 1,
      title: "برای دریافت وام به چه مدارکی نیاز است؟",
      description:
        "از جمله مدارکی که برای دریافت وام نیاز است شامل مدارک هویتی (تصاویر صفحات شناسنامه و تصویر کارت ملی یا تصویر رسید ثبت احوال)، مدارک سکونتی (سند یا اجاره‌نامه منزل) و مدارک شغلی که برای کارمندان شامل تصویر آخرین فیش حقوقی و معرفی‌نامه شغلی خطاب به بانک شهر و برای سایر افراد شامل تصویر جواز کسب یا کارت بازرگانی و اجاره‌نامه یا سند محل کار می‌شود. همچنین متقاضی دریافت وام آنلاین خرید کالا علاوه بر رتبه اعتباری، باید در بانک شهر حساب داشته باشد. ",
    },
    {
      id: 2,
      title: "مراحل دریافت وام خرید اعتباری چگونه است؟",
      description:
        "در سایت ای-وام ثبت‌نام کنید و اطلاعات شخصی و شغلی خود را ثبت کنید.",
    },
    {
      id: 3,
      title: "وام ای-وام به چه صورتی قابل استفاده است؟",
      description:
        "وام شما بصورت اعتبار برای خرید کالا از فروشگاه آنلاین ای-وام قابل استفاده است. لینک سایت فروشگاه: https://dgshahr.com/shop",
    },
    {
      id: 4,
      title: "سقف دریافت اعتبار چقدر است؟ ",
      description:
        "سقف وام قابل دریافت بستگی به ارزیابی رفتار بانکی و نوع ضمانت شما دارد که می‌تواند تا 100 میلیون تومان باشد. ",
    },
  ];

  return (
    <>
      <div className="m-auto mt-20 w-[90%] sm:w-[90%] lg:w-[90%]">
        <div className="m-auto w-full text-center text-xl">سوالات متداول</div>

        <div className="mx-auto w-full items-start gap-10 p-4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={
                "mt-5 flex w-full flex-wrap items-center rounded-lg border-[1px] border-gray-400 bg-white p-4"
              }
            >
              <div className="w-full flex-1">
                <div className="flex items-center justify-between">
                  <div className="mb-4 flex items-center sm:mb-0 sm:mr-6">
                    {/*<span className="text-xl">{item.icon}</span>*/}
                    <h3 className="mr-4 text-base font-bold text-[#1D4ED8]">
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
                  <p className="mr-0 mt-4 text-sm text-[#707172] lg:mr-10">
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

export default SoalatMotadavel;
