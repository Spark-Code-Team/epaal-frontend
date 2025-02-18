import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const Pagination = ()=>{

    return(

        <>

            <div className="w-full bg-[#E2E2E2] pr-10 pl-10 pt-3 pb-3 mx-auto mt-10 flex mb-3 rounded-md">

                <div className="w-1/3 mx-auto flex justify-start">

                    <button className="p-1 flex justify-between items-center border-[1px] bg-white border-[#57585A] text-[#57585A] rounded-md">
                        <IoIosArrowForward/>
                        صفحه قبلی
                    </button>

                </div>

                <div className="w-1/3 mx-auto flex justify-center items-center text-[#57585A]">
                    صفحه 1 از 10
                </div>

                <div className="w-1/3 mx-auto flex justify-end">

                    <button className="p-1 text-[#57585A] flex justify-between items-center border-[1px] bg-white border-[#57585A] rounded-md">
                        صفحه بعدی
                        <IoIosArrowBack/>
                    </button>

                </div>

            </div>

        </>

    )

}



export default Pagination;