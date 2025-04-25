import { useEffect, useState } from "react";
import AroowLeft from "../../../public/icons/Admin/AdminShop/AroowLeft";
import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import CheckDefaultCategory from "../../../public/icons/Admin/CheckDefaultCategory";
import CheckTrueCategory from "../../../public/icons/Admin/CheckTrueCategory";
import IntroAddProduct from "./IntroAddProduct";
import { ServiceAndProduct } from "@/service/adminShop";



export default function ProductAndService({ setModalState, modalState, setShowModal, selectedIntro, setSelectedIntro }) {

    const [categories, setCategories] = useState([])
    const [isProduct, setIsProduct] = useState(true)

    useEffect(() => {

        const fetchData = async () => {

            const { response, error } = await ServiceAndProduct(selectedIntro.toplevel_topic.id, isProduct)

            if(response) {
                setCategories(response.data?.data || [])
            } else {
                console.log(error);
            }
        }

        fetchData()
    }, [isProduct])

    return (
        <>
            <div
                className="
                    w-full
                    h-[300px]
                    overflow-y-scroll
                "
            >
                    <div
                        className="
                            flex
                            items-center
                            gap-2
                            mt-5
                        "
                    >
                        <p
                            className="
                                text-[#868383]
                                text-[12px]
                            "
                        >
                            کالای دیجیتال
                        </p>
                        <LeftAroowBlur
                            width={24}
                            height={24}
                        />
                    </div>

                    <div
                        className="
                            w-full
                            flex
                            gap-7
                            mt-[14px]
                        "
                    >
                        <div
                            className="
                                flex
                                items-center
                                gap-1
                                cursor-pointer
                            "
                            onClick={() => setIsProduct(true)}
                        >
                            <p>
                                کالا
                            </p>
                            {
                                isProduct ? (
                                    <CheckTrueCategory />
                                ) : (
                                    <CheckDefaultCategory/>
                                )
                            }
                        </div>
                        <div
                            className="
                                flex
                                items-center
                                gap-1
                                cursor-pointer
                            "
                            onClick={() => setIsProduct(false)}
                        >
                            <p>
                                خدمات
                            </p>
                            {
                                isProduct ? (
                                    <CheckDefaultCategory/>
                                ) : (
                                    <CheckTrueCategory />
                                )
                            }
                        </div>
                    </div>

                    {
                        categories.length == 0 ? (
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <h1>
                                    هیچ دسته بندی یافت نشد
                                </h1>
                            </div>
                        ) : (
                            <div
                                className="
                                    grid
                                    grid-cols-2
                                    gap-2
                                    w-full
                                    mt-[58px]
                                    max-h-[300px]
                                "
                        >
                            {
                                categories.map(items => (
                                    <div
                                        key={items}
                                        className={`
                                            w-full
                                            flex
                                            items-center
                                            justify-between
                                            p-[18px]
                                            border
                                            rounded-xl
                                            cursor-pointer
                                            ${items.id == selectedIntro.midlevel_topic.id ? "border-blue-600" : null}
                                        `}

                                        onClick={() => setSelectedIntro(last => ({...last, midlevel_topic: items}))}
                                    >
                                        <p>
                                            {items.name}
                                        </p>
                                        <div>
                                            <AroowLeft />
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        )
                    }
            </div>
            
            <IntroAddProduct 
                canGo={selectedIntro.midlevel_topic.id &&  categories.length}
                setModalState={setModalState}
                setShowModal={setShowModal}
                modalState={modalState}
            />
        </>
    )
}