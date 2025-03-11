import { digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
import incomingWallet from "@/../public/icons/dashboard/incoming.svg";
import outgoingWallet from "@/../public/icons/dashboard/outgoing.svg";
import { formatNumberToFA } from "@/utils/numToFa";
import { ToJalaliDate } from "@/utils/toJalali";


export default function PaymentHistoryWallet({ data }) {
    

    return (
        <>
            <div className="mt-5 flex h-[60px] w-[351px] flex-row items-center justify-around border-b border-gray-300">
                <div className="flex flex-row items-center justify-between gap-2">
                <div>
                    {
                        data.is_booster ? (
                            <Image src={outgoingWallet} alt="incoming.svg" width={40} />
                        ) : (
                            <Image src={incomingWallet} alt="incoming.svg" width={40} />
                        )
                    }
                </div>
                <div className="flex flex-col items-start justify-evenly">
                    <div>انتقال به کیف</div>
                    <div className="text-sm">
                    {
                        digitsEnToFa(ToJalaliDate(data.created_at))
                    }
                    </div>
                </div>
                </div>
                <div className="flex flex-col items-center justify-evenly text-lg">
                    <div>{formatNumberToFA(data.value)}{" "}</div>
                    <div>تومان</div>
                </div>
            </div>
        </>
    )
}