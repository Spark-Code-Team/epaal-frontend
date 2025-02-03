import MerchantsCard from "@/components/elements/MerchantsCard";

import bimeBazar from "@/../public/image/bime.png"
import daric from "@/../public/image/daric.png"
import zitro from "@/../public/image/zitro.png"
import matin from "@/../public/image/matin.png"

export default function Merchants ({from}){

    const merchantsList = [
        {
            id: 1,
            merchantName: "متین خودرو",
            merchantLogo: matin,
        },
        {
            id: 2,
            merchantName: "زیترو",
            merchantLogo: zitro,
        },
        {
            id: 3,
            merchantName: "بیمه بازار",
            merchantLogo: bimeBazar,
        },
        // {
        //     id: 4,
        //     merchantName: "پیشتاز موتور",
        //     merchantLogo: null,
        // },
        {
            id: 5,
            merchantName: "داریک",
            merchantLogo: daric,
        },
    ]

    return(
        <>
            <MerchantsCard merchants={merchantsList} from={from}/>
        </>
    )
}