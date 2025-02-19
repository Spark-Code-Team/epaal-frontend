import ArrowBannerIcon from "../../../public/icons/ArrowBannerIcon";



export default function FlashButton({ title, href, them }) {

    return (
        <div
            className={`
                rounded-2xl
                ${them == "banner"  ? "bg-white" : "bg-evaamGreen"}
                flex
                items-center
                mx-auto
                md:mx-0
                gap-[20px]
                w-fit
                px-4
                py-2
                mt-8
                mb-[48px]
                cursor-pointer
            `}
        >
            <p
                className={`
                    ${them == "banner" ? "text-[#1D434C]" : "text-white"}
                    text-[14px]
                `}
            >
                {
                    title
                }
            </p>
            <div
                className={`
                    ${them == "banner" ? "bg-[#1D434C]" : "bg-white"}
                    rounded-[10px]
                    w-8
                    h-8
                    flex
                    items-center
                    justify-center
                `}
            >
                <ArrowBannerIcon 
                    color={them == "banner" ? "white" : "#1D434C"}
                />
            </div>
        </div>
    )
}