import Image from "next/image";



export default function BankCardShow ({ image }) {

    return (
        <div
            className="
                w-[496px]
                h-[570px]
                px-[66px]
                flex
                items-center
                justify-center
                bg-[#F0F0F1]
                rounded-[32px]
            "
        >
            <Image
                src={ image }
                width={700}
                height={700}
                className="
                    w-[363px]
                    h-[200px]
                    rounded-[17px]
                    shadow-sm
                "
                alt="alt"
            />
        </div>
    )
}