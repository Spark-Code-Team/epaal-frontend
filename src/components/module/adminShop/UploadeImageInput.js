import AddPicture from "../../../../public/icons/Admin/AddPicture";

const rols = [
    "حداقل باید سه تصویر برای محصول خود بارگذاری کنید",
    "حجم تصویر حداکثر 6 مگابایت باشد ",
    "تصویر محصول بدون طرح/لوگو/متن باشد",
    "فرمت تصویر JPG یا JPEG باشد"
]


export default function UploadeImageInput() {

    const testMap = Array.from({ length: 4}, (i, v) => i)

    return (
        <div
            className="
                w-[1070px]
                h-[211px]
                rounded-xl
                border
                border-[#E1EDF0]
                flex
            "

        >
            <div
                className="
                    p-[22px]
                "
            >
                <ul
                    className="
                        flex
                        gap-8
                    "
                >
                    {
                        testMap.map((item, index) => (
                            <li
                                key={index}
                            >
                                <div
                                    className="
                                        rounded-[10px]
                                        w-[167px]
                                        h-[167px]
                                        bg-[#E1EDF0]
                                        flex
                                        items-center
                                        justify-center
                                        cursor-pointer
                                    "
                                >
                                    <AddPicture />
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div
                className="
                    px-[22px]
                    py-[48px]
                    text-[12px]
                "
            >
                <ul>
                    {
                        rols.map((item, index) => (
                            <li
                                className="
                                    mb-3
                                    list-disc
                                "
                                key={index}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}