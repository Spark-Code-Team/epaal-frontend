import EmpetyStateCircul from "../../../../public/icons/Admin/AdminShop/EmpetyStateCircul"
import FullStateCircul from "../../../../public/icons/Admin/AdminShop/FullStateCircul"
import HalfStateCircul from "../../../../public/icons/Admin/AdminShop/HalfStateCircul"


const titles = {

    addTitles: [
        "دسته بندی",
        "انتخاب فیلد",
        "درج مشخصات فیلدهای ثابت",
        "درج مشخصات فیلدهای متغیر",
        "تایید نهایی",
    ],

    addShop: [
        "فرم پذیرندگی",
        "اطلاعات فروشگاه",
        "اطلاعات ادمین فروشگاه",
        "دسته بندی",
        "بازه تسویه",
        "تاییدیه نهایی"
    ]
}

export default function AddProductTitle({ levelState, titleKey="addTitles" }) {

    return (
        <div
            className="
                flex
                gap-4
                w-full
                mb-[29px]
                mx-[20px]
            "
        >
            {
                titles[titleKey].map((item, index) => (
                    <div
                        key={index}
                        className={`
                            flex
                            ${index == titles.length -1 ? "flex-row-reverse" : "flex-row"}
                            items-center
                            gap-1

                        `}
                    >
                        <p
                            className={`
                                text-[16px]
                                font-normal
                                text-center
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