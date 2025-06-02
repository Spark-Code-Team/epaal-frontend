import Image from "next/image";
import testImage from "../../../public/image/airpod.png"



export default function EditeSingleProductAdminPage({ productId }) {

    

    return (
        <div
            className="
                px-[54px]
            "
        >
            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >
                <div
                    className="
                        flex
                        gap-7
                    "
                >
                    <Image 
                        src={testImage}
                        className="
                            w-[164px]
                            h-[164px]
                            rounded-3xl
                        "
                        width={1000}
                        height={1000}
                        alt="product"
                    />
                    <div
                        className="
                            flex
                            flex-col
                            justify-between
                            text-[14px]
                        "
                    >
                        <p
                            className="
                                font-bold
                            "
                        >
                            نام محصول
                        </p>
                        <p>اینستنس یک</p>
                        <p>اینستنس دو</p>
                        <p>اینستنس سه</p>
                        <p
                            className="
                                text-xs
                                font-normal
                                text-evaamCyanBlur
                            "
                        >
                            مشاهده همه تصاویر
                        </p>
                    </div>
                </div>

                <div
                    className="
                        text-sm
                        font-bold
                        flex
                        flex-col
                        gap-[14px]
                    "
                >
                    <p>
                        قیمت: 34،568،000 تومان
                    </p>
                    <p>
                        قیمت: 34،568،000 تومان
                    </p>
                    <p>
                        قیمت: 34،568،000 تومان
                    </p>
                </div>
            </div>

            <div
                className="
                    flex
                    flex-col
                    gap-2
                "
            >
                {
                    [...Array(5)].map((item, index) => (
                        <div
                            className="
                                border-b
                                border-[#E2E2E2]
                                flex
                                items-center
                                justify-between
                                py-[26px]
                            "
                        >
                            <div
                                className="
                                    text-[#57585A]
                                "
                            >
                                ابعاد:
                            </div>
                            <div>
                                ۱۶۰.۸x۷۸.۱x۷.۷ میلی‌متر
                            </div>
                        </div>
                    ))
                }
            </div>

            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-end
                    mt-10
                "
            >
                <div
                    className="
                        text-white
                        bg-evaamGreen
                        p-[10px]
                        rounded-xl
                        cursor-pointer
                    "
                >
                    ویرایش و ثبت مجدد
                </div>
            </div>
        </div>
    )
}