import Image from "next/image"
import Setting from "../../../../public/icons/Admin/Setting"
import Email from "../../../../public/icons/Admin/Email"
import Notification from "../../../../public/icons/Admin/Notification"
import IconSearch from "../../../../public/icons/Admin/IconSearch"


export default function HeaderAdmin() {

    return (
        <header>
            <div className=" w-full h-[72px] flex border-b-[1px] border-[#E1E6EF]">

                <div className=" w-1/2 flex items-center" >

                <Image src={"/image/person.png"} alt="" width={44} height={44} className="w-[44px] h-[44px] mr-[32px]"/>
                
                <div className="flex flex-col mr-[10px]">
                <p className="text-[14px]">محمدحسن مرادی </p>
                <p className="text-[12px]">کارشناس فنی</p>
                </div>

                </div>

                <div className=" w-1/2 flex items-center" >

                <div className="w-[291px] flex items-center border-[1px] border-[#E1E6EF] rounded-[10px]">
                <input type="text" id="search" name="search" placeholder="جستجو" className=" w-[90%] rounded-[10px] bg-white border-none focus:outline-none focus:ring-0  h-[44px]">
                </input>
                <span className="w-[10%] ">
                <IconSearch color="#E1E6EF" size={24} width="20%"/>
                </span>
                </div>
                
                
                <div className="rounded-[10px] p-2 border-[1px] border-[#E1E6EF] mx-2">    
                <Setting color="#1D2433" size={24}/>
                </div>
                <div className="rounded-[10px] p-2 border-[1px] border-[#E1E6EF] mx-2">
                <Email color="#1D2433" size={24} />
                
                </div>
                <div className="rounded-[10px] p-2 border-[1px] border-[#E1E6EF] mx-2">
                 <Notification color="#1D2433" size={24}/>
                </div>

                
                </div>

            </div>


            

        </header>
    )
}