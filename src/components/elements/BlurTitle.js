


export default function BlurTitle({ title }) {

    return (
        <div
            className="
                relative
                w-fit
                md:w-[342px]
                text-center

            "
        >
            <p
                className="
                    text-[14px]
                    md:text-[24px]
                    font-bold
                "
            >
                {
                    title
                }
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
    )
}