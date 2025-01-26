


export default function ShopProduct ({ price }) {

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
                        price
                    }
                    میلیون تومان
                </div>
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
                >
                    افزودن به سبد خرید
                </div>
            </div>

        </div>
    )
}