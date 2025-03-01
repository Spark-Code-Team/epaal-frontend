"use client";

import { useEffect, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useRouter } from "next/navigation";

import WaitBag from "../../../../../public/icons/dashboard/wait-bag";
import TickBag from "../../../../../public/icons/dashboard/tickBag";
import { useSelector } from "react-redux";
import { Modal } from "flowbite-react";
import SecondeOtp from "../../../../../public/icons/dashboard/SecondeOtp";
import CrossIcon from "../../../../../public/icons/Admin/CrossIcon";
import { createFacility } from "@/service/userPanel";
import FacilityState from "@/components/elements/FacilityState";

export default function ConfirmBank() {

  const [step, setStep] = useState(1);
  const [sheba, setSheba] = useState("")
  const [showModal, setShowModal] = useState()

  const router = useRouter()

  const store = useSelector(store => store)

  useEffect(() => {
    if(store.status.level_number < 2) {
        router.back()
    }
}, [])
  

  const sendSheba = async () => {

    const { response, error } = await createFacility(`IR${sheba}`, store.facility.selectedFacility.id, store.facility.choosen_value, store.facility.facility_installment_id)
    
    if(response) {
      setStep(2)
    } else {
      console.log(error);
    }
  }

  return (
    <>
      <FacilityState
        curentState={2}
      />
      {step == 1 ? (
        <>
          <div className="flex flex-col items-center justify-evenly gap-7 md:mt-10">
            <div>
              <WaitBag />
            </div>
            <div className="px-5 text-center">
              برای ثبت تسهیلات خود نیاز است حساب بلوبانک شما مورد بررسی قرار
              بگیرد. این استعلام در لحظه می باشد و در صورت دریافت جواب مورد
              تایید میتوانید روند تسهیلات را ادامه دهید.
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                setShowModal(true)
              }}
            >
              شروع استعلام
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md: flex flex-col items-center justify-evenly gap-7 md:mt-10 ">
            <div>
              <TickBag />
            </div>
            <div className="px-5 text-center">
              حساب شما در بانک مربوطه بررسی شد.نتیجه استعلام{" "}
              <span className="text-green-400">موفقیت آمیز</span> بود
            </div>
            <div
              className="mt-[41px] w-1/2 rounded-xl bg-[#1D434C] p-[10px] text-center text-white hover:cursor-pointer"
              onClick={() => {
                router.push("/dashboard/check-validation/")
              }}
            >
                ادامه
            </div>
          </div>
        </>
      )}

            <Modal
                show={showModal}
                onClose={() => setShowModal(false)}
                dismissible
                size="sm"
                style={{
                    display: "flex",
                }}
            >
                <div
                    className="
                        w-full
                        h-full
                        flex
                        flex-col
                        items-center
                        justify-center
                        bg-[#11182780]
                    "
                >
                    <div
                        className="
                            md:w-[459px]
                            md:h-[446px]
                            p-4
                            rounded-xl
                            w-[360px]
                            h-[350px]
                            flex
                            flex-col
                            items-center
                            px-8
                            pt-[26px]
                            relative
                            bg-white
                        "
                    >
                        <SecondeOtp />

                        <div
                            className="
                                flex
                                flex-col
                                items-center
                                mt-[22px]
                                gap-3
                            "
                        >
                            <p
                                className="
                                    text-[16px]
                                    font-bold
                                "
                            >
                                شروع استعلام حساب بانکی
                            </p>
                            <p
                                className="
                                    text-[12px]
                                    md:text-[16px]
                                    font-normal
                                    text-center
                                "
                            >
                                شماره شبا حساب خود را وارد کنید
                            </p>
                        </div>

                        <div
                            dir="ltr"
                            className="
                                p-[22px]
                                w-full
                                flex
                                items-center
                                justify-between
                                rounded-[10px]
                                h-7
                                border
                                border-[#E1EDF0]
                                my-5
                            "
                        >
                          <p>
                            IR
                          </p>
                          <input 
                            className="
                              w-[100%]
                              border-none
                              focus:border-none
                              focus:outline-none
                              focus:ring-0
                              px-2
                            "
                            placeholder="شماره شبا را وارد کنید"
                            value={sheba}
                            onChange={(e) => setSheba(e.target.value)}
                          />
                        </div>

                        <div
                            className="
                                text-white
                                text-center
                                bg-[#1D434C]
                                w-full
                                py-2
                                rounded-xl
                                cursor-pointer
                            "

                            onClick={() => sendSheba()}
                        >
                            تایید
                        </div>

                        <div
                            className="
                                absolute
                                top-[10px]
                                pl-2
                                w-full
                                flex
                                justify-end
                            "
                        >
                            <div
                                onClick={() => setShowModal(false)}
                                className="
                                    cursor-pointer
                                "
                            >
                                <CrossIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

    </>
  );
}
