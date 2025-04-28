"use client";
import { useState, useEffect } from "react";

import SuccessPaidTick from "@/../public/icons/success-paid-tick.svg";
import Image from "next/image";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";
import { postPayValue } from "@/service/userPanel";

export default function InstallmentPaymentResultModule() {
  const router = useRouter();
  const today = new Date();

  const [timeLeft, setTimeLeft] = useState((1 * 60) / 6); // 5 دقیقه (برحسب ثانیه)
  const [dateTime, setDateTime] = useState(new Date());
  const [status, setStatus] = useState(true)

  const [randomCode, setRandomCode] = useState("");

  useEffect(() => {
    const code = generateRandomCode(6);
    setRandomCode(code);

    // ایجاد تایمر شمارش معکوس
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          router.push("/dashboard/facility-management");
          sendFinal();
          clearInterval(countdown);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(countdown);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const shortDate = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(today);

  const time = new Intl.DateTimeFormat("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(dateTime);

  function generateRandomCode(length = 6) {
    let result = "";
    const characters = "0123456789";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  }

  function goToDashboard(){
    router.push("dashboard/facility-management")
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="flex h-60 w-full flex-col items-center justify-center bg-[length:150%_100%] bg-center bg-no-repeat md:bg-[length:100%_300%]"
          style={{
            backgroundImage:
              status == true
                ? `url("/icons/success-paid.svg")`
                : `url("/icons/failure-paid.svg")`,
          }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="text-xl font-bold text-white">
              {status == true ? "پرداخت موفق" : "پرداخت ناموفق"}
            </div>
            <div>
              {status == true ? (
                <>
                  <Image
                    src={SuccessPaidTick}
                    alt="tick.svg"
                    width={100}
                    height={100}
                    className="h-20 w-20"
                  />
                </>
              ) : (
                <></>
              )}
            </div>
            <p className="mt-5 text-lg font-bold text-white">
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </p>
          </div>
        </div>
        <div className="flex h-auto w-full flex-col items-center gap-8 border-2 bg-white py-12">
          <div className="flex h-auto w-[90%] flex-col items-center justify-between gap-5 md:w-[60%]">
            {/* date time */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>تاریخ و زمان تراکنش:</div>
              <div>
                {time} {shortDate}{" "}
              </div>
            </div>
            {/* date time */}

            {/* price */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>مبلغ:</div>
              <div>شرکت اعتبارگستر متین کالا</div>
            </div>
            {/* price */}

            {/* paid-id  */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>شناسۀ پرداخت: </div>
              <div>{digitsEnToFa(randomCode)}</div>
            </div>
            {/* paid-id  */}

            {/* paid-from */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>مبدا پرداخت:</div>
              <div>{digitsEnToFa("6219-86**-****-5762")}</div>
            </div>
            {/* paid-from */}

            {/* paid-tracking-id */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>آدرس وبسایت:</div>
              <div>e-vaam.com</div>
            </div>
            {/* paid-tracking-id */}

            {/* from website */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>شمارۀ پایانه:</div>
              <div>{digitsEnToFa("367253")}</div>
            </div>
            {/* from website */}

            {/* transaction type */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>نوع تراکنش:</div>
              <div>خرید</div>
            </div>
            {/* transaction type */}

            <div className="flex w-[70%] border-2 border-b-gray-200"></div>

            {/* from compang */}
            <div className="flex w-[90%] flex-row items-center justify-between">
              <div>شماره پیگیری:</div>
              <div>{digitsEnToFa("367253542542087542")}</div>
            </div>
            {/* from compang */}

            <div className="flex h-10 w-[50%] flex-col items-center justify-center rounded-xl bg-evaamGreen text-white hover:cursor-pointer">
              <div onClick={() => goToDashboard()}>بازگشت به صفحه داشبود</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
