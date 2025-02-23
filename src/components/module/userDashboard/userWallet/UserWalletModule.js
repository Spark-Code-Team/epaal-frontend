import { digitsEnToFa } from "@persian-tools/persian-tools";
import EvaamLogo from "../../../../../public/icons/evaam-icon";
import Image from "next/image";

import incomingWallet from "@/../public/icons/dashboard/incoming.svg";
import outgoingWallet from "@/../public/icons/dashboard/outgoing.svg";
export default function UserWalletModule() {
  return (
    <>
      {/* wallet cart */}
      <div
        className="flex h-[189px] w-[340px] flex-col items-center justify-between py-6 text-white"
        style={{
          background: `url(/icons/dashboard/wallet-bg.svg) center/100% 100% no-repeat`,
        }}
      >
        <div className="flex w-full flex-row items-center justify-between px-6">
          <div>
            <p>کیف پول اعتباری</p>
          </div>
          <div>
            <EvaamLogo color="#fff" height="25" width="25" />
          </div>
        </div>
        <div>
          موجودی: <span>{digitsEnToFa("15,000,000")} تومان</span>
        </div>
        <div className="flex w-full flex-row items-center justify-end px-6 text-sm">
          {digitsEnToFa(5)} قسط
        </div>
      </div>
      {/* wallet cart */}

      <div className="mt-5 flex w-full flex-row items-center justify-evenly">
        <div className="w-2/5 rounded-full border-2 border-evaamGreen px-10 py-2 text-center">
          <p>اقساط</p>
        </div>
        <div className="w-2/5 rounded-full border-2 border-evaamGreen px-10 py-2 text-center">
          <p>تاریخچه</p>
        </div>
      </div>

      {/* payment history */}
      <div className="mt-5 flex h-[60px] w-[351px] flex-row items-center justify-around border-b border-gray-300">
        <div className="flex flex-row items-center justify-between gap-2">
          <div>
            <Image src={incomingWallet} alt="incoming.svg" width={40} />
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <div>انتقال به کیف</div>
            <div className="text-sm">
              {digitsEnToFa("شنبه، 29 اسفند 1403 ، 18:30")}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly text-lg">
          <div>{digitsEnToFa("70,000,000")}{" "}</div>
          <div>تومان</div>
        </div>
      </div>

      <div className="mt-5 flex h-[60px] w-[351px] flex-row items-center justify-around border-b border-gray-300">
        <div className="flex flex-row items-center justify-between gap-2">
          <div>
            <Image src={outgoingWallet} alt="incoming.svg" width={40} />
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <div>انتقال به کیف</div>
            <div className="text-sm">
              {digitsEnToFa("شنبه، 29 اسفند 1403 ، 18:30")}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly text-lg">
          <div>{digitsEnToFa("80,000,000")}{" "}</div>
          <div>تومان</div>
        </div>
      </div>
      {/* payment history */}
    </>
  );
}
