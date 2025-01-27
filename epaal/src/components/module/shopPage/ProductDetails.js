import LeftAroowBlur from "../../../../public/icons/Admin/AdminShop/LeftAroowBlur";



export default function ProductDetails({ details }) {

    return (
        <div
            className="
                w-full
            "
        >
            <div
                className="
                    text-[#666464]
                    bg-slate-300
                    w-fit
                    p-2
                    rounded-lg
                    flex
                    items-center
                    gap-2
                "
            >
                {details[0].faCategory}
                <LeftAroowBlur />    
            </div>

            <div
                className="
                    py-5
                    font-medium
                    text-[21px]
                    border-b-[3px]
                "
            >
                {
                    details[0].title
                }
            </div>

            <div
                className="
                    flex
                    items-center
                    justify-around
                    my-5
                "
            >
                {
                    details[0].colors.map((item, index) => (
                        <div
                            key={index}
                            className={`
                                flex
                                items-center
                                gap-2
                                border-[3px]
                                rounded-lg
                                hover:border-green-600
                                p-2
                                ${item.mojod ? "cursor-pointer" : "cursor-not-allowed"}
                                ${item.mojod ? "border-solid" : "border-dashed"}
                            `}
                        >
                            <p>
                                {
                                    item.title
                                }
                            </p>
                            <div
                                className="
                                    rounded-lg
                                    w-5
                                    h-5
                                "
                                style={{
                                    backgroundColor: item.color
                                }}
                            >

                            </div>
                        </div>
                    ))
                }
            </div>
            
            <div
                className="
                    w-full
                "
            >
                {
                    details[0].ram.length ? (
                        <select
                            className="
                                w-full
                                rounded-lg
                            "
                        >
                            {
                                details[0].ram.map(item => (
                                    <option
                                        className="
                                            focus:bg-green-200
                                        "
                                    >
                                        {
                                            item.ram
                                        }
                                    </option>
                                ))
                            }
                        </select>
                    ) : null
                }
            </div>

        </div>
    )
}