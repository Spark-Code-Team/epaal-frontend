"use client"

import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
import Phone from "../../../../public/icons/Phone";
import { sendPhone } from "@/service/login";
import { Bounce, toast } from "react-toastify";




const PhoneLogin = ({ setLoginState, setLoginForm, loginForm }) => {

    const handelClick = async (e) => {
      
      e.preventDefault()

      const { response, error } = await sendPhone(loginForm.phone_number)

      if(response) {
        setLoginState(1)
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
    }

    return (
<div className="bg-white p-4 sm:p-6 m-2 sm:m-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
<div className="text-center mb-4">
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
      شماره تماس را وارد کنید
    </p>

    <div className="mb-4 flex border border-[#E1E6EF] items-center rounded-xl">
      <input
        dir="ltr"
        type="text"
        placeholder="+98**********"
        className="w-full px-3 sm:px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-xl text-sm sm:text-base"
        value={loginForm.phone_number}
        onChange={(e) =>
          setLoginForm((last) => ({ ...last, phone_number: e.target.value }))
        }
      />
      <span className="w-[12%] mr-2 flex justify-center">
        <Phone color="#E1E6EF" size={20} className="sm:size-24" />
      </span>
    </div>

    <button
      type="submit"
      className="w-full bg-[#E1E6EF] text-black py-2 px-4 rounded-xl duration-200 hover:bg-blue-200 transition text-sm sm:text-base"
      onClick={(e) => handelClick(e)}
    >
      دریافت کد
    </button>
  </form>

  <p className="text-gray-500 text-xs sm:text-sm mt-4 text-center">
    ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است
  </p>
</div>

    )
}
export default PhoneLogin;