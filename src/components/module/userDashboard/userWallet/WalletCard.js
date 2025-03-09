import { digitsEnToFa } from "@persian-tools/persian-tools";
import EvaamLogo from "../../../../../public/icons/evaam-icon";


export default function WalletCard() {

    return (
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
    )
}