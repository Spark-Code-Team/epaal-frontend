import AuthTitle from "@/components/elements/AuthTitle";
import IdentityAuth from "./IdentityAuth";
import { useState } from "react";
import Tick from "../../../../public/icons/Admin/Tick";
import { addressAuthReq, confirmAuthReq } from "@/service/userPanel";
import { useRouter } from "next/navigation";



export default function AddressAuth({ active }) {


    const [state, setState] = useState("")
    const [confirmAddress, setConfirmAddress] = useState({
        id: "",
        postal_code: "",
        address: ""
    })

    const router = useRouter()

    const sendAddress = async () => {
        const { response, error } = await addressAuthReq(state)

        if(response) {
            setConfirmAddress(response.data)
        } else {
            console.log(error);
        }
    }


    const sendConfirm = async () => {
        const { response, error } = await confirmAuthReq(confirmAddress.id, confirmAddress.postal_code, confirmAddress.address)

        if(response) {
            router.push("/dashboard/get-credit")
        } else {
            console.log(error);
            
        }
    }

    return (
        <div>
            <AuthTitle 
                title="احراز آدرس"
                active={active}
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
                                if(!active) return
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
                        ${active ? "bg-[#1D434C] text-white" : "bg-[#d9d9d9]"}
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
                                border-[2px]
                                h-fit
                                mt-5
                                rounded-xl
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
                                    ${active ? "bg-[#1D434C] text-white" : "bg-[#d9d9d9]"}
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