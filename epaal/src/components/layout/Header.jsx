import Image from "next/image";
import BurgerMenu from "../module/layoutModule/BurgerMenu";

import logo from "../../../public/image/evaam-logo.png";

export default function Header() {
  return (
    <div
      className="
        flex
        flex-col
        w-[390px]
        bg-[#2852E4]
        mx-auto
        max-w-[390px]
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          justify-between
        "
      >
        <div
          className="
              relative
              flex
              items-center
              w-1/4
              justify-evenly
          "
        >
          <BurgerMenu />
          <Image
            src={logo}
            width={200}
            height={200}
            className="
                w-8
                h-w-8
            "
            alt="evago"
          />
        </div>
        <div
          className="p-[12px]
          "
        >
          <div
            className="
              text-xs
              px-[18px]
              py-[11.5px]
            bg-white
              rounded-lg 
            "
          >
            ورود به حساب کاربری
          </div>
        </div>
      </div>
    </div>
  );
}
