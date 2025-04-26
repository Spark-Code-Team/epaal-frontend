import { useEffect, useState } from "react";
import IntroAddProduct from "./IntroAddProduct";
import { AllProductTopic } from "@/service/adminShop";
import { useDispatch } from "react-redux";
import { addTopicId } from "@/redux/features/addProduct/addProduct";



export default function AvalabelProduct({ setModalState, modalState, setShowModal, selectedIntro, setSelectedIntro }) {

    const dispatch = useDispatch()


    const [category, setCategory] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const { response, error } = await AllProductTopic(selectedIntro.lowlevel_topic.id)

            if(response) {
                setCategory(response.data.data)
            } else {
                console.log(error);
            }
        }

        fetchData()
    }, [])

    const handelTopic = (item) => {
        setSelectedIntro(last => ({...last, product_topic_id: item}))
        dispatch(addTopicId(item.id))
        console.log(item.id);
    }

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
                        mt-8
                        mb-7
                    "
                >
                    <p
                        className="
                            text-[18px]
                            font-medium
                        "
                    >
                    برندهای موجود در گروه کالایی    
                    </p>
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
                            <div
                                className="
                                    w-full
                                    flex
                                    items-center
                                    justify-center
                                "
                            >
                                <h1>هیچ دسته بندی یافت نشد</h1>
                            </div>
                        ) : (
                            category.map(item => (
                                <div
                                    key={item}
                                    className={`
                                        w-full
                                        border-b
                                        border-[#e1e6ef]
                                        pb-[6px]
                                        flex
                                        gap-3
                                        transition-all
                                        cursor-pointer
                                        ${item.id == selectedIntro.product_topic_id.id ? "border-blue-700" : ""}
                                    `}
                                    onClick={() => handelTopic(item)}
                                >
                                    <div
                                        className="
                                            w-[34px]
                                            h-[34px]
                                            bg-[#d9d9d9]
                                            rounded-full
                                        "
                                    >
    
                                    </div>
                                    <div>
                                        <p
                                            className="
                                                text-[14px]
                                            "
                                        >
                                            {
                                                item.name
                                            }
                                        </p>
                                        <p
                                            className="
                                                text-[10px]
                                                font-normal
                                            "
                                        >
                                            کد برند
                                        </p>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        
            <IntroAddProduct
                canGo={selectedIntro.product_topic_id.id}
                setModalState={setModalState}
                setShowModal={setShowModal}
                modalState={modalState}
            />
        </>
    )
}