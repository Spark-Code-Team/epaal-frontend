


export default function ArticleTitle({ title }) {

    return (
        <div
            className="
                w-full
                border-b-[3px]
                py-4
                mb-[68px]
            "
        >
            <p
                className="
                    text-2xl
                    font-bold
                "
            >
                {
                    title
                }
            </p>
        </div>
    )
}