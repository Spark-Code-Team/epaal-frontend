"use client";

import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../../../public/icons/Cart";
import Image from "next/image";
import { checkout as finalCheckout } from "@/redux/features/shopCart/shopCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "flowbite-react";
import Phone from "../../../public/icons/Phone";
import LogoEvaam from "../../../public/image/logoevaam.png";
import OtpInput from "react18-input-otp";
import { Bounce, toast } from "react-toastify";
import EvaamLogoo from "../../../public/icons/EvaamLogoo";
import TrashDashBoard from "../../../public/icons/dashboard/TrashDashboard";

export default function ShopCartPage() {
  const store = useSelector((store) => store);
  const [openModal, setOpenModal] = useState(false);
  const [checkout, setCheckout] = useState(1);

  const dispatch = useDispatch();
  const router = useRouter();

  const [otp, setOtp] = useState("");

  const changeHandler = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  const handelCheckout = () => {
    setOpenModal(true);
  };

  const payHandler = () => {
    setOpenModal(false);
    router.push("/shopping-evaam");
    setCheckout(1);
    dispatch(finalCheckout());

    toast.success("پرداخت با موفقیت انجام شد", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="flex-col items-center">
      {store.counter.selected.length ? (
        <>
          <div className="my-10 w-full bg-red-200 px-10 text-lg font-bold">
            <p>سبد خرید</p>
          </div>
          <div className="flex w-full flex-col justify-evenly gap-5 bg-green-100 p-4 md:flex-row md:gap-0">
            {store.counter.selected.map((item) => (
              <div
                className="md:w-[60%] md:rounded-xl md:border md:border-gray-300 md:p-5"
                key={item.id}
              >
                <div className="flex w-full bg-red-100">
                  <div>
                    <Image
                      src={item.image}
                      width={500}
                      height={500}
                      className="h-[150px] w-[180px] md:h-[200px] md:w-[200px]"
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-around bg-blue-100 px-5">
                    <p className="text-xs font-bold md:text-lg">{item.title}</p>
                    <p className="text-xs md:text-lg">{item.title}</p>
                    <p className="text-xs md:text-lg">{item.title}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between px-10 bg-purple-200 my-4">
                  <div>10000000</div>
                  <div>
                    <TrashDashBoard />
                  </div>
                </div>
              </div>
            ))}

            <div className="flex h-auto flex-col justify-between rounded-lg border-[3px] border-gray-200 p-4 md:w-[35%]">
              <div>
                <p> تعداد: {store.counter.counter}</p>
                <p>مجموع قیمت: {store.counter.totalPrice}</p>
              </div>
              <div
                className="cursor-pointer rounded-md bg-evaamGreen p-2 text-center text-white transition-all"
                onClick={() => handelCheckout()}
              >
                <div className="flex w-3/4 flex-row items-center justify-evenly justify-self-center">
                  پرداخت از کیف پول ایوام{" "}
                  <span>
                    <EvaamLogoo color={"white"} height={30} width={30} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex h-full min-h-[50vh] w-full items-center justify-center">
          <h1>سبد شما خالی است</h1>
        </div>
      )}

      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
          setCheckout(1);
        }}
        size="md"
        dismissible
        className="flex"
      >
        {checkout == 1 ? (
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 text-center">
              <Image src={LogoEvaam} alt="logo" width={150} height={150} />
            </div>

            <form>
              <p className="py-6 text-[12px]">شماره تماس را وارد کنید</p>

              <div className="mb-4 flex items-center rounded-xl border border-[#E1E6EF]">
                <input
                  dir="ltr"
                  type="text"
                  placeholder="+98**********"
                  className="w-full border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
                <span className="w-[10%]">
                  <Phone color="#E1E6EF" size={24} width="20%" />
                </span>
              </div>

              <div
                className="w-full cursor-pointer rounded-xl bg-[#E1E6EF] px-4 py-2 text-center text-black transition hover:bg-blue-100"
                onClick={() => setCheckout(2)}
              >
                دریافت کد
              </div>
            </form>
          </div>
        ) : (
          <div className="h-[314px] w-[402px] rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-4 text-center">
              <Image src={LogoEvaam} alt="logo" width={150} height={150} />
            </div>

            <form>
              <p className="py-6 text-[12px]"> کد ارسال شده را وارد کنید </p>

              <div className="mb-4" dir="ltr">
                <OtpInput
                  value={otp}
                  onChange={changeHandler}
                  numInputs={8}
                  inputStyle={{
                    width: "35px",
                    height: "41px",
                    margin: "0 5px",
                    border: "1px solid #c6c6c6",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div
                onClick={() => payHandler()}
                className="w-full cursor-pointer rounded-xl bg-[#E1E6EF] px-4 py-2 text-center text-black transition hover:bg-blue-100"
              >
                پرداخت از کیف پول
              </div>
            </form>
          </div>
        )}
      </Modal>
    </div>
  );
}
