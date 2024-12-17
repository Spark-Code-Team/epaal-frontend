

import Image from "next/image"
import img from "../../../../public/image/tempFacility.png"


export default function FacilityHeader() {

    return (
        <div>
            <div
                className="
                    w-full
                    bg-[#00397A]
                    flex
                    items-center
                    justify-between
                    relative
                    h-[153px]
                    p-10
                "
            >
                <div>
                    <p
                        className="
                            text-white
                            text-[30px]
                            font-bold
                        "
                    >
                        مدرسه علوی
                    </p>
                </div>
                <div
                    className="
                        flex
                        items-center
                        justify-center
                        flex-col
                    "
                >
                    <p
                        className="
                            text-white
                            text-[30px]
                            font-bold
                        "
                    >
                        تاریخ عضویت
                    </p>
                    <p
                        className="
                            text-white
                            text-[20px]
                        "
                    >
                        1403/08/23
                    </p>
                </div>

            </div>

            <div
                className="
                    w-full
                    flex
                    items-center
                    justify-center
                "
            >
                <Image 
                    width={500}
                    height={500}
                    src={img}
                    className="
                        w-[290px]
                        h-[290px]
                        mt-[-120px]
                        z-10
                    "
                    alt="alt"
                />
            </div>
        </div>

    )
}