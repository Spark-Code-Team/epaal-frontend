import Image from "next/image";

const BodyAuthentication = ()=>{

    return(

        <>
        

        <div className="w-[806px] h-[660px] m-auto p-4 bg-white rounded-lg shadow-md">
                {/* National Code Input */}
                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        کد ملی خود را وارد کنید
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="0150813775"
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div>
                    </div>
                </div>



                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        تصویر کارت ملی
                    </label>

                    <div className="mt-1 flex justify-between items-center w-full h-[53px] pr-3 pl-3 border border-gray-300 rounded-lg shadow-sm">
                        <p className="text-[14px]">تصویر کارت ملی خود را وارد کنید</p>
                        <button className="w-[105px] h-[35px] bg-[#1D434C] text-white rounded-md">بارگذاری</button>
                    </div>

                </div>



                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        تاریخ تولد
                    </label>

                    <div className="mt-1 flex justify-between pr-3 pl-3 items-center w-full h-[53px] border border-gray-300 rounded-lg shadow-sm">
                        <p className="text-[14px]">1381/08/28</p>
                        <button className="w-[105px] h-[35px] bg-[#1D434C] text-white rounded-md">انتخاب تاریخ</button>
                    </div>

                </div>


                {/* First contact number */}

                <div className="w-[600px] m-auto mt-6 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        شماره تماس ( اول)
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="0150813775"
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div>
                    </div>
                </div>



                <div className="w-[600px] m-auto mt-6 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        شماره تماس (دوم)
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="0150813775"
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div>
                    </div>
                </div>



                <div className="w-[600px] m-auto relative mt-14 flex justify-end">
                    <button className="w-[134px] h-[42px] bg-[#A7A8A9] text-white flex items-center justify-center rounded-md">تایید و ادامه</button>
                </div>

            </div>
        
        </>

    )

}



export default BodyAuthentication;