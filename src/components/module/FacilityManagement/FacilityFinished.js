




const st = [
    {
        titll: "طرح اعتباری:",
        ansewer: "بانک مهر"
    },
    {
        titll: "مهلت تسویه:",
        ansewer: "2 ماه"
    },
    {
        titll: "دفعات بازپرداخت:",
        ansewer: "7 از 8"
    },
    {
        titll: "مبلغ تسویه نشده:",
        ansewer: "450،000 تومان "
    }
]

export default function FacilityFinished() {

    return (
        <div
            className="
                rounded-[24px]
                md:border
                md:border-[#E1EDF0]
                w-full
                flex
                md:flex-row
                flex-col
                items-center
                md:justify-start
                justify-center
                relative
                md:p-4
                md:gap-4
                md:items-center
            "
        >
            {/* <AghsatChart amount="10000" percentage={100} /> */}
            <div
                className="
                    flex
                    flex-col
                    items-center
                    text-center
                    gap-6
                    p-3
                    border
                    rounded-[24px]
                "
            >
                <p
                    className="
                        text-[16px]
                        font-medium
                    "
                >
                    طرح
                    <br />
                    اعتباری
                </p>
                <p
                    className="
                        text-[18px]
                        font-bold
                    "
                >
                    بانک
                    <br />
                    کارآفرین
                </p>
            </div>
            <div
                className="
                    w-full
                    md:w-[40%]
                    flex
                    flex-col
                    items-center
                    gap-3
                    px-3
                    mt-5
                "
            >
                {
                    st.map((item, index) => (
                        <div
                            className="
                                w-full
                                flex
                                items-center
                                justify-between
                            "
                            key={index}
                        >
                            <div>
                                {
                                    item.titll
                                }
                            </div>
                            <div>
                                {
                                    item.ansewer
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
