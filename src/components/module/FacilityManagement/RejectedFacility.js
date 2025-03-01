import { digitsEnToFa } from "@persian-tools/persian-tools";



export default function RejectedFacility() {

    return (
        <div
            className="
                w-full
                flex
                gap-6
                border
                border-[#E2E2E2]
                rounded-3xl
                p-3
            "
        >
                <div
                    className={`z-0 h-[124px] w-[226px] flex-none cursor-pointer rounded-2xl bg-cover bg-center bg-no-repeat p-4 text-white transition-transform duration-300 md:h-[217px] md:w-[398] opacity-100`}
                    style={{
                    background: `url(/image/backCard.png) center/100% 100% no-repeat`,
                    }}
                >
                    <div className="flex w-full items-center justify-between px-2">
                    <p>
                            تسهیلات
                    </p>
                    <p>
                            HiBank
                    </p>
                    </div>
                    <div className="mt-[10px] flex flex-col items-center justify-center md:mt-[14px]">
                    <p className="text-[7px] font-bold md:text-[14px]">
                        ارائه تسهیلات تا سقف
                    </p>
                    <p className="text-[13px] font-bold md:text-[24px]">
                        {digitsEnToFa(100000000)} تومان
                    </p>
                    </div>

                    <div className="flex w-full items-center justify-between md:mt-[30px]">
                    <div className="text-[5px] font-normal md:text-[10px]">
                        تامین مالی توسط بانک کارآفرین 
                    </div>
                    {/* <div className="rounded-xl bg-[#232336b3] px-[5px] py-2 text-[7px] backdrop-blur-[40px] md:text-[14px]">
                        {digitsEnToFa("18")} ماهه
                        </div> */}
                    </div>
                </div>
                <div
                    className="
                        w-full
                        h-full
                        flex
                        flex-col
                        gap-4
                    "            
                >
                    <div
                        className="
                            text-[14px]
                            w-fit
                            text-[#9D0000]
                            bg-[#FFD8D8]
                            rounded-3xl
                            py-1
                            px-[10px]
                        "
                    >
                        رد شده
                    </div>
                    <div
                        className="
                            w-full
                            bg-[#E2E2E2]
                            py-1
                            px-[10px]
                            rounded-xl
                            flex
                            flex-col
                            gap-3
                        "
                    >
                        <div>
                            علت
                        </div>
                        <div>
                            -نقض مدارک هویتی
                        </div>
                    </div>
                </div>
        </div>
    )
}