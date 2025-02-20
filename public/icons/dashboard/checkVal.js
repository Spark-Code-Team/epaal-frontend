import Image from "next/image";

import waitBag from "./check.png"

export default function CheckValidation(){
    return (
        <Image src={waitBag} alt="success" width={300} height={300}/>
    )
}