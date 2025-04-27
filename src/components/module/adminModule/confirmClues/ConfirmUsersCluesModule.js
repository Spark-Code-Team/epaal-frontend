"use client";

import PhysicalClues from "../../../../../public/icons/PhysicalClues";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Tooltip } from "flowbite-react";
import { useState, useEffect, use } from "react";
import { FaWallet } from "react-icons/fa";
import { GrDocumentImage } from "react-icons/gr";
import { MdPayments } from "react-icons/md";

import SuccessPaidTick from "@/../public/image/banner.png";

import { Modal } from "flowbite-react";
import CrossIcon from "../../../../../public/icons/Admin/CrossIcon";
import Image from "next/image";
import DigitalIcon from "../../../../../public/icons/DigitalIcons";
import WalletMoney from "../../../../../public/icons/WalletMoney";
import {
  GETAllWaitingUserFacitilty,
  GETWaitedUserFacitiltyClues,
  POSTRejectDigitalFacitiltyClues,
  POSTAcceptDigitalFacitiltyClues,
  POSTAcceptPhysicalFacitiltyClues,
  POSTAcceptFinalFacitilty,
} from "@/service/adminPanel";
import { toast } from "react-toastify";
import { ToJalaliDate } from "@/utils/toJalali";

// utilities:
import { formatNumberToFA } from "@/utils/numToFa";
import { pallete } from "@/constant/Pallete";

export default function ConfirmUsersCluesModule() {
  const [waitedUsers, setWaitedUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [reload, setReloading] = useState(false);
  const [showCanceledModal, setShowCanceledModal] = useState(false);

  const [selectedUserFacility, setSelectedUserFacility] = useState({
    user_facility_id: 0,
    reject_text: "",
  });
  const [userDigitalClues, setUserDigitalClues] = useState([]);
  const [showFinalConfirm, setShowFinalConfirm] = useState(false);

  useEffect(() => {
    const getWaitingUser = async () => {
      const { response, error } = await GETAllWaitingUserFacitilty();

      if (response) {
        console.log(response.data);
        setWaitedUsers(response?.data.data);
      } else {
        toast.error("خطا در دریافت اطلاعات");
      }
    };

    getWaitingUser();
  }, [reload]);

  const handleIconClick = (type, id) => {
    setSelectedUserFacility((prev) => ({ ...prev, user_facility_id: id }));

    if (type === "digital") {
      const fetchUserClues = async (userFacilityId) => {
        const { response, error } =
          await GETWaitedUserFacitiltyClues(userFacilityId);

        if (response) {
          console.log("\n user clue \n -------> ", response.data);
          setUserDigitalClues(response.data.data);
        } else {
          toast.error("erro");
          console.error("err =========> ", error);
        }
      };

      fetchUserClues(id);
      setModalContent("اطلاعات مدارک دیجیتال برای تأیید");
    } else if (type === "physical") {
      setModalContent("تأییدیه مدارک فیزیکی");
    }
    setShowModal(true);
  };

  const sendRejectedFacility = async () => {
    const { response, error } =
      await POSTRejectDigitalFacitiltyClues(selectedUserFacility);

    setSelectedUserFacility({});
    setReloading((prev) => !prev);
    if (response) {
      toast.success("مدارک دیجیتال کاربر رد شد ✅");
    } else {
      toast.error("خطا در برقراری ارتباط❌");
    }
  };

  const acceptUserDigitalClues = async () => {
    const { response, error } =
      await POSTAcceptDigitalFacitiltyClues(selectedUserFacility);

    setSelectedUserFacility({});
    setShowModal(false);
    setReloading((prev) => !prev);
    if (response) {
      toast.success("مدارک دیجیتال کاربر پذیرفته شد ✅");
    } else {
      toast.error("خطا در برقراری ارتباط❌");
    }
  };

  const acceptUserPhysicalClues = async () => {
    const { response, error } =
      await POSTAcceptPhysicalFacitiltyClues(selectedUserFacility);

    setSelectedUserFacility({});
    setShowModal(false);
    setReloading((prev) => !prev);
    if (response) {
      toast.success("مدارک دیجیتال کاربر پذیرفته شد ✅");
    } else {
      toast.error("خطا در برقراری ارتباط❌");
    }
  };

  const sendFinalConfirm = async () => {
    const { response, error } = await POSTAcceptFinalFacitilty(
      selectedUserFacility.user_facility_id,
    );

    if (response) {
      toast.success("کیف پول کاربر با موفقیت شارژ شد.");
    } else {
      toast.error("خطا در برقراری ارتباط")
    }

    setShowFinalConfirm(false)
  };

  return (
    <>
      <div className="overflow-x-auto p-4">
        <div className="mx-10 my-8 text-lg font-bold text-evaamGreen">
          <p>تأیید مدارک</p>
        </div>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-r px-6 py-3 text-sm font-medium">
                نام کاربر
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium">
                تاریخ ثبت
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium">
                مبلغ قابل اعطا
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium">
                وضعیت
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {waitedUsers.length > 0 ? (
              waitedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {user.user_name}
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {digitsEnToFa(ToJalaliDate(user.created_at))}
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {formatNumberToFA(Number(user.given_value))} تومان
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {user.status == "in_progress"
                      ? "در حال انجام"
                      : user.status == "cancled"
                        ? "لغو شده"
                        : "انجام شده"}
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    <div className="flex flex-row items-center justify-evenly">
                      <Tooltip
                        arrow={false}
                        content="تأیید مدارک دیجیتال"
                        placement="top"
                        className={` ${user.level == "waiting_digital" && user.status == "in_progress" ? "bg-evaamGreen" : "bg-gray-300"}`}
                      >
                        <div
                          className={` ${user.level == "waiting_digital" && user.status == "in_progress" ? "cursor-pointer" : "cursor-not-allowed"}`}
                          onClick={() => handleIconClick("digital", user.id)}
                          style={{
                            pointerEvents:
                              user.level == "waiting_digital" &&
                              user.status == "in_progress"
                                ? "auto"
                                : "none",
                          }}
                        >
                          <DigitalIcon
                            height={20}
                            width={20}
                            stroke={` ${user.level == "waiting_digital" && user.status == "in_progress" ? "none" : "#fcfcfc"}`}
                          />
                        </div>
                      </Tooltip>
                      <Tooltip
                        arrow={false}
                        content="تأیید مدارک فیزیکی"
                        placement="top"
                        className={` ${user.level == "waiting_physical" && user.status == "in_progress" ? "bg-evaamGreen" : "bg-gray-300"}`}
                      >
                        <div
                          className={` ${user.level == "waiting_physical" && user.status == "in_progress" ? "cursor-pointer" : "cursor-not-allowed"}`}
                          onClick={() => handleIconClick("physical", user.id)}
                          style={{
                            pointerEvents:
                              user.level == "waiting_physical" &&
                              user.status == "in_progress"
                                ? "auto"
                                : "none",
                          }}
                        >
                          <PhysicalClues
                            height={20}
                            width={20}
                            fill="#1D434C"
                            stroke={` ${user.level == "waiting_physical" && user.status == "in_progress" ? "none" : "#fcfcfc"}`}
                          />
                        </div>
                      </Tooltip>
                      <Tooltip
                        content="شارژ کیف پول"
                        placement="top"
                        arrow={false}
                        className={` ${user.level == "final_waiting" && user.status == "in_progress" ? "bg-evaamGreen" : "bg-gray-300"}`}
                      >
                        <div
                          className={` ${user.level == "final_waiting" && user.status == "in_progress" ? "cursor-pointer" : "cursor-not-allowed"}`}
                          style={{
                            pointerEvents:
                              user.level == "final_waiting" &&
                              user.status == "in_progress"
                                ? "auto"
                                : "none",
                          }}
                          onClick={() => {
                            setSelectedUserFacility((prev) => ({
                              ...prev,
                              user_facility_id: user.id,
                            }));
                            setShowFinalConfirm(true);
                          }}
                        >
                          <WalletMoney
                            height={20}
                            width={20}
                            stroke={` ${user.level == "final_waiting" && user.status == "in_progress" ? "none" : "#fcfcfc"}`}
                          />
                        </div>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center">
                  داده‌ای موجود نیست.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header className="self-center">{modalContent}</Modal.Header>
        {modalContent == "اطلاعات مدارک دیجیتال برای تأیید" ? (
          <Modal.Body className="">
            {userDigitalClues.length > 0 ? (
              <>
                {userDigitalClues.map((doc) => (
                  <div key={doc.id}>
                    {doc?.document?.type == "file" ? (
                      <div className="flex flex-col items-center justify-evenly">
                        <div className="my-5 border-b border-gray-300 font-bold">
                          {doc?.document.name}
                        </div>
                        <div>
                          <Image
                            src={doc.file}
                            alt="...loading"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-evenly">
                        <div className="my-5 border-b border-gray-300 font-bold">
                          {doc?.document.name}
                        </div>
                        <div className="text-black">
                          {digitsEnToFa(doc.value)}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="my-4 text-center">
                  دیتایی برای نمایش وجود نداره
                </div>
              </>
            )}
            <div className="flex flex-row items-center justify-evenly gap-3">
              <button
                className="w-2/5 rounded-xl bg-evaamGreen py-2 text-white transition-all duration-300 ease-in-out hover:scale-105"
                onClick={() => {
                  acceptUserDigitalClues();
                }}
              >
                تأیید کردن
              </button>
              <button
                className="w-2/5 rounded-xl border border-evaamGreen py-2 text-evaamGreen transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-500 hover:text-red-500"
                onClick={() => {
                  setShowCanceledModal(true);
                }}
              >
                رد کردن
              </button>
            </div>
          </Modal.Body>
        ) : (
          <Modal.Body className="">
            <div className="mb-10 text-center">
              مدارک فیزیکی دریافت شده از کاربر انتخاب شده، مورد تأیید هست؟ در
              صورت <span className="font-bold text-red-700">"رد کردن"</span> این
              مدارک، عملیات دریافت تحصیلات جاری، برای کاربر از{" "}
              <span className="font-bold text-red-700">بین خواهد رفت</span>!
            </div>
            <div className="flex flex-row items-center justify-evenly gap-3">
              <button
                className="w-2/5 rounded-xl bg-evaamGreen py-2 text-white transition-all duration-300 ease-in-out hover:scale-105"
                onClick={() => {
                  if (modalContent == "اطلاعات مدارک دیجیتال برای تأیید") {
                    acceptUserDigitalClues();
                  } else if (modalContent == "تأییدیه مدارک فیزیکی") {
                    acceptUserPhysicalClues();
                  }
                }}
              >
                تأیید کردن
              </button>
              <button
                className="w-2/5 rounded-xl border border-evaamGreen py-2 text-evaamGreen transition-all duration-300 ease-in-out hover:scale-105 hover:border-red-500 hover:text-red-500"
                onClick={() => {
                  setShowCanceledModal(true);
                }}
              >
                رد کردن
              </button>
            </div>
          </Modal.Body>
        )}
      </Modal>

      <Modal
        show={showCanceledModal}
        onClose={() => setShowCanceledModal(false)}
      >
        <Modal.Header className="place-self-end border-none"></Modal.Header>
        <Modal.Body>
          <div className="text-sm font-bold">
            لطفا دلیل رد شدن را ذکر بفرمایید:
          </div>
          <div className="my-5">
            <input
              onChange={(e) => {
                setSelectedUserFacility((prev) => ({
                  ...prev,
                  reject_text: e.target.value,
                }));
              }}
              type="text"
              className="w-full rounded-lg border-none bg-gray-200 outline-none transition-all duration-300 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0"
            />
          </div>
          <div
            className="mx-auto flex w-1/2 flex-row items-center justify-center rounded-lg bg-evaamGreen py-2 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
            onClick={() => {
              setShowCanceledModal(false);
              setShowModal(false);

              sendRejectedFacility();
            }}
          >
            <button>ثبت</button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showFinalConfirm}
        onClose={() => {
          setShowFinalConfirm(false);
        }}
        className="flex flex-col items-center justify-evenly"
      >
        <div className="flex flex-col items-center justify-evenly gap-6 py-10">
          <div className="border-b-2 border-gray-200 px-10 py-5 text-2xl font-bold">
            <p>تایید نهایی و شارژ کیف پول</p>
          </div>
          <div>
            <hr />
          </div>
          <div className="text-lg font-medium">
            <p>
              با تأیید نهایی، کیف پول کاربر به مقدار{" "}
              <span className="text-evaamGreen">" مبلغ قابل اعطا "</span> شارژ
              خواهد شد.
            </p>
          </div>
          <div className="flex w-full flex-row items-center justify-evenly">
            <button
              className="rounded-lg bg-evaamGreen px-10 py-5 text-white transition-all duration-300 ease-in-out hover:rounded-2xl hover:shadow-md"
              onClick={() => {
                sendFinalConfirm();
              }}
            >
              تایید و شارژ
            </button>
            <button
              className="rounded-lg bg-red-800 px-10 py-5 text-white transition-all duration-300 ease-in-out hover:rounded-2xl hover:shadow-md"
              onClick={() => {
                setShowFinalConfirm(false);
              }}
            >
              انصراف
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
