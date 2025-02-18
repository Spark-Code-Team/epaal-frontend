
"use client"

import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
import KeyPassword from "../../../../public/icons/Key";



const PasswordLogin = () => {
    return(

      <div className="bg-white p-6 rounded-xl shadow-lg w-[402px] h-[314px]">

          <div className="text-center mb-4">
            <Image src={LogoEvaam} alt="logo" width={150} height={150} />
          </div>

          <form>

          <p className="py-6 text-[12px]"> رمز خود را وارد کنید </p>

            <div className="mb-4 flex border border-[#E1E6EF]
            items-center rounded-xl">
              <input
              dir="ltr"
                type="text"
                placeholder="**********"
                className="w-full px-4 py-2
                border-none
                 border border-[#E1E6EF] rounded-xl 
                 focus:outline-none focus:ring-2
                focus:ring-blue-100"
              />

              <span className="w-[10%] ">
                <KeyPassword color="#E1E6EF" size={24} width="20%"/>
              </span>

            </div>
            <button
              type="submit"
              className="w-full bg-[#E1E6EF] text-black py-2 px-4
               rounded-xl hover:bg-blue-100 transition"
            >
               ورود
            </button>
          </form>
          <p className="text-gray-500 text-[12px] mb-10 mt-4 text-center">
          ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است 
          </p>
      </div>
    )
}

export default PasswordLogin;