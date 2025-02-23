"use client"

import { useDispatch, useSelector } from "react-redux"
import CartIcon from "../../../public/icons/Cart"
import Image from "next/image";
import { checkout as finalCheckout } from "@/redux/features/shopCart/shopCart";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Modal } from "flowbite-react";
import Phone from "../../../public/icons/Phone";
import LogoEvaam from "../../../public/image/logoevaam.png";
import OtpInput from "react18-input-otp";
import { Bounce, toast } from "react-toastify";


export default function ShopCartPage() {

    const store = useSelector(store => store)
    const [openModal, setOpenModal] = useState(false)
    const [checkout, setCheckout] = useState(1)

    const dispatch = useDispatch()
    const router = useRouter()

    const[otp , setOtp] = useState("");
    
    const changeHandler = (enteredOtp) =>{
        setOtp(enteredOtp);
    };

    const handelCheckout = () => {
        setOpenModal(true)
    }

    const payHandler = () => {
        setOpenModal(false)
        router.push("/shopping-evaam")
        setCheckout(1)
        dispatch(finalCheckout())

        toast.success('پرداخت با موفقیت انجام شد', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }
    

    return (
        <>
            <div
                className="
                    w-full
                    bg-[#d9d9d9]
                    p-2
                    my-12
                    flex
                    items-center
                    gap-1
                "
            >
                <CartIcon width={24} height={24} />
                سبد خرید
            </div>

            {
                store.counter.selected.length ? (
                    <div
                        className="
                            w-full
                            flex
                            justify-between
                            p-3
                        "
                    >
                        <div>
                            {
                                store.counter.selected.map(item => (
                                    <div
                                        className="
                                            w-[700px]
                                            bg-[#d9d9d9]
                                        "
                                        key={item.id}
                                    >
                                        <div
                                            className="
                                                flex
                                                w-full
                                            "
                                        >
                                            <Image 
                                                src={item.image}
                                                width={500}
                                                height={500}
                                                className="
                                                    w-[300px]
                                                    h-[300px]
                                                "
                                                alt={item.title}
                                            />
                                            <p
                                                className="
                                                "
                                            >
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div
                            className="
                                w-[20%]
                                h-[300px]
                                border-[3px]
                                border-green-500
                                rounded-lg
                                flex
                                flex-col
                                justify-between
                                p-4
                            "
                        >
                            <div>
                                <p> تعداد: {store.counter.counter}</p>
                                <p>مجموع قیمت: {store.counter.totalPrice}</p>
                            </div>
                            <div
                                className="
                                    border-[2px]
                                    border-green-300
                                    p-2
                                    rounded-md
                                    hover:bg-green-300
                                    text-center
                                    transition-all
                                    cursor-pointer
                                "
                                onClick={() => handelCheckout()}
                            >
                                <p>
                                    پرداخت
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="
                            w-full
                            h-full
                            flex
                            justify-center
                            items-center
                            min-h-[50vh]
                        "
                    >
                        <h1>
                            سبد شما خالی است
                        </h1>
                    </div>
                )
            }

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
        </>
    )
}