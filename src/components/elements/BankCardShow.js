import Image from "next/image";



export default function BankCardShow ({ image }) {

    return (
        <div
            className="
                sm:w-[700px]
                sm:h-[570px]
                px-[66px]
                md:flex
                hidden
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