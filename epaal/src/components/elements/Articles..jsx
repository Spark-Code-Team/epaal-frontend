import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const Articles = ()=>{

    return(

        <>

            <div className="w-[90%] lg:w-[90%] mt-20 sm:w-[90%] bg-green-600 shadow-lg m-auto">

                <div className="w-full bg-yellow-300 m-auto text-center text-xl">جدیدترین مقالات دیجی شهر</div>

            </div>

            <div className="w-[90%] lg:w-[80%] sm:w-[70%] sm:min-h-[200px] bg-red-700 shadow-lg mx-auto flex flex-wrap mt-[120px]"> </div>

        </>

    )

}


export default Articles;