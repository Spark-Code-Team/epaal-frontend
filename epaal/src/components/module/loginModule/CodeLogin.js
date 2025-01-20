"use client"

import OtpInput from "react18-input-otp";
import Image from "next/image";
import LogoEvaam from "../../../../public/image/logoevaam.png";
import { useState } from "react";

export default function ReactOtpInput({setLoginState}){
    const[otp , setOtp] = useState("");

    const changeHandler = (enteredOtp) =>{
        setOtp(enteredOtp);
    };

    return (
      <div className="bg-white p-6 rounded-xl shadow-lg w-[402px] h-[314px]
           absolute top-[33%] left-[33%]">
    
              <div className="text-center mb-4">
                <Image src={LogoEvaam} alt="logo" width={150} height={150} />
              </div>
    
              <form>
    
              <p className="py-6 text-[12px]"> کد ارسال شده را وارد کنید </p>
    
                <div className="mb-4">

                  
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
                borderRadius:"10px"
            }
        }

    />

                </div>
                <button
                  type="submit"
                  onClick={() => setLoginState(2)}
                  className="w-full bg-[#E1E6EF] text-black py-2 px-4 rounded-xl hover:bg-blue-100 transition"
                >
                  ورود
                  
                </button>
              </form>
              <p className="text-gray-500 text-[12px] mb-10 mt-4 text-center">
              ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است 
              </p>
      </div>
    );
}

   
//     return (
//         <>

// <div className="h-screen relative">
      
//       <div className=" h-1/2 bg-[#054366] ">
//       </div>

//       <div className="bg-white p-6 rounded-xl shadow-lg w-[402px] h-[314px]
//        absolute top-[33%] left-[33%]">

//           <div className="text-center mb-4">
//             <Image src={LogoEvaam} alt="logo" width={150} height={150} />
//           </div>

//           <form>

//           <p className="py-6 text-[12px]">کد ارسال شده را وارد کنید</p>

          

//           <div className="flex space-x-2 justify-center">
          

//           {otp.map((value, index) => (
//           <input
//             key={index}
//             id={`otp-${index}`}
//             type="text"
//             maxLength={1}
//             value={value}
//             onChange={(e) => handleChange(e.target.value, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             className="w-12 h-12 text-center border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         ))}
              
//             </div>



//             <button
//               type="submit"
//               className="w-full bg-[#E1E6EF]
//                text-black py-2 px-4 rounded-xl
//                 hover:bg-blue-100 transition"
//             >
//                 ورود
         
//             </button>
//           </form>

//           <p className="text-gray-500 text-[12px] mb-10 mt-4 text-center">
//           ورود شما به معنای پذیرش شرایط ایوام و قوانین حریم خصوصی است 
//           </p>

//         </div>
      
//       <div className="h-1/2 bg-white  ">
//       </div>

//     </div>

        
//         </>
//     )
// }

// export default CodeLogin;