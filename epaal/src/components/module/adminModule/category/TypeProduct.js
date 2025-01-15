import CheckDefaultCategory from "../../../../../public/icons/Admin/CheckDefaultCategory";
import CheckTrueCategory from "../../../../../public/icons/Admin/CheckTrueCategory";



export default function TypeProduct() {

    return (
        <div
            className="
                pr-8
                pt-8
                flex
                w-full
                justify-between
                items-center
            "
        >
            <div
                className="
                    text-[20px]
                    font-medium
                "
            >
                نوع دسته را انتخاب کنید :
            </div>
            
            <div
                className="
                    flex
                    w-[20%]
                    justify-between
                    items-center
                "
            >
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                    "
                >
                    <p
                        className="
                            text-[20px]
                            font-semibold
                        "
                    >
                        کالا
                    </p>
                    <CheckTrueCategory />
                </div>
                <div
                    className="
                        flex
                        items-center
                        gap-2
                        cursor-pointer
                    "
                >
                    <p
                        className="
                            text-[20px]
                            font-semibold
                        "   
                    >
                        خدمات
                    </p>
                    <CheckDefaultCategory />
                </div>
            </div>
        </div>
    )
}