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
                "
            >
                <p
                    className="
                        text-[24px]
                    "
                >
                    ایجاد فروشگاه جدید
                </p>
            </div>

            <NameInput />
        </div>
    )
}