


export default function ShopTitle({ title }) {

    return (
        <div
            className="
                w-full
                flex
                text-[16px]
                md:text-[28px]
                font-bold
                items-center
                gap-[18px]
            "
        >
            <p
                className="
                    w-fit
                    text-evaamGreen
                "
            >
                {
                    title
                }
            </p>
            <div
                className="
                    w-[62%]
                    h-[3px]
                    blur-[1px]
                    bg-gradient-to-r
                    from-[#E1EDF0]
                    to-[#15809B]
                    hidden
                    md:block
                "
            >

            </div>
        </div>
    )
}