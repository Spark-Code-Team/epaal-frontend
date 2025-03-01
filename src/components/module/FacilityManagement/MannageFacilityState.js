

const titels = [
    {
        title: "دریافت شده",
        id: 1
    },
    {
        title: "در حال انجام",
        id: 2
    },
    {
        title: "رد شده",
        id: 3
    },
    {
        title: "تمام شده",
        id: 4
    },
]


export default function MannageFacilityState({ setSatate, state }) {

    return (
        <div
            className="
                w-full
            "
        >
            <div
                className="
                    flex
                    w-fit
                    items-center
                    justify-start
                    gap-6
                    border-b
                    border-[#E1EDF0]
                "
            >
                {
                    titels.map(item => (
                        <div
                            className={`
                                cursor-pointer
                                py-2
                                ${state == item.id ? "text-[#1D2433] border-b-2 border-[#1D2433]" : ""}
                            `}

                            onClick={() => setSatate(item.id)}
                        >
                            <p>
                                {
                                    item.title
                                }
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}