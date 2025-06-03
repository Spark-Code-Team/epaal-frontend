import Link from "next/link";
import PlusAdmin from "../../../../public/icons/PlusAdmin";



export default function HedearStatusProduct({ accepted, setAccepted, search, setSearch }) {

    return (
            <div
                className="
                    flex
                    w-full
                    items-center
                    justify-between
                    px-2
                "
            >
                <div
                    className="
                        flex

                    "
                >
                    <div
                        className={`
                            border-b
                            ${
                                !accepted ? "border-b-[#1D434C] text-[#1D434C]" : "border-b-[#c5c5c6] text-[#c5c5c6]"
                            }
                            p-2
                            font-bold
                            cursor-pointer
                        `}
                        onClick={() => setAccepted(false)}
                    >
                        محصولات تایید نشده
                    </div>
                    <div
                        className={`
                            border-b
                            ${
                                accepted ? "border-b-[#1D434C] text-[#1D434C]" : "border-b-[#c5c5c6] text-[#c5c5c6]"
                            }
                            p-2
                            font-bold
                            cursor-pointer
                        `}
                        onClick={() => setAccepted(true)}
                    >
                        محصولات تایید شده
                    </div>
                </div>

                <div
                    className="
                        flex
                        gap-3
                        items-center
                    "
                >
                    <Link
                        href="/admin/admin-shop/add-product"
                        className="
                            flex 
                            w-[166px] 
                            items-center 
                            justify-around 
                            rounded-md 
                            bg-[#054366] 
                            p-2 
                            text-[15px] 
                            text-white
                            cursor-pointer
                        "
                    >
                        افزودن دسته جدید
                        <PlusAdmin />
                    </Link>
                    <input 
                        className="
                            w-[345px]
                            border
                            border-[#C5C5C6]
                            rounded-[10px]
                            p-[10px]
                            bg-red-800
                            pr-7
                        "
                        style={{
                            background: `url(/icons/Admin/AdminShop/magnifer.svg)  no-repeat`,
                            backgroundPosition: "99% center"
                        }}
                        placeholder="جستجو بین محصولات..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
    )
}