
const data = [
    {
        title: "وضعیت:",
        ansewer: "در انتظار تایید مدارک دیجیتال "
    },
    {
        title: "تعداد اقساط:",
        ansewer: 6
    },
    {
        title: "مبلغ طرح:",
        ansewer: "100،000،000 تومان"
    },
    {
        title: "طرح اعتباری:",
        ansewer: "بانک کارآفرین"
    },
    {
        title: "مرحله دریافت:",
        ansewer: "4 از 8"
    },
    {
        title: "مبلغ درخواستی:",
        ansewer: "60،000،000 تومان"
    },
    {
        title: "مبلغ قابل دریافت:",
        ansewer: "30،000،000 تومان"
    },
]

export default function InprogressFacility() {

    return (
        <div
            className="
                w-full
                flex
                flex-col
                justify-start
                gap-5
                mt-2
                text-[12px]
                md:text-[16px]
            "
        >

            {
                data.map(item => (
                    <div
                        key={item.title}
                        className="
                            md:w-[50%]
                            w-full
                            flex
                            items-center
                            justify-between
                        "
                    >
                        <p>
                            {
                                item.title
                            }
                        </p>
                        <p>
                            {
                                item.ansewer
                            }
                        </p>
                    </div>
                ))
            }
        </div>
    )
}