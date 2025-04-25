import { useEffect, useState } from "react";
import AroowLeft from "../../../public/icons/Admin/AdminShop/AroowLeft";
import LeftAroowBlur from "../../../public/icons/Admin/AdminShop/LeftAroowBlur";
import IntroAddProduct from "./IntroAddProduct";
import { LowlevelCategoryAll } from "@/service/adminShop";



export default function LowlevelCategory({ setModalState, modalState, setShowModal, selectedIntro, setSelectedIntro }) {

    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchData = async () => {

            const { response, error } = await LowlevelCategoryAll(selectedIntro.midlevel_topic.id)

            if(response) {
                setCategory(response.data.data)
            } else {
                console.log(error);
            }
        } 

        fetchData()
    }, [])

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
                                        width="24px"
                                        height="24px"
                                    />
                                    <p
                                        className="
                                            text-[#868383]
                                            text-[12px]
                                        "
                                    >
                                        لپ تاپ
                                    </p>
                                    <LeftAroowBlur
                                        width="24px"
                                        height="24px"
                                    />
                                </div>

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
                                        category.length == 0 ? (
                                            <div>
                                                <h1>
                                                    هیچ دسته بندی یافت نشد
                                                </h1>
                                            </div>
                                        ) : (
                                            category.map((item ,index) => (
                                                <div
                                                    className={`
                                                        w-full
                                                        flex
                                                        items-center
                                                        justify-between
                                                        p-[18px]
                                                        border
                                                        rounded-xl
                                                        cursor-pointer
                                                        transition-all
                                                        ${selectedIntro.lowlevel_topic.id == item.id ? "border-blue-500" : ""}
                                                    `}
                                                    onClick={() => setSelectedIntro(last => ({...last, lowlevel_topic: item}))}
                                                    key={index}
                                                >
                                                    <p>
                                                        {
                                                            item.name
                                                        }
                                                    </p>
                                                    <div>
                                                        <AroowLeft />
                                                    </div>
                                                </div>
                                            ))
                                        )

                                    }
                                </div>
                            </div>

                            <IntroAddProduct 
                                canGo={selectedIntro.lowlevel_topic.id}
                                setModalState={setModalState}
                                setShowModal={setShowModal}
                                modalState={modalState}
                            />
        </>
    )
}