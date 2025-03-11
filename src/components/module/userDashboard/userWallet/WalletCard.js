import { digitsEnToFa } from "@persian-tools/persian-tools";
import EvaamLogo from "../../../../../public/icons/evaam-icon";
import { formatNumberToFA } from "@/utils/numToFa";


export default function WalletCard({ value }) {

    return (
        <div
        className="flex h-[189px] w-[340px] flex-col items-center py-6 text-white"
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
        <div
          className="
            mt-12
          "
        >
          موجودی: <span>{formatNumberToFA(value)} تومان</span>
        </div>
      </div>
    )
}