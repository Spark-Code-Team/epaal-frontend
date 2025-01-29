"use client"

import { decrement, increment } from "@/redux/features/shopCart/shopCart"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"


export default function ShopProduct ({ product }) {

    const dispatch = useDispatch()
    const store = useSelector(store => store)

    console.log(store);

    const productIndex = store.counter.selected.findIndex(item => item.id == product.id)
    

    return (
        <div
            className="
                h-full
                w-full
            "
        >
            <div
                className="
                    sticky
                    top-20
                    w-[300px]
                    h-[200px]
                    border-[2px]
                    border-green-600
                    mx-auto
                    rounded-xl
                    p-2
                    flex
                    flex-col
                    justify-between
                "
            >
                <div
                    className="
                        pt-3
                        text-center
                    "
                >
                    {
                        product.price
                    }
                    میلیون تومان
                </div>
                <div
                    className="
                        w-full
                        flex
                        items-center
                    "
                >
                    <div
                        className="
                            w-full
                            border
                            border-green-600
                            text-green-600
                            p-3
                            text-center
                            rounded-xl
                            hover:bg-green-600
                            hover:text-green-200
                            transition-all
                            cursor-pointer
                        "
                        onClick={() => dispatch(increment(product))}
                    >
                        افزودن به سبد خرید
                    </div>
                    {
                        store.counter.selected[productIndex]?.quantity >= 1 ? (
                            <div
                                className="
                                    w-1/2
                                    flex
                                    justify-around
                                "
                            >
                                <div
                                    onClick={() => dispatch(increment(product))}
                                    className="
                                        cursor-pointer
                                        border
                                        rounded-md
                                        border-green-500
                                        w-7
                                        h-7
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    +
                                </div>
                                <div>
                                    {
                                        store.counter.selected[productIndex]?.quantity
                                    }
                                </div>
                                <div
                                    onClick={() => dispatch(decrement(product))}
                                    className="
                                        cursor-pointer
                                        border
                                        rounded-md
                                        border-red-500
                                        w-7
                                        h-7
                                        flex
                                        items-center
                                        justify-center
                                    "
                                >
                                    -
                                </div>
                            </div>
                        ) : null
                    }

                </div>
            </div>

        </div>
    )
}