import defaltUser from "@/../public/icons/dashboard/iman.jpg"
import Image from "next/image";

export default function DefaultPic () {
    return (
        <Image src={defaltUser} height={300} width={300} alt="defalt user" className="rounded-full"/>
    )
}