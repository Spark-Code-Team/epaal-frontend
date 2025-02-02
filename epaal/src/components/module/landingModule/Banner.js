// nextjs
import Image from "next/image";

// img
import banner from "../../../../public/image/landing-banner.png";
import Flash from "../../../../public/icons/flash";
import RequestedLoan from "@/components/elements/RequestedLoan";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="min-h-0 w-full md:my-14">
      <div className="relative flex w-full flex-col items-center rounded-b-[34px] bg-gradient-to-r from-[#41B1AC] to-[#FFD037] py-5 sm:flex-row sm:justify-evenly sm:rounded-b-[0px] md:justify-evenly md:rounded-b-[0px] md:rounded-t-[34px]">
        <div>hdk</div>
        <RequestedLoan />
      </div>
      <div className="hidden min-h-48 w-full rounded-b-[34px] bg-gradient-to-r from-[#41B1AC] to-[#FFD037] sm:flex md:flex"></div>
    </div>
  );
}
