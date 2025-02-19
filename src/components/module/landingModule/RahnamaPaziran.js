import FlashButton from "@/components/elements/FlashButton";
import Rahnama from "../../../../public/icons/Rahnama";
import RahnamaDesktop from "../../../../public/icons/RahnamaDesktop";



export default function RahnamaPaziran() {

    return (
        <div
            className="
                md:bg-[#E1EDF0]
                bg-white
                flex
                flex-col
                items-center
                justify-center
                pt-[38px]
                mb-12
            "
        >
            <p
                className="
                    text-[18px]
                    font-bold
                    hidden
                    md:flex
                    mb-[38px]
                "
            >
                فرایند شروع کار
            </p>
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-center
                    md:hidden
                "
            >
                <Rahnama />
            </div>
            <div
                className="
                    w-full
                    md:flex
                    items-center
                    justify-center
                    hidden
                "                
            >
                <RahnamaDesktop />
            </div>
            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-center
                "
            >
                <FlashButton 
                    title="فرم پذیرندگان"
                    href=""
                    them="landing"
                />
            </div>
        </div>
    )
}