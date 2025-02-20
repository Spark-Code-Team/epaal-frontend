import Image from "next/image";

import waitBag from "./wait.png"

export default function WaitBag(){
    return (
        <Image src={waitBag} alt="waiting" width={300} height={300}/>
    )
}