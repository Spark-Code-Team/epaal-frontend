
"use client"

import Image from "next/image";
import LogoEvaam from "../../../../public/image/evaam-logo.png";
import KeyPassword from "../../../../public/icons/Key";



const PasswordLogin = () => {
    return(

<div className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg w-full max-w-sm mx-auto">
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
      رمز خود را وارد کنید
    </p>

    <div className="mb-4 flex items-center border border-[#E1E6EF] rounded-xl">
      <input
        dir="ltr"
        type="password"
        placeholder="**********"
        className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border-none rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
      <span className="w-[12%] mr-2 flex justify-center">
        <KeyPassword color="#E1E6EF" size={20} className="sm:size-24" />
      </span>
    </div>

    <button
      type="submit"
      className="w-full bg-[#E1E6EF] text-black py-2 px-4 rounded-xl hover:bg-blue-100 transition text-sm sm:text-base"
    >
      ورود
    </button>
  </form>

  <p className="mt-4 text-center text-xs sm:text-sm text-gray-500">
    ورود شما به معنای پذیرش شرایط زرمایه و قوانین حریم خصوصی است
  </p>
</div>

    )
}

export default PasswordLogin;