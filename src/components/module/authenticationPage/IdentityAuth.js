"use client";

import AuthTitle from "@/components/elements/AuthTitle";
import { useEffect, useRef, useState } from "react";
import Tick from "../../../../public/icons/Admin/Tick";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
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
    limit: 3,
  },
  {
    type: "text",
    title: "نام خانوادگی",
    name: "family",
    placeholder: "نام خانوادگی خود را وارد کنید",
    limit: 3,
  },
  {
    type: "text",
    title: "کد ملی",
    name: "code",
    placeholder: "کد ملی خود را وارد کنید",
    limit: 10,
  },
  {
    type: "time",
    title: "تاریخ تولد",
    name: "time",
    placeholder: "",
    limit: 3,
  },
  {
    type: "text",
    title: "شماره تماس(دوم)",
    name: "secondPhone",
    placeholder: "**********09",
    limit: 11,
  },
];

export default function IdentityAuth({ setActive, setShowAddress }) {
  const [state, setState] = useState({
    name: "",
    family: "",
    code: "",
    time: new Date(),
    secondPhone: "",
    opt_code: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const dateFormat = new Intl.DateTimeFormat("fa-IR");

  const store = useSelector((store) => store);

  useEffect(() => {
    if (!showModal) {
      setState((prevState) => ({
        ...prevState,
        opt_code: "",
      }));
    }
  }, [showModal]);

  useEffect(() => {
    console.log(store);
  }, [store]);

  const openModal = async () => {
    if (state.code && state.secondPhone && state.family && state.name) {
      setShowModal(true);

      const { response, error } = await secondeOpt(state.secondPhone);

      if (response) {
        toast.success("تمامی اطلاعات با موفقیت ارسال شد.");
      } else {
        console.log(" error is ", error);
      }
    } else {
      toast.error("تمامی فیلد ها را پر کنید");
    }
  };

  const sendEhraz = async () => {
    const { response, error } = await identityAuthReq(
      state.name,
      state.family,
      state.code,
      state.time,
      state.secondPhone,
      state.opt_code,
    );

    if (response) {
      setShowAddress(2);
      toast.success("احراز مشخصات با موفقیت انجام شد");
    } else {
      console.log(error.response.data.message);
    }
    setShowModal(true);
  };

  const inputChange = (e) => {
    setState((last) => ({ ...last, [e.target.name]: e.target.value }));

    if (state.name && state.family && state.code && state.secondPhone) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  if (store.profile.confirmed_address) {
    setShowAddress(2);
  }

  const handleCustomCalendarChange = (selectedDate) => {
    const formatted = selectedDate.format("YYYY/MM/DD");
    if (formatted !== inputValue) {
      setState((prevState) => ({
        ...prevState,
        time: selectedDate,
      }));
      setInputValue(formatted);
    }
  };

  return (
    <>
      <div className="h-full w-full">
        <AuthTitle title="احراز مشخصات" active={true} />
        <div className="mt-2 flex flex-col gap-[15px]">
          {inputs.map((item, index) => {
            if (item.name == "time") {
              return (
                <div key={index}>
                  <label className="mb-2 px-2 text-[16px] font-normal">
                    {item.title}
                  </label>
                  <div className="flex items-center justify-between gap-1 rounded-xl border border-[#E1EDF0] p-1 md:p-4">
                    <input
                      type="text"
                      value={
                        selectedDate
                          ? digitsEnToFa(selectedDate.format("jYYYY/jMM/jDD"))
                          : ""
                      }
                      readOnly
                      onFocus={() => setShowCalender(true)}
                      className="rounded border border-gray-300 p-2"
                      placeholder="تاریخ را انتخاب کنید"
                    />

                    {/* <Calender /> */}
                    <div
                      className="flex cursor-pointer items-center justify-center gap-1 rounded-[10px] bg-[#1D434C] p-2 text-[12px] font-normal text-white md:text-[14px]"
                      onClick={() => setShowCalender(true)}
                    >
                      <p className="text-center">انتخاب تاریخ</p>
                    </div>
                    <Modal
                      show={showCalender}
                      onClose={() => setShowCalender(false)} // بستن مدال
                      dismissible
                      size="sm"
                      style={{
                        display: "flex",
                      }}
                    >
                      {showCalender && (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-[#11182780]">
                          <div className="relative flex h-[350px] w-[360px] flex-col items-center rounded-xl p-4 px-8 pt-[26px] md:h-[446px] md:w-[459px]">
                            <Calender
                              onDateChange={handleCustomCalendarChange}
                              selectedDate={selectedDate}
                              setSelectedDate={setSelectedDate}
                              setShowCalender={setShowCalender}
                            />
                          </div>
                        </div>
                      )}
                    </Modal>
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <label className="mb-2 px-2 text-[16px] font-normal">
                    {item.title}
                  </label>
                  <div className="flex items-center justify-between rounded-xl border border-[#E1EDF0] p-3">
                    <input
                      value={state[item.name]}
                      placeholder={item.placeholder}
                      onChange={(e) => inputChange(e)}
                      name={item.name}
                      className="h-full w-full text-[14px] focus:border-none focus:outline-none focus:ring-0"
                    />

                    <div
                      className={`flex h-[26px] w-[26px] items-center justify-center rounded-[20px] ${state[item.name].length >= item.limit ? "bg-[#108B4A]" : "bg-[#C5C5C6]"} `}
                    >
                      <Tick />
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex w-full justify-end py-4">
          <div
            className="cursor-pointer rounded-[10px] bg-[#1D434C] p-2 text-[14px] font-normal text-white"
            onClick={() => openModal()}
          >
            تایید و ادامه
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={() => {
          setShowModal(false);
          setOtp("");
        }}
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
              <p className="text-[16px] font-bold">تایید شماره تماس</p>
              <p className="text-center text-[12px] font-normal md:text-[16px]">
                کد ارسال شده به شماره {state.secondPhone} را وارد کنید
              </p>
            </div>

            <div dir="ltr" className="p-[22px]">
              <OtpInput
                value={state.opt_code}
                onChange={(value) =>
                  setState((prevState) => ({ ...prevState, opt_code: value }))
                }
                numInputs={8}
                inputStyle={{
                  width: "30px",
                  height: "36px",
                  margin: "0 5px",
                  border: "1px solid #c6c6c6",
                  borderRadius: "10px",
                }}
              />
            </div>

            <div
              className="w-full cursor-pointer rounded-xl bg-[#1D434C] py-2 text-center text-white"
              onClick={() => sendEhraz()}
            >
              تایید
            </div>

            <div className="absolute top-[10px] flex w-full justify-end pl-2">
              <div
                onClick={() => {
                  setShowModal(false);
                  setState((prevState) => ({
                    ...prevState,
                    opt_code: "",
                  }));
                }}
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
