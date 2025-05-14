"use client";

import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
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
      console.log("errooooooooooooooooooooooooooooooor", error);

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
    <div className="m-6 h-[314px] w-auto rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 text-center">
        <Image src={LogoEvaam} alt="logo" width={150} height={150} />
      </div>

      <form>
        <p className="py-6 text-[12px]">شماره تماس را وارد کنید</p>

        <div className="mb-4 flex items-center rounded-xl border border-[#E1E6EF]">
          <input
            dir="ltr"
            type="text"
            placeholder="+98**********"
            className="w-full border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
            value={loginForm.phone_number}
            onChange={(e) =>
              setLoginForm((last) => ({
                ...last,
                phone_number: e.target.value,
              }))
            }
          />
          <span className="w-[10%]">
            <Phone color="#E1E6EF" size={24} width="20%" />
          </span>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#E1E6EF] px-4 py-2 text-black transition hover:bg-blue-100"
          onClick={(e) => handelClick(e)}
        >
          دریافت کد
        </button>
      </form>
      <p className="mb-10 mt-4 text-center text-[12px] text-gray-500">
        ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است
      </p>
    </div>
  );
};
export default PhoneLogin;
