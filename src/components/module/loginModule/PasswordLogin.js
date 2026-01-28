"use client";

import Image from "next/image";
import LogoEvaam from "../../../../public/image/evaam-logo.png";
import KeyPassword from "../../../../public/icons/Key";

const PasswordLogin = () => {
  return (
    <div className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-lg sm:p-6">
      <div className="mb-4 text-center">
        <Image
          src={LogoEvaam}
          alt="logo"
          width={150}
          height={150}
          className="mx-auto h-auto w-24 sm:w-32 md:w-36"
        />
      </div>

      <form>
        <p className="py-4 text-center text-xs sm:py-6 sm:text-sm">
          رمز خود را وارد کنید
        </p>

        <div className="mb-4 flex items-center rounded-xl border border-[#E1E6EF]">
          <input
            dir="ltr"
            type="password"
            placeholder="**********"
            className="w-full rounded-xl border-none px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 sm:px-4 sm:text-base"
          />
          <span className="mr-2 flex w-[12%] justify-center">
            <KeyPassword color="#E1E6EF" size={20} className="sm:size-24" />
          </span>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#E1E6EF] px-4 py-2 text-sm text-black transition hover:bg-blue-100 sm:text-base"
        >
          ورود
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-gray-500 sm:text-sm">
        ورود شما به معنای پذیرش شرایط ای-وام و قوانین حریم خصوصی است
      </p>
    </div>
  );
};

export default PasswordLogin;
