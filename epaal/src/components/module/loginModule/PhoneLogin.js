"use client"

import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
import Phone from "../../../../public/icons/Phone";


const PhoneLogin = ({ setLoginState }) => {

    return (
      <div className="bg-white p-6 m-6 rounded-xl shadow-lg w-auto h-[314px]
       absolute sm:top-[33%] sm:left-[33%]">

          <div className="text-center mb-4">
            <Image src={LogoEvaam} alt="logo" width={150} height={150} />
          </div>

          <form>

          <p className="py-6 text-[12px]">شماره تماس را وارد کنید</p>

            <div className="mb-4 flex border border-[#E1E6EF]
            items-center rounded-xl ">
              <input
              dir="ltr"
                type="text"
                placeholder="+98**********"
                className="w-full px-4 py-2
                border-none
                 focus:outline-none 
                 focus:ring-2
                focus:ring-blue-100"
              />
              <span className="w-[10%] ">
                <Phone color="#E1E6EF" size={24} width="20%"/>
              </span>

            </div>
            
            <button
              type="submit"
              className="w-full bg-[#E1E6EF] text-black py-2 px-4 rounded-xl hover:bg-blue-100 transition"
              onClick={() => setLoginState(1)}
            >
              دریافت کد
            </button>
          </form>
          <p className="text-gray-500 text-[12px] mb-10 mt-4 text-center">
          ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است 
          </p>
      </div>
    )
}
export default PhoneLogin;