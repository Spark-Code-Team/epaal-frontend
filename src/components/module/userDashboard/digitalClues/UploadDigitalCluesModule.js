"use client";

import CheckRounded from "@/../public/icons/dashboard/round-check.svg"

import CheckBoxSVG from "@/../public/icons/dashboard/check-box.svg";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Modal, ModalBody } from "flowbite-react";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaCross, FaPlus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { RiCrossLine } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { getlevelfour, postlevelfour } from "@/service/userPanel";
import FacilityState from "@/components/elements/FacilityState";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function UploadDigitalCluesModule() {
  const [checkBox, setCheckBox] = useState(false);
  const [sayyadiCheckLength, setSayyadiCheckLength] = useState("");
  const [fields, setFields] = useState([])

  const store = useSelector(store => store)

  const router = useRouter()


  useEffect(() => {

    const fetchData = async () => {
      const {response, error} = await getlevelfour()

      setFields([])
      if(response) {
        response.data.data?.forEach((item, index) => {
          setFields(last => [...last, {id: item.id, value: "", file: null, index: index, type: item.type}])
        })

        console.log("111111111111111111111111111111111",response);
        
      } else {
        console.log("111111111111111111111111111111", error);
      }
    }

    // if(store.status.level_number < 4) {
    //     router.back()
    // }


    fetchData()
  }, [])

  const fileInputRef = useRef(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newFields = fields
      newFields[index].file = file
      setFields(newFields)
    }
  };

  const handleCheckLength = (e, index) => {
    const newFields = fields
    newFields[index].value = e.target.value
    setFields(newFields)
  }

  //*   test
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUpload = async () => {

    if(store.status.level == "submit_physical") {
      router.replace("send-clues")
    } else {
      const formData = new FormData()
  
      fields.forEach(item => {
        formData.append(`data[${item.index}][id]`, item.id)
        formData.append(`data[${item.index}][value]`, item.value)
        formData.append(`data[${item.index}][file]`, item.file)
      })
  
      const {response, error} = await postlevelfour(formData)
  
      if(response) {
        setIsSuccess(true);
      } else {
        console.log(error);
      }

    }

    // هنگام کلیک روی دکمه آپلود
    // setIsLoading(true);
    // // شبیه‌سازی فرایند آپلود به مدت 2 ثانیه
    // setTimeout(() => {
    //   setIsLoading(false);
    



    //   // اعلان موفقیت رو بعد از 3 ثانیه مخفی کن
    //   setTimeout(() => {
    //     setIsSuccess(false);
    //   }, 3000);
    // }, 2000);
  };
  //*   test

  // if(fields.length == 0) {
  //   return <div>در انتظار تایید ادمین</div>
  // }

  return (
    <>
      <FacilityState 
        curentState={4}
      />
      {/* overlay لودینگ */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-white border-t-transparent" />
        </div>
      )}

      {/* اعلان موفقیت */}
      {isSuccess && (
        <Modal
          show={isSuccess}
          onClose={() => {
            setIsSuccess(false);
          }}
          className="flex flex-col justify-items-center pt-40 md:pt-0 text-center"
        >
          <Modal.Body className="flex flex-col items-center justify-evenly p-10">
            <div  onClick={()=>{setIsSuccess(false)}} className="w-full items-center justify-end flex flex-row md:mb-5 hover:cursor-pointer">
               <RxCross1 className="h-6 w-6 md:h-8 md:w-8"/>
            </div>
            <div>
              <Image src={CheckRounded} alt="checking..." width={300} height={300} className="w-28 h-28 md:w-36 md:h-36"/>
            </div>
            <div className="font-extrabold text-lg mt-5 mb-5">
              <p>در انتظار تأیید مدارک</p>
            </div>
            <div>
              <p>
                لطفا تا تایید یا رد شدن مدارک بارگذاری شده، صبر کنید. این فرایند
                ممکن است زمان بر باشد.
              </p>
            </div>
            <div className="mt-5 bg-evaamGreen text-white w-3/4 py-3 rounded-xl hover:cursor-pointer" onClick={()=>{setIsSuccess(false)}}>
              <button className="">متوجه شدم</button>
            </div>
          </Modal.Body>
        </Modal>
      )}

      <div className="w-full md:mt-20">
        <div className="mt-5 text-xl font-bold">
          <p>ثبت مدارک مورد نیاز</p>
        </div>
        <div className="mt-5 h-auto w-full rounded-2xl border-2 border-gray-200 p-4">
          <div>
            <p>راهنمایی نوشتن چک صیادی، جهت بارگذاری:</p>
          </div>
          <div className="mt-5 flex flex-row gap-5">
            <div className="h-auto w-1 rounded-md bg-evaamGreen"></div>
            <div className="flex flex-col gap-2">
              <div>
                <p>چک در وجه اعتبار گستر متین کالا باشد.</p>
              </div>
              <div>
                <p>
                  به شناسه ملی{" "}
                  <span className="font-extrabold">14013526909</span> در تاریخ
                  () به مبلغ () بابت خرید کالا یا خدمات
                </p>
              </div>
            </div>
          </div>
          <div className="mt-5 text-sm font-bold text-red-600">
            <div>
              <p>چک اگر دارای خط خوردگی باشد پذیرفته نمیشود.</p>
            </div>
            <div>
              <p>چک اگر طبق موارد ذکر شده نوشته نشده باشد پذیرفته نمیشود.</p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-row items-center gap-4">
          <div
            className="flex h-5 w-5 flex-row items-center justify-center rounded-md border-2 border-evaamGreen"
            onClick={() => {
              setCheckBox((prev) => !prev);
            }}
          >
            {checkBox ? (
              <>
                <Image
                  src={CheckBoxSVG}
                  alt="tick.svg"
                  width={800}
                  className="rounded-sm"
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="font-bold text-evaamCyan">
            <p>قوانین و مقررات را خوانده و با آن موافقم.</p>
          </div>
        </div>

          {
            fields.length != 0 && fields.map(item => {
              if(item.type == "file") {
                return (
                  <div
                  className="relative mt-5 flex h-auto w-full flex-col items-center gap-2 rounded-xl border-4 border-[#BED5DA] pb-10 pt-5 text-sm"
                  onClick={() => handleClick()}
                >
                  <div className="font-bold">
                    <p>تصویر روی چک صیادی</p>
                  </div>
                  <div className="text-gray-400">
                    <p>فرمت های قابل قبول PDF, PNG, JPG</p>
                  </div>
                  <div className="text-gray-400">
                    <p>حداکثر حجم تا 5Mb</p>
                  </div>
                  <div className="absolute bottom-0 left-1/2 flex h-6 w-16 -translate-x-1/2 transform flex-row items-center justify-center rounded-t-lg bg-[#BED5DA]">
                    <FaPlus color="white" />
                  </div>
                    <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, item.index)}
                    accept=".pdf, .png, .jpg"
                  />
                </div>
                )
              } else {
                return (
                  <>
                    <div className="mt-5">
                      <p>شناسۀ صیادی چک را وارد کنید ({digitsEnToFa("16 رقمی")}):</p>
                    </div>
                    <div className="mt-3 flex w-full flex-row items-center justify-between gap-5 rounded-lg border border-gray-200 px-5 py-3">
                      <input
                        type="text"
                        maxLength="16"
                        className="w-full border-none outline-none ring-0 focus:border-none focus:outline-none focus:ring-0"
                        placeholder={digitsEnToFa("شماره 16 رقمی")}
                        onChange={(e) => handleCheckLength(e, item.index)}
                      />
                      <FaCheckCircle
                        color={`${sayyadiCheckLength.length < 16 ? "gray" : "green"}`}
                        className="h-7 w-7"
                      />
                    </div>
                  </>
                )
              }
            })
          }
        
        <div
          className="mx-auto cursor-pointer mb-10 mt-10 w-4/5 rounded-xl bg-evaamGreen py-3 text-center text-white transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer hover:shadow-md"
          onClick={() => handleUpload()}
        >
          <div>
            {
              store.status.level == "submit_digital" ? (
                "رفتن به مرحله بعد"
              ) : (
               " تایید و ادامه"
              )
            }
            </div>
        </div>
      </div>
    </>
  );
}
