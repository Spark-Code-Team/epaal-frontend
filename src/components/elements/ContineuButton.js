import Link from "next/link";



export default function ContineuButton({ href, canReturn, backHref }) {

    return (
        <div
            className={`
                ${canReturn ? "justify-between" : "justify-end"}
                w-full
                flex
                px-4
            `}
        >
            {
                canReturn ? (
                    <Link
                        href={backHref}
                        className="
                            flex
                            w-fit
                            h-[40px]
                            p-[10px]
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-evaamGreen
                            text-evaamGreen
                        "
                    >
                        بازگشت به مرحله قبلی
                    </Link>
                ) : <div></div>
            }
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