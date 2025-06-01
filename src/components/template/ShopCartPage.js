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
import { formatNumberToFA } from "@/utils/numToFa";
import {
  GETUserWallet,
  PayCartProduct,
  replaceUserCart,
} from "@/service/products";
import { fetchUserCart } from "@/helpers/shopCartThunks";
import TrashBasket from "../../../public/icons/trashBasket";
import PluseIcone from "../../../public/icons/PlusIcone";
import { calcDiscountedPrice } from "@/helpers/helper";

export default function ShopCartPage() {
  const store = useSelector((state) => state);
  useEffect(() => {
    console.log("STORE IS : ", store);
  }, [store]);

  const dispatch = useDispatch();
  const router = useRouter();
  const { selectedItems, userCart, loading, error } = useSelector(
    (state) => state.cart,
  );

  const [openModal, setOpenModal] = useState(false);
  const [userWallet, setUserWallet] = useState(null);
  const [reload, setReload] = useState(false);
  // const [userCartState, setUserCart] = useState([]);

  const handelCheckout = () => {
    setOpenModal(true);
  };

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
      console.log("خطا در افزایش تعداد:\n", error);
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
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!! \n", error);
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
      toast.error("خطا در حذف آیتم:");
    }
  };
  const payHandler = () => {
    async function handlePayment() {
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
          error.response.data.error === "your balance is not enough"
            ? "موجودی حساب شما کافی نیست ❌"
            : `${error.response.data.error} مشکلی درپرداخت پیش اومده : `,
        );
      }
    }

    handlePayment();
  };

  useEffect(() => {
    dispatch(fetchUserCart());
  }, [reload, dispatch]);
  useEffect(() => {
    if (userCart) {
      console.log("محتویات userCart:", userCart);
    }
  }, [userCart]);

  async function fetchUserWallet() {
    const { response, error } = await GETUserWallet();

    if (response) {
      setUserWallet(response.data.wallet_balance);
    } else {
      setUserWallet("بدون موجودی !");
    }
    setOpenModal(true);
  }

  const calculateTotalPrice = () => {
    return selectedItems.reduce((acc, item) => acc + item.price, 0);
  };
  const calculateTotalDiscount = () => {
    return selectedItems.reduce((acc, item) => {
      const discountAmount = (item.price * item.discount) / 100;
      return acc + discountAmount;
    }, 0);
  };

  return (
    <div className="flex-col items-center">
      {store?.cart?.selectedItems?.length ? (
        <div className="flex-row gap-5">
          <div className="my-10 w-full px-10 text-lg font-bold">
            <p>سبد خرید</p>
          </div>
          <div className="flex w-full flex-col justify-evenly gap-5 p-4 md:flex-row md:gap-0">
            <div className="md:flex-row md:flex-wrap">
              {store?.cart?.selectedItems?.length !== 0 ? (
                store?.cart?.selectedItems.map((item) => (
                  <div
                    className="md:my-3 md:w-auto md:rounded-xl md:border md:border-gray-300 md:p-5"
                    key={item.product_instance.id}
                  >
                    <div className="flex w-full">
                      <div>
                        <Image
                          src={item?.product_image?.product_pic}
                          width={500}
                          height={500}
                          className="h-[150px] w-[180px] rounded-2xl md:h-[250px] md:w-[400px]"
                          alt={item.title}
                        />
                      </div>
                      <div className="flex items-start justify-around gap-2 px-5">
                        <div className="felx">
                          <p className="text-xs font-bold md:text-sm">
                            نام کالا: {item.product_instance.product_name}
                          </p>
                        </div>
                        <div className="flex flex-col gap-10">
                          <div className="flex flex-col">
                            <div className="flex gap-8">
                              <p className="text-gray-500/60 line-through">
                                {formatNumberToFA(item.product_instance.price)}
                              </p>
                              <span className="flex h-[17px] w-[34px] items-center justify-center rounded-[28px] bg-[#DF5232] pt-2 text-xs text-white">
                                %
                                {formatNumberToFA(
                                  item.product_instance.discount,
                                )}
                              </span>
                            </div>

                            <p className="font-bold">
                              {formatNumberToFA(
                                calcDiscountedPrice(
                                  item.product_instance.price,
                                  item.product_instance.discount,
                                ),
                              )}
                              تومان
                            </p>
                          </div>

                          <div className="flex h-8 w-[129px] items-center justify-between rounded-xl border border-[#E1EDF0]">
                            {item.quantity === 1 && (
                              <button
                                className="flex h-5 w-5 items-center justify-center"
                                onClick={() => {
                                  removeItem(item);
                                }}
                              >
                                <TrashBasket height={20} width={14.17} />
                              </button>
                            )}
                            {item.quantity > 1 && (
                              <button
                                onClick={() => {
                                  decreaseItem(item);
                                }}
                              >
                                -
                              </button>
                            )}
                            <div className="flex w-10 flex-col items-center justify-center">
                              {!!item.quantity && (
                                <span className="text-xs leading-none">
                                  {item.quantity}
                                </span>
                              )}
                              <p className="text-xs font-medium text-[#8A8B8D]">
                                حداکثر
                              </p>
                            </div>
                            {item.quantity === 0 ? (
                              <button className="flex flex-row items-center justify-evenly justify-self-center">
                                <TbShoppingBagCheck width={24} height={24} />
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  increaseItem(item);
                                }}
                                className="h-3 w-3"
                              >
                                <PluseIcone />
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="0 my-4 flex w-full items-center justify-between px-10">
                      <div>
                        <TrashDashBoard />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>

            <div className="flex h-40 flex-col justify-between rounded-xl border-[3px] border-gray-200 p-4 pb-8 md:w-[35%]">
              <div>
                <div className="flex items-center justify-between">
                  <p>قیمت کالاها ({store?.cart?.total})</p>
                  <p>{formatNumberToFA(calculateTotalPrice())} تومان</p>
                </div>
                <div className="flex items-center justify-between">
                  <p>مجموع تخفیف کالاها ({store?.cart?.total})</p>
                  <p>{formatNumberToFA(calculateTotalDiscount())} تومان</p>
                </div>
                <div className="my-2 h-[2px] bg-[#E1EDF0]"></div>
                <div className="flex items-center justify-between text-[#F24822]">
                  <p>مبلغ قابل پرداخت</p>
                  <p>
                    <p>{formatNumberToFA(calculateTotalPrice())} تومان</p>
                  </p>
                </div>
              </div>

              <div
                className="mt-0.5 cursor-pointer rounded-md bg-evaamGreen p-2 text-center text-white transition-all"
                onClick={() => fetchUserWallet()}
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
        </div>
      ) : (
        <div className="flex h-full min-h-[50vh] w-full items-center justify-center">
          <h1>سبد شما خالی است</h1>
        </div>
      )}

      <Modal
        show={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        size="sm"
        style={{
          display: "flex",
        }}
      >
        <div className="h-auto w-[500px] rounded-xl bg-white p-6 shadow-lg">
          <div className="flex flex-row items-center gap-5">
            <div>
              <p className="py-6 text-lg"> موجودی کیف پول ایوام شما: </p>
            </div>
            <div className="text-center text-2xl font-bold">
              {formatNumberToFA(userWallet)} تومان
            </div>
          </div>
          <form>
            <div className="mb-4" dir="ltr"></div>
            <div
              onClick={() => payHandler()}
              className="w-full cursor-pointer rounded-xl bg-evaamGreen px-4 py-4 text-center text-white transition hover:bg-blue-100 hover:text-black hover:shadow-md"
            >
              پرداخت از کیف پول
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
