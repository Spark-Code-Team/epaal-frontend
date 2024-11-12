"use client"
import EvaamLogo from "../../../public/icons/evaam-icon"


export default function Footer() {

    return (
<>
        <footer className="bg-gray-200 h-20 flex items-center justify-between flex-col ">
            <div className="flex items-center justify-between w-full border-b-[1px] border-b-[#748297] mx-[80px]">

            <div className="pr-[25px]">
            <EvaamLogo color="#1d1d1d" height="50px" width="50px"/>
            </div>

            <div className="">
            <p className="ml-4 text-sm px-[18px] py-[28px] ">تلفن پشتیبانی:021-91001022</p>
            </div>
            </div>

            <div className="pt-[32px] flex items-center justify-between w-full bg-gray-200">
                <div className="bg-black w-1/2 flex justify-between">
                    <div className="bg-slate-400 w-[50%]">
                        <ul>دیجی شهر
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                        </ul>
                    </div>
                    <div className="bg-slate-600 w-[50%]">
                    <ul> راهنما
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                            <li>درباره ما</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-300 flex w-1/3 justify-end">
                <p className="bg-red-300">shd</p>
                <p className="bg-red-600">srgrrrrhd</p>
                <p className="bg-amber-500">shrrrrrrrrrrrrrrrrrrrrrd</p>
                </div>
            </div>
  
        </footer>
</>
    )
}