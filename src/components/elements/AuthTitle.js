


export default function AuthTitle({ title, active }) {

    return (
        <div
            className={`
                w-full
                text-[16px]
                font-bold
                pb-[20px]
                border-b-4
                mt-3
                text-center
                ${active ? "border-[#1D434C]" : "border-[#d9d9d9] text-[#d9d9d9]"}
            `}
        >
            <p>
                {
                    title
                }
            </p>
        </div>
    )
}