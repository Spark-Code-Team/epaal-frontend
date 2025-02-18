import EmpetyStateCircul from "../../../../public/icons/Admin/AdminShop/EmpetyStateCircul"
import FullStateCircul from "../../../../public/icons/Admin/AdminShop/FullStateCircul"
import HalfStateCircul from "../../../../public/icons/Admin/AdminShop/HalfStateCircul"


const titles = [
    "دسته بندی",
    "اطلاعات کلی",
    "درج مشخصات",
    "انتخاب عنوان",
    "بارگذاری تصویر",
]


export default function AddProductTitle({ levelState }) {

    return (
        <div
            className="
                flex
                gap-4
                mt-[52px]
                mb-[29px]
                mx-[50px]
            "
        >
            {
                titles.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            flex
                            ${index == titles.length -1 ? "flex-row-reverse" : "flex-row"}
                            items-center
                            gap-4

                        `}
                    >
                        <p
                            className={`
                                text-[16px]
                                font-normal
                                ${ levelState >= index + 1 ? "text-[#054366]" : "text-[#B1B1B1]"}
                                  
                            `}
                        >
                            { item }
                        </p>
                        <div
                            className={`
                                ${index == titles.length -1 ? "hidden" : ""}  
                            `}
                        >
                            {
                                levelState <  index + 1 | levelState == 1 ? (
                                    <EmpetyStateCircul />
                                ) : levelState == index + 1 ? (
                                    <HalfStateCircul />
                                ) : <FullStateCircul />
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}