import Image from "next/image";
import BurgerMenu from "../module/layoutModule/BurgerMenu";
import logo from "../../../public/image/evaam-logo.png";
import NavElements from "../module/layoutModule/NavElements";
import EvaamLogo from "../../../public/icons/evaam-icon";

export default function Header() {
  return (
    <div
      className="
        flex
        flex-col
        w-full
        bg-[#2852E4]
        md:bg-white
        mx-auto
        max-w-full
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
              w-1/3
              justify-evenly
          "
        >
          <BurgerMenu />
          {/* <Image
            src={logo}
            width={200}
            height={200}
            className="
                w-8
                h-w-8
            "
            alt="evago"
          /> */}
          <EvaamLogo color="#1d1d1d" height="20px" width="30px"/>   
          <NavElements />
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
