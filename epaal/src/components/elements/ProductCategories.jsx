import Image from "next/image";
import Link from "next/link";

const ProductCategories = ()=>{

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] bg-red-400 shadow-lg mx-auto">

                <div className="w-full bg-yellow-400 text-center text-xl">دسته بندی محصولات</div>

                <div className="w-full bg-red-600 m-auto lg:mt-10 mt-8 flex flex-wrap justify-around">

                    <div className="">
                        <Link href="">
                            <Image src="/image/2.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">موبایل</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/3.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">زیورآلات</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/4.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">کالای دیجیتال</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/5.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">موتور سیکلت</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/6.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">لوازم خانگی</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/7.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">ابزار صنعتی</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/8.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">آرایشی بهداشتی</p>
                        </Link>
                    </div>

                    <div className="">
                        <Link href="">
                            <Image src="/image/9.webp" alt={""} width={130} height={130}/>
                            <p className="text-center text-base mt-1">ورزش و سفر</p>
                        </Link>
                    </div>

                </div>

            </div>
        </>

    )

}


export default ProductCategories;