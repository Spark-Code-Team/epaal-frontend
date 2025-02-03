import Image from "next/image";
import Link from "next/link";

const BodyAuthAddress = () => {

    const items = [
        { id: 8, name: "تهران", capital: "تهران" },
        { id: 1, name: "آذربایجان شرقی", capital: "تبریز" },
        { id: 2, name: "آذربایجان غربی", capital: "ارومیه" },
        { id: 3, name: "اردبیل", capital: "اردبیل" },
        { id: 4, name: "اصفهان", capital: "اصفهان" },
        { id: 5, name: "البرز", capital: "کرج" },
        { id: 6, name: "ایلام", capital: "ایلام" },
        { id: 7, name: "بوشهر", capital: "بوشهر" },
        { id: 9, name: "چهارمحال و بختیاری", capital: "شهرکرد" },
        { id: 10, name: "خراسان جنوبی", capital: "بیرجند" },
        { id: 11, name: "خراسان رضوی", capital: "مشهد" },
        { id: 12, name: "خراسان شمالی", capital: "بجنورد" },
        { id: 13, name: "خوزستان", capital: "اهواز" },
        { id: 14, name: "زنجان", capital: "زنجان" },
        { id: 15, name: "سمنان", capital: "سمنان" },
        { id: 16, name: "سیستان و بلوچستان", capital: "زاهدان" },
        { id: 17, name: "فارس", capital: "شیراز" },
        { id: 18, name: "قزوین", capital: "قزوین" },
        { id: 19, name: "قم", capital: "قم" },
        { id: 20, name: "کردستان", capital: "سنندج" },
        { id: 21, name: "کرمان", capital: "کرمان" },
        { id: 22, name: "کرمانشاه", capital: "کرمانشاه" },
        { id: 23, name: "کهگیلویه و بویراحمد", capital: "یاسوج" },
        { id: 24, name: "گلستان", capital: "گرگان" },
        { id: 25, name: "گیلان", capital: "رشت" },
        { id: 26, name: "لرستان", capital: "خرم‌آباد" },
        { id: 27, name: "مازندران", capital: "ساری" },
        { id: 28, name: "مرکزی", capital: "اراک" },
        { id: 29, name: "هرمزگان", capital: "بندرعباس" },
        { id: 30, name: "همدان", capital: "همدان" },
        { id: 31, name: "یزد", capital: "یزد" }
    ]

    return (

        <>

            <div className="w-[806px] h-[690px] m-auto p-4 bg-white rounded-xl border-2 border=[#E1EDF0] shadow-md">


                <div className="w-[600px] m-auto mt-5 mb-4 relative">

                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        استان
                    </label>

                    <select className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">

                        {
                            items.map((item, index) => (
                                <option key={index}>{item.capital}</option>
                            ))
                        }

                    </select>

                    <div className="absolute inset-y-0 left-10 top-6 flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>

                </div>


                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        کد پستی خود را وارد کنید
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="کد ده رقمی"
                    />
                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>
                </div>



                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        آدرس مطابق با کد پستی را وارد کنید
                    </label>

                    <textarea placeholder="آدرس را اینجا بنویسید" className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>

                    <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>
                </div>



                <div className="w-[600px] m-auto mt-5 mb-4 relative flex">

                    <div className="w-full flex justify-between">

                        <div className="w-[260px] relative">
                            <label className="w-full block">
                                پلاک
                            </label>

                            <input type="text" className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />

                            <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                                {/* <div className="w-5 h-5">
                                    <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                                </div> */}
                            </div>

                        </div>

                        <div className="w-[260px] relative">
                            <label className="w-full block">
                                واحد
                            </label>

                            <input type="text" className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />

                            <div className="absolute inset-y-0 left-5 top-6 flex items-center pointer-events-none">
                                {/* <div className="w-5 h-5">
                                    <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                                </div> */}
                            </div>

                        </div>

                    </div>

                </div>




                <div className="w-[600px] m-auto mt-5 mb-4 relative">
                    <label htmlFor="nationalCode" className="block text-sm font-medium text-gray-700">
                        شماره تلفن ثابت
                    </label>
                    <input
                        type="text"
                        id="nationalCode"
                        className="mt-1 block w-full h-[53px] border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder=""
                    />
                    <div className="absolute inset-y-0 left-5 top-[-9px] flex items-center pointer-events-none">
                        {/* <div className="w-5 h-5">
                            <Image src="/image/circle-bold.png" alt="" width={26} height={26} />
                        </div> */}
                    </div>

                    <p className="w-full mt-3 text-[13px]">شماره تلفن معتبر و مرتبط با کد پستی وارد کنید</p>

                </div>



                <div className="w-[600px] m-auto relative mt-14 flex justify-between">
                    <Link href="/authentication" className="w-[134px] h-[42px] border-2 border-[#1D434C] flex items-center justify-center rounded-md">مرحله قبلی</Link>
                    <Link href="/auth-bank" className="w-[134px] h-[42px] bg-[#1D434C] text-white flex items-center justify-center rounded-md">تایید و ادامه</Link>
                </div>


            </div>

        </>

    )

}


export default BodyAuthAddress;