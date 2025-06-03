import Image from "next/image";
import Cheshme from "../../../../public/icons/Admin/AdminShop/Cheshme";
import Trash from "../../../../public/icons/Admin/Trash";
import testImage from "../../../../public/image/airpod.png"



export default function ProductThManage() {

    return (
                                <tr>
                                    <td className="border-b px-4 py-5">
                                        <Image
                                            width={150}
                                            height={150}
                                            src={testImage}
                                            className="
                                                w-[68px]
                                                h-[68px]
                                                mx-auto
                                            "
                                            alt="product"
                                        />
                                    </td>
                                    <td className=" border-b px-4 text-center">شامپو</td>
                                    <td className=" border-b px-4 text-center">۱۴۰۲/۰۲/۱۵</td>
                                    <td 
                                        className=" 
                                            border-b 
                                            px-4 
                                            text-center
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-center
                                                gap-[6px]
                                            "
                                        >
                                            <div
                                                className="
                                                    bg-[#F0F0F1]
                                                    w-[118px]
                                                    h-8
                                                    rounded-lg
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                رد شده
                                            </div>
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-center
                                                    w-8
                                                    h-8
                                                    bg-[#84ABB4]
                                                    rounded-[6px]
                                                    cursor-pointer
                                                "
                                            >
                                                <Cheshme />
                                            </div>
                                        </div>
                                    </td>
                                    <td 
                                        className="
                                            border-b 
                                            px-4 
                                            text-center
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-center
                                                gap-[6px]
                                            "
                                        >
                                            <div
                                                className="
                                                    border
                                                    border-evaamGreen
                                                    rounded-full
                                                    w-5
                                                    h-5
                                                    flex
                                                    items-center
                                                    justify-center
                                                "
                                            >
                                                <div
                                                    className="
                                                        w-3
                                                        h-3
                                                        bg-evaamGreen
                                                        rounded-full
                                                    "
                                                />
                                            </div>
                                            <p>
                                                فعال
                                            </p>
                                        </div>
                                    </td>
                                    <td className="
                                            border-b 
                                            px-4 
                                            text-center
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-center
                                                gap-[6px]
                                            "
                                        >
                                            <div
                                                className="
                                                    text-[14px]
                                                    font-medium
                                                    text-evaamGreen
                                                    border
                                                    border-evaamGreen
                                                    px-[24px]
                                                    py-[7px]
                                                    w-[104px]
                                                    h-8
                                                    rounded-lg
                                                    flex
                                                    items-center
                                                    justify-center
                                                    cursor-pointer
                                                "
                                            >
                                                ویرایش
                                            </div>
                                            <div
                                                className="
                                                    border
                                                    border-red-600
                                                    rounded-lg
                                                    w-7
                                                    h-7
                                                    p-1
                                                    flex
                                                    items-center
                                                    justify-center
                                                    cursor-pointer
                                                "
                                            >
                                                <Trash />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
    )
}