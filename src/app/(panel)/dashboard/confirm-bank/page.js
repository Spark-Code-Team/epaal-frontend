"use client";

import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";

import WaitBag from "../../../../../public/icons/dashboard/wait-bag";
import TickBag from "../../../../../public/icons/dashboard/tickBag";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "flowbite-react";
import SecondeOtp from "../../../../../public/icons/dashboard/SecondeOtp";
import CrossIcon from "../../../../../public/icons/Admin/CrossIcon";
import { createFacility } from "@/service/userPanel";
import FacilityState from "@/components/elements/FacilityState";
import { fetchProfile } from "@/redux/features/profileUser/profileUser";

export default function ConfirmBank() {
  // step: مرحله نمایش (۱: ورود شبا، ۲: موفقیت/گام بعد)
  const [step, setStep] = useState(1);

  // sheba: بخش عددی/متنی شبا که کاربر وارد می‌کند (بدون "IR")
  const [sheba, setSheba] = useState("");

  // showModal: کنترل باز/بسته بودن مودال (اگر در UI استفاده می‌شود)
  const [showModal, setShowModal] = useState();

  const router = useRouter();

  // store: شامل facility.selectedFacility, facility.choosen_value, facility.facility_installment_id
  // که در ارسال درخواست تسهیلات استفاده می‌شوند
  const store = useSelector((store) => store);

  // ارسال اطلاعات شبا + شناسه طرح و پلن اقساط برای ایجاد تسهیلات
  const sendSheba = async () => {
    const { response, error } = await createFacility(
      `IR${sheba}`,                                  // شبا با پیشوند IR
      store.facility.selectedFacility.id,            // شناسه تسهیلات انتخابی
      store.facility.choosen_value,                  // مبلغ انتخابی
      store.facility.facility_installment_id,        // شناسه پلن اقساط
    );

    if (response) {
      // موفق: رفتن به مرحله بعد و بستن مودال (در صورت استفاده)
      setStep(2);
      setShowModal(false);
    } else {
      // خطا: لاگ/اعلان خطا (در صورت نیاز toast اضافه کنید)
      console.log(error);
      // مثال: toast.error(error?.response?.data?.message || "ایجاد تسهیلات ناموفق بود")
    }
  };

        const dispatch = useDispatch()
        const status = useSelector(store => store.status)
    
    
        useEffect(() => {
            console.log(status , 'استیت رو لاااااااااااااگ میخوام بگیگیرم')
    
            if (!profile.id) {
                dispatch(fetchProfile())
            }
        }, )

  return (
    <>
      <FacilityState curentState={status.level_number? status.level_number : 1} />
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
