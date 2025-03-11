


export default function ArticleTitle({ title }) {

    return (
        <div
            className="
                w-full
                border-b-[3px]
                py-4
                my-[38px]
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