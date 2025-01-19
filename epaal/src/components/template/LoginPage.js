"use client"

import { useState } from "react";
import PhoneLogin from "../module/loginModule/PhoneLogin";
import CodeLogin from "../module/loginModule/CodeLogin";
import PasswordLogin from "../module/loginModule/PasswordLogin";

const LoginPage = () => {

    const [loginState , setLoginState] = useState(0)

    return (
        <>
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



        
        </>


        
        
    )
}

export default LoginPage;