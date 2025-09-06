import AuthTitle from "@/components/elements/AuthTitle";
import IdentityAuth from "./IdentityAuth";
import { useState } from "react";
import Tick from "../../../../public/icons/Admin/Tick";
import { addressAuthReq, confirmAuthReq } from "@/service/userPanel";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";



export default function AddressAuth() {
    // state: مقدار ورودی کدپستی
    const [state, setState] = useState("");
  
    // پاسخ موقت آدرس برگردانده‌شده از /users/show_address/
    // انتظار: { id, postal_code, address }
    const [confirmAddress, setConfirmAddress] = useState({
      id: "",
      postal_code: "",
      address: "",
    });
  
    const store = useSelector((store) => store);
  
    // ارسال کدپستی برای دریافت آدرس از سرور
    const sendAddress = async () => {
      const { response, error } = await addressAuthReq(state);
  
      if (response) {
        // response.data ⇒ { id, postal_code, address }
        setConfirmAddress(response.data);
      } else {
        console.log(error);
        // نمونه نمایش خطا:
        // toast.error(error?.response?.data?.error || error?.response?.data?.message || "خطا در دریافت آدرس");
      }
    };
  
    // تأیید نهایی آدرس با استفاده از داده‌های confirmAddress
    const sendConfirm = async () => {
      const { response, error } = await confirmAuthReq(
        confirmAddress.id,
        confirmAddress.postal_code,
        confirmAddress.address
      );
  
      if (response) {
        toast.success("احراز آدرس با موفقیت انجام شد");
        redirect("/dashboard");
      } else {
        toast.error("احراز آدرس با مشکل مواجه شد");
        // نمونه نمایش خطای دقیق‌تر:
        // toast.error(error?.response?.data?.error || error?.response?.data?.message || "احراز آدرس با مشکل مواجه شد");
      }
    };
  
    // اگر آدرس از قبل تأیید شده باشد، کاربر را به داشبورد ببر
    if (store.profile.confirmed_address) {
      redirect("/dashboard");
    }
  
    return (  
        <div>
            <AuthTitle 
                title="احراز آدرس"
                active={true}
            />
            <div>
                <div
                    className="
                        mt-3
                    "
                >
                    <p>
                        کد پستی
                    </p>
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            p-4
                            rounded-xl
                            border
                            border-[#E1EDF0]
                        "               
                    >
                        <input 
                            value={state}
                            onChange={(e) => {
                                setState(e.target.value)
                            }}
                            placeholder="کد پستی خود را وارد کنید"
                            className="
                                focus:border-none
                                focus:outline-none
                                focus:ring-0
                                h-full
                                w-full
                                text-[14px]
                            "

                        />
                            <div
                                className={`
                                    w-[26px]
                                    h-[26px]
                                    rounded-[20px]
                                    flex
                                    items-center
                                    justify-center
                                    ${state.length >= 8 ? "bg-[#108B4A]" : "bg-[#C5C5C6]" }
                                `}
                            >
                                <Tick />
                            </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    w-full
                    flex
                    justify-end
                    items-center
                    mt-4
                "
            >
                <div
                    className={`
                        w-fit
                        text-[14px]
                        rounded-[10px]
                        p-2
                        cursor-pointer
                        ${state.length >= 10 ? "bg-[#1D434C] text-white" : "bg-[#d9d9d9]"}
                    `}       
                    onClick={() => sendAddress()}  
                >
                    تایید کد پستی
                </div>
            </div>

            {
                confirmAddress.id ? (
                    <>
                        <div
                            className="
                                w-full
                                border
                                border-[#00970A]
                                bg-[#E8F5F9]
                                h-fit
                                mt-5
                                rounded-xl
                                p-3
                                text-[#00970A]
                            "
                        >
                            {
                                confirmAddress.address
                            }
                        </div>
                        <div
                            className="
                                w-full
                                flex
                                justify-end
                                items-center
                                mt-4
                            "
                        >
                            <div
                                className={`
                                    w-fit
                                    text-[14px]
                                    rounded-[10px]
                                    p-2
                                    bg-[#1D434C]
                                    text-white
                                    cursor-pointer
                                `}    
                                onClick={() => sendConfirm()}     
                            >
                                تایید آدرس
                            </div>
                        </div>
                    </>
                ) : (
                    null
                )
            }
        </div>
    )
}