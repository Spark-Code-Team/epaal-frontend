"use client";

import { useState } from "react";
import PhoneLogin from "../module/loginModule/PhoneLogin";
import CodeLogin from "../module/loginModule/CodeLogin";
import PasswordLogin from "../module/loginModule/PasswordLogin";
import BlurLine from "../../../public/icons/BlurLine";

const LoginPage = () => {
  const [loginState, setLoginState] = useState(0);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="h-1/2 overflow-hidden bg-[#054366]">
        <BlurLine />
      </div>
      <div
        className="
          absolute
          w-screen
          h-screen
          flex
          items-center
          justify-center
        "
      >
        {loginState == 0 ? (
          <PhoneLogin setLoginState={setLoginState} />
        ) : loginState == 1 ? (
          <CodeLogin setLoginState={setLoginState} />
        ) : (
          <PasswordLogin />
        )}
      </div>

      <div className="h-1/2 bg-white"></div>
    </div>
  );
};

export default LoginPage;
