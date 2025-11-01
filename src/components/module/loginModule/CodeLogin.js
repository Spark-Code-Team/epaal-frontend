"use client";

import OtpInput from "react18-input-otp";
import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
import { loginOtp } from "@/service/login";
import { setCookie } from "@/utils/cookie";
import { useDispatch } from "react-redux";
import { fetchRole } from "@/redux/features/userRole/useRole";
import { useEffect } from "react";

export default function ReactOtpInput({ setLoginState, loginForm, setLoginForm }) {


  const router = useRouter();

  const changeHandler = (enteredOtp) => {
    setLoginForm(last => ({...last, opt_code: enteredOtp}))
  };

  const dispatch = useDispatch()

  const handelLogin = async (e) => {
    e.preventDefault();

    const { response, error } = await loginOtp(loginForm.phone_number, loginForm.opt_code, loginForm.password)

    if(response) {
      setCookie(response.data)
      dispatch(fetchRole())
      router.replace("dashboard/get-credit");
      toast.success("ورود با موفقیت انجام شد", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      console.log(error);
    }

  };

  return (
<div className="bg-white p-4 sm:p-6 m-2 sm:m-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
  <div className="mb-4 text-center">
    <Image
      src={LogoEvaam}
      alt="logo"
      width={150}
      height={150}
      className="mx-auto w-24 sm:w-32 md:w-36 h-auto"
    />
  </div>

  <form>
    <p className="py-4 sm:py-6 text-xs sm:text-sm text-center">
      کد ارسال شده را وارد کنید
    </p>

    <div className="mb-4 flex justify-center">
      <OtpInput
        value={loginForm.opt_code}
        onChange={changeHandler}
        numInputs={8}
        containerStyle={{
          direction: "ltr",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", // برای موبایل که تنگ میشه
        }}
        inputStyle={{
          direction: "ltr",
          width: "32px",
          height: "40px",
          margin: "4px",
          border: "1px solid #c6c6c6",
          borderRadius: "10px",
        }}
      />
    </div>

    <button
      onClick={(e) => handelLogin(e)}
      className="w-full rounded-xl bg-[#E1E6EF] px-4 py-2 text-sm sm:text-base text-black transition hover:bg-blue-100"
    >
      ورود
    </button>
  </form>

  <p className="mt-4 text-center text-xs sm:text-sm text-gray-500">
    ورود شما به معنای پذیرش شرایط زرمایه و قوانین حریم خصوصی است
  </p>
</div>

  );
}
