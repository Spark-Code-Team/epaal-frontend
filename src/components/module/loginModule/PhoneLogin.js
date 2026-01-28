"use client";

import Image from "next/image";
import LogoEvaam from "../../../../public/image/evaam-logo.png";
import Phone from "../../../../public/icons/Phone";
import { sendPhone } from "@/service/login";
import { Bounce, toast } from "react-toastify";

const PhoneLogin = ({ setLoginState, setLoginForm, loginForm }) => {
  const handelClick = async (e) => {
    e.preventDefault();

    const { response, error } = await sendPhone(loginForm.phone_number);

    if (response) {
      setLoginState(1);
    } else {
      toast.error(error.response?.data.message || "مشکلی پیش آمده", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="m-2 mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-lg sm:m-6 sm:p-6">
      <div className="mb-4 text-center">
        <Image
          src={LogoEvaam}
          alt="logo"
          width={150}
          height={150}
          className="mx-auto h-auto w-24 sm:w-32 md:w-36"
        />
      </div>

      <form>
        <p className="py-4 text-center text-xs sm:py-6 sm:text-sm">
          شماره تماس را وارد کنید
        </p>

        <div className="mb-4 flex items-center rounded-xl border border-[#E1E6EF]">
          <input
            dir="ltr"
            type="text"
            placeholder="+98**********"
            className="w-full rounded-xl border-none px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 sm:px-4 sm:text-base"
            value={loginForm.phone_number}
            onChange={(e) =>
              setLoginForm((last) => ({
                ...last,
                phone_number: e.target.value,
              }))
            }
          />
          <span className="mr-2 flex w-[12%] justify-center">
            <Phone color="#E1E6EF" size={20} className="sm:size-24" />
          </span>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#E1E6EF] px-4 py-2 text-sm text-black transition duration-200 hover:bg-blue-200 sm:text-base"
          onClick={(e) => handelClick(e)}
        >
          دریافت کد
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-gray-500 sm:text-sm">
        ورود شما به معنای پذیرش شرایط ای-وام و قوانین حریم خصوصی است
      </p>
    </div>
  );
};
export default PhoneLogin;
