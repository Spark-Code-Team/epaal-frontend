"use client"

import Image from "next/image";

import BikeSend from "@/../public/icons/dashboard/bike-clues.svg";
import { useEffect, useState } from "react";
import { getStatusPhysical, sendStatusPhysical } from "@/service/userPanel";
import { toast } from "react-toastify";

export default function SendCluesModule() {

  const [status, setStatus] = useState("")

  const handelStatus = async () => {
    if(status != "submit_physical") return

    const { response, error } = await sendStatusPhysical()

    if(response) {
      setStatus(true)
    } else {
      console.log(error);
      toast.error("مدارک به مقصد نرسیده است")
    }
  }

  useEffect(() => {
  
    const fetchStatus = async () => {

      const { response, error } = await getStatusPhysical()

      if(response) {
        setStatus(response.data.status)
      } else {
        console.log(error);
      }
    }

    fetchStatus()
  }, [status])

  return (
    <>
      <div id="container" className="w-full h-auto">
        <div className="my-4 text-lg font-extrabold">
          <p>ارسال چک صیادی</p>
        </div>
        <div
          id="information-box-container"
          className="flex h-auto w-full flex-col items-start justify-evenly gap-2 rounded-lg border-2 border-gray-200 p-4"
        >
          <div>
            <p>
              لطفا موارد ذیل را به نشانی{" "}
              <span className="font-bold">
                استان تهران، خیابان پاسداران، بوستان پنجم، پلاک 84
              </span>
            </p>
          </div>
          <div>
            <p>و کدپستی: ********</p>
          </div>
          <div>
            <p>ارسال نمائید و منتظر اعلام نتیجه، بمانید.</p>
          </div>
          <div className="my-4 font-bold">
            <p>
              - <span> چک صیادی</span>
            </p>
          </div>
        </div>
        <div>
          <Image
            src={BikeSend}
            alt="send-bike"
            width={400}
            height={400}
            className="mb-5"
          />
        </div>
        <div className={`mb-10 w-4/5 cursor-pointer mx-auto rounded-lg ${status == "submit_physical" ? "text-white bg-evaamGreen" : "text-gray-400 bg-gray-200"} px-5 py-2 text-center font-semibold `}
          onClick={() => handelStatus()}
        >
          {
            status == "submit_physical" ? (
              <p>
                مدارک ارسال شد
              </p>
            ) : (
              <p>در انتظار پنل ادمین</p>
            )
          }
        </div>
      </div>
    </>
  );
}
