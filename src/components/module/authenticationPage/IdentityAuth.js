"use client"

import AuthTitle from "@/components/elements/AuthTitle";
import { useEffect, useRef, useState } from "react";
import Tick from "../../../../public/icons/Admin/Tick";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import Calandar from "../../../../public/icons/Admin/Calandar";
import { identityAuthReq, secondeOpt } from "@/service/userPanel";
import SecondeOtp from "../../../../public/icons/dashboard/SecondeOtp";
import { Modal } from "flowbite-react";
import CrossIcon from "../../../../public/icons/Admin/CrossIcon";
import OtpInput from "react18-input-otp";
import Calender from "@/components/elements/Calender";
import { digitsEnToFa, digitsFaToEn } from "@persian-tools/persian-tools";
import { toJalaali } from "jalaali-js";
import DateObject from "react-date-object";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";




const inputs = [
    {
        type: "text",
        title: "نام",
        name: "name",
        placeholder: "نام خود را وارد کنید",
        limit: 3
    },
    {
        type: "text",
        title: "نام خانوادگی",
        name: "family",
        placeholder: "نام خانوادگی خود را وارد کنید",
        limit: 3
    },
    {
        type: "text",
        title: "کد ملی خود را وارد کنید",
        name: "code",
        placeholder: "0150813775",
        limit: 10
    },
    {
        type: "time",
        title: "تاریخ تولد",
        name: "time",
        placeholder: "",
        limit: 3
    },
    {
        type: "text",
        title: "شماره تماس(دوم)",
        name: "secondPhone",
        placeholder: "**********09",
        limit: 11
    }
]

export default function IdentityAuth({ setActive, setShowAddress }) {
    // استیت فرم احراز: نام، نام‌خانوادگی، کد ملی، تاریخ تولد، موبایل دوم، کد OTP
    const [state, setState] = useState({
      name: "",          // first_name
      family: "",        // last_name
      code: "",          // national_code
      time: new Date(),  // birthday_date (در صورت نیاز پیش از ارسال تبدیل به "YYYY/MM/DD" شود)
      secondPhone: "",   // second_phone_number
      opt_code: ""       // otp_code
    });
  
    const [showModal, setShowModal] = useState(false);
    const calenderRef = useRef();
  
    // ثبت مقدار OTP وارد شده
    const changeHandler = (enterOtp) => {
      setState(last => ({ ...last, opt_code: enterOtp }));
    };
  
    const store = useSelector(store => store);
    useEffect(() => {
      console.log(store);
    }, [store]);
  
    // ارسال درخواست ساخت/ارسال OTP برای موبایل دوم
    const openModal = async () => {
      if (state.code && state.secondPhone && state.family && state.name) {
        setShowModal(true);
  
        // فرض: secondeOpt شماره دوم را گرفته و OTP ارسال می‌کند
        const { response, error } = await secondeOpt(state.secondPhone);
  
        if (response) {
          console.log("OTP sent:", response);
        } else {
          console.log(error);
          // در صورت نیاز: toast.error(error?.response?.data?.error || "خطا در ارسال کد")
        }
      } else {
        toast.error("تمامی فیلد ها را پر کنید");
      }
    };
  
    // ارسال درخواست احراز مشخصات به بک‌اند
    const sendEhraz = async () => {
      // اگر state.time از نوع Date است، بهتر است همین‌جا تبدیل شود:
      // const fmt = (d) => `${d.getFullYear()}/${String(d.getMonth()+1).padStart(2,'0')}/${String(d.getDate()).padStart(2,'0')}`;
      // const birthday = state.time instanceof Date ? fmt(state.time) : state.time;
  
      const { response, error } = await identityAuthReq(
        state.name,        // first_name
        state.family,      // last_name
        state.code,        // national_code
        state.time,        // birthday_date (در صورت تبدیل، مقدار birthday را جایگزین کنید)
        state.secondPhone, // second_phone_number
        state.opt_code     // otp_code
      );
  
      if (response) {
        // موفق: رفتن به مرحله بعدی (مثلاً بخش آدرس)
        setShowAddress(2);
        toast.success("احراز مشخصات با موفقیت انجام شد");
      } else {
        // نمایش پیام خطای قابل‌خواندن از پاسخ سرور
        toast.error(error?.response?.data?.message || error?.response?.data?.error || "خطا در احراز مشخصات");
        console.log(error?.response?.data?.message || error?.response?.data?.error);
      }
  
      setShowModal(true);
    };
  
    // به‌روزرسانی استیت فرم + کنترل فعال بودن دکمه ادامه
    const inputChange = (e) => {
      setState(last => ({ ...last, [e.target.name]: e.target.value }));
  
      if (state.name && state.family && state.code && state.secondPhone) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
  
    // اگر آدرس قبلاً تأیید شده، مستقیم به مرحله 2 برو
    if (store.profile.confirmed_address) {
      setShowAddress(2);
    }
  
    return (
        <>
            <div
                className="
                    w-full
                    h-full
                "
            >
                <AuthTitle 
                    title="احراز مشخصات"
                    active={true}
                />
                <div
                    className="
                        flex
                        flex-col
                        gap-[15px]
                        mt-2
                    "
                >
                    {
                        inputs.map((item, index) => {
                            if(item.name == "time") {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <label
                                            className="
                                                text-[16px]
                                                font-normal
                                                px-2
                                                mb-2
                                            "
                                        >
                                            {
                                                item.title
                                            }
                                        </label>
                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                md:p-4
                                                p-1
                                                rounded-xl
                                                border
                                                border-[#E1EDF0]
                                                gap-1
                                            "
                                        >
                                            <DatePicker
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="bottom-right"
                                                format="YYYY/MM/DD"
                                                ref={calenderRef}
                                                onChange={(date) => setState(last => ({...last, time: digitsFaToEn(date.format("YYYY/MM/DD"))}))}
                                            />  
                                            {/* <Calender /> */}
                                            <div
                                                className="
                                                    p-2
                                                    rounded-[10px]
                                                    bg-[#1D434C]
                                                    text-white
                                                    md:text-[14px]
                                                    text-[12px]
                                                    font-normal
                                                    flex
                                                    items-center
                                                    gap-1
                                                    cursor-pointer
                                                    justify-center
                                                "

                                                onClick={() => calenderRef.current.openCalendar()}
                                            >
                                                <Calandar />
                                                <p
                                                    className="
                                                        text-center
                                                    "
                                                >
                                                    انتخاب تاریخ
                                                </p>
                                            </div>  
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div
                                        key={index}
                                    >
                                        <label
                                            className="
                                                text-[16px]
                                                font-normal
                                                px-2
                                                mb-2
                                            "
                                        >
                                            {
                                                item.title
                                            }
                                        </label>
                                        <div
                                            className="
                                                flex
                                                items-center
                                                justify-between
                                                p-3
                                                rounded-xl
                                                border
                                                border-[#E1EDF0]
                                            "
                                        >
                                            <input 
                                                value={state[item.name]}
                                                placeholder={item.placeholder}
                                                onChange={(e) => inputChange(e)}
                                                name={item.name}
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
                                                    ${state[item.name].length >= item.limit ? "bg-[#108B4A]" : "bg-[#C5C5C6]" }
                                                `}
                                            >
                                                <Tick />
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <div
                    className="
                        w-full
                        flex
                        justify-end
                        py-4
                    "
                >
                    <div
                        className="
                            p-2
                            rounded-[10px]
                            bg-[#1D434C]
                            text-white
                            text-[14px]
                            font-normal
                            cursor-pointer
                        "
                        onClick={() => openModal()}
                    >
                        تایید و ادامه
                    </div>
                </div>
            </div>

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
                                تایید شماره تماس
                            </p>
                            <p
                                className="
                                    text-[12px]
                                    md:text-[16px]
                                    font-normal
                                    text-center
                                "
                            >
                                کد ارسال شده به شماره {state.secondPhone} را وارد کنید
                            </p>
                        </div>

                        <div
                            dir="ltr"
                            className="
                                p-[22px]
                            "
                        >
                                                        
                            <OtpInput
                                value={state.opt_code}
                                onChange={changeHandler}
                                numInputs={8}
                                inputStyle={
                                    {
                                        width:"30px",
                                        height:"36px",
                                        margin:"0 5px",
                                        border:"1px solid #c6c6c6",
                                        borderRadius:"10px"
                                    }
                                }
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

                            onClick={() => sendEhraz()}
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
    )
}