import CheckCircle from "../../../public/icons/Admin/AdminShop/CheckCircle";



export default function ConfirmProductPage() {

    return (
        <div
            className="
                w-full
                h-full
                flex
                items-center
                justify-center
            "
        >
            <div
                className="
                    rounded-[32px]
                    flex
                    flex-col
                    justify-around
                    items-center
                    bg-[#F0F2F5]
                    w-[919px]
                    h-[417px]
                "
            >
                <p>
                    محصول شما با موفقیت ثبت گردید.جهت انتشار در فروشگاه لطفا منتظر تاییدیه از سمت ایوام بمانید.
                </p>
                <div>
                    <CheckCircle />
                </div>
                <div
                    className="
                        w-[167px]
                        h-[44px]
                        rounded-xl
                        bg-evaamGreen
                        text-white
                        flex
                        justify-center
                        items-center
                    "
                >
                    تایید
                </div>
            </div>

        </div>
    )
}