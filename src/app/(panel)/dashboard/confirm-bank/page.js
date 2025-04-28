"use client";

import { useState } from "react";
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
  const [sheba, setSheba] = useState("");
  const [showModal, setShowModal] = useState();

  const router = useRouter();

  const store = useSelector((store) => store);

  //   useEffect(() => {
  //     if(store.status.level_number < 2) {
  //         router.back()
  //     }
  // }, [])

  const sendSheba = async () => {
    const { response, error } = await createFacility(
      `IR${sheba}`,
      store.facility.selectedFacility.id,
      store.facility.choosen_value,
      store.facility.facility_installment_id,
    );

    if (response) {
      setStep(2);
      setShowModal(false);
    } else {
      console.log(error);
    }
  };

  return (
    <>
      <FacilityState curentState={2} />
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
                setShowModal(true);
              }}
            >
              شروع استعلام
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="md: flex flex-col items-center justify-evenly gap-7 md:mt-10">
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
                router.push("/dashboard/check-validation/");
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
        <div className="flex h-full w-full flex-col items-center justify-center bg-[#11182780]">
          <div className="relative flex h-[350px] w-[360px] flex-col items-center rounded-xl bg-white p-4 px-8 pt-[26px] md:h-[446px] md:w-[459px]">
            <SecondeOtp />

            <div className="mt-[22px] flex flex-col items-center gap-3">
              <p className="text-[16px] font-bold">شروع استعلام حساب بانکی</p>
              <p className="text-center text-[12px] font-normal md:text-[16px]">
                شماره شبا حساب خود را وارد کنید
              </p>
            </div>

            <div
              dir="ltr"
              className="my-5 flex h-7 w-full items-center justify-between rounded-[10px] border border-[#E1EDF0] p-[22px]"
            >
              <p>IR</p>
              <input
                className="w-[100%] border-none px-2 focus:border-none focus:outline-none focus:ring-0"
                placeholder="شماره شبا را وارد کنید"
                value={sheba}
                onChange={(e) => setSheba(e.target.value)}
              />
            </div>

            <div
              className="w-full cursor-pointer rounded-xl bg-[#1D434C] py-2 text-center text-white"
              onClick={() => sendSheba()}
            >
              تایید
            </div>

            <div className="absolute top-[10px] flex w-full justify-end pl-2">
              <div
                onClick={() => setShowModal(false)}
                className="cursor-pointer"
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
