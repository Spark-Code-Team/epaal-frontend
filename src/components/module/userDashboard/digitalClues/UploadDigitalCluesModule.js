"use client";

import CheckRounded from "@/../public/icons/dashboard/round-check.svg";
import CheckBoxSVG from "@/../public/icons/dashboard/check-box.svg";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Modal } from "flowbite-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { getlevelfour, postlevelfour } from "@/service/userPanel";
import FacilityState from "@/components/elements/FacilityState";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function UploadDigitalCluesModule() {
  const [checkBox, setCheckBox] = useState(false);
  const [fields, setFields] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const store = useSelector((store) => store);
  const router = useRouter();

  // برای مدیریت امن blob url ها
  const blobUrlsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const { response } = await getlevelfour();
      if (response?.data?.data) {
        const next = response.data.data.map((item, index) => ({
          id: item.id,
          value: "",
          file: null,
          preview: "",
          index,
          type: item.type, // "file" یا "text"
        }));
        setFields(next);
      }
    };

    // اگر لازم شد سطح کاربر را بررسی کن
    // if (store?.status?.level_number < 4) router.back();

    fetchData();

    return () => {
      // پاک‌سازی blob url ها هنگام unmount
      blobUrlsRef.current.forEach((u) => URL.revokeObjectURL(u));
      blobUrlsRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFileChange = (e, idx) => {
    const file = e.target.files?.[0] ?? null;

    setFields((prev) =>
      prev.map((f, i) => {
        if (i !== idx) return f;

        // اگر قبلاً پیش‌نمایش داشت، آزادش کن
        if (f.preview) {
          URL.revokeObjectURL(f.preview);
          blobUrlsRef.current = blobUrlsRef.current.filter((u) => u !== f.preview);
        }

        const preview = file ? URL.createObjectURL(file) : "";
        if (preview) blobUrlsRef.current.push(preview);

        return { ...f, file, preview };
      })
    );
  };

  const handleCheckLength = (e, idx) => {
    const v = e.target.value;
    setFields((prev) => prev.map((f, i) => (i === idx ? { ...f, value: v } : f)));
  };

  const allValid = () => {
    const okFields = fields.every((f) => {
      if (f.type === "file") return !!f.file;
      if (f.type === "text") return (f.value?.trim()?.length ?? 0) === 16;
      return true;
    });
    return checkBox && okFields;
  };

  const handleUpload = async () => {
    if (!allValid()) return;

    if (store?.status?.level === "submit_physical") {
      router.replace("send-clues");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      fields.forEach((item) => {
        formData.append(`data[${item.index}][id]`, String(item.id));
        formData.append(`data[${item.index}][value]`, item.value ?? "");
        if (item.file) {
          formData.append(`data[${item.index}][file]`, item.file);
        }
      });

      const { response } = await postlevelfour(formData);
      if (response) setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <FacilityState curentState={4} />

      {/* لودینگ فول‌اسکرین */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent" />
        </div>
      )}

      {/* اعلان موفقیت */}
      {isSuccess && (
        <Modal
          show={isSuccess}
          onClose={() => setIsSuccess(false)}
          className="flex flex-col justify-items-center pt-40 text-center md:pt-0"
        >
          <Modal.Body className="flex flex-col items-center justify-evenly p-6 md:p-10">
            <div
              onClick={() => setIsSuccess(false)}
              className="ms-auto mb-2 flex hover:cursor-pointer md:mb-5"
            >
              <RxCross1 className="h-6 w-6 md:h-8 md:w-8" />
            </div>

            <div>
              <Image
                src={CheckRounded}
                alt="checking..."
                width={300}
                height={300}
                className="h-24 w-24 md:h-36 md:w-36"
              />
            </div>

            <div className="mb-3 mt-4 text-base font-extrabold md:text-lg">
              <p>در انتظار تأیید مدارک</p>
            </div>

            <p className="text-sm md:text-base">
              لطفا تا تایید یا رد شدن مدارک بارگذاری شده، صبر کنید. این فرایند ممکن
              است زمان‌بر باشد.
            </p>

            <button
              onClick={() => setIsSuccess(false)}
              className="mt-5 w-full rounded-xl bg-evaamGreen py-3 text-white md:w-3/4"
            >
              متوجه شدم
            </button>
          </Modal.Body>
        </Modal>
      )}

      <div className="container mx-auto w-full px-4 md:mt-16 md:max-w-4xl">
        <h2 className="mt-5 text-lg font-bold md:text-xl">ثبت مدارک مورد نیاز</h2>

        {/* باکس راهنما - ریسپانسیو */}
        <div className="mt-4 rounded-2xl border-2 border-gray-200 p-4 md:p-6">
          <p className="text-sm md:text-base">راهنمایی نوشتن چک صیادی، جهت بارگذاری:</p>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[6px,1fr]">
            <div className="hidden rounded-md bg-evaamGreen sm:block" />
            <div className="flex flex-col gap-2 text-sm md:text-base">
              <p>چک در وجه اعتبار گستر متین کالا باشد.</p>
              <p>
                به شناسه ملی <span className="font-extrabold">14013526909</span> در
                تاریخ () به مبلغ () بابت خرید کالا یا خدمات
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-2 text-xs font-bold text-red-600 md:text-sm">
            <p>چک اگر دارای خط خوردگی باشد پذیرفته نمی‌شود.</p>
            <p>چک اگر طبق موارد ذکر شده نوشته نشده باشد پذیرفته نمی‌شود.</p>
          </div>
        </div>

        {/* تیک قوانین */}
        <div className="mt-5 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCheckBox((p) => !p)}
            className="flex h-5 w-5 items-center justify-center rounded-md border-2 border-evaamGreen"
            aria-pressed={checkBox}
          >
            {checkBox && (
              <Image
                src={CheckBoxSVG}
                alt="tick.svg"
                width={20}
                height={20}
                className="rounded-sm"
              />
            )}
          </button>
          <span className="text-sm font-bold text-evaamCyan md:text-base">
            قوانین و مقررات را خوانده و با آن موافقم.
          </span>
        </div>

        {/* فیلدهای داینامیک */}
        <div className="mt-5 space-y-5">
          {fields.length > 0 &&
            fields.map((item, idx) => {
              if (item.type === "file") {
                const inputId = `file-${item.index}`;

                // آیا فایل تصویر است؟
                const isImage = item.file && item.file.type?.startsWith("image/");

                return (
                  <div key={item.id ?? idx} className="w-full">
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        document.getElementById(inputId)?.dispatchEvent(
                          new MouseEvent("click", { bubbles: true })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          document.getElementById(inputId)?.dispatchEvent(
                            new MouseEvent("click", { bubbles: true })
                          );
                        }
                      }}
                      className="relative flex min-h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-[#BED5DA] bg-[#f7fbfc] px-4 py-6 text-center transition hover:bg-[#eef6f8] sm:min-h-48 md:min-h-56"
                    >
                      <p className="text-sm font-bold md:text-base">تصویر روی چک صیادی</p>
                      <p className="text-xs text-gray-500 md:text-sm">
                        فرمت‌های قابل قبول: PDF, PNG, JPG — حداکثر 5Mb
                      </p>

                      {/* پیش‌نمایش */}
                      {item.file ? (
                        isImage ? (
                          <div className="mt-3">
                            <img
                              src={item.preview}
                              alt="پیش‌نمایش فایل"
                              className="max-h-56 max-w-full rounded-lg object-contain"
                            />
                          </div>
                        ) : (
                          <div className="mt-3 text-xs text-gray-700 md:text-sm">
                            فایل انتخاب‌شده: <span className="font-semibold">{item.file.name}</span>
                          </div>
                        )
                      ) : (
                        <div className="pointer-events-none absolute bottom-0 left-1/2 mb-0.5 flex h-6 w-16 -translate-x-1/2 transform items-center justify-center rounded-t-lg bg-[#BED5DA]">
                          <FaPlus className="text-white" />
                        </div>
                      )}
                    </div>

                    <input
                      id={inputId}
                      type="file"
                      className="hidden"
                      accept=".pdf,.png,.jpg,.jpeg"
                      onChange={(e) => handleFileChange(e, idx)}
                    />
                  </div>
                );
              }

              // فیلد متنی (شناسه ۱۶ رقمی)
              const is16Ok = (fields[idx]?.value?.trim()?.length ?? 0) === 16;

              return (
                <div key={item.id ?? idx} className="w-full">
                  <label className="mb-2 block text-sm md:text-base">
                    شناسۀ صیادی چک را وارد کنید ({digitsEnToFa("16 رقمی")}):
                  </label>
                  <div className="flex w-full items-center justify-between gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <input
                      type="text"
                      maxLength={16}
                      inputMode="numeric"
                      className="w-full border-none bg-transparent outline-none ring-0 placeholder-gray-400"
                      placeholder={digitsEnToFa("شماره 16 رقمی")}
                      value={item.value}
                      onChange={(e) => handleCheckLength(e, idx)}
                    />
                    <FaCheckCircle
                      className={`h-6 w-6 ${is16Ok ? "text-green-600" : "text-gray-300"}`}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        {/* دکمه اقدام */}
        <div className="mx-auto mb-10 mt-8 w-full max-w-md">
          <button
            onClick={handleUpload}
            disabled={!allValid()}
            className={`w-full rounded-xl py-3 text-center text-white transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-md ${
              allValid() ? "bg-evaamGreen" : "cursor-not-allowed bg-gray-300"
            }`}
          >
            {store?.status?.level === "submit_digital"
              ? "رفتن به مرحله بعد"
              : "تایید و ادامه"}
          </button>
          {!checkBox && (
            <p className="mt-2 text-center text-xs text-red-500">
              برای ادامه، با قوانین موافقت کنید.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
