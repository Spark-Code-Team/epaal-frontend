"use client";

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
                          <DocumentCheckIcon
                            height={25}
                            color="#1D434C"
                            className="h-5 w-4"
                          />
                        </div>
                      </Tooltip>
                      <Tooltip content="تأیید مدارک فیزیکی" placement="top">
                        <div
                          className="cursor-pointer"
                          onClick={() => handleIconClick("physical")}
                        >
                          <GrDocumentImage
                            height={20}
                            color="#1D434C"
                            className="h-5 w-4"
                          />
                        </div>
                      </Tooltip>
                      <Tooltip content="شارژ کیف پول" placement="top">
                        <div className="cursor-pointer">
                          <FaWallet
                            height={20}
                            color="#1D434C"
                            className="h-5 w-4"
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
        <Modal.Header className=" self-center">
            {modalContent}
        </Modal.Header>
        <Modal.Body className="">
          {/* <div
            onClick={() => {
              setShowModal(false);
            }}
            className="flex flex-row items-center justify-end hover:cursor-pointer"
          >
            <CrossIcon />
          </div> */}
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
                setShowModal(false);
              }}
            >
              رد کردن
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
