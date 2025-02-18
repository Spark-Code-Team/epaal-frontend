"use client"
import Image from "next/image";

const HeadAuth = () => {

    return (

        <>
            {/* Head auth */}

            <div className="flex flex-col items-center my-4">
                <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
                    {/* Step 1 */}

                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full text-white">
                            <Image src="/image/circle1.png" alt="" width={26} height={26} />
                        </div>
                        <span className="text-sm text-[#1D434C] mt-2">احراز هویت</span>
                    </div>


                    {/* Divider */}
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>

                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500">
                            <Image src="/image/circle2.png" alt="" width={26} height={26} />
                        </div>
                        <span className="text-sm text-[#C5C5C6] mt-2">احراز آدرس</span>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                        <span className="w-2 h-2 bg-gray-400 rounded-full mx-1"></span>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500">
                            <Image src="/image/circle2.png" alt="" width={26} height={26} />
                        </div>
                        <span className="text-sm text-[#C5C5C6] mt-2">احراز بانکی</span>
                    </div>
                </div>
            </div>

        </>

    )

}


export default HeadAuth;