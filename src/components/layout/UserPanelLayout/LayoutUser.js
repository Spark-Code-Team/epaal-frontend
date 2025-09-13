'use client'

import { useEffect } from "react";
import Link from "next/link";
import BagSVG from "../../../../public/icons/dashboard/Bag";
import BellSVG from "../../../../public/icons/dashboard/bell";
import UserSidebar from "./UserSidebar";
import { useDispatch, useSelector } from "react-redux";

export default function LayoutUser({ children }) {

      const dispatch = useDispatch()
      const status = useSelector(store => store.status)
  
  
      useEffect(() => {
          console.log(status , 'استیت رو لاااااااااااااگ میخوام 1324بگیرم')
  
          if (!profile.id) {
              dispatch(fetchProfile())
          }
      }, )

      function mapStatusToPersian(status) {
        switch (status?.level) {
          case "grade":
            return {name : "اعتبارسنجی" , 
                    url : "check-validation"
            } ;
          case "submit_digital":
            return { name : "ارسال مدارک دیجیتال",
                    url : "upload-digital"
            };
          case "waiting_digital":
            return { name : "در انتظار تایید مدارک دیجیتال",
                    url : "upload-digital"
            };
          case "submit_physical":
            return { name : "ارسال مدارک فیزیکی",
                    url : "send-clues"
            };
          case "waiting_physical":
            return { name : "در انتظار تایید مدارک فیزیکی",
                    url : ""
            };
          case "digital_signiture":
            return { name : "امضای دیجیتال",
                    url : "digital-signature"
            };
          case "prepayment":
            return { name : "پرداخت هزینه",
                    url : "confirm-prepayment"
            };
            case "final_waiting":
            return { name : "درحال پردازش",
                    url : "final-waiting"
            };
          default:
            return ""; // یا هر مقدار پیش‌فرض دیگری که بخواهید
        }
      }


  return (
    <>
      <div className="flex flex-col md:w-full md:flex-row md:bg-evaamBackground md:items-center">
        <div>
          <UserSidebar />
        </div>

        <div className="md:flex md:flex-col md:pt-5 justify-center md:w-full">
  <div className="hidden md:flex md:items-center md:justify-end md:px-10">
    <div className="flex w-max flex-row items-center gap-2">
      {/* ارتفاع یکسان برای هر لینک با h-10 (می‌توانید h-12 یا min-h-[40px] استفاده کنید) */}
      {status.level_number?       
      <Link href={mapStatusToPersian(status).url?`/dashboard/${mapStatusToPersian(status).url}`:''} className="flex flex-row items-center gap-2 rounded-lg bg-evaamGreen p-1 px-2 text-white hover:cursor-pointer h-10">
        <div className="rounded-lg border border-evaamGreen p-1 hover:cursor-pointer flex items-center h-full">
          مرحله اعتبار سنجی : {mapStatusToPersian(status).name}
        </div>
      </Link>
       : <></>}


      <Link href="/dashboard/shop-cart" className="flex flex-row items-center gap-2 rounded-lg bg-evaamGreen p-1 px-2 text-white hover:cursor-pointer h-10">
        <div className="flex items-center h-full">
          <BagSVG fill="#000" width="25" height="25" stroke="" />
        </div>
        <div className="h-full flex items-center">سبد خرید</div>
      </Link>
    </div>
  </div>

  <div className="hide-scrollbar flex h-svh flex-col items-center overflow-x-hidden bg-white px-7 pt-28 md:m-10 md:mt-4 md:h-[670px] md:w-[90%] md:flex-col md:items-center md:justify-center md:overflow-y-auto md:rounded-3xl md:bg-none md:bg-scroll md:px-7 md:pt-0">
    {children}
  </div>
</div>
        {/* 
        <div className="hide-scrollbar bg-white flex h-svh flex-col items-center overflow-x-hidden px-7 pt-28 md:m-10 md:mt-4 md:h-[670px] md:w-[1084px] md:flex-col md:items-center md:justify-center md:overflow-y-auto md:rounded-3xl md:bg-none md:bg-scroll md:px-7 md:pt-0">
          {children}
        </div> */}
      </div>
    </>
  );
}
