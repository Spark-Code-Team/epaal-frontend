import Link from "next/link";

const BodyAuthBank = () => {

    return (

        <>

            <div className="w-[806px] h-[814px] m-auto p-4 bg-white rounded-xl border-2 border=[#E1EDF0] shadow-md flex flex-wrap items-center">

                <p className="w-full text-center font-bold">امکان سنجی دریافت اعتبار</p>
                <p className="w-full mt-8 text-center">مرحله اول: بررسی رفتار مالی</p>
                <p className="w-full mt-3 text-center">مرحله دوم: نتیجه رتبه بندی اعتباری ایرانیان</p>

                <p className="w-full mt-12 text-center font-bold">معیار های سنجش رفتار مالی:</p>

                <p className="w-full mt-12 text-center">سابقه شما در بازپرداخت بدهی در ایوام</p>
                <p className="w-full mt-5 text-center">سابقه شما در بازپرداخت اقساط تسهیلات بانکی</p>
                <p className="w-full mt-3 text-center">نداشتن چک برگشتی</p>

                <Link href="/bank-credit" className="w-[440px] f h-[40px] bg-[#1D434C] m-auto flex items-center justify-center mt-12 text-white rounded-md text-center">شروع امکان سنجی</Link>

            </div>

        </>

    )

}



export default BodyAuthBank;