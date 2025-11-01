"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "flowbite-react";
import { Bounce, toast } from "react-toastify";
import EvaamLogoo from "../../../public/icons/EvaamLogoo";
import TrashDashBoard from "../../../public/icons/dashboard/TrashDashboard";
import { formatNumberToFA } from "@/utils/numToFa";
import LogoEvaam from "../../../public/image/logoevaam.png";
import {
  GETUserCart,
  GETUserCartTotalCost,
  GETUserWallet,
  PayCartProduct,
} from "@/service/products";
import OtpInput from "react18-input-otp";
import Phone from "../../../public/icons/Phone";

export default function ShopCartPage() {

  const store = useSelector((store) => store);

  const [openModal, setOpenModal] = useState(true);
  const [checkout, setCheckout] = useState(1);
  const [userTotalCost, setUserTotalCost] = useState(null);
  const [userWallet, setUserWallet] = useState(null);
  const [otp, setOtp] = useState("");
  const [userCart, setUserCart] = useState([]);


  const router = useRouter();


  const handelCheckout = () => {
    setOpenModal(true);
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
    async function fetchUserCostCart() {
      const { response, error } = await GETUserCartTotalCost();
      if (response) {
        setUserTotalCost(response.data.all_products_cost);
      }
    }

    async function fetchUserCart() {
      const { response, error } = await GETUserCart();

      if (response) {
        console.log(" => cart => \n", response.data.data);
        setUserCart(response.data.data);
      } else {
        toast.error("مشکلی در سبد خرید پیش اومده ❌");
      }
    }

    fetchUserCostCart();
    fetchUserCart();
  }, []);

  async function fetchUserWallet() {
    const { response, error } = await GETUserWallet();

    if (response) {
      setUserWallet(response.data.wallet_balance);
    } else {
      setUserWallet("بدون موجودی !");
    }
    setOpenModal(true);
  }

  const reducer = () => {
    return userCart.reduce((acc, item) => acc + item.price, 0);
  };

  const changeHandler = (enteredOtp) =>{
      setOtp(enteredOtp);
  };

  return (
    <div className="flex-col items-center">
      {userCart.length ? (
        <div className="md:flex-row">
          <div className="my-10 w-full px-10 text-lg font-bold">
            <p>سبد خرید</p>
          </div>
          <div className="flex w-full flex-col justify-evenly gap-5 p-4 md:flex-row md:gap-0">
            <div className="md:flex-row md:flex-wrap">
              {userCart.length !== 0 ? (
                userCart.map((item) => (
                  <div
                    className="md:my-3 md:w-auto md:rounded-xl md:border md:border-gray-300 md:p-5"
                    key={item.id}
                  >
                    <div className="flex w-full">
                      <div>
                        <Image
                          src={item?.product_image?.product_pic}
                          width={500}
                          height={500}
                          className="h-[150px] w-[180px] md:h-[250px] md:w-[400px] rounded-2xl"
                          alt={item.title}
                        />
                      </div>
                      <div className="flex flex-col items-start justify-around px-5">
                        <p className="text-xs font-bold md:text-sm">
                          نام کالا: {item.product_name}
                        </p>
                        <p> قیمت کالا:{formatNumberToFA(item?.price)} تومان</p>
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

            <div className="flex h-40 flex-col justify-between rounded-xl border-[3px] border-gray-200 p-4 md:w-[35%]">
              <div>
                <p> تعداد: {formatNumberToFA(userCart.length)} کالا</p>
                <p>مجموع قیمت: {formatNumberToFA(reducer())} تومان</p>
              </div>
              <div
                className="cursor-pointer rounded-md bg-evaamGreen p-2 text-center text-white transition-all"
                onClick={() => fetchUserWallet()}
              >
                <div className="flex w-3/4 flex-row items-center justify-evenly justify-self-center">
                  پرداخت از کیف پول زرمایه{" "}
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
                    setCheckout(1)
                }}
                size="md"
                dismissible
                className="
                    flex
                "
            >
                {
                    checkout == 1 ? (
                        <div className="bg-white p-6 rounded-xl shadow-lg">

                            <div className="text-center mb-4">
                                <Image src={LogoEvaam} alt="logo" width={150} height={150} />
                            </div>
        
                            <form>
        
                            <p className="py-6 text-[12px]">شماره تماس را وارد کنید</p>
        
                                <div className="mb-4 flex border border-[#E1E6EF]
                                items-center rounded-xl ">
                                <input
                                    dir="ltr"
                                    type="text"
                                    placeholder="+98**********"
                                    className="w-full px-4 py-2
                                    border-none
                                    focus:outline-none 
                                    focus:ring-2
                                    focus:ring-blue-100"
                                />
                                <span className="w-[10%] ">
                                    <Phone color="#E1E6EF" size={24} width="20%"/>
                                </span>
        
                                </div>
                                
                                <div
                                className="w-full bg-[#E1E6EF] text-center cursor-pointer text-black py-2 px-4 rounded-xl hover:bg-blue-100 transition"
                                onClick={() => setCheckout(2)}
                                >
                                دریافت کد
                                </div>
                            </form>
                        </div>
                    ) : (
                        <div className="bg-white p-6 rounded-xl shadow-lg w-[402px] h-[314px]">
                 
                           <div className="text-center mb-4">
                             <Image src={LogoEvaam} alt="logo" width={150} height={150} />
                           </div>
                 
                           <form>
                 
                           <p className="py-6 text-[12px]"> کد ارسال شده را وارد کنید </p>
                 
                             <div className="mb-4" dir="ltr">
             
                               
                            <OtpInput
                                value={otp}
                                onChange={changeHandler}
                                numInputs={8}
                                
                                inputStyle={
                                    {
                                        width:"35px",
                                        height:"41px",
                                        margin:"0 5px",
                                        border:"1px solid #c6c6c6",
                                        borderRadius:"10px"
                                    }
                                }
                        
                            />
             
                            </div>
                                    <div
                                        onClick={() => payHandler()}
                                        className="w-full bg-[#E1E6EF] text-black py-2 px-4 rounded-xl hover:bg-blue-100 transition text-center cursor-pointer"
                                    >
                                            پرداخت از کیف پول
                                        
                                    </div>
                                </form>
                            </div>
                    )
                }
            </Modal>
    </div>
  );
}
