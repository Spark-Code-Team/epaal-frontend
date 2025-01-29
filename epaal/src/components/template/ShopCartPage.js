"use client"

import { useDispatch, useSelector } from "react-redux"
import CartIcon from "../../../public/icons/Cart"
import Image from "next/image";
import { checkout } from "@/redux/features/shopCart/shopCart";
import { useRouter } from "next/navigation";


export default function ShopCartPage() {

    const store = useSelector(store => store)

    const dispatch = useDispatch()
    const router = useRouter()

    const handelCheckout = () => {
        dispatch(checkout())
        router.push("/shopping-evaam")
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
                    <div>
                        <h1>
                            سبد شما خالی است 🤣😂
                        </h1>
                    </div>
                )
            }
        </>
    )
}