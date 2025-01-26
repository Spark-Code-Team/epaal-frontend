"use client"

import OtpInput from "react18-input-otp";
import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
import { useState, useEffect } from "react";
export default function ReactOtpInput({setLoginState}){
    const[otp , setOtp] = useState("");
    const [timeLeft, setTimeLeft] = useState(120);

    useEffect(() => {
      if (timeLeft > 0) {
        const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timer);
      }
    }, [timeLeft]);

    const changeHandler = (enteredOtp) =>{
        setOtp(enteredOtp);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (otp.length === 8) {
        // ورود موفقیت‌آمیز
        setLoginState(2);
      } else {
        alert("لطفا کد کامل را وارد کنید.");
      }
    };

    return (

        <>

        <div className="h-screen relative">
          
          <div className=" h-1/2 bg-[#054366] ">
          </div>
    
          <div className="bg-white p-6 rounded-xl shadow-lg w-[402px] h-[314px]
           absolute top-[33%] left-[33%]">
    
              <div className="text-center mb-4">
                <Image src={LogoEvaam} alt="logo" width={150} height={150} />
              </div>
    
              <form onSubmit={handleSubmit}>
    
              <p className="py-6 text-[12px]"> کد ارسال شده را وارد کنید </p>
    
                <div className="mb-4" dir="ltr">

                  
        <OtpInput
        value={otp}
        onChange={changeHandler}
        numInputs={8}
        inputStyle={
            {
                width:"35px",
                height:"41px",
                margin:"0 5px",
                border:"1px solid #c6c6c6",
                borderRadius:"10px",
                direction: "ltr",
                textAlign: "left"
            }
        }

    />

                </div>
                <button
                  type="submit"
                  // onClick={() => setLoginState(2)}
                  className="w-full bg-[#E1E6EF]
                  text-black py-2 px-4 rounded-xl
                  hover:bg-blue-100 transition"                >
                  ورود
                  
                </button>
              </form>

              <div className="text-center mt-4 text-gray-500 text-[12px]">
          {timeLeft > 0 ? (
            <span>{`زمان باقی‌مانده: ${Math.floor(timeLeft / 60)}:${timeLeft % 60
              }`}</span>
          ) : (
            <span>کد منقضی شده است. لطفا دوباره تلاش کنید.</span>
          )}
        </div>

      
        <p className="text-gray-500 text-[12px] mt-2 text-center">
              ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است 
        </p>
      
            </div>
          
          <div className="h-1/2 bg-white  ">
          </div>
    
        </div>
    
            </>
    );
}






