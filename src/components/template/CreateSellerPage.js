import DoubelArrow from "../../../public/icons/Admin/DoubelArrow";
import NameInput from "../module/adminModule/createSeller/NameInput";



export default function CreateSellerPage() {

    return (
        <div
            className="
                min-w-full
                min-h-full
                bg-white
            "
        >
            <div
                className="
                    h-[20%]
                    p-7
                    flex
                    items-center
                    gap-4
                    w-full
                "
            >
                <p
                    className="
                        text-[24px]
                    "
                >
                    ایجاد فروشگاه جدید
                </p>
                <div
                    className="
                        bg-[#E7EAEE]
                        w-[70%]
                        flex
                        p-[5px]
                        gap-5
                        rounded-xl
                    "
                >
                    <p
                        className="
                            text-[#054366]
                        "
                    >
                        ساخت فروشگاه
                    </p>
                    
                    <DoubelArrow />

                    <p>
                        دسته بندی
                    </p>
                    
                    <DoubelArrow />

                    <p>
                        تایید نهایی
                    </p>
                </div>
            </div>

            <NameInput />
        </div>
    )
}