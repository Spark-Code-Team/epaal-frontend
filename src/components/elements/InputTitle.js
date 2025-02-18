


export default function InputTitle({ title }) {

    return (
        <div
            className="
                w-full
                flex
                items-center
                justify-around
                gap-3
                p-2
            "
        >
            <p
                className="
                    w-[12%]
                    text-[#054366]
                    text-[20px]
                "
            >
                { title }
            </p>
            <div
                className="
                    w-[85%]
                    h-[1px]
                    bg-[#d9d9d9]
                "
            >

            </div>
        </div>
    )
}