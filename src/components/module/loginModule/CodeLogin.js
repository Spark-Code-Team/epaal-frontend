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
      console.log(response);
      setCookie(response.data)
      dispatch(fetchRole())
      toast.success("ورود با موفقیت انجام شد", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      router.replace("dashboard/get-credit");
    } else {
      console.log(error);
    }

  };

  return (
    <div className="bg-white p-6 m-10 rounded-xl shadow-lg w-[402px] h-[314px]">
      <div className="mb-4 text-center">
        <Image src={LogoEvaam} alt="logo" width={150} height={150} />
      </div>

      <form>
        <p className="py-6 text-[12px]"> کد ارسال شده را وارد کنید </p>

        <div className="mb-4">
          <OtpInput
            value={loginForm.opt_code}
            onChange={changeHandler}
            numInputs={8}
            containerStyle={{
              direction: "ltr", // چپ به راست
            }}
            inputStyle={{
              direction: "ltr",
              width: "35px",
              height: "41px",
              margin: "0 5px",
              border: "1px solid #c6c6c6",
              borderRadius: "10px",
            }}
          />
        </div>
        <button
          onClick={(e) => handelLogin(e)}
          className="w-full rounded-xl bg-[#E1E6EF] px-4 py-2 text-black transition hover:bg-blue-100"
        >
          ورود
        </button>
      </form>
      <p className="mb-10 mt-4 text-center text-[12px] text-gray-500">
        ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است
      </p>
    </div>
  );
}
