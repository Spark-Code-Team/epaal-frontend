


export default function CategoryTitleLevel({ level }) {

    return (
        <div
            className="
                w-full
                pr-8
                pt-8
                text-[24px]
                font-semibold
            "
        >
            <p>
                مدیریت دسته بندی ها
                &nbsp;
                &nbsp;
                &nbsp;
                <span
                    className="
                        text-[#8A8B8D]
                        text-[16px]
                        font-medium
                    "
                >
                    افزودن دسته جدید ({ level })
                </span>
            </p>
        </div>
    )
}