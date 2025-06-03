"use client";

import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Bounce, toast } from "react-toastify";
import { TbShoppingBagCheck } from "react-icons/tb";
import EvaamLogoo from "../../../public/icons/EvaamLogoo";
import TrashDashBoard from "../../../public/icons/dashboard/TrashDashboard";
import TrashBasket from "../../../public/icons/trashBasket";
import PluseIcone from "../../../public/icons/PlusIcone";
import Phone from "../../../public/icons/Phone";
import { formatNumberToFA } from "@/utils/numToFa";
import LogoEvaam from "../../../public/image/logoevaam.png";
import {
  GETUserWallet,
  PayCartProduct,
  replaceUserCart,
} from "@/service/products";
import { fetchUserCart } from "@/helpers/shopCartThunks";
import { calcDiscountedPrice } from "@/helpers/helper";

export default function ShopCartPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  // انتخاب state از Redux
  const { selectedItems, loading, error, total } = useSelector(
    (state) => state.cart,
  );

  // وضعیت‌های محلی
  const [openModal, setOpenModal] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1); // 1: شماره تماس، 2: کد OTP
  const [userWallet, setUserWallet] = useState(null);
  const [reload, setReload] = useState(false);
  const [otp, setOtp] = useState("");

  // بارگذاری سبد خرید در mount و زمان تغییر reload
  useEffect(() => {
    dispatch(fetchUserCart());
  }, [reload, dispatch]);

  // تابع دریافت موجودی کیف پول کاربر
  async function fetchUserWallet() {
    const { response, error } = await GETUserWallet();
    if (response) {
      setUserWallet(response.data.wallet_balance);
    } else {
      setUserWallet("بدون موجودی !");
    }
    setOpenModal(true);
    setCheckoutStep(1);
  }

  // توابع افزایش، کاهش و حذف کالاها
  const increaseItem = async (item) => {
    const newArray = selectedItems.map((i) => {
      const isTarget = i.product_instance.id === item.product_instance.id;
      return {
        product_instance: i.product_instance.id,
        quantity: isTarget ? i.quantity + 1 : i.quantity,
      };
    });

    const { response, error } = await replaceUserCart(newArray);
    if (response) {
      setReload((prev) => !prev);
    } else {
      console.error("خطا در افزایش تعداد:", error);
    }
  };

  const decreaseItem = async (item) => {
    const newArray = selectedItems.map((i) => {
      const isTarget = i.product_instance.id === item.product_instance.id;
      return {
        product_instance: i.product_instance.id,
        quantity: isTarget && i.quantity > 1 ? i.quantity - 1 : i.quantity,
      };
    });

    const { response, error } = await replaceUserCart(newArray);
    if (response) {
      setReload((prev) => !prev);
    } else {
      console.error("خطا در کاهش تعداد:", error);
    }
  };

  const removeItem = async (item) => {
    const newArray = selectedItems
      .filter((i) => i.product_instance.id !== item.product_instance.id)
      .map((i) => ({
        product_instance: i.product_instance.id,
        quantity: i.quantity,
      }));

    const { response, error } = await replaceUserCart(newArray);
    if (response) {
      setReload((prev) => !prev);
    } else {
      toast.error("خطا در حذف آیتم");
    }
  };

  // محاسبه قیمت کل و تخفیف کل
  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (acc, item) =>
        acc +
        calcDiscountedPrice(
          item.product_instance.price,
          item.product_instance.discount,
        ) *
          item.quantity,
      0,
    );
  };

  const calculateTotalDiscount = () => {
    return selectedItems.reduce((acc, item) => {
      const discountAmount =
        ((item.product_instance.price * item.product_instance.discount) / 100) *
        item.quantity;
      return acc + discountAmount;
    }, 0);
  };

  // مدیریت پرداخت
  const payHandler = async () => {
    const { response, error } = await PayCartProduct();

    if (response) {
      setOpenModal(false);
      router.push("/shopping-evaam");
      toast.success("پرداخت با موفقیت انجام شد", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (error) {
      setOpenModal(false);
      toast.error(
        error.response?.data?.error === "your balance is not enough"
          ? "موجودی حساب شما کافی نیست ❌"
          : `${error.response?.data?.error} مشکلی درپرداخت پیش آمده`,
      );
    }
  };

  // مدیریت تغییر OTP
  const changeOtpHandler = (enteredOtp) => {
    setOtp(enteredOtp);
  };

  return (
    <div className="flex-col items-center">
      {selectedItems.length ? (
        <div className="flex-row gap-5">
          <div className="my-10 w-full px-10 text-lg font-bold">
            <p>سبد خرید</p>
          </div>

          <div className="flex w-full flex-col justify-evenly gap-5 p-4 md:flex-row md:gap-0">
            {/* لیست محصولات */}
            <div className="md:flex-row md:flex-wrap">
              {selectedItems.map((item) => (
                <div
                  className="md:my-3 md:w-auto md:rounded-xl md:border md:border-gray-300 md:p-5"
                  key={item.product_instance.id}
                >
                  <div className="flex w-full">
                    <Image
                      src={item?.product_image?.product_pic}
                      width={500}
                      height={500}
                      className="h-[150px] w-[180px] rounded-2xl md:h-[250px] md:w-[400px]"
                      alt={item.product_instance.product_name}
                    />
                    <div className="flex items-start justify-around gap-2 px-5">
                      <div>
                        <p className="text-xs font-bold md:text-sm">
                          نام کالا: {item.product_instance.product_name}
                        </p>
                      </div>
                      <div className="flex flex-col gap-10">
                        <div className="flex flex-col">
                          <div className="flex gap-8">
                            <p className="text-gray-500/60 line-through">
                              {formatNumberToFA(item.product_instance.price)}{" "}
                              تومان
                            </p>
                            <span className="flex h-[17px] w-[34px] items-center justify-center rounded-[28px] bg-[#DF5232] pt-2 text-xs text-white">
                              %
                              {formatNumberToFA(item.product_instance.discount)}
                            </span>
                          </div>

                          <p className="font-bold">
                            {formatNumberToFA(
                              calcDiscountedPrice(
                                item.product_instance.price,
                                item.product_instance.discount,
                              ),
                            )}{" "}
                            تومان
                          </p>
                        </div>

                        {/* کنترل تعداد */}
                        <div className="flex h-8 w-[129px] items-center justify-between rounded-xl border border-[#E1EDF0]">
                          {item.quantity === 1 ? (
                            <button
                              className="flex h-5 w-5 items-center justify-center"
                              onClick={() => removeItem(item)}
                            >
                              <TrashBasket height={20} width={14.17} />
                            </button>
                          ) : (
                            <button onClick={() => decreaseItem(item)}>
                              -
                            </button>
                          )}

                          <div className="flex w-10 flex-col items-center justify-center">
                            <span className="text-xs leading-none">
                              {item.quantity}
                            </span>
                            <p className="text-xs font-medium text-[#8A94A6]">
                              {formatNumberToFA(item.quantity)}
                            </p>
                          </div>
                          <button onClick={() => increaseItem(item)}>
                            <PluseIcone height={18} width={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* جمع کل و پرداخت */}
            <div className="mx-5 h-[270px] w-[280px] rounded-2xl bg-white px-10 py-4 shadow-lg md:h-[450px] md:w-[400px]">
              <p className="mt-3 text-sm font-bold">مبلغ قابل پرداخت:</p>

              <div className="mt-3 flex justify-between gap-6 text-sm text-[#8A94A6]">
                <p>جمع کل کالاها</p>
                <p>{formatNumberToFA(calculateTotalPrice())} تومان</p>
              </div>
              <div className="my-5 h-[1px] bg-[#EDF1F5]" />
              <div className="flex justify-between gap-6 text-sm text-[#8A94A6]">
                <p>میزان تخفیف</p>
                <p>{formatNumberToFA(calculateTotalDiscount())} تومان</p>
              </div>
              <div className="my-5 h-[1px] bg-[#EDF1F5]" />
              <div className="mb-5 flex justify-between gap-6 text-sm font-bold">
                <p>مبلغ کل</p>
                <p>{formatNumberToFA(calculateTotalPrice())} تومان</p>
              </div>

              <button
                onClick={fetchUserWallet}
                className="flex w-full items-center justify-center rounded-xl bg-[#DF5232] py-4 text-center text-white"
              >
                پرداخت
                <TbShoppingBagCheck className="mr-1" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[80vh] flex-col items-center justify-center gap-3 text-[#8A94A6]">
          <EvaamLogoo width={200} height={200} />
          <p className="text-lg">سبد خرید شما خالی است</p>
        </div>
      )}

      {/* مودال پرداخت و ورود شماره */}
      <Modal
        show={openModal}
        size="md"
        popup={true}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header className="border-b-0" />
        <Modal.Body>
          {checkoutStep === 1 && (
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900">
                ورود شماره موبایل
              </h3>
              <div className="flex flex-col gap-2">
                <p>موجودی کیف پول: {userWallet ?? "در حال بارگذاری..."}</p>
                <input
                  type="tel"
                  placeholder="شماره موبایل خود را وارد کنید"
                  className="w-full rounded border border-gray-300 px-3 py-2"
                />
              </div>
              <button
                className="w-full rounded bg-[#DF5232] py-2 text-white"
                onClick={() => setCheckoutStep(2)}
              >
                دریافت کد تایید
              </button>
            </div>
          )}

          {checkoutStep === 2 && (
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
              <h3 className="text-xl font-medium text-gray-900">
                وارد کردن کد تایید
              </h3>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => changeOtpHandler(e.target.value)}
                placeholder="کد تایید را وارد کنید"
                className="w-full rounded border border-gray-300 px-3 py-2"
              />
              <button
                className="w-full rounded bg-[#DF5232] py-2 text-white"
                onClick={payHandler}
                disabled={otp.length !== 6}
              >
                پرداخت
              </button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
