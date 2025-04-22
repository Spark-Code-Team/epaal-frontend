import Image from "next/image";



export default function CategoryAdminShopCard() {

    return (
        <div
            className="
                flex
                flex-col
                gap-3
                rounded-[16px]
                bg-[#F0F0F1]
                w-[177px]
                p-2
            "
        >
            <div
                className="
                    flex
                    flex-col
                    gap-3
                    items-center
                    w-full
                "
            >
                <Image 
                    src="/"
                    width={500}
                    height={500}
                    className="
                      h-[122px]
                      w-full
                      rounded-xl 
                    "
                />
                <p
                    className="
                        w-full
                        text-center
                        text-[18px]
                        text-[#1D434C]
                    "
                >
                    لپتاپ
                </p>
            </div>

            <div
                className="
                    rounded-[10px]
                    bg-[#1D434C]
                    w-full
                    text-center
                    px-3
                    py-1
                    text-white
                    cursor-pointer
                "
            >
                انتخاب
            </div>
        </div>
    )
}