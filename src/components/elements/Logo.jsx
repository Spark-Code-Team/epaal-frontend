import Link from "next/link";
import EvaamLogoo from "../../../public/icons/EvaamLogoo";
import EvaamMatn from "../../../public/icons/EvaamMatn";



export default function Logo({ width, height, color }) {

    return (
        <Link
            href="/evaam-home"
            className="
                flex
                gap-[6px]
            "
        >
            <EvaamLogoo
              width={width}
              height={height}
              color={color}
            />
            <EvaamMatn
              width={width}
              height={height}
              color={color}
            />
        </Link>
    )
}