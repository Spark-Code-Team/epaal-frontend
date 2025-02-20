import Image from "next/image";

import waitBag from "./tick-bag.png"

export default function TickBag(){
    return (
        <Image src={waitBag} alt="success" width={300} height={300}/>
    )
}