import { digitsEnToFa } from "@persian-tools/persian-tools";
import Image from "next/image";
import incomingWallet from "@/../public/icons/dashboard/incoming.svg";
import outgoingWallet from "@/../public/icons/dashboard/outgoing.svg";


export default function PaymentHistoryWallet() {

    return (
        <>
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
        </>
    )
}