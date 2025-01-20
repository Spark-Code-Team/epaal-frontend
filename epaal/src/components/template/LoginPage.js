"use client"

import { useState } from "react";
import PhoneLogin from "../module/loginModule/PhoneLogin";
import CodeLogin from "../module/loginModule/CodeLogin";
import PasswordLogin from "../module/loginModule/PasswordLogin";
import BlurLine from "../../../public/icons/BlurLine";

const LoginPage = () => {

    const [loginState , setLoginState] = useState(0)

    return (
        <div
            className="
                h-screen
                relative"
        >

        <div 
            className="
                h-1/2
                bg-[#054366]
                overflow-hidden
            "
        >
            <BlurLine />
        </div>


        {
            loginState == 0 ? (
                <PhoneLogin
                    setLoginState={setLoginState}
                />
            ) : loginState == 1 ? (
                <CodeLogin
                
                    setLoginState={setLoginState}
                />
            ) : (
                <PasswordLogin/>
            )
        }

        <div 
            className="
                h-1/2
                bg-white
            "
        >
        </div>

        
        </div>
    )
}

export default LoginPage;