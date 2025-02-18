import Stors from "@/components/elements/Stors";



export default function EvamStore() {

    return (
        <div
            className="
                flex
                flex-col
                items-center
                justify-center
                w-full
            "
        >
            <div
                    className="
                        relative
                        w-[342px]
                        text-center

                    "
                >
                    <p
                        className="
                            text-[24px]
                            font-bold
                        "
                    >
                        قابل استفاده در فروشگاه های ایوام
                    </p>
                    <div
                        className="
                            h-[1px]
                            w-full
                            bg-gradient-to-r
                            from-[#587E88]
                            to-[#68B6C9]
                            absolute
                            bottom-2
                            blur-[1.6px]
                        "
                    >
                        
                    </div>
            </div>

            <Stors  />
        </div>
    )
}