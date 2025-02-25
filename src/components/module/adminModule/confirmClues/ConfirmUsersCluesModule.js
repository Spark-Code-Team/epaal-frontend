"use client";

import PhysicalClues from "../../../../../public/icons/PhysicalClues";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { Tooltip } from "flowbite-react";
import { useState, useEffect } from "react";
import { FaWallet } from "react-icons/fa";
import { GrDocumentImage } from "react-icons/gr";
import { MdPayments } from "react-icons/md";

import SuccessPaidTick from "@/../public/image/banner.png";

import { Modal } from "flowbite-react";
import CrossIcon from "../../../../../public/icons/Admin/CrossIcon";
import Image from "next/image";
import DigitalIcon from "../../../../../public/icons/DigitalIcons";
import WalletMoney from "../../../../../public/icons/WalletMoney";

export default function ConfirmUsersCluesModule() {
  const sampleData = [
    { id: 1, name: "آیتم 1", category: "دسته‌بندی A", price: "100,000 تومان" },
    { id: 2, name: "آیتم 2", category: "دسته‌بندی B", price: "200,000 تومان" },
    { id: 3, name: "آیتم 3", category: "دسته‌بندی A", price: "150,000 تومان" },
    { id: 4, name: "آیتم 4", category: "دسته‌بندی C", price: "250,000 تومان" },
    { id: 5, name: "آیتم 5", category: "دسته‌بندی B", price: "300,000 تومان" },
  ];

  const [data, setData] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [showCanceledModal, setShowCanceledModal] = useState(false);

  const initialFields = [
    // { id: 1, type: "string", value: "" },
    // { id: 2, type: "file", value: null },
    // { id: 3, type: "string", value: "" },
  ];
  const [fields, setFields] = useState(initialFields);

  useEffect(() => {
    setData(sampleData);
  }, []);

  const handleIconClick = (type) => {
    if (type === "digital") {
      setModalContent("اطلاعات مدارک دیجیتال برای تأیید");
    } else if (type === "physical") {
      setModalContent("اطلاعات مدارک فیزیکی برای تأیید");
    }
    setShowModal(true);
  };

  //*   test
  const handleInputChange = (index, value) => {
    const newFields = [...fields];
    newFields[index].value = value;
    setFields(newFields);
  };

  // مدیریت تغییر فایل
  const handleFileChange = (index, file) => {
    const newFields = [...fields];
    newFields[index].value = file;
    setFields(newFields);
  };

  // ساخت FormData برای ارسال به سرور
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    fields.forEach((field, index) => {
      // ارسال آی‌دی
      formData.append(`data[${index}][id]`, field.id);
      // ارسال مقدار متنی یا مقدار مربوط به فایل
      formData.append(
        `data[${index}][value]`,
        field.value ? (field.type === "string" ? field.value : "") : "",
      );
      // ارسال فایل (در صورت انتخاب شده بودن)
      if (field.type === "file" && field.value) {
        formData.append(`data[${index}][file]`, field.value);
      } else {
        // اگر فایل انتخاب نشده باشد، می‌توانید مقدار null یا یک رشته خالی ارسال کنید.
        formData.append(`data[${index}][file]`, "");
      }
    });

    // برای بررسی لاگ FormData قبل از ارسال:
    console.log([...formData]);
  };

  //* test

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
                مبلغ درخواستی
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {item.name}
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {item.category}
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    {digitsEnToFa(item.price)}
                  </td>
                  <td className="border-b px-6 py-4 text-center text-sm">
                    <div className="flex flex-row items-center justify-evenly">
                      <Tooltip content="تأیید مدارک دیجیتال" placement="top">
                        <div
                          className="cursor-pointer"
                          onClick={() => handleIconClick("digital")}
                        >
                          <DigitalIcon height={20} width={20} fill="#1D434C" />
                        </div>
                      </Tooltip>
                      <Tooltip content="تأیید مدارک فیزیکی" placement="top">
                        <div
                          className="cursor-pointer"
                          onClick={() => handleIconClick("physical")}
                        >
                          <PhysicalClues
                            height={20}
                            width={20}
                            fill="#1D434C"
                          />
                        </div>
                      </Tooltip>
                      <Tooltip content="شارژ کیف پول" placement="top">
                        <div className="cursor-pointer">
                          <WalletMoney  height={20} width={20} fill="#1D434C"/>
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

      {/* test */}

      {fields.map((field, index) => (
        <form onSubmit={handleSubmit}>
          <div key={field.id}>
            <label>
              {field.type === "string"
                ? `متن ${field.id}:`
                : `فایل ${field.id}:`}
            </label>
            {field.type === "string" ? (
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleInputChange(index, e.target.value)}
              />
            ) : (
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
              />
            )}
          </div>
          <button type="submit">ارسال</button>
        </form>
      ))}

      {/* test */}

      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Modal.Header className="self-center">{modalContent}</Modal.Header>
        <Modal.Body className="">
          <div>
            <Image
              src={SuccessPaidTick}
              alt="pic.svg"
              height={300}
              width={300}
              className="my-5 w-full"
            />
          </div>
          <div className="flex flex-row items-center justify-evenly gap-3">
            <button
              className="w-2/5 rounded-xl bg-evaamGreen py-2 text-white transition-all duration-300 ease-in-out hover:scale-105"
              onClick={() => {
                setShowModal(false);
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
              type="text"
              className="w-full rounded-lg border-none bg-gray-200 outline-none transition-all duration-300 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0"
            />
          </div>
          <div
            className="mx-auto flex w-1/2 flex-row items-center justify-center rounded-lg bg-evaamGreen py-2 text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
            onClick={() => {
              setShowCanceledModal(false);
              setShowModal(false);
            }}
          >
            <button>ثبت</button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
