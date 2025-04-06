import Link from "next/link";



export default function ContineuButton({ href, isTrue, canReturn }) {

    return (
        <div
            className="
                w-full
                flex
                justify-end
            "
        >
            <Link
                href={href}
                className="
                    flex
                    w-[83px]
                    h-[40px]
                    p-[10px]
                    items-center
                    justify-center
                    rounded-xl
                    bg-evaamGreen
                    text-white
                "
            >
                ادامه
            </Link>
        </div>
    )
}