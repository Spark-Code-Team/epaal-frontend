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
        console.log(error);
        
        toast.error(error.response.data.message, {
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
      <div className="bg-white p-6 m-6 rounded-xl shadow-lg w-auto h-[314px]">

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
                value={loginForm.phone_number}
                onChange={(e) => setLoginForm(last => ({...last, phone_number: e.target.value}))}
              />
              <span className="w-[10%] ">
                <Phone color="#E1E6EF" size={24} width="20%"/>
              </span>

            </div>
            
            <button
              type="submit"
              className="w-full bg-[#E1E6EF] text-black py-2 px-4 rounded-xl hover:bg-blue-100 transition"
              onClick={(e) => handelClick(e)}
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